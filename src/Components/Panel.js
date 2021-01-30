import React from 'react';
import MobilePanel from './MobilePanel'
import WebPanel from './WebPanel'

const Panel = () =>  {
  
  const width = window.innerWidth

  const breakPoint = 620
  
  const mobile = (anchor) => {

  }

  return (
   width < breakPoint ? <MobilePanel/> : <WebPanel/> 
  );
}

export default Panel