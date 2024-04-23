import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import "./Login.css"; // Importing CSS file

function Login() {
    const history = useHistory(); // Initializing useHistory hook
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log("Logging in...");
        // Redirect to home page after 3 seconds
        setTimeout(() => {
            history.push("/Ecommerce-react");
        }, 1000);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="signup-link">
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
}

export default Login;
