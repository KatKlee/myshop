import { useEffect } from "react"
import { useState } from "react"
import ProductItem from "./ProductItem"

// useEffect mit fetch

const ProductList = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log('liste mounted')
        fetch('http://localhost:9898/api/products', {
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })

    }, [props.hui])

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
            {products.map((product, key) => {
                return (

                    <ProductItem
                        key={key}
                        product={product}
                    />
                )
            })}
        </section>
    )
}

export default ProductList