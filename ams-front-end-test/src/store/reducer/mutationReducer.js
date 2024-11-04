
export const ACTIONS = {
    ADDED: 'ADDED',    
    FETCH: 'FETCH',
    FILTER: 'FILTER',    
    CLEAN: "CLEAN"
  } 
export const productMutation = {
  stateReducer: (
    state,
    action
  ) => {
    switch (action.type) {
      case ACTIONS.FETCH:
        return action.payload;
      case ACTIONS.ADDED:
        return [...state, action.payload];   
      case ACTIONS.FILTER:
        const filteredState = state.filter((product) => {
            console.log(action.payload)
          const isMatch = () =>
            product.brand.toLowerCase().includes(action.payload.toLowerCase()) ||
            product.model
              .toLowerCase()
              .includes(action.payload.toLowerCase())             
          return isMatch();
        });        
        console.log(filteredState)
        return filteredState.length > 0 ? filteredState : state;      
        case ACTIONS.CLEAN:
            console.log("cleaned")
        // Reset to persisted state from local storage
        const cachedData = JSON.parse(localStorage.getItem("productListState"));
        return cachedData ? cachedData.state : [];

      default:
        return state;
    }
  },
};