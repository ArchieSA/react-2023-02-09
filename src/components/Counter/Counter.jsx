import { Button } from "../Button/Button";

export const Counter = ({onChange, value, maxValue, minValue}) => {
    return (
        <>
            <Button
                onClick={() => onChange(value - 1)}
                disabled={minValue !== null && value === minValue}>
                -
            </Button>
            <div>{value}</div>
            <Button
                onClick={() => onChange(value + 1)}
                disabled={maxValue !== null && value === maxValue}>
                +
            </Button>
           
        </>
    );
}