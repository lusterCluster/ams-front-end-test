import React, { useContext, useEffect, useState } from "react";
import styles from "./Product.module.css";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../store/context/theme/main";
import { Shade } from "../../store/context/theme/themes";
import useProductService from "../../hooks/useProductService";

const Product = () => {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);
  const { fetchProduct, postProduct } = useProductService();
  const [phone, setPhone] = useState({});
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState({ id: null, colorCode: null, storageCode: null });
  const [warning, setWarning] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [hoveredOption, setHoveredOption] = useState({ color: null, storage: null });

  const handleFetchProduct = (id) => {
    setLoading(true);
    fetchProduct(id)
      .then((product) => {
        setPhone(product);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const productId = location.state?.id;
    if (productId) {
      handleFetchProduct(productId);
    }
  }, [location.state]);

  const handleColorSelect = (color) => {
    setOptions((prevOptions) => ({ ...prevOptions,id:location.state.id, colorCode: color.code }));
    setSelectedColor(color.code);
  };

  const handleStorageSelect = (storage) => {
    setOptions((prevOptions) => ({ ...prevOptions, id:location.state.id, storageCode: storage.code }));
    setSelectedStorage(storage.code);
  };

  const handleAddToCart = () => {
    if (!options.colorCode || !options.storageCode) {
      setWarning("Por favor selecciona un color y una opción de almacenamiento.");
      return;
    }
    setWarning("");

   postProduct(JSON.stringify(options))
      .then((data) => {
        console.log("Producto agregado al carrito:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.gridContainer}>
      <img
        className={styles.productImage}
        src={phone.imgUrl || location.state?.imgUrl}
        alt={`${phone.brand} ${phone.model}`}
      />
      <div className={styles.gridItem}>
        <div className={styles.detailsContainer}>
          <section
            style={{
              background: themeContext.theme.pallete(
                themeContext.isDarkMode() ? Shade.SecondaryDark : Shade.Hover
              ),
            }}
            className={styles.details}
          >
            <h1 className={styles.detailsHead}>Detalles</h1>
            <ul className={styles.phoneUl}>
              <li><strong>Marca:</strong> {phone.brand}</li>
              <li><strong>Modelo:</strong> {phone.model}</li>
              <li><strong>Precio:</strong> ${phone.price}</li>
              <li><strong>CPU:</strong> {phone.cpu}</li>
              <li><strong>RAM:</strong> {phone.ram}</li>
              <li><strong>Sistema Operativo:</strong> {phone.os}</li>
              <li><strong>Resolución de Pantalla:</strong> {phone.displayResolution}</li>
              <li><strong>Batería:</strong> {phone.battery}</li>
              <li>
                <strong>Cámaras:</strong> 
                {phone.primaryCamera}
                {phone.secondaryCmera && ` (Secundaria: ${phone.secondaryCmera})`}
              </li>
              <li><strong>Dimensiones:</strong> {phone.dimentions || "N/A"}</li>
              <li><strong>Peso:</strong> {phone.weight || "N/A"}</li>
            </ul>
          </section>
        </div>

        <section className={styles.actions}>
          {(phone.options?.colors || []).map((color, i) => (
            <button
              key={`color-${i}`}
              onClick={() => handleColorSelect(color)}
              onMouseEnter={() => setHoveredOption((prev) => ({ ...prev, color: color.code }))}
              onMouseLeave={() => setHoveredOption((prev) => ({ ...prev, color: null }))}
              className={`${styles.actionButton} ${selectedColor === color.code ? styles.selected : ""} ${hoveredOption.color === color.code ? styles.hovered : ""}`}
            >
              {color.name}
            </button>
          ))}
        </section>
        
        <section className={styles.actions}>
          {(phone.options?.storages || []).map((storage, i) => (
            <button
              key={`storage-${i}`}
              onClick={() => handleStorageSelect(storage)}
              onMouseEnter={() => setHoveredOption((prev) => ({ ...prev, storage: storage.code }))}
              onMouseLeave={() => setHoveredOption((prev) => ({ ...prev, storage: null }))}
              className={`${styles.actionButton} ${selectedStorage === storage.code ? styles.selected : ""} ${hoveredOption.storage === storage.code ? styles.hovered : ""}`}
            >
              {storage.name}
            </button>
          ))}
        </section>

        <section className={styles.action}>
          <button className={styles.postButton} onClick={handleAddToCart}>Agregar al Carrito</button>
          {warning && <p className={styles.warning}>{warning}</p>}
        </section>
      </div>
    </div>
  );
};

export default Product;
