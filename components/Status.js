import * as React from "react";
import styles from '../styles/navigation.module.css'


// const statusElement = {
//     position: "absolute",
//     top: 0,
//     right: 0,

//     height: 32,
//     background: "rgba(255, 255, 255, 0.6)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",

// };

// const emojiIcon = {
//     width: "1em",
//     height: "1em",
//     lineHeight: 1
// };

function Status({ inView, }) {
    return (
        <div className={styles.sticky}>
            <div className={styles.statusElement}>
                {inView ? (
                    <span role="img" aria-label="In view" className={styles.emojiIcon}>
                        ✅
                    </span>
                ) : (
                    <span role="img" aria-label="Outside the viewport" clasName={styles.anotherStyle}>
                        ❌
                    </span>
                )}
            </div>
        </div>
    );
}

export default Status;
