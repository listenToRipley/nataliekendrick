import React from 'react';
import ClicknSpin from './ProjClicknSpin'
import SilverSea from './ProjSilverSea'
import NASACard from './ProjNasaCard'
import Mustacchio from './ProjMustacchio'
import Animate from './ProjAnimate'
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
    <p> Please feel free to review other backend projects here</p>
    <p> Or generate problems worked on through <a href="https://repl.it/@listenToRipley">repl.it</a> or with <a href="https://www.codewars.com/users/minonOfLight">code wars</a> </p>
   </div>
  );
}

export default Projects 