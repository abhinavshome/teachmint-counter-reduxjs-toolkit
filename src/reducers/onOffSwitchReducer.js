const onOffSwitchReducer = (state = false, action) => {
    switch(action.type) {
        case 'ON':
            return true;
        case 'OFF':
            return false;
        case 'TOGGLE':
            return !state;
        default: 
            return state;
    }
};

export default onOffSwitchReducer;