import React from "react";

function splitTextWithLineBreaks(text) {
    return text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
}

export default splitTextWithLineBreaks;
