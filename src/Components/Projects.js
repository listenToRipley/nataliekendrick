import React from 'react';
import ClicknSpin from './ProjClicknSpin'
import SilverSea from './ProjSilverSea'
import NASACard from './ProjNasaCard'
import Mustacchio from './ProjMustacchio'
import Animate from './ProjAnimate'
import FirstToDo from './ProjFirstToDo'
import TicTacToe from './ProjTicTacToe'
import AddressBook from './ProjAddressBook'
import DodgeBall from './ProjDodgeBall';
import PigLatin from './ProjPigLatin'

const Projects = () => {

  return (
   <div>
    <AddressBook/>
    <DodgeBall/>
    <PigLatin/>
    <SilverSea/>
    <ClicknSpin/>
    <TicTacToe/>
    <NASACard/>
    <Mustacchio/>
    <Animate/>
    <FirstToDo/>
   </div>
  );
}

export default Projects 