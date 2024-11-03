import { createContext, useEffect, useState } from "react";
import useProductService from "../../../hooks/useProductService";
import useProductMutation from "../../reducer/useProductMutation";
import { ACTIONS } from "../../reducer/mutationReducer";

const placeholder = [];
export const ProductContext = createContext(null);

const ProvideProductContext = (props) => {
  const { state, handleStateMutation } = useProductMutation(placeholder);
  const [loading, setloading] = useState(false);
  const {fetchProductList} = useProductService()  
  const handleFetchProductList = () => {
    ProductList.setLoading(true)    
    fetchProductList()
    .then((products) => {          
      ProductList.dispatch([...products], ACTIONS.FETCH);
    })
    .finally(() => {
      ProductList.setLoading(false);
    })
    .catch((error) => {
      console.error("Error:", error);      
    });
  }
  const ProductList = {
    state: state,
    dispatch: handleStateMutation,
    loading: loading,
    setLoading: setloading,
    handleFetchProductList: handleFetchProductList
  }
useEffect(() => {
  handleFetchProductList()
  console.log(ProductList.state)
  
}, [])
  if ( ProductList === null || ProductList.loading) {
    return <>Loading ...</>;
  }
  return (
    <ProductContext.Provider value={ProductList}>{props.children}</ProductContext.Provider>
  );
};
export default ProvideProductContext;