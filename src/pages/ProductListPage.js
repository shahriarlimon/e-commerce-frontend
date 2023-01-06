
import axios from 'axios'
import ProductListPageComponent from './components/ProductListPageComponent';


const ProductListPage = () => {
    const getProducts = async () => {
        const { data } = await axios.get("http://localhost:4000/api/v1/products", {
            withCredentials: true,
            headers: {
              crossDomain: true,
              'Content-Type': 'application/json',
              credentials: 'include',
            },
          })
        return data
    }

    return (<ProductListPageComponent getProducts={getProducts} />)
};

export default ProductListPage;