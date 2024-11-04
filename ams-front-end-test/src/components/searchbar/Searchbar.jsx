import React, { useContext, useState } from 'react'
import styles from './Searchbar.module.css'
import { ProductContext } from '../../store/context/product/productContext';
const Searchbar = () => {
  const { filterProductList, resetProductList } = useContext(ProductContext);
  const [inputValue, setInputValue] = useState("");
  const [showCloseButton, setShowCloseButton] = useState(false)  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const searchTerm = event.target.value;
    filterProductList(searchTerm)
  };
  const handleOnFocus = () => { setShowCloseButton(true)}  
  const handleReset = () => {
    setInputValue("");    
    resetProductList();
  };

  return (
    <>
      <div
        id="container"
        className={styles.container}
      >
        <span className="material-symbols-outlined text-disabled">search</span>
        <input
          onFocus={handleOnFocus}
          onChange={handleInputChange}
          value={inputValue}
          className={styles.input}
          placeholder="Search..."
        />
{ showCloseButton &&
        <button
          
          onClick={handleReset}          
          className={"material-symbols-outlined" + " " + styles.cleanButton}
        >
          close
        </button>}
      </div>
    </>
  )
}

export default Searchbar