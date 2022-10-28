const ProductItem = ({ product }) => {
    return (
        <article className="productContainer">
            <p>{String(product.instock)}</p>
            <p>{product.articlenr}</p>
            <p>{product.title}</p>
            <p>{product.brand}</p>
            <p>{product.price} €</p>
            <a href="#">Link</a>
            {/* <img className="productImgThumb" src="#" alt="" /> */}
            {/* <p>Hier steht eine Produktbeschreibung</p> */}
            {/* <button>Kaufen</button> */}
        </article>
    )
}

export default ProductItem