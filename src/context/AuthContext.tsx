// ** React Imports
import { createContext, useEffect, useState, ReactNode, useCallback } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from './types'
import apiConnector from 'src/services/api.service'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  const initAuth = useCallback(async() => {
    const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
    
    if (storedToken) {
      setLoading(true);
      try {
        const response: any = await apiConnector.get('/auth/me');
        setUser({ ...response })
      } catch (error) {
        localStorage.removeItem('userData')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        setUser(null)
        setLoading(false)
        if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
          router.replace('/login')
        }
      } finally {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initAuth])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    
    apiConnector
      .post(authConfig.loginEndpoint, params)
      .then(async (response: any) => {
        console.log(response);
        window.localStorage.setItem(authConfig.storageTokenKeyName, response.token)
       
        const returnUrl = router.query.returnUrl?.toString()

        setUser({ ...response.user })
        window.localStorage.setItem('userData', JSON.stringify(response.user))
        window.localStorage.setItem('role', JSON.stringify(response.role))

        const redirectURL: string = returnUrl && returnUrl !== '/' ? returnUrl : '/'

        window.location.href = redirectURL;
      })

      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
