export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="group">

            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                />
            </div>

            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.description}</p>

            <div className="flex justify-between items-center mt-2">

                <span className="font-semibold">
                    ${product.price}
                </span>

                <button
                    onClick={() => onAddToCart(product)}
                    className="text-sm bg-black text-white px-3 py-1 rounded"
                >
                    Add
                </button>

            </div>
        </div>
    );
}