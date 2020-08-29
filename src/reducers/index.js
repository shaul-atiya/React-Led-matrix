import { combineReducers } from 'redux'
import { actionTypes } from '../actions';


const colorsInfo = {
    selectedColor: '#bcbcbc',
    lastColorUsed: null,
    resetColor:false
};

const colorReducer = (color = "#ffffff", action) => {

    switch (action.type) {
        case actionTypes.COLOR_SELECTED:
            colorsInfo.selectedColor = action.payload;
            break;
        case actionTypes.COLOR_USED:
            colorsInfo.lastColorUsed = action.payload;
            break;
        case actionTypes.RESET_COLORS:
            colorsInfo.resetColor=!colorsInfo.resetColor;
            break;
    }
    return colorsInfo;
};


export default combineReducers({
    colorInfo: colorReducer
});