const AddNewProduct = () => {
    return (
        <section>
            <h3>Neues Produkt</h3>
            <article className="addProductInputfields">
                <input type="text" name="productTitle" id="" placeholder="Titel" />
                <input type="text" name="productBrand" id="" placeholder="Marke" />
                <input type="number" name="productArticleNr" id="" placeholder="Artikelnummer" />
                <input type="number" name="productPrice" id="" placeholder="Produktpreis" />
                <div>
                    <input type="checkbox" name="productInstock" id="instock" value="true" defaultChecked />
                    <label htmlFor="instock">in stock</label>
                </div>
            </article>
            <button>Hinzufügen</button>
        </section>
    )
}

export default AddNewProduct