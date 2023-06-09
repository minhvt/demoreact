// Định nghĩa đối tượng Reducer thực thi nhiệm vụ khi có action kích hoạt tương ứng
const reducerCounter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1
        default:
            return state;
    }
}

export default reducerCounter;