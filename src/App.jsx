import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import useCart from "./hooks/useCart";
import Navbar from "./components/NavBar";

export default function App() {

    const [view, setView] = useState("home");

    const {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        itemCount
    } = useCart();

    const [user, setUser] = useState(null);

    return (

        <div className="min-h-screen bg-gray-50">

            <Navbar
                cartCount={itemCount}
                user={user}
                onNavigate={setView}
                onLogout={() => setUser(null)}
            />

            {view === "home" && (
                <Home addToCart={addToCart} />
            )}

            {view === "cart" && (
                <Cart
                    cart={cart}
                    user={user}
                    clearCart={clearCart}
                    removeFromCart={removeFromCart}
                />
            )}

            {view === "login" && (
                <Login setUser={setUser} />
            )}

            {view === "profile" && (
                <Profile user={user} />
            )}

        </div>

    );
}