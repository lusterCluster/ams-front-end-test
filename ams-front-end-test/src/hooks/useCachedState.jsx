// useCachedState.js
import { useContext } from 'react';
import { StateContext } from './StateContext';
import { ProductContext } from '../store/context/product/productContext';

const useCachedState = () => {
  const [state, setState] = useContext(ProductContext);

  const updateState = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  return [state, updateState];
};

export default useCachedState;
