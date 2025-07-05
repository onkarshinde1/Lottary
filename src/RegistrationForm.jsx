import { useState } from "react";
import "./index.css"

export default function RegistrationForm() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password:"",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password:"",
        };
        console.log(formData)
    }

    let handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]:value }));
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign In</h1>
                    <p>please fill this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name:</b>
                    </label>
                    <input type="text"
                        name="firstName"
                        placeholder="&nbsp;First Name"
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />

                    <label htmlFor="lastName">
                        <b>Last Name:</b>
                    </label>
                    <input type="text"
                        name="lastName"
                        placeholder="&nbsp;Last Name"
                        required
                        value={user.lastName} onChange={handleInputChange} />
                    <br />
                    <br />

                    <label htmlFor="email">
                        <b>E-mail:</b>
                    </label>
                    <input type="email"
                        name="email"
                        placeholder="&nbsp;E-mail"
                        required
                        value={user.email} onChange={handleInputChange} />

                    <br />
                    <br />
                    <label htmlFor="phoneNumber">
                        <b>Phone Number:</b>
                    </label>
                    <input type="text"
                        name="phoneNumber"
                        placeholder="&nbsp;Phone Number"
                        required
                        value={user.phoneNumber} onChange={handleInputChange} />
                    <br />
                    <br />

                    <label htmlFor="password">
                        <b>Password:</b>
                    </label>
                    <input type="password"
                        name="password"
                        placeholder="&nbsp;Password"
                        required
                        value={user.password} onChange={handleInputChange} />

                    <br />
                    <br />
                    <button onClick={handleInputChange}>Submit</button>


                </div>
            </form>
        </>
    )
}