import{ useContext } from 'react'; 
import { ProductsContext } from '../context/Products';

export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}
