import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/ActionCounter';

function MyCounter(props) {
    const counter = useSelector(state => state.counter); // Binding đối tượng state trong Store
    const dispatch = useDispatch();                      // Hàm kích hoạt dispatch

    const doCount = (e) => {
        let id = e.target.id;
        switch (id) {
            case "tang":
                dispatch(increment()); // Gửi sự kiện tăng
                break;
            case "giam":
                dispatch(decrement()); // Gửi sự kiện giảm
                break;
        }
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button id='tang' onClick={doCount}>Tăng</button> | <button id='giam' onClick={doCount}>Giảm</button>
        </div>
    );
}

export default MyCounter;