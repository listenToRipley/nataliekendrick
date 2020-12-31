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
import CodeSample from './ProjCodeSamples'

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
    <CodeSample/>
    </div>
   </div>
  );
}

export default Projects 