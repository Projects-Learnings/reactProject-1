import React from "react";
import styles from './EventList.module.css'

export default function EventList({e, handleCli}) {
    console.log("EventList", e);
    return (
        <>
            {e.map((e) => (
                <div className={styles.card} key={e.id}>
                    <button
                        className={styles.deleteButton}
                        onClick={() => handleCli(e.id)}
                    >
                        ×
                    </button>
                    <h4>{e.title}</h4>
                    <span className={styles.date}>Event Date: {e.createdOn}</span>
                    <span className={styles.location}>Location: {e.location}</span>
                </div>
            ))}
        </>
    )
}