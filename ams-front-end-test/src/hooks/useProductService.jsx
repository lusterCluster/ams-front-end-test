

const apiUrl = "https://itx-frontend-test.onrender.com"

function useProductService() {
  const fetchProductList = async () => {
    const getProductList = "/api/product"
    const response = await fetch(apiUrl+getProductList, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",        
      },
    });

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = response.json();    
    return data;
  };

  const fetchProduct = async (id) => {  
    const getProduct = "/api/product/" +id 
    const response = await fetch(apiUrl+getProduct, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",        
      },
    });

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = response.json();    
    return data;
  };

  
  const postProduct = async (options) => {  
    console.log(options)
    const postApiCart = "/api/cart" 
    const response = await fetch(apiUrl+postApiCart, {
      method: "Post",
      headers: {
        'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: options
    });

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = response.json();    
    return data
  };

  

  return { fetchProductList, fetchProduct, postProduct };
}


export default useProductService;