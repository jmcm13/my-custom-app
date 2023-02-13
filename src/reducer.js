import * as actions from "./actionType";

//central storage (state)
const initState = {
    empData: [
        {
            id: 1,
            name: "Michael Keaton",
            salary: 10,
        },
        {
            id: 2,
            name: "Harry Potter",
            salary: 20,
        },
        {
            id: 3,
            name: "Bruce Banner",
            salary: 30,
        },
    ],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.INC:
            let temp1 = state.empData;
            temp1[action.payload.index].salary += action.payload.value;
            return { empData: [...temp1] };
        case actions.DEC:
            let temp2 = state.empData;
            temp2[action.payload.index].salary -= action.payload.value;
            return { empData: [...temp2] };
        default:
            return state;
    }
};

export default reducer;