import { useState } from "react";

function SignUp({setToken}) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST", body: JSON.stringify({userName, password})
            })
            const result = await response.json();
            console.log(result);
            setToken(result.token)
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div>
            <h2>Sign Up Here!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    User Name: <input value={userName} onChange={(event) => {
                        setUserName(event.target.value)
                    }}></input>
                </label>
                <br/>
                <label>
                    Password: <input value={password} onChange={(event) => {
                        setPassword(event.target.value)
                    }}></input>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp;