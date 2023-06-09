import React from 'react';
import { useSelector } from 'react-redux';

function MyCounterOther(props) {
    const counter = useSelector(state => state.counter);  // Binding đối tượng state trong Store
    return (
        <div>
            Số lượng sản phẩm: {counter}
        </div>
    );
}

export default MyCounterOther;