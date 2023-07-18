import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Chatmessage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const fetchText = async () => {
      const response = await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json();
      setText(data.text);
      console.log(data)
    };
    fetchText();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);
    return () => clearTimeout(timeout);
  }, [showCursor]);

  let displayText = text.substring(0, index); 
  if (text.length <= 13) {
    displayText = text;
  } else {
    const sentences = text.split(". ");
    for (let i = 0; i < sentences.length; i++) {
      if (sentences[i].length <= 19) {
        displayText = sentences[i];
        break;
      }
    }
  }; 
  
  // if (text.length <= 17) {
  //   displayText = text;
  // } else {
  //   const sentences = text.split(" ");
  //   for (let i = 0; i < sentences.length; i++) {
  //     if (sentences[i].length <= 17) {
  //       displayText = sentences[i];
  //       break;
  //     }
  //   }
  // };
  const displayedText = displayText.substring(0, index);
  const cursor = showCursor ? "|" : "";
  return (
    <Index>
    <p className="ind">
      Random Trivia: {displayedText}
      <Cursor>
        <span className="cursor">{cursor}</span>
      </Cursor>
    </p>
    </Index>
  );
};


const Cursor = styled.span`
  .cursor {
  animation: blink 0.5s infinite;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
`

const Index = styled.div`
  @media only screen and (max-width: 600px) {
    .ind{
      position: relative;
      top: -50px;
    }
  }

  
`
export default Chatmessage;
