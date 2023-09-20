// ** React Imports
import { createContext, ReactNode, useContext, useState } from 'react'

// ** Next Import
import { useForm } from "react-hook-form";

const defaultProvider: any = {
  handleSubmit: null,
  image: null, gallery: []
}

type Props = {
  children: ReactNode,
  schema: any
}

const BusinessContext = createContext(defaultProvider);

const useBusinessContent = () => useContext(BusinessContext);

export const BusinessConsumer = BusinessContext.Consumer;

const defaultFrecuentRequest = {includes: '', requiredKnowledge: '', reasons: '', trafficSource: '', extraInformation: ''};
const BusinessProvider = ({ children }: Props) => {
  const [image, setImage] = useState();
  const [gallery, setGallery] = useState<any[]>([]);
  const [frecuentRequests, setFrecuentRequests] = useState<any[]>([]);
  const [questions, setQuestions] = useState(defaultFrecuentRequest);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset, 
    control,
  } = useForm({});

  const addGallery = (file: any) => {
    setGallery([...gallery, file]);
  }
  const clear = () => {
    reset();
    setImage(undefined);
    setGallery([]);
    setQuestions(defaultFrecuentRequest);
  }
  
  const values = {
    register,
    handleSubmit,
    errors,
    clear,
    control,
    image, setImage,
    gallery, addGallery,
    frecuentRequests, setFrecuentRequests,
    questions, setQuestions
  }
  
return <BusinessContext.Provider value={values}>{children}</BusinessContext.Provider>
}

export { BusinessContext, BusinessProvider, useBusinessContent }