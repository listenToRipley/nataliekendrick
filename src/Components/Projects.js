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
      <ClicknSpin/>
      <SilverSea/>
      <TicTacToe/>
      <NASACard/>
      <Mustacchio/>
      <Animate/>
    </div>
    <div className="projectAdds">
    <p> Please feel free to review other backend projects here</p>
    <p> Or general samples of work <a href="https://repl.it/@listenToRipley">repl.it</a> or with <a href="https://www.codewars.com/users/minonOfLight">code wars</a> </p>
    <p>As well as my <a href="https://github.com/listenToRipley">github page</a></p>
    </div>
   </div>
  );
}

export default Projects 