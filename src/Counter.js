import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter);
    return (
        <div>
            Count: {count} <br/>
            <button onClick={() => dispatch({type: 'INC'})}>+</button>
            <button onClick={() => dispatch({type: 'DEC'})}>-</button>
        </div>
        
    );
};

export default Counter;