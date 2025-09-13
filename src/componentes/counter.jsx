import { Button } from "./Button";

export const Counter = ({ onIncrement, onDecrement }) => {
    return (
        <div>
            <button onClick={onDecrement}>Diminuir</button>
            <button onClick={onIncrement}>Aumentar</button>
        </div>
    )
};