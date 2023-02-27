import { Button } from "../Button/Button";

export const Counter = ({onChange, value, maxValue, minValue}) => {
    return (
        <>
            <Button
                children={'-'}
                onClick={() => onChange(value - 1)}
                disabled={minValue !== null && value === minValue} />
            <div>{value}</div>
            <Button
                children={'+'}
                onClick={() => onChange(value + 1)}
                disabled={maxValue !== null && value === maxValue} />
        </>
    );
}