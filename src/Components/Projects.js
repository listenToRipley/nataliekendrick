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
import SmallBusiness from './ProjSmallBusiness';
import PantryPals from './ProjPantryPals'

const Projects = () => {

  return (
   <div>
    <div className="projectBody">
      <PantryPals/>
      <SmallBusiness/>
      <AddressBook/>
      <DodgeBall/>
      <PigLatin/>
      <SilverSea/>
      <ClicknSpin/>
      <TicTacToe/>
      <NASACard/>
      <Mustacchio/>
      <Animate/>
    </div>
    <p> Please feel free to review other backend projects here</p>
    <p> Or generate problems worked on through <a href="https://repl.it/@listenToRipley">repl.it</a> or with <a href="https://www.codewars.com/users/minonOfLight">code wars</a> </p>
   </div>
  );
}

export default Projects 