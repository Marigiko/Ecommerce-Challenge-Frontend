import { useState } from "react"
import API from "../../api/api"

import Card from "../../components/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"
import ErrorMessage from "../../components/ErrorMessage"

export default function CreateProduct() {

    const [title, setTitle] = useState("")
    const [code, setCode] = useState("")
    const [variationType, setVariationType] = useState("NONE")

    const [category, setCategory] = useState("")
    const [categoryID, setCategoryID] = useState("")
    const [capacity, setCapacity] = useState("")
    const [capacityUnit, setCapacityUnit] = useState("")
    const [capacityType, setCapacityType] = useState("")
    const [brand, setBrand] = useState("")
    const [series, setSeries] = useState("")

    const [about, setAbout] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    const create = async () => {

        try {

            await API.post("/product/create", {
                title,
                code,
                variationType,
                categoryId: Number(categoryID),
                details: {
                    category,
                    capacity: Number(capacity),
                    capacityUnit,
                    capacityType,
                    brand,
                    series
                },

                ...(about ? { about: [about] } : {}),
                ...(description ? { description } : {})
            })

            alert("Product created")

        } catch (err) {

            setError(err.message)

        }
    }

    return (

        <Card title="Create Product">

            <div className="space-y-3">

                <ErrorMessage message={error || undefined} />

                <label>Title</label>
                <Input value={title} onChange={e => setTitle(e.target.value)} />

                <label>Code</label>
                <Input value={code} onChange={e => setCode(e.target.value)} />

                <label>Variation Type</label>
                <Input value={variationType} onChange={e => setVariationType(e.target.value)} />

                <label>Category ID</label>
                <Input value={categoryID} onChange={e => setCategoryID(e.target.value)} />

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

                <Button onClick={create}>
                    Create Product
                </Button>

            </div>

        </Card>

    )
}