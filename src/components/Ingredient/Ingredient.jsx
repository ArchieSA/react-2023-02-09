import React from "react";
import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";
import styles from './styles.module.css'
import { BUTTON_VIEW_VARIANT } from '../Button/constants'
import { SIZE } from '../../constants/size'


export const Ingredient = ({ name }) => {
  const { count, increment, decrement } = useCount({ max: 6, initialValue: 1 });

  if (!name) {
    return null;
  }

  return (
    <div>
      <div>
        <div>
          <span>{name}</span>
        </div>
        <div className={styles.ingredient}>
          <Button
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANT.secondary}
            onClick={decrement}
          >
            -
          </Button>
          {count}
          <Button
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANT.secondary}
            onClick={increment}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  )
};
