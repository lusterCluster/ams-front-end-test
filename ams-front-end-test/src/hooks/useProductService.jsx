

const apiUrl = "https://itx-frontend-test.onrender.com"

function useProductService() {
  const fetchProductList = async () => {
    const get = "/api/product"
    const response = await fetch(apiUrl+get, {
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


  

  return { fetchProductList };
}


export default useProductService;