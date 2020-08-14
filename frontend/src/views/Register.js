import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "../styles/Auth.module.scss";
import { Link } from "react-router-dom";
import TopicSelector from "../components/TopicSelector/TopicSelector";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({});

function Register(props) {
    const [formStage, setFormStage] = useState(0);

    const [creds, setCreds] = useState({})
    const [interests, setInterests] = useState([])

    function onCredSubmit(data) {
      setCreds(data);
      setFormStage(formStage + 1);
    }

    function onInterestSubmit(interest_list) {
      const data = {...creds, ...{"interests":interests}}
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'SameSite':'None' },
        credentials: 'include',
        body: JSON.stringify(data),
      };
      fetch('/register', requestOptions).then(data => console.log(data).then(() => {
          props.history.push("/dashboard")
      }))
      
    }

    const stage =
        formStage === 0 ? (
            <Credentials dataAos="fade-up" dataAosDuration="700" creds={creds} onSubmit={onCredSubmit} />
        ) : (
            <InterestSelect
                dataAos="fade-up" 
                dataAosDuration="700"
                interests={interests}
                setInterests={setInterests}
                back={() => setFormStage(formStage - 1)}
                onSubmit={onInterestSubmit}
            />
        );

    return (
        <div className={styles.container}>
            <div data-aos="fade-down" data-aos-duration="700" className={styles.infoBox}>
                <h1>Welcome!</h1>
                <p>
                    Fill out this super-simple two step registration, and you'll be on your way! 
                    To start, let's get your email, password, and an email you check quite often.
                    We'll use your email to verify your account and send you notifications about interesting topics.
                </p>
                <Link className={styles.switchAuth} to="/login">
                    Already have an account?
                </Link>
            </div>
            {stage}
        </div>
    );
}

function Credentials({ creds, onSubmit, dataAos, dataAosDuration }) {
    const { register, handleSubmit } = useForm(
        {
            defaultValues: {
                username: creds.username,
                password: creds.password,
                email: creds.email
            }
        }
    );

    return (
        <div data-aos={dataAos} data-aos-duration={dataAosDuration} className={styles.formBox}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
                <label htmlFor="username">Username</label>
                <input
                    className={styles.inputText}
                    type="text"
                    name="username"
                    id="username"
                    ref={register}
                />
                <label htmlFor="password">Password</label>
                <input
                    className={styles.inputText}
                    type="password"
                    name="password"
                    id="password"
                    ref={register}
                />
                <p>{/* error message */}</p>
                <label style={{marginTop: "60px"}} htmlFor="email">Email</label>
                <input className={styles.inputText} type="email" name="email" id="email" ref={register} />
                <button className={`${styles.floatingRight} ${styles.button}`}>
                    Continue
                </button>
            </form>
        </div>
    );
}


function InterestSelect({ interests, setInterests, onSubmit, back, dataAos, dataAosDuration }) {
    return (
        <div data-aos={dataAos} data-aos-duration={dataAosDuration} className={styles.interestBox}>
            <h1>Select three interesting subjects</h1>
            <TopicSelector subjects={interests} setSubjects={setInterests} maxSubjects={3} />
            <button onClick={back} className={`${styles.floatingLeft} ${styles.button}`}>
                Back
            </button>
            <button
                onClick={onSubmit}
                className={`${styles.floatingRight} ${styles.button}`}
            >
                Sign up
            </button>
        </div>
    );
}

export default Register;
