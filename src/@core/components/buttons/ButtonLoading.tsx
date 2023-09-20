import { Box, Button, CircularProgress } from "@mui/material"

const ButtonLoading = ({children, type = 'button', loading, onClick, loadLeft}: {children: any, loading: boolean, type?: string, onClick?: any, loadLeft?: string}) => {
  
  return (
    <Box sx={{ m: 1, position: 'relative' }}>
      <Button 
        fullWidth 
        type={type} 
        variant={loading ? 'tonal': 'contained'} 
        sx={{ my: 4 }} 
        disabled={loading}
        onClick={onClick}
        href=""
      >
        {children}
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            color: '#45b174',
            position: 'absolute',
            top: '50%',
            left: loadLeft ?? '30%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </Box>
  )
}

export default ButtonLoading;