import React from "react";
import { useForm } from "react-hook-form";

import styles from "../styles/Auth.module.scss";

function Login() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h1>Welcome Back!</h1>
                <p>Please login to your account to start using NAME.</p>
                <p>
                    Don't have an account? <a href="/register">Sign up.</a>
                </p>
            </div>
            <div className={styles.formBox}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.authForm}
                >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        ref={register}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={register}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
