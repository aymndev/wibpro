import Link from "next/link";

export default function Login() {
    return (
        <div className="page-content">
            <div id="login-container">
                <h2>Login</h2>

                <form method="post">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                    />

                    <button type="submit">Login</button>
                </form>

                <p className="register-link">
                    Don’t have an account?{" "}
                    <Link href="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}
