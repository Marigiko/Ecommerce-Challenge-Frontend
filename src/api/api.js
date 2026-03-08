import { API_URL } from "../config/config";

export async function getProducts() {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("Error fetching products");
    return res.json();
}

export async function login(credentials) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
}

export async function register(credentials) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
}

export async function getProfile(token) {
    const res = await fetch(`${API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error("Error fetching profile");

    return res.json();
}

export async function createOrder(token, cart) {
    const res = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            items: cart.map(i => ({
                productId: i.id,
                quantity: i.quantity
            })),
            total: cart.reduce((s, i) => s + i.price * i.quantity, 0)
        })
    });

    if (!res.ok) throw new Error("Order failed");

    return res.json();
}