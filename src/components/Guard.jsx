import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Guard = () => {
    const nav = useNavigate()

    useEffect(() => {
        const checktoken = async () => {
            const guardResponse = await fetch('http://localhost:9898/api/verify', {
                headers: {
                    authentication: 'Bearer ' + localStorage.getItem('token')
                }
            })
            const data = await guardResponse.json()
            console.log(data)
            if (!data.state) nav('/admin/login')
            // die dashboard-seite ist für eine kurze Zeit zu sehen. Was kann ich tun um das zu verhindern?
        }
        checktoken()
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default Guard