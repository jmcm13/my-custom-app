import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { onIncrement, onDecrement } from './action';

const FunctionUpdateRedux = () => {

    const empData = useSelector((state) => state.empData); //similar to mapStateToProps
    const dispatch = useDispatch(); //similar mapDispatchToProps

    return (
        <div>
            <h2>Function Based Component</h2>
            {empData.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <p>Name: {item.name}</p>
                        <p>Salary: {item.salary}</p>
                        <button onClick={() => { dispatch(onIncrement({value: 10, index: item.id -1})); }}>+</button>
                        <button onClick={() => { dispatch(onDecrement({value: 10, index: item.id -1})); }}>-</button>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default FunctionUpdateRedux;