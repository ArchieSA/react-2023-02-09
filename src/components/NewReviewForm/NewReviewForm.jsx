import React, { useReducer } from "react";
import { SIZE } from "../../constants/size";

import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";

import styles from "./styles.module.css";

const initialValue = {
  name: "",
  text: "",
  rating: 0,
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
    <div className={styles.form}>
      <div className={styles.formControl}>
        <label className={styles.formControlLabel}>Name</label>
        <input
          value={formValue.name}
          onChange={({ target: { value } }) =>
            dispatch({ type: "setName", payload: value })
          }
        />
      </div>
      <div className={styles.formControl}>
        <label className={styles.formControlLabel}>Text</label>
        <input
          value={formValue.text}
          onChange={({ target: { value } }) =>
            dispatch({ type: "setText", payload: value })
          }
        />
      </div>
      <div className={styles.formControl}>
        <label className={styles.formControlLabel}>Rating</label>
        <Rating
          size={SIZE.l}
          value={formValue.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
        {/* <input
          type="number"
          value={formValue.rating}
          onChange={({ target: { value } }) =>
            dispatch({ type: "setRating", payload: value })
          }
        /> */}
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
