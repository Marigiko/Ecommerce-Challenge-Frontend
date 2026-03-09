import { useState } from "react"
import API from "../../api/api"

import Card from "../../components/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"
import ErrorMessage from "../../components/ErrorMessage"

export default function Role() {

    const [roleId, setRoleId] = useState("")
    const [userId, setUserId] = useState("")
    const [error, setError] = useState("")

    const assign = async () => {

        try {

            await API.post("/role/assign", {
                roleId: Number(roleId),
                userId: Number(userId)
            })

            alert("Role assigned")

        } catch (err) {

            setError(err.message)

        }
    }

    return (

        <Card title="Assign Role">

            <div className="space-y-3">

                <ErrorMessage message={error || undefined} />

                <label>Role ID</label>
                <Input
                    type="number"
                    value={roleId}
                    onChange={(e) => setRoleId(e.target.value)}
                />

                <label>User ID</label>
                <Input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />

                <Button onClick={assign}>
                    Assign Role
                </Button>

            </div>

        </Card>

    )

}