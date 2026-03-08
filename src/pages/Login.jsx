import { useState } from "react";
import { login, register } from "../api/api";

export default function Login({ setUser }) {

    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {

            const data = isLogin
                ? await login({ email, password })
                : await register({ email, password });

            const user = {
                email,
                token: data.access_token || data.token
            };

            setUser(user);

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

        } catch (err) {

            setError(err.message);

        }

    };

    return (

        <div className="flex justify-center py-20">

            <div className="w-full max-w-md border rounded-xl p-8 bg-white">

                <h2 className="text-xl font-bold mb-6">
                    {isLogin ? "Iniciar sesión" : "Crear cuenta"}
                </h2>

                {error && (
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full border p-3 mb-4 rounded"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        required
                        className="w-full border p-3 mb-6 rounded"
                    />

                    <button className="w-full bg-black text-white py-3 rounded">
                        Continuar
                    </button>

                </form>

                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="mt-4 text-sm text-gray-500"
                >

                    {isLogin
                        ? "¿No tienes cuenta? Regístrate"
                        : "¿Ya tienes cuenta? Inicia sesión"}

                </button>

            </div>

        </div>

    );
}