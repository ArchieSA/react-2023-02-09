import classNames from "classnames";
import { SIZE } from "../../constants/size";
import styles from "./styles.module.css";

const MAX_RATING = 5;

export const Rating = ({ value, onChange, size = SIZE.s }) => {
    if (value === null) return;

    return (
        <div className={styles.root}>
            {Array.from(Array(MAX_RATING)).map((star, index) => (
                <div
                    onClick={() => onChange && onChange(index + 1)}
                    className={classNames(
                        styles.star,
                        styles[size],
                        {
                            [styles.write]: !!onChange,
                            [styles.gold]: index + 1 <= value
                        }
                    )}
                />
            ))}
        </div>
    )
}