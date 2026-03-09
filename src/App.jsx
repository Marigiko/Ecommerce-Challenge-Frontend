import Navbar from "./layout/Navbar"

import Login from "./modules/auth/Login"
import Register from "./modules/auth/Register"

import User from "./modules/user/User"
import Profile from "./modules/user/Profile"

import Role from "./modules/role/Role"

import CreateProduct from "./modules/product/CreateProduct"
import UpdateProduct from "./modules/product/UpdateProduct"
import ActivateProduct from "./modules/product/ActivateProduct"
import DeleteProduct from "./modules/product/DeleteProduct"
import GetProduct from "./modules/product/GetProduct"

import Section from "./components/Section"
import Card from "./components/Card"

function App() {

    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="p-8 space-y-10">

                <Section title="Auth">
                    <Login />
                    <Register />
                </Section>

                <Section title="Users">
                    <User />
                    <Profile />
                    <Role />
                </Section>

                <Section title="Products">
                    <CreateProduct />
                    <UpdateProduct />
                    <Card
                        title="Product Actions"
                        className="flex flex-col justify-between"
                    >
                        <ActivateProduct />
                        <DeleteProduct />
                        <GetProduct />
                    </Card>
                </Section>

            </div>

        </div >

    )

}

export default App