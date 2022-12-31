import ProductDetailPageComponent from "./components/ProductDetailsPageComponent";
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/cartActions";



const ProductDetailPage = () => {
    const dispatch = useDispatch()
    return (
        <ProductDetailPageComponent dispatch={dispatch} addToCart={addToCart} />
    );
};

export default ProductDetailPage;