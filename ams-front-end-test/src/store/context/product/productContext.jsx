import { createContext, useEffect, useState } from "react";
import useProductService from "../../../hooks/useProductService";
import useProductMutation from "../../reducer/useProductMutation";
import { ACTIONS } from "../../reducer/mutationReducer";

const placeholder = [];
export const ProductContext = createContext(null);

// Define the expiration time in milliseconds (1 hour)
const EXPIRATION_TIME = 3600 * 1000; // 1 hour in milliseconds

const ProvideProductContext = (props) => {
  // Load cached data from local storage if available and not expired
  const cachedData = JSON.parse(localStorage.getItem("productListState"));
  const isExpired = cachedData && (Date.now() - cachedData.timestamp > EXPIRATION_TIME);
  const initialState = cachedData && !isExpired ? cachedData.state : placeholder;

  const { state, handleStateMutation } = useProductMutation(initialState);
  const [loading, setLoading] = useState(false);
  const { fetchProductList } = useProductService();

  // Function to fetch product list from API and update state
  const handleFetchProductList = () => {
    setLoading(true);
    fetchProductList()
      .then((products) => {
        handleStateMutation([...products], ACTIONS.FETCH);

        // Save new state and timestamp to local storage
        localStorage.setItem(
          "productListState",
          JSON.stringify({ state: [...products], timestamp: Date.now() })
        );
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const filterProductList = (filterValue) => {    
    handleStateMutation( filterValue, ACTIONS.FILTER );
  };

  const resetProductList = () => {
    handleStateMutation({}, ACTIONS.CLEAN);
  };

  const ProductList = {
    state,
    dispatch: handleStateMutation,
    loading,
    setLoading,
    handleFetchProductList,
    filterProductList,
    resetProductList,
  };
  // Fetch data if it's expired or not loaded initially
  useEffect(() => {
    if (isExpired || state.length === 0) {
      handleFetchProductList();
    }
  }, []);
  
  return (
    <ProductContext.Provider value={ProductList}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProvideProductContext;
