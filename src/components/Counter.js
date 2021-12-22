import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "../store/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter);
    return (
        <div>
            Count: {count} <br/>
            <button onClick={() => dispatch(inc())}>+</button>
            <button onClick={() => dispatch(dec())}>-</button>
        </div>
        
    );
};

export default Counter;