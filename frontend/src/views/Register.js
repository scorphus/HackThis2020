import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "../styles/Auth.module.scss";
import { Link } from "react-router-dom";

function Register() {
    const [formStage, setFormStage] = useState(0);

    const [creds, setCreds] = useState({})
    const [interests, setInterests] = useState([])

    function onCredSubmit(data) {
      setCreds(data);
      setFormStage(formStage + 1);
    }

    function onInterestSubmit(interest_list) {
      console.log(creds)
      console.log(interests)
      const data = {...creds, ...{"interests":interests}}
      console.log(data)
      const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      fetch('http://127.0.0.1:5000/register', requestOptions).then(data => console.log(data))
    }

    const stage =
        formStage === 0 ? (
            <Credentials creds={creds} onSubmit={onCredSubmit} />
        ) : (
            <InterestSelect
                interests={interests}
                setInterests={setInterests}
                back={() => setFormStage(formStage - 1)}
                onSubmit={onInterestSubmit}
            />
        );

    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h1>Welcome</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum dolorum, ratione quia nesciunt similique natus
                    impedit pariatur rem odio, labore debitis? Odit sunt fugiat
                    accusantium quaerat non obcaecati veniam amet.
                </p>
                <Link className={styles.switchAuth} to="/login">
                    Already have an account?
                </Link>
            </div>
            {stage}
        </div>
    );
}

function Credentials({ creds, onSubmit }) {
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
        <div className={styles.formBox}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
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
                <p>{/* error message */}</p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" ref={register} />
                <button className={`${styles.floatingRight} button`}>
                    Continue
                </button>
            </form>
        </div>
    );
}

const subjects = [
    "Mathematics",
    "Computer Science",
    "Biology",
    "Chemistry",
    "Physics",
    "Psychology",
    "Literature",
    "Engineering",
    "Finance",
    "Electronics",
    "Astronomy",
    "Memeology",
    "potato",
];

function InterestSelect({ interests, setInterests, onSubmit, back }) {
    const { register, watch } = useForm();
    const [available, setAvailable] = useState(subjects);
    const query = watch("search") || "";

    function Available({ subject }) {
        return (
            <div
                onClick={() => {
                    setAvailable(available.filter((subj) => subj !== subject));
                    setInterests(interests.concat(subject));
                }}
                className={styles.available}
            >
                {subject}
            </div>
        );
    }

    function Selected({ subject }) {
        return (
            <div
                onClick={() => {
                    setInterests(interests.filter((subj) => subj !== subject));
                    setAvailable(available.concat(subject));
                }}
                className={styles.selected}
            >
                {subject}
            </div>
        );
    }

    return (
        <div className={styles.interestBox}>
            <h1>Select three interesting subjects</h1>
            <input
                type="search"
                name="search"
                placeholder="Search"
                className={styles.searchBar}
                ref={register}
            />
            <div className={styles.resultContainer}>
                <div className={styles.results}>
                    {interests.sort().map((subj) => (
                        <Selected key={subj} subject={subj} />
                    ))}
                    {available
                        .sort()
                        .filter((subj) =>
                            subj.toLowerCase().includes(query.toLowerCase())
                        )
                        .map((subj) => (
                            <Available key={subj} subject={subj} />
                        ))}
                </div>
            </div>
            <button onClick={back} className={`${styles.floatingLeft} button`}>
                Back
            </button>
            <button
                onClick={onSubmit}
                className={`${styles.floatingRight} button`}
            >
                Sign up
            </button>
        </div>
    );
}

export default Register;
