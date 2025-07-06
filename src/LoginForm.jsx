import { useState } from "react"
import "./LoginForm.css"


export default function LoginForm() {

    let [user, setUser] = useState({
        userName: "",
        passWord: "",
    });


    let handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            userName: "",
            passWord: "",
        };
        return (formData)
    }

    let handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>login form</h1>
                    <p>please enter the login details.  </p>
                    <br />
                    <label htmlFor="userName">USERNAME :</label>
                    <input type="text"  name="userName" value={user.userName} onChange={handleInputChange} required />

                    <br />
                    <label htmlFor="password">PASSWORD :</label>
                    <input type="password"  name="passWord" value={user.passWord} onChange={handleInputChange} required />

                    <br />
                    <button onClick={handleInputChange}>Submit</button>
                </div>

            </form>

        </>
    )
}