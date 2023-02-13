import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onIncrement, onDecrement } from './action';

class ClassUpdateRedux extends Component {
    render() {
        return (
            <div>
                <h2>Class Based Component</h2>
                {this.props.empData.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            <p>Name: {item.name}</p>
                            <p>Salary: {item.salary}</p>
                            <button onClick={() => { this.props.onInc(10, item.id - 1) }}>+</button>
                            <button onClick={() => { this.props.onDec(10, item.id - 1) }}>-</button>
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { empData: state.empData };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInc: (value, index) => dispatch(onIncrement({ value, index })),
        onDec: (value, index) => dispatch(onDecrement({ value, index })),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassUpdateRedux);