import { useState } from "react";

import "./acordion.css"

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "What is your refund policy?",
      answer: "If you're unhappy with your purchase, we'll refund you in full."
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes! We offer 24/7 technical support via chat and email."
    }
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-header" onClick={() => toggle(index)}>
            <span>{item.question}</span>
            <span>{openIndex === index ? "⌃" : "⌄"}</span>
          </button>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
