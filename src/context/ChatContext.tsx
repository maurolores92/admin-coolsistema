// ** React Imports
import { createContext, ReactNode, useContext, useState } from 'react'

// ** Next Import

const defaultProvider: any = {
  messagesList: []
}

type Props = {
  children: ReactNode,
}

const ChatContext = createContext(defaultProvider);

const useChatContent = () => useContext(ChatContext);

export const ChatConsumer = ChatContext.Consumer;

const ChatProvider = ({ children }: Props) => {
  const [messagesList, setMessagesList] = useState<any[]>([]);
  const [chatSelected, setChatSelected] = useState<any>();

  const values = {
    messagesList, setMessagesList,
    chatSelected, setChatSelected
  }
  
return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

export { ChatContext, ChatProvider, useChatContent }