import { useState } from "react"
import API from "../../api/api"
import Card from "../../components/Card"
import Button from "../../components/Button"
import ErrorMessage from "../../components/ErrorMessage"

export default function User() {

    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    const loadUsers = async () => {

        try {

            const res = await API.get("/user/profile")

            setUsers(res.data.data)

        } catch (err) {

            setError(err.message)

        }

    }

    return (

        <Card title="Users">

            <ErrorMessage message={error || undefined} />

            <Button onClick={loadUsers}>
                Load Users
            </Button>

            <pre className="text-xs mt-4 overflow-auto max-h-60">
                {JSON.stringify(users, null, 2)}
            </pre>

        </Card>

    )

}