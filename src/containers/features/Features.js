import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving end results instantly",
    text: "GPT-3 is the most powerful and advanced language model ever created. It can write essays, summarize emails, and answer trivia questions. It can even write code.",
  },
  {
    title: "Become more efficient",
    text: "GPT-3 is the most powerful and advanced language model ever created. It can write essays, summarize emails, and answer trivia questions. It can even write code.",
  },
  {
    title: "Save time and money",
    text: "GPT-3 is the most powerful and advanced language model ever created. It can write essays, summarize emails, and answer trivia questions. It can even write code.",
  },
  {
    title: "Get better results",
    text: "GPT-3 is the most powerful and advanced language model ever created. It can write essays, summarize emails, and answer trivia questions. It can even write code.",
  },
];

export default function Features() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}
