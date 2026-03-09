import { useState } from "react"
import Card from "../../components/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"
import API from "../../api/api"
import ErrorMessage from "../../components/ErrorMessage"

export default function DeleteProduct() {

    const [id, setId] = useState(1)
    const [error, setError] = useState("")

    const remove = async () => {

        try {

            await API.delete(`/product/${id}`)

            alert("deleted")

        } catch (err) {

            setError(err.message)

        }

    }

    return (

        <Card title="Delete Product">

            <ErrorMessage message={error || undefined} />

            <Input
                type="number"
                value={id}
                onChange={e => setId(Number(e.target.value))}
            />

            <Button onClick={remove}>
                Delete
            </Button>

        </Card>

    )

}