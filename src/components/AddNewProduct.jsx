import { useEffect } from "react"
import { useState } from "react"

const AddNewProduct = (props) => {

    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState('')
    const [artnum, setArtnum] = useState('')
    const [price, setPrice] = useState('')
    const [instock, setInstock] = useState(true)
    const [fileBase64, setFileBase64] = useState('')

    useEffect(() => {
        // if a file was uploaded
        if (file) {
            // Constructs a new FileReader
            // FileReader() object lets web applications asynchronously read the contents of files (or raw data buffers)
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            // readAsDataURL() method to read the contents of the specified File
            //the result attribute contains the data as a data: URL representing the file's data as a base64 encoded string
            reader.readAsDataURL(file)
        }
    }, [file])

    // function is called to fill the file object
    const handleReaderLoaded = (event) => {
        setFileBase64(event.target.result)
    }

    const addProduct = async () => {
        const product = {
            title: title,
            brand: brand,
            info: info,
            articlenr: artnum,
            price: price,
            instock: instock,
            img: fileBase64
        }

        const response = await fetch('http://localhost:9898/api/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(product)
        })
        const data = await response.json()
        props.refresh((prev) => !prev)

        if (data.state) {
            setTitle('')
            setBrand('')
            /* setFile(null) */
            setInfo('')
            setArtnum('')
            setPrice('')
            setInstock(true)
        }
        console.log(data)
    }

    return (
        <section className="addNewProductSection">
            <h3>Neues Produkt</h3>
            <article className="addProductInputfields">
                <img className="newProductThumb" src={fileBase64} alt="" />
                <input onChange={(e) => { setTitle(e.target.value) }} type="text" name="productTitle" id="" value={title} placeholder="Titel" />
                <input onChange={(e) => { setBrand(e.target.value) }} type="text" name="productBrand" id="" value={brand} placeholder="Hersteller" />
                <input onChange={(e) => setFile(e.target.files[0])} type="file" name="productfile" id="" />
                <input onChange={(e) => { setInfo(e.target.value) }} type="text" name="productInfo" id="" value={info} placeholder="Produktbeschreibung" />
                <input onChange={(e) => { setArtnum(e.target.value) }} type="number" name="productArticleNr" id="" value={artnum} placeholder="Artikelnummer" />
                <input onChange={(e) => { setPrice(e.target.value) }} type="number" name="productPrice" id="" value={price} placeholder="Produktpreis" />
                <div>
                    <input onChange={(e) => { setInstock(e.target.checked) }} type="checkbox" name="productInstock" id="" value={instock} defaultChecked />
                    <label htmlFor="instock">in stock</label>
                </div>
            </article>
            <button onClick={addProduct}>Hinzufügen</button>
        </section>
    )
}

export default AddNewProduct