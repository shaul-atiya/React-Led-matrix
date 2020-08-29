import React, { useState, useEffect } from 'react';
import { selectColor } from '../../actions'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';


const ColorPicker = () => {

    const dispatch = useDispatch();

    const [lastUsedColors, setLastUsedColors] = useState(['#000000']);
    let lastColorUsed = useSelector(state => state.colorInfo.lastColorUsed);
    const colorInfo = useSelector(state => state.colorInfo);
    const [color, setColor] = useState(colorInfo.selectedColor);



    useEffect(() => {
        lastColorUsed &&
            updateLastUsedColor(lastColorUsed);
    }, [lastColorUsed]);


    const updateSelectedColor = (color) => {
        setColor(color);
        dispatch(selectColor(color));
    }

    const updateLastUsedColor = (color) => {
        let usedColorsReduced = lastUsedColors.filter(lastUsedColors => {
            return lastUsedColors !== color
        });
        setLastUsedColors([color, ...usedColorsReduced].slice(0, 10));

    }

    const renderLatUsedColors = () => {
        return lastUsedColors.map((color, index) => {
            return (<Button variant="contained"
                key={index} className='color-history'
                style={{ backgroundColor: color }}
                onClick={e => updateSelectedColor(color)}
            >{color}</Button>);
        });
    }
    return (

        <div>
            <input type="color" value={color} onChange={e => updateSelectedColor(e.target.value)}>
            </input>
            {renderLatUsedColors()}

        </div>

    );
}


export default ColorPicker;


