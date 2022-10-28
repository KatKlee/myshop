import { Link } from "react-router-dom"

const CustomerItem = ({ customer }) => {
    return (
        <Link to={`/admin/customerdetail/${customer._id}`} >
            <p>{customer.firstname}</p>
            <p>{customer.lastname}</p>
            <p>{customer.email}</p>
        </Link >
    )
}

export default CustomerItem