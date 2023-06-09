// Định nghĩa action cho sự kiện tăng biến đếm
export function increment() { 
    return {
        type: "INCREMENT"
    }
}

// Định nghĩa action cho sự kiện giảm biến đếm
export function decrement(){
    return {
        type: "DECREMENT"
    }
}