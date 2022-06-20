import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import style from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const textFormatter = (text) => {
    const firstSentence = text.split(" ")[0];
    const senteceFormated = firstSentence.replace(
      firstSentence[0],
      firstSentence[0].toUpperCase()
    );
    const mergingFormater =
      senteceFormated + text.slice(senteceFormated.length);
    return mergingFormater;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length < 1) return setIsValid(false);

    props.onAddGoal(textFormatter(enteredValue));

    setEnteredValue("");
  };

  console.log(isValid);

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style["form-control"]} ${!isValid ? style.invalid : ""}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
