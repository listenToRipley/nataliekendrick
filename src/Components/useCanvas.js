import { useRef, useEffect } from 'react'

const useCanvas = (draw)=> {

  //this create the reference to the DOM
  const canvasRef = useRef(null)
  
  //a built in hook 
  useEffect(() => {
    
    //create a kind of state
    const canvas = canvasRef.current
    //tells what method of image we're using 
    const context = canvas.getContext('2d')
    //give it a time
    let frameCount = 0
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      //how many frames it takes to create the drawing
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      //to this is a way it canceled after it's completed and allows it to start over
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return canvasRef
}

export default useCanvas