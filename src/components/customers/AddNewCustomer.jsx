import { useState } from "react"

const AddNewCustomer = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [street, setStreet] = useState('')
    const [housenum, setHousenum] = useState()
    const [postcode, setPostcode] = useState()
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')

    const addCustomer = async () => {

        const customer = {
            firstname: firstname,
            lastname: lastname,
            street: street,
            housenr: housenum,
            postcode: postcode,
            city: city,
            email: email
        }

        const response = await fetch('http://localhost:9898/api/customers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(customer)
        })
        const data = await response.json()
        if (data.state) {
            setFirstname('')
            setLastname('')
            setStreet('')
            setHousenum('')
            setPostcode('')
            setCity('')
            setEmail('')
        }
        console.log(data)
    }

    return (
        <section className="addNewCustomerSection">
            <h3>Neuer Kunde</h3>
            <article className="addNewCustomerInputfields">
                <input onChange={(e) => { setFirstname(e.target.value) }} type="text" name="firstname" id="" value={firstname} placeholder="Vorname" />
                <input onChange={(e) => { setLastname(e.target.value) }} type="text" name="lastname" id="" value={lastname} placeholder="Nachname" />
                <input onChange={(e) => { setStreet(e.target.value) }} type="text" name="street" id="" value={street} placeholder="Straße" />
                <input onChange={(e) => { setHousenum(e.target.value) }} type="text" name="housenum" id="" value={housenum} placeholder="Nr." />
                <input onChange={(e) => { setPostcode(e.target.value) }} type="number" name="postcode" id="" value={postcode} placeholder="Postleitzahl" />
                <input onChange={(e) => { setCity(e.target.value) }} type="text" name="city" id="" value={city} placeholder="Stadt" />
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="" value={email} placeholder="E-Mailadresse" />
            </article>
            <button onClick={addCustomer}>Kundenkonto erstellen</button>
        </section>
    )
}

export default AddNewCustomer