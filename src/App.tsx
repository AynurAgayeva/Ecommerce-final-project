import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ProductProvider } from "./context/ProductContext";
import React, { useContext } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Product from "./components/Product";
import Faq from "./components/about/Faq";
import Team from "./components/about/Team";
import ProductDetails from "./components/ProductDetails";
import AddBlog from "./pages/update/AddBlog";
import Blog from "../src/components/Blog";
import Dashboard from "./pages/Dashboard";
import Gallery from "./components/about/Gallery";
import EditBlog from "./pages/update/EditBlog";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import LoginForm from "./components/LoginForm";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import NotFoundPage from "./components/NotFoundPage";
import AdminLogin from "./components/admin/AdminLogin";
import Testimonial from "./components/about/Testimonials";
import { HomeProductProvider } from "./context/HomeProductContext";
import { ThemeModeProvider } from "./context/ThemeModeContext";
import CheckOut from "./components/CheckOut";
import { ThemeModeContext } from "./context/ThemeModeContext";
import BlogDetails from "./components/BlogDetails";
import ThemeSelector from "./components/ThemeSelector";



const Main: React.FC = () => {
  const [theme] = useContext(ThemeModeContext);

  return (
    <div className={theme}>
      <Header />
      <ThemeSelector />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/loginform" element={<LoginForm />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/testimonial" element={<Testimonial />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/add" element={<AddBlog />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/dashboard/edit/:id" element={<EditBlog />}></Route>
        <Route path="/product/:url" element={<ProductDetails />}></Route>
        <Route path="/blog/:url" element={<BlogDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
      
        <ThemeModeProvider>
        
            <WishlistProvider>
              <CartProvider>
                <HomeProductProvider>
                  <ProductProvider>
                    <Main />
                  </ProductProvider>
                </HomeProductProvider>
              </CartProvider>
            </WishlistProvider>
        
        </ThemeModeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
