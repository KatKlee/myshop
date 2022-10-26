const LoginForm = (props) => {
    return (
        <>
            <input onChange={(e) => { props.setemail(e.target.value) }} type="email" name="" id="inputEmail" placeholder="E-Mailadresse" />
            <input onChange={(e) => { props.setpassword(e.target.value) }} type="password" name="" id="inputPassword" placeholder="Passwort" />
            <button onClick={props.login} >Anmelden</button>
        </>
    )
}

export default LoginForm