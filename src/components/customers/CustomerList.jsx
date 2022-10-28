import { useState, useEffect } from "react"
import CustomerItem from "./CustomerItem"

const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/api/customers', {
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => setCustomers(data))
    }, [])

    return (
        <section>
            <h3>Kundenliste</h3>
            {customers.map((customer, key) =>
                <CustomerItem
                    key={key}
                    customer={customer}
                />)}
        </section>
    )
}

export default CustomerList