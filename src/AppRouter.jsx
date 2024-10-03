import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Product from './pages/Product';  // Dynamic route for product 

import User from './pages/User';        // Dynamic route for user 

import About from './pages/About';

import Contact from './pages/Contact';

import Products from './pages/Products'; 

import ProductDetail from './pages/ProductDetail'; 


function AppRouter() {

    return (

        <Router>

            <Routes>

                {/* <Route path="/" element={<Home />} />
                Dynamic Route for product
                <Route path="/product/:productId" element={<Product />} />
                Dynamic Route for user
                <Route path="/user/:userId" element={<User />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} /> */}
                <Route path="/" element={<Products />} />
                <Route path="/product/:productId" element={<ProductDetail />} />

            </Routes>

        </Router>
    );

}



export default AppRouter; 