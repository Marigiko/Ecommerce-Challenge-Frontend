import { useState } from "react"
import API from "../../api/api"
import Card from "../../components/Card"
import Button from "../../components/Button"
import ErrorMessage from "../../components/ErrorMessage"

export default function Profile() {

    const [profile, setProfile] = useState(null)
    const [error, setError] = useState("")

    const loadProfile = async () => {

        try {

            const res = await API.get("/user/profile")

            setProfile(res.data.data)

        } catch (err) {

            setError(err.message)

        }

    }

    return (

        <Card title="Profile">

            <ErrorMessage message={error || undefined} />

            <Button onClick={loadProfile}>
                Load Profile
            </Button>

            <pre className="text-xs mt-4 overflow-auto max-h-60">
                {JSON.stringify(profile, null, 2)}
            </pre>

        </Card>

    )

}