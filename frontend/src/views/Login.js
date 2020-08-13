import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styles from "../styles/Auth.module.scss";

function Login() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
      console.log(data);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'SameSite':'None' },
        credentials: 'include',
        body: JSON.stringify(data),
      };
      fetch('http://127.0.0.1:5000/login', requestOptions)
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h1>Welcome Back!</h1>
                <p>Please login to your account to start using NAME.</p>
                <Link className={styles.switchAuth} to="/register">
                    Don't have an account yet?
                </Link>
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
                    <button
                        className={`${styles.loginButton} ${styles.button}`}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
