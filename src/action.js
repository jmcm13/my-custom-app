import * as actions from "./actionType";

export const onIncrement = (value) => {
    return {
        type: actions.INC,
        payload: value,
    };
};

export const onDecrement = (value) => {
    return {
        type: actions.DEC,
        payload: value,
    };
};