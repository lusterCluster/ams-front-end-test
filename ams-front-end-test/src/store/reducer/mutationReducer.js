
export const ACTIONS = {
    ADDED: 'ADDED',    
    FETCH: 'FETCH',
    FILTER: 'FILTER',    
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
    //   case ACTIONS.FILTER:
    //     const filteredState = state.filter((product) => {
    //       const isMatch = () =>
    //         product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
    //         product.description
    //           .toLowerCase()
    //           .includes(action.payload.toLowerCase()) ||
    //         product.date_release
    //           .toLowerCase()
    //           .includes(action.payload.toLowerCase()) ||
    //         product.date_revision
    //           .toLowerCase()
    //           .includes(action.payload.toLowerCase());

    //       return isMatch();
    //     });

    //     // Si no hay coincidencias, devolver todo el estado sin filtrar
    //     return filteredState.length > 0 ? filteredState : state;      
      default:
        return state;
    }
  },
};