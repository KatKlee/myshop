import ProductItem from "./ProductItem"

// states

// useEffect mit fetch

const ProductList = () => {
    return (
        <section>
            <h3>Produkte</h3>
            <article className="productListHead">
                <p>stock</p>
                <p>Artikelnr.</p>
                <p>Produkt</p>
                <p>Hersteller</p>
                <p>Preis</p>
                <p>Link</p>
            </article>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </section>
    )
}

export default ProductList