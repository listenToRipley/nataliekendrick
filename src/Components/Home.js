import React from 'react';
import Canvas from './Canvas'
import './App.css';

const Homepage = () => {

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#ff00de'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  return (
    <div className="Homepage">
      <Canvas draw={draw}/>
      <h1>Natalie Kendrick</h1>
    </div>
  );
}

export default Homepage;