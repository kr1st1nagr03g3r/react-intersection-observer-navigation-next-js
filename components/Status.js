import * as React from "react";


const statusElement = {
    position: "absolute",
    top: 0,
    right: 0,
    width: 32,
    height: 32,
    background: "rgba(255, 255, 255, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

};

const emojiIcon = {
    width: "1em",
    height: "1em",
    lineHeight: 1
};

function Status({ inView }) {
    return (
        <div style={{ position: "sticky", top: 0 }}>
            <div style={statusElement}>
                {inView ? (
                    <span role="img" aria-label="In view" style={emojiIcon}>
                        ✅
                    </span>
                ) : (
                    <span role="img" aria-label="Outside the viewport" style={emojiIcon}>
                        ❌
                    </span>
                )}
            </div>
        </div>
    );
}

export default Status;
