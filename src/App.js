import { Route, Routes } from "react-router-dom";
import AdminAnalyticsPage from "./admin/AdminAnalyticsPage";
import AdminChartsPage from "./admin/AdminChartsPage";
import AdminCreateProductPage from "./admin/AdminCreateProductPage";
import AdminEditUserPage from "./admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./admin/AdminOrdersPage";
import AdminProductsPage from "./admin/AdminProductsPage";
import AdminUsersPage from "./admin/AdminUsersPage";
import FooterComponents from "./components/FooterComponents";
import HeaderComponents from "./components/HeaderComponents";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import UserCartDetailPage from "./pages/user/UserCartDetailPage";
import UserOrderDetailPage from "./pages/user/UserOrderDetailPage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ScrolToTop from "./utils/ScrolToTop";


function App() {
  return (
    <>
     <ScrolToTop/>
      <HeaderComponents />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* User protected routes */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrderPage />} />
            <Route path="/user/order-details" element={<UserOrderDetailPage />} />
            <Route path="/user/cart-details" element={<UserCartDetailPage />} />
          </Route>
        </Route>

        {/* Admin protect routes */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/create-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/chars" element={<AdminChartsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>

        <Route path="*" element={"page doesn't exist"} />
      </Routes>
      <FooterComponents />

    </>
  );
}

export default App;
