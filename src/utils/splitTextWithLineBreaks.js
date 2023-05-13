import React from "react";

function splitTextWithLineBreaks(text) {
    // Check text is empty or not
    if (!text) {
        return "";
    }
    if (!text.includes("\n")) {
        return text;
    }
    return text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
}

export default splitTextWithLineBreaks;
