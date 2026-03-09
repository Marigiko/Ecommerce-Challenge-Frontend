import { useState } from "react"
import Card from "../../components/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"
import API from "../../api/api"
import ErrorMessage from "../../components/ErrorMessage"

export default function ActivateProduct() {

    const [id, setId] = useState(1)
    const [error, setError] = useState("")

    const activate = async () => {

        try {

            await API.post(`/product/${id}/activate`)

            alert("activated")

        } catch (err) {

            setError(err.message)

        }

    }

    return (

        <Card title="Activate Product">

            <ErrorMessage message={error || undefined} />

            <Input
                type="number"
                value={id}
                onChange={e => setId(Number(e.target.value))}
            />

            <Button onClick={activate}>
                Activate
            </Button>

        </Card>

    )

}