import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControlStyle = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? "red" : "black"}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? "red" : "#ccc"};
    background: ${props => props.invalid ? "#ffd7d7" : "transparent"}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControlStyle invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControlStyle>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
