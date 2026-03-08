import { useEffect, useState } from "react";
import { getProfile } from "../api/api";

export default function Profile({ user }) {

    const [profile, setProfile] = useState(null);

    useEffect(() => {

        if (!user) return;

        getProfile(user.token)
            .then(setProfile)
            .catch(() => { });

    }, [user]);

    if (!user) {
        return (
            <main className="text-center py-16">
                Debes iniciar sesión
            </main>
        );
    }

    return (

        <main className="max-w-3xl mx-auto py-12 px-4">

            <h2 className="text-2xl font-bold mb-8">
                Mi perfil
            </h2>

            <div className="border rounded-xl p-6 bg-white">

                <p className="font-medium">
                    Email
                </p>

                <p className="text-gray-600">
                    {profile?.email || user.email}
                </p>

            </div>

        </main>

    );
}