import { useState } from "react"
import API from "../../api/api"
import Card from "../../components/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"
import ErrorMessage from "../../components/ErrorMessage"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const login = async () => {

        try {

            const res = await API.post("/auth/login", { email, password })

            localStorage.setItem(
                "token",
                res.data.data.accessToken
            )

            alert("logged")

        } catch (err) {

            setError(err.message)

        }

    }

    return (

        <Card title="Login">

            <div className="space-y-3">

                <ErrorMessage message={error || undefined} />

                <Input
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button onClick={login}>
                    Login
                </Button>

            </div>

        </Card>

    )

}