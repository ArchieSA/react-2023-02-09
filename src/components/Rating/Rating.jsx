import classNames from "classnames";
import { SIZE } from "../../constants/size";
import styles from "./styles.module.css";
import { ReactComponent as StarGold } from "./img/star-gold.svg";
import { ReactComponent as Star } from "./img/star.svg";

const MAX_RATING = 5;
const stars = new Array(MAX_RATING).fill();

export const Rating = ({ value, onChange, size = SIZE.s}) => {
    if (value === null) return

    return (
        <div className={classNames(styles.root, styles.flex)}>
            {
                stars.map((item, index) => {
                    return index + 1 <= value ? 
                    <StarGold 
                        onClick={() => onChange} 
                        className={classNames(styles[size])}
                        /> :
                    <Star 
                        onClick={() => onChange(index + 1)} 
                        className={classNames(styles[size], styles.action, onChange ? styles.pointer : '')}
                    />
                })
            }
        </div>
    )
}
