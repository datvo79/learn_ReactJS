import React,{useState, useEffect, useReducer} from 'react';

Counter.propTypes = {
    
};
function Counter(props) {
    // Khai báo một biến state mới, gọi nó là "count"
    const [count, setCount] = useState(0);
    useEffect (() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click muốn cộng 1</button>
            <button onClick={() => setCount(count - 1)}>Click muốn trừ 1</button>
        </div>
    );
}
export default Counter;