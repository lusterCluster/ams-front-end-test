import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './Product.module.css'
import { ProductContext } from '../../store/context/product/productContext';
import Card from '../../components/cards/Card';
const ProductList = () => {
    const productContext= useContext(ProductContext)
    const [items, setItems] = useState(productContext.state); 
    console.log(items)
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  // Función para cargar más elementos
  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 20 }), // Añade 20 nuevos elementos
      ]);
      setLoading(false);
    }, 1000);
  };

  // Detecta si el usuario llegó al final del contenedor
  const handleScroll = () => {
    if (
      containerRef.current.scrollHeight - containerRef.current.scrollTop <=
        containerRef.current.clientHeight &&
      !loading
    ) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => container.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "500px",
        overflowY: "auto",
      }}
      className={styles.grid}
    >
      {items.map((product, index) => (
        <div
          key={index}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightcoral",
            margin: "10px",
          }}
        >
        <ProductItem imgUrl={product.imgUrl} head={product.model} details={[product.brand, `$${product.price}`]} />
        
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  )

}
const ProductItem = (props) => {
    
  return(
      <Card imgUrl={props.imgUrl} head={props.head} details={props.details} />
  )
}

export default ProductList