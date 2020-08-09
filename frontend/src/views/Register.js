import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "../styles/Auth.module.scss";

function Register() {
    const [formStage, setFormStage] = useState(0);
    const [userData, setUserData] = useState();

    function onCredSubmit(data) {
        setUserData(data);
        console.log(userData);
        setFormStage(formStage + 1);
    }

    function onInterestSubmit(interests) {
        console.log(interests);
    }

    const stage =
        formStage === 0 ? (
            <Credentials onSubmit={onCredSubmit} />
        ) : (
            <InterestSelect
                onSubmit={onInterestSubmit}
                back={() => setFormStage(formStage - 1)}
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
                <p>
                    Already have an account? <a href="/login">Log in.</a>
                </p>
            </div>
            {stage}
        </div>
    );
}

function Credentials({ onSubmit }) {
    const { register, handleSubmit } = useForm();
    return (
        <div className={styles.formBox}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="password" ref={register} />
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
                <button type="submit">Continue</button>
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

function InterestSelect({ onSubmit, back }) {
    const { register, watch } = useForm();
    const [selected, setSelected] = useState([]);
    const [available, setAvailable] = useState(subjects);
    const query = watch("search") || "";

    function Available({ subject }) {
        return (
            <div
                onClick={() => {
                    setAvailable(available.filter((subj) => subj !== subject));
                    setSelected(selected.concat(subject));
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
                    setSelected(selected.filter((subj) => subj !== subject));
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
            <h1>Select three or more interesting subjects</h1>
            <input
                type="search"
                name="search"
                placeholder="Search"
                className={styles.searchBar}
                ref={register}
            />
            <div className={styles.resultContainer}>
                <div className={styles.results}>
                    {selected.sort().map((subj) => (
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
            <div>
                <button
                    onClick={() => onSubmit(selected)}
                    className={styles.signUp}
                >
                    Sign up
                </button>
                <button onClick={back} className={styles.back}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default Register;
