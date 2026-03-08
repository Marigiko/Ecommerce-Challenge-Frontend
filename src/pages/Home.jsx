import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import { FALLBACK_PRODUCTS } from "../data/fallbackProducts";

export default function Home({ addToCart }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch(() => setProducts(FALLBACK_PRODUCTS));
    }, []);

    return (
        <main className="max-w-7xl mx-auto px-4 py-12">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                {products.map(p => (
                    <ProductCard
                        key={p.id}
                        product={p}
                        onAddToCart={addToCart}
                    />
                ))}

            </div>

        </main>
    );
}