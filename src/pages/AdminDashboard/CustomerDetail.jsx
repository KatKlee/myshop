import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const CustomerDetail = () => {
    const [customer, setCustomer] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch('http://localhost:9898/api/customers/' + params.id, {
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => setCustomer(data))
    }, [])

    return (
        <main>
            <p>Alle Infos zu diesem Kunden</p>
            <p>{params.id}</p>
            <p>{customer.firstname}</p>
        </main>
    )
}

export default CustomerDetail