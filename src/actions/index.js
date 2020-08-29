export const actionTypes = {
    COLOR_SELECTED:'COLOR_SELECTED',
    COLOR_USED:'COLOR_USED',
    RESET_COLORS:'RESET_COLORS'
}

//action creator
export const selectColor =(color)=>{
    //return an action
    return {
        type:actionTypes.COLOR_SELECTED,
        payload:color
    }
}


export const colorUsed =(color)=>{
    //return an action
    return {
        type:actionTypes.COLOR_USED,
        payload:color
    }
}


export const resetColors =(color)=>{
    //return an action
    return {
        type:actionTypes.RESET_COLORS,
        payload:color
    }
}