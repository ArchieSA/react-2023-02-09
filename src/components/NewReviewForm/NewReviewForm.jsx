import React, { useReducer } from 'react'
import { Button } from '../Button/Button'
import { Rating } from '../Rating/Rating'
import { SIZE } from '../../constants/size'
import styles from './styles.module.css'

const initialValue = {
  name: '',
  text: '',
  rating: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setName': {
      return { ...initialValue, name: action.payload }
    }
    case 'setText': {
      return { ...state, text: action.payload }
    }
    case 'setRating': {
      return { ...state, rating: action.payload }
    }
    default:
      return state
  }
}

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, initialValue)

  const submit = () => {
    console.log(Object.values(formValue).join(' '))
  }

  return (
    <div className={styles.form}>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={({ target: { value } }) =>
            dispatch({ type: 'setName', payload: value })
          }
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={({ target: { value } }) =>
            dispatch({ type: 'setText', payload: value })
          }
        />
      </div>
      <div>
        <Rating
          value={formValue.rating}
          size={SIZE.l}
          max={5}
          onChange={({ currentTarget: { value } }) =>
            dispatch({ type: 'setRating', payload: value })
          }
        />
      </div>
      <Button
        onClick={submit}
        className={styles.button}
        size={SIZE.l}
        disabled={!formValue.name || !formValue.text || !formValue.rating}
      >
        Submit
      </Button>
    </div>
  )
}
