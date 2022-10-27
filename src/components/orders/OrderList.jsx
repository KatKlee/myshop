import OrderItem from "./OrderItem"

// states

// useEffect mit fetch

const OrderList = () => {
    return (
        <section>
            <h3>Bestellungen</h3>
            <article className="orderListHead">
                <p>Bestellnr.</p>
                <p>Datum</p>
                <p>Kundenname</p>
                <p>Rechnungsadresse</p>
                <p>Summe</p>
                <p>Bearbeitung</p>
                <p>Zahlung</p>
            </article>
            {/* mappen, order item wird returned */}

            <OrderItem />
            <OrderItem />
            <OrderItem />
        </section>
    )
}

export default OrderList