// ** React Imports
import { createContext, ReactNode, useContext, useState } from 'react'
import { Paginate } from 'src/views/business/types/Business';

// ** Next Import

const defaultProvider: any = {
}

type Props = {
  children: ReactNode,
}

const BusinessFilterContext = createContext(defaultProvider);

const useBusinessFilterContent = () => useContext(BusinessFilterContext);

export const BusinessFilterConsumer = BusinessFilterContext.Consumer;

const BusinessFilterProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginate, setPaginate] = useState<Paginate>({from: 1, to: 3, total: 3, page: 1, lastPage: 1});
  const [categories, setCategories] = useState<any[]>([]);
  const [categoriesOptions, setCategoriesOptions] = useState<any[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('default');
  const [estimate, setEstimate] = useState<number[]>([0, maxPrice]);

  const values = {
    currentPage, setCurrentPage,
    paginate, setPaginate,
    categories, setCategories,
    maxPrice, setMaxPrice,
    search, setSearch,
    sort, setSort,
    estimate, setEstimate,
    categoriesOptions, setCategoriesOptions
  }
  
return <BusinessFilterContext.Provider value={values}>{children}</BusinessFilterContext.Provider>
}

export { BusinessFilterContext, BusinessFilterProvider, useBusinessFilterContent }