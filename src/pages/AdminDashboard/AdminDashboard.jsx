import AddNewProduct from "../../components/AddNewProduct"
import AddNewCustomer from "../../components/customers/AddNewCustomer"
import OrderList from "../../components/orders/OrderList"
import ProductList from "../../components/products/ProductList"

const AdminDashboard = () => {
    return (
        <main>
            <h1>Hier ist dein Dashboard</h1>
            <AddNewProduct />
            <AddNewCustomer />
            <ProductList />
            <OrderList />
        </main>
    )
}

export default AdminDashboard