export const fetchProducts = async (query) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}}`);
    const products = await response.json();
    return products.results;
  } catch (error) {
    console.log(error);
  }
};
