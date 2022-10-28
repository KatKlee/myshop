import { useEffect } from "react"
import { useState } from "react"
import AddNewProduct from "../../components/AddNewProduct"
import AddNewCustomer from "../../components/customers/AddNewCustomer"
import CustomerList from "../../components/customers/CustomerList"
import OrderList from "../../components/orders/OrderList"
import ProductList from "../../components/products/ProductList"

const AdminDashboard = () => {
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        console.log('Dashboard')
    })

    return (
        <main>
            <h1>Hier ist dein Dashboard</h1>
            <AddNewProduct refresh={setRefresh} />
            <AddNewCustomer />
            <ProductList hui={refresh} />
            <CustomerList />
            <OrderList />
        </main>
    )
}

export default AdminDashboard