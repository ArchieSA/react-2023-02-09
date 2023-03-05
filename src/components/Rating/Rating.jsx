import React from 'react'
import classNames from 'classnames'
import { SIZE } from '../../constants/size'
import { ReactComponent as Star } from './img/star.svg'

import styles from './styles.module.css'

export const Rating = ({ value, max, size = SIZE.m, className, onChange }) => {

  return (
    <ul className={classNames(styles.rating, className)}>
      {[...Array(max)].map((star, indx) => {
        indx += 1
        return (
          <li>
            <button
              type="button"
              value={indx}
              className={classNames(
                styles.star,
                styles[size],
                indx <= value ? styles.on : styles.off,
                onChange ? styles.click : null
              )}
              onClick={onChange}
            >
              <Star />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
