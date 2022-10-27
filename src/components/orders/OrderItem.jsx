const OrderItem = () => {
    // inhalte werden per props von Orderlist übergeben
    return (
        <article className="orderContainer">
            <p>0344347</p>
            <p>12.10.2022</p>
            <div>
                <p>Marlis</p>
                <p>Musternachname</p>

            </div>
            <div>
                <p>Beispielstr. 33,</p>
                <p>12345 Musterstadt</p>
            </div>
            <p>3000 €</p>
            <p>wartet</p>
            <p>ausstehend</p>
        </article>
    )
}

export default OrderItem