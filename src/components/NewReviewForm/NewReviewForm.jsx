import React, { useReducer } from "react";
import { Button } from "../Button/Button";
import {Rating} from "../Rating/Rating";
import {SIZE} from "../../constants/size";

const initialValue = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName": {
      return { ...initialValue, name: action.payload };
    }
    case "setText": {
      return { ...state, text: action.payload };
    }
    case "setRating": {
      return { ...state, rating: action.payload };
    }
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, initialValue);

  const submit = () => {
    console.log(Object.values(formValue).join(" "));
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={({ target: { value } }) =>
            dispatch({ type: "setName", payload: value })
          }
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={({ target: { value } }) =>
            dispatch({ type: "setText", payload: value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <Rating
          value={formValue.rating}
          size={SIZE.l}
          onChange={(rating) => dispatch({ type: "setRating", payload: rating })}
        />
      </div>
      <Button
        onClick={submit}
        disabled={!formValue.name || !formValue.text || !formValue.rating}
      >
        Submit
      </Button>
    </div>
  );
};
