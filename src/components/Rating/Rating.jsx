import classNames from "classnames";
import css from "./Rating.module.css";

export const Rating = ({ value, onChange, size }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <div
        key={i}
        onClick={() => onChange(i + 1)}
        className={classNames(css["star"], css[size], {
          [css["star-gold"]]: i < value,
        })}
      ></div>
    );
  }

  return <div className={css["rating"]}>{stars}</div>;
};
