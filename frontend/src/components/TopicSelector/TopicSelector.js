import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./TopicSelector.module.scss";

const testSubjects = [
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

function TopicSelector({ subjects, setSubjects, maxSubjects }) {
    const { register, watch } = useForm();
    const query = watch("search") || "";

    const [available, setAvailable] = useState(testSubjects);

    function Available({ subject }) {
        return (
            <div
                onClick={() => {
                    if (subjects.length >= maxSubjects) return;

                    setAvailable(available.filter((subj) => subj !== subject));
                    setSubjects(subjects.concat(subject));
                }}
                className={subjects.length < maxSubjects ? styles.available : styles.unavailable}
            >
                {subject}
            </div>
        );
    }

    function Selected({ subject }) {
        return (
            <div
                onClick={() => {
                    setSubjects(subjects.filter((subj) => subj !== subject));
                    setAvailable(available.concat(subject));
                }}
                className={styles.selected}
            >
                {subject}
            </div>
        );
    }

    return (
        <div>
            <input
                type="search"
                name="search"
                placeholder="Search"
                className={styles.searchBar}
                ref={register}
            />
            <div className={styles.resultContainer}>
                <div className={styles.results}>
                    {subjects.sort().map((subj) => (
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
        </div>
    );
}

export default TopicSelector;
