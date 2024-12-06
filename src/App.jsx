import { useState } from 'react'
import './App.css'
import Quiz from "./component/Quiz"

function App() {

   const data = [
    {
      question: "What is the difference between `var`, `let`, and `const` in JavaScript?",
      options: [
        "They are used to declare variables but have different scopes and behaviors.",
        "`var` and `let` are the same, but `const` is for constants.",
        "`var` is function-scoped, `let` and `const` are block-scoped.",
        "They are just different keywords with no practical differences."
      ],
      answer: "`var` is function-scoped, `let` and `const` are block-scoped."
    },
    {
      question: "Explain the concept of closures in JavaScript.",
      options: [
        "A closure is a function that remembers its outer variables even after the outer function has executed.",
        "Closures are functions that can only be called inside the function where they are defined.",
        "Closures are a type of variable in JavaScript.",
        "A closure is an object that binds a function to its execution context."
      ],
      answer: "A closure is a function that remembers its outer variables even after the outer function has executed."
    },
    {
      question: "What are Promises in JavaScript, and how do they work?",
      options: [
        "Promises are objects representing eventual completion or failure of an asynchronous operation.",
        "Promises are a way to execute synchronous code.",
        "Promises are used to delay code execution until a condition is met.",
        "Promises are functions that execute immediately and block further execution."
      ],
      answer: "Promises are objects representing eventual completion or failure of an asynchronous operation."
    },
    {
      question: "What is the purpose of the `this` keyword in JavaScript?",
      options: [
        "`this` refers to the current function only.",
        "`this` refers to the global object in all cases.",
        "`this` refers to the object that is currently executing the function.",
        "`this` is used to reference variables in the parent scope."
      ],
      answer: "`this` refers to the object that is currently executing the function."
    },
    {
      question: "Explain the difference between synchronous and asynchronous programming.",
      options: [
        "Synchronous programming executes code sequentially, while asynchronous programming allows tasks to run concurrently.",
        "Synchronous programming is faster than asynchronous programming.",
        "Synchronous programming uses callbacks, while asynchronous programming uses loops.",
        "Synchronous programming handles errors better than asynchronous programming."
      ],
      answer: "Synchronous programming executes code sequentially, while asynchronous programming allows tasks to run concurrently."
    },
    {
      question: "What are higher-order functions in JavaScript?",
      options: [
        "Functions that return other functions or take functions as arguments.",
        "Functions that run faster than regular functions.",
        "Functions that only work with arrays and objects.",
        "Functions that are defined inside other functions."
      ],
      answer: "Functions that return other functions or take functions as arguments."
    }
  ];
  

  return (
    <>
      <Quiz data={data}/>
    </>
  )
}

export default App
