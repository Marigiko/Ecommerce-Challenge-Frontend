import { createOrder } from "../api/api";

export default function Cart({ cart, user, clearCart, removeFromCart }) {

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleCheckout = async () => {

        if (!user) {
            alert("Debes iniciar sesión");
            return;
        }

        try {

            await createOrder(user.token, cart);

            clearCart();

            alert("Orden creada con éxito");

        } catch (err) {

            alert("Error al crear orden");

        }

    };

    if (cart.length === 0) {
        return (
            <main className="max-w-3xl mx-auto py-16 text-center">
                <h2 className="text-xl font-semibold">
                    Tu carrito está vacío
                </h2>
            </main>
        );
    }

    return (

        <main className="max-w-3xl mx-auto py-12 px-4">

            <h2 className="text-2xl font-bold mb-8">
                Carrito
            </h2>

            <div className="space-y-4">

                {cart.map(item => (

                    <div
                        key={item.id}
                        className="flex justify-between items-center border-b pb-3"
                    >

                        <div>

                            <p className="font-medium">
                                {item.name}
                            </p>

                            <p className="text-sm text-gray-500">
                                x{item.quantity}
                            </p>

                        </div>

                        <div className="flex items-center gap-4">

                            <span>
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 text-sm"
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            <div className="flex justify-between mt-8 font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>

            <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-black text-white py-3 rounded-lg"
            >
                Confirmar pedido
            </button>

        </main>

    );
}