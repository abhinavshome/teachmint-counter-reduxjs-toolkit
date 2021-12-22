import { useDispatch, useSelector } from "react-redux";
import { off, on, toggle } from "../store/onOffSlice";

const OnOffSwitch = () => {
    const switchState = useSelector(state => state.onOff);
    const dispatch = useDispatch();
    return (
        <div>
            <div>{switchState ? 'ON' : 'OFF'}</div>
            <button onClick={() => dispatch(on())}>ON</button>
            <button onClick={() => dispatch(off())}>OFF</button>
            <button onClick={() => dispatch(toggle())}>TOGGLE</button>

        </div>
    );
};

export default OnOffSwitch;