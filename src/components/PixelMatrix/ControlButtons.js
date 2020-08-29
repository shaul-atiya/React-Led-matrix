import React, { useState, useEffect } from 'react';
import './PixelMatrix.css'
import { useSelector, useDispatch } from 'react-redux';
import { colorUsed } from '../../actions';




const PixelMatrix = () => {
    const dispatch = useDispatch();

    const [pixels, setPixels] = useState(new Array(256).fill('black'));
    const colorInfo = useSelector((state) => state.colorInfo);
    const resetColor = useSelector((state) => state.colorInfo.resetColor);

    useEffect(()=>{
        setPixels (new Array(256).fill( colorInfo.selectedColor || 'black'));
    },[resetColor]);

    const drawPixels = () => {
        return pixels.map((pixel, index) => {
            return <div key={'Pixel_' + index} 
            className='pixel' 
            style={{ background: `${pixel}` }} 
            onClick ={e=>setPixelColor(index)}
            onMouseOver={e=>onMouseOver(e,index)}
            onMouseDown={event=>event.preventDefault ? event.preventDefault() : event.returnValue = false}
                 ></div>
        })
    }

    const setPixelColor = (index)=>{
        pixels[index]= colorInfo.selectedColor;
        setPixels([...pixels]);
         dispatch(colorUsed(colorInfo.selectedColor));
    } 
    const onMouseOver=(e,index)=>
    {
      e.buttons===1 && setPixelColor(index);
    }
    
  
    return (
        <div className='pixelMatrix' >
            <div className="wrapper ">
                {drawPixels()}
            </div>
        </div>
    )
}


export default PixelMatrix;


