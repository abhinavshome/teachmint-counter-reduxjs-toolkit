import { useDispatch, useSelector } from "react-redux";

const OnOffSwitch = () => {
    const switchState = useSelector(state => state.onOffSwitch);
    const dispatch = useDispatch();
    return (
        <div>
            <div>{switchState ? 'ON' : 'OFF'}</div>
            <button onClick={() => dispatch({type: 'ON'})}>ON</button>
            <button onClick={() => dispatch({type: 'OFF'})}>OFF</button>
            <button onClick={() => dispatch({type: 'TOGGLE'})}>TOGGLE</button>

        </div>
    );
};

export default OnOffSwitch;