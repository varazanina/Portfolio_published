import React, { useState } from "react";
import "./about.css";

import Accent from "../../assets/accent.png";
import Beanu from "../../assets/beanu.png";
import RHCP from "../../assets/rhcp.png";
import Recipe from "../../assets/recipe.png";
import Britney from "../../assets/itsbritney.png";
import Yoda from "../../assets/yoda.png";
import Olivia from "../../assets/anothermusic.png";
import Croc from "../../assets/uokbabe.png";
import Me from "../../assets/me.png";
import Pants from "../../assets/pants.png"
import Cats from "../../assets/fren.png";

export const About = () => {
  const quizData = [
    {
      question: "While I'm baking cakes every Tuesday, what magical ingredient do I add for an extra sprinkle of enchantment?",
      imageUrl: Recipe,
      options: [
        "Unicorn tears",
        "Stardust",
        "Dragon breath",
        "Extra vanilla extract",
      ],
      correctAnswer: "Extra vanilla extract",
    },
    {
      question: "On my epic journey to climb 7 peaks over 2000 meters, which Star Wars character served as my climbing guide?",
      imageUrl: Yoda,
      options: ["Yoda", "Chewbacca", "Darth Vader", "Luke Skywalker"],
      correctAnswer: "Yoda",
    },
    {
      question: "If my piano could talk, what secret would it reveal about my playing style?",
      imageUrl: RHCP,
      options: [
        "I often play moonlight serenades to the moon itself.",
        "I've had heated debates with it about musical preferences.",
        "It's convinced I have a secret career as a piano superhero.",
        "It loves when I play 'Chopsticks.'",
      ],
      correctAnswer: "It's convinced I have a secret career as a piano superhero.",
    },
    {
      question: "When asked about my crush on Keanu Reeves, I reply that I'd like to:",
      imageUrl: Beanu,
      options: [
        "Go on a cross-dimensional adventure with him",
        "Share a matrix-inspired coffee date",
        "Have a piano duet on a speeding bus",
        "Enjoy a slice of Tuesday cake together",
      ],
      correctAnswer: "Go on a cross-dimensional adventure with him",
    },
    {
      question: "As I begin counting down two hours before lunch, I receive an urgent message from the 'Elevator to Nowhere.' What do I do?",
      imageUrl: Croc,
      options: [
        "Take the elevator to see where it leads",
        "Ignore it; I'm on a lunchtime mission",
        "Politely ask the elevator for a rain check",
        "Bake a mini cake for the elevator",
      ],
      correctAnswer: "Ignore it; I'm on a lunchtime mission",
    },
    {
      question: "My signature split-color clothing combo involves colors inspired by:",
      imageUrl: Pants,
      options: [
        "The Northern Lights",
        "A psychedelic unicorn",
        "Galaxy far, far away",
        "A chameleon's wardrobe",
      ],
      correctAnswer: "The Northern Lights",
    },
    {
      question: "During my championship baton twirling, I wowed the crowd with a routine that included:",
      imageUrl: Me,
      options: [
        "A twirling lightsaber",
        "Fire-breathing batons",
        "Levitating batons",
        "Dazzling sparklers",
      ],
      correctAnswer: "A twirling lightsaber",
    },
    {
      question: "In Denmark, at the age of 18, I discovered a secret portal to a parallel universe where:",
      imageUrl: Accent,
      options: [
        "Danish pastries are currency",
        "Everyone rides flying bicycles",
        "The Little Mermaid is my personal assistant",
        "Viking dragons roam freely",
      ],
      correctAnswer: "Viking dragons roam freely",
    },
    {
      question: "My music playlist is like a magical mood ring. When I switch from Olivia Rodrigo to Alice in Chains, it's because:",
      imageUrl: Olivia,
      options: [
        "A wizard cast a spell",
        "My playlist has a secret mind of its own",
        "My mood went from sugar-sweet to grunge-tastic",
        "I found the hidden Jukebox of Transitions",
      ],
      correctAnswer: "My mood went from sugar-sweet to grunge-tastic",
    },
    {
      question: "After mastering the Russian alphabet, I stumbled upon a hidden message in a bottle. What did it reveal?",
      imageUrl: Britney,
      options: [
        "The recipe for Russian tea cakes",
        "Directions to a secret Russian dance-off",
        "A treasure map leading to the Tsar's lost jewels",
        "A love letter from a Russian astronaut",
      ],
      correctAnswer: "A treasure map leading to the Tsar's lost jewels",
    },
  ];
  

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleRetakeQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setUserAnswers(Array(quizData.length).fill(null));
    setShowResult(false);
  };

  const handleAnswerClick = (selectedAnswer) => {
    // Update userAnswers with the selected answer
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedAnswers);

    // Move to the next question after a delay
    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // All questions answered, calculate and show the result
        setShowResult(true);
      }
    }, 1500); // Delay before moving to the next question (1.5 seconds)
  };

  // Calculate the user's score
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (userAnswers[i] === quizData[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  return (
    <div id="about">
      {!quizStarted ? (
        <div className="start">
          <h2>Welcome to the Quiz (About me)</h2>
          <p id="par">Take the ultimate opportunity to get to know (a bit more informally) the person that popped up in your inbox</p>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      ) : (
        <div>
          {showResult ? (
            <div className="start">
              <h2>Quiz Result</h2>
              <p>You completed the quiz!</p>
              <p>Your score: {calculateScore()} out of {quizData.length}</p>
              <img src={Cats} alt="Cats" className="startImag" />
              <button onClick={handleRetakeQuiz}>Retake Quiz</button>
            </div>
          ) : (
            <div className="container">
              <div className="element" id="text">
                <h2>Question {currentQuestion + 1}</h2>
                <p>{quizData[currentQuestion].question}</p>
                <div>
                  {quizData[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(option)}
                      className={userAnswers[currentQuestion] === option ? (option === quizData[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="element" id="picture">
                {quizData[currentQuestion].imageUrl && (
                  <img src={quizData[currentQuestion].imageUrl} alt={`Question ${currentQuestion + 1}`} className="imag" />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
