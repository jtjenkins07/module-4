import React from "react";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import ClickButton from "./components/ClickButton/ClickButton";
import CustomBtn from "./components/CustomBtn/CustomBtn";
import ClickCounter from "./components/ClickCounter/ClickCounter";
import AnimalList from "./components/AnimalList/AnimalList";
import AnimalListDisplay from "./components/AnimalListDisplay/AnimalListDisplay";
import Form from "./components/Form/Form";
import JokeList from "./components/Jokes/Jokes";
import User from "./components/User/User";


function App() {
  return (
    <div className="container">
      <HelloWorld /> {/* 01-hello-world */}
      <ClickButton /> {/* 02-user-clicks */}
      <CustomBtn onClick={() => console.log('Button clicked!')}>Click me!</CustomBtn> {/* 03-custom-components */}
      <ClickCounter/> {/* 04-state-and-props */}
      <AnimalList/> {/* 05-mapping-list-and-rendering */}
      <AnimalListDisplay/> {/* 06-mapping-list-and-rendering-with-custom-components */}
      <Form/> {/* 07-building-forms */}
      <JokeList/> {/* 08-rendering-json */}
      <User/> {/* 08-rendering-json */}
    </div>
  );
}

export default App;
