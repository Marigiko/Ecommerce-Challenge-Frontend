import { useState } from "react"
import API from "../../api/api"

import Card from "../../components/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"
import ErrorMessage from "../../components/ErrorMessage"

export default function GetProduct() {

    const [id, setId] = useState("")
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const load = async () => {

        if (!id) return

        try {

            setLoading(true)
            setError(null)

            const res = await API.get(`/product/${id}`)

            setProduct(res.data.data)

        } catch (e) {

            setError(e.response?.data?.message || "Error loading product")

        } finally {

            setLoading(false)

        }

    }

    return (

        <Card title="Get Product">

            <div className="space-y-4">

                <ErrorMessage message={error || undefined} />

                <div>

                    <label className="text-sm font-medium">
                        Product ID
                    </label>

                    <Input
                        placeholder="example: 1"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />

                </div>

                <Button onClick={load}>
                    {loading ? "Loading..." : "Get Product"}
                </Button>

                {product && (

                    <div className="bg-gray-900 text-green-400 text-xs p-4 rounded-lg overflow-auto max-h-72">

                        <pre>
                            {JSON.stringify(product, null, 2)}
                        </pre>

                    </div>

                )}

            </div>

        </Card>

    )

}