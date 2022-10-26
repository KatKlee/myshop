import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../../components/LoginForm"

const AdminLogin = () => {
    // state for getting the email and posting it to the server
    const [email, setEmail] = useState('')
    // state for getting password input and posting it to the server
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const login = async () => {
        const fetchResult = await fetch('http://localhost:9898/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (fetchResult.status === 200) {
            const data = await fetchResult.json()
            localStorage.setItem('token', data.token)
            nav('/admin/dashboard')
        }
    }

    return (
        <main>
            <h1>Login</h1>
            <LoginForm login={login} setemail={setEmail} setpassword={setPassword} />
        </main>
    )
}

export default AdminLogin