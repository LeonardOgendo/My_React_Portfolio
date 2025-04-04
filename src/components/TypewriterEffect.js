import React, { useState, useEffect } from "react";
import '../styles.css';

function TypewriterEffect ({ texts, speed=100, pause=1500 }){
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (textIndex < texts.length) {
            const currentText = texts[textIndex];

            if (isDeleting) {
                if (charIndex > 0) {
                    setTimeout(() => {
                        setDisplayedText(currentText.substring(0, charIndex -1));
                        setCharIndex(charIndex - 1);
                    }, speed / 2);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                if (charIndex < currentText.length) {
                    setTimeout(() => {
                        setDisplayedText(currentText.substring(0, charIndex + 1));
                        setCharIndex(charIndex + 1);
                    }, speed)
                } else {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, pause)
                }
            }
        }
    }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

    return(
        <div className="typewriter-container">
            <span>{displayedText}</span>
        </div>
    )

}
export default TypewriterEffect