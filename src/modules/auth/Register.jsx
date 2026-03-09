import { useState } from "react"
import API from "../../api/api"

import Card from "../../components/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"
import ErrorMessage from "../../components/ErrorMessage"

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const register = async () => {

        try {

            await API.post("/auth/register", {
                email,
                password
            })

            alert("User created")

            setEmail("")
            setPassword("")

        } catch (err) {

            setError(err.message)

        }

    }

    return (

        <Card title="Register">

            <div className="space-y-3">

                <ErrorMessage message={error || undefined} />

                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button onClick={register}>
                    Register
                </Button>

            </div>

        </Card>

    )

}