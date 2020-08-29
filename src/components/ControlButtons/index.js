import React from 'react';
import { Button } from '@material-ui/core';
import './ControlButtons.css'
import { useDispatch } from 'react-redux';
import { resetColors } from '../../actions';



const ControlButtons = () => {
    const dispatch = useDispatch();

    const triggerRest=()=>{
        dispatch(resetColors('#ffffff'));
    }


    return (
        <div className='ControlButtons'>
            <Button variant="contained" onClick={e=>triggerRest()}>Reset</Button>
            <Button variant="contained"  color="secondary">Save</Button>
            <Button variant="contained"  color="secondary">Load</Button>

        </div>
    )
}

export default ControlButtons;