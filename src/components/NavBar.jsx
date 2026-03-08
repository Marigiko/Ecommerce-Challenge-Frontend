import { ShoppingBag, User, LogOut } from "lucide-react";

export default function Navbar({ cartCount, user, onNavigate, onLogout }) {
    return (
        <nav className="sticky top-0 bg-white border-b">
            <div className="max-w-7xl mx-auto flex justify-between h-16 items-center px-4">

                <h1
                    className="font-bold cursor-pointer"
                    onClick={() => onNavigate("home")}
                >
                    MINIMAL
                </h1>

                <div className="flex items-center gap-6">

                    <button onClick={() => onNavigate("cart")} className="relative">
                        <ShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {user ? (
                        <>
                            <button onClick={() => onNavigate("profile")}>
                                <User size={20} />
                            </button>

                            <button onClick={onLogout}>
                                <LogOut size={20} />
                            </button>
                        </>
                    ) : (
                        <button onClick={() => onNavigate("login")}>
                            <User size={20} />
                        </button>
                    )}

                </div>
            </div>
        </nav>
    );
}