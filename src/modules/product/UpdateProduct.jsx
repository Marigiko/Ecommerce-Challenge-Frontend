import { useState } from "react"
import API from "../../api/api"

import Card from "../../components/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"
import ErrorMessage from "../../components/ErrorMessage"

export default function UpdateProduct() {

    const [id, setId] = useState("")

    const [title, setTitle] = useState("")
    const [code, setCode] = useState("")
    const [variationType, setVariationType] = useState("")

    const [category, setCategory] = useState("")
    const [capacity, setCapacity] = useState("")
    const [capacityUnit, setCapacityUnit] = useState("")
    const [capacityType, setCapacityType] = useState("")
    const [brand, setBrand] = useState("")
    const [series, setSeries] = useState("")

    const [about, setAbout] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    const update = async () => {

        try {

            await API.post(`/product/${id}/details`, {

                title,
                code,
                variationType,

                details: {
                    category,
                    capacity: Number(capacity),
                    capacityUnit,
                    capacityType,
                    brand,
                    series
                },

                about: about ? [about] : [],
                description
            })

            alert("Product updated")

        } catch (err) {

            setError(err.message)

        }
    }

    return (

        <Card title="Update Product">

            <div className="space-y-3">

                <ErrorMessage message={error || undefined} />

                <label>Product ID</label>
                <Input value={id} onChange={e => setId(e.target.value)} />

                <label>Title</label>
                <Input value={title} onChange={e => setTitle(e.target.value)} />

                <label>Code</label>
                <Input value={code} onChange={e => setCode(e.target.value)} />

                <label>Variation Type</label>
                <Input value={variationType} onChange={e => setVariationType(e.target.value)} />

                <label>Category Label</label>
                <Input value={category} onChange={e => setCategory(e.target.value)} />

                <label>Capacity</label>
                <Input type="number" value={capacity} onChange={e => setCapacity(e.target.value)} />

                <label>Capacity Unit</label>
                <Input value={capacityUnit} onChange={e => setCapacityUnit(e.target.value)} />

                <label>Capacity Type</label>
                <Input value={capacityType} onChange={e => setCapacityType(e.target.value)} />

                <label>Brand</label>
                <Input value={brand} onChange={e => setBrand(e.target.value)} />

                <label>Series</label>
                <Input value={series} onChange={e => setSeries(e.target.value)} />

                <label>About</label>
                <Input value={about} onChange={e => setAbout(e.target.value)} />

                <label>Description</label>
                <Input value={description} onChange={e => setDescription(e.target.value)} />

                <Button onClick={update}>
                    Update Product
                </Button>

            </div>

        </Card>

    )
}