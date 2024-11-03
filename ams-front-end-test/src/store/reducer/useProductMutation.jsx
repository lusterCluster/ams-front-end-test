import { useReducer } from "react"
import { productMutation } from "./mutationReducer"


function useProductMutation(initialState)  {
  
  const [state, dispatch] = useReducer(productMutation.stateReducer, initialState)
  
  const handleStateMutation = (payload, type) => {
    dispatch(
      {
        type:type,
        payload:payload
      }
    )
  };
  return {state, handleStateMutation}
  
}
export default useProductMutation;