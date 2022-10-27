import { useState } from "react"

const AddNewCustomer = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [street, setStreet] = useState('')
    const [housenum, setHousenum] = useState()
    const [postcode, setPostcode] = useState()
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')

    const addCustomer = () => {
        // code block

        // post the retrieved data
        // put into useEffect? and/or async function with await?
        fetch('http://localhost:9898/api/customers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname, street, housenum, postcode, city, email })
        })
        // Customer Objekt?
    }

    return (
        <section className="addNewCustomerSection">
            <h3>Neuer Kunde</h3>
            {/* Kann man nicht eine allgemeine onChange auf den article-tag, nur ein State für alle/objekt */}
            <article className="addNewCustomerInputfields">
                <input onChange={(e) => { setFirstname(e.target.value) }} type="text" name="firstname" id="" placeholder="Vorname" />
                <input onChange={(e) => { setLastname(e.target.value) }} type="text" name="lastname" id="" placeholder="Nachname" />
                <input onChange={(e) => { setStreet(e.target.value) }} type="text" name="street" id="" placeholder="Straße" />
                <input onChange={(e) => { setHousenum(e.target.value) }} type="text" name="housenum" id="" placeholder="Nr." />
                <input onChange={(e) => { setPostcode(e.target.value) }} type="number" name="postcode" id="" placeholder="Postleitzahl" />
                <input onChange={(e) => { setCity(e.target.value) }} type="text" name="city" id="" placeholder="Stadt" />
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="" placeholder="E-Mailadresse" />
            </article>
            <button onClick={addCustomer}>Kundenkonto erstellen</button>
        </section>
    )
}

export default AddNewCustomer