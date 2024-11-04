import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Product.module.css";
import { ProductContext } from "../../store/context/product/productContext";
import Card from "../../components/cards/Card";
import { ThemeContext } from "../../store/context/theme/main";
import { Shade } from "../../store/context/theme/themes";
import Searchbar from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const productContext = useContext(ProductContext);
  const themeContext = useContext(ThemeContext)
  const [visibleItems, setVisibleItems] = useState(productContext.state.slice(0, 10));
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const navigate = useNavigate()
  const loadMoreItems = () => {
    const nextItems = productContext.state.slice(visibleItems.length, visibleItems.length + 10);
    setVisibleItems((prevItems) => [...prevItems, ...nextItems]);
    if (visibleItems.length + nextItems.length >= productContext.state.length) {
      setHasMoreItems(false);
    }
  };
 const handleAddProduct = (id) => {navigate("/product-details",{state: productContext.state.find(product => product.id === id) })}
  useEffect(() => {
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight && hasMoreItems) {
        loadMoreItems();
      }
    };

    const container = document.getElementById('scrollable-grid');
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, [visibleItems, hasMoreItems]);


  return (
    <>    
    <Searchbar/>
    <div
      id="scrollable-grid"
      style={{
        background: themeContext.theme.pallete(themeContext.isDarkMode() ? Shade.Surface : Shade.Focus)
      }}
      className={styles.grid}
    >
      {productContext.state.map((product, index) => (
        <div
          key={index}          
        >
          <ProductItem
            onClick={() => handleAddProduct(product.id)}
            imgUrl={product.imgUrl}
            head={product.model}
            details={[product.brand, `$${product.price}`]}
          />
        </div>
      ))}      
    </div>
    </>
  );
};
const ProductItem = (props) => {
  return (
    <Card onClick={props.onClick} imgUrl={props.imgUrl} head={props.head} details={props.details} />
  );
};

export default ProductList;
