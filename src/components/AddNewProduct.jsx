import { useEffect } from "react"
import { useState } from "react"

const AddNewProduct = () => {

    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState('')
    const [artnum, setArtnum] = useState('')
    const [price, setPrice] = useState('')
    const [instock, setInstock] = useState('')
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

    const addProduct = () => {
        // code block
    }

    return (
        <section className="addNewProductSection">
            <h3>Neues Produkt</h3>
            <article className="addProductInputfields">
                <img className="newProductThumb" src={fileBase64} alt="" />
                <input onChange={(e) => { setTitle(e.target.value) }} type="text" name="productTitle" id="" placeholder="Titel" />
                <input onChange={(e) => { setBrand(e.target.value) }} type="text" name="productBrand" id="" placeholder="Hersteller" />
                <input onChange={(e) => setFile(e.target.files[0])} type="file" name="productImg" id="" />
                <input onChange={(e) => { setInfo(e.target.value) }} type="text" name="productInfo" id="" placeholder="Produktbeschreibung" />
                <input onChange={(e) => { setArtnum(e.target.value) }} type="number" name="productArticleNr" id="" placeholder="Artikelnummer" />
                <input onChange={(e) => { setPrice(e.target.value) }} type="number" name="productPrice" id="" placeholder="Produktpreis" />
                <div>
                    <input onChange={(e) => { console.log(e.target.checked) }} type="checkbox" name="productInstock" id="instock" defaultChecked />
                    <label htmlFor="instock">in stock</label>
                </div>
            </article>
            <button onClick={addProduct}>Hinzufügen</button>
        </section>
    )
}

export default AddNewProduct