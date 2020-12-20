import React from 'react'
import useCanvas from './useCanvas'

//the props in the window we receive from the home page 
const Canvas = props => {  
  
  //the destructed content from the passed information from the home page 
  const { draw, ...rest } = props
  //what is getting passed into my used canvas so that I can actually draw on my canvas 
  const canvasRef = useCanvas(draw)
  
  //my dom element, but you have to go into useCanvas to see the actual work of the drawing 
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas