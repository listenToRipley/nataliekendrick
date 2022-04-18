import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter} from 'react-router-dom';
import Router from './Routing';
import Panel from './Components/Panel';
import MyFooter from './Components/Footer'; 

function App() {

  console.log(`log process env public${process.env.PUBLIC_URL}`)
  
  return (
 
    <div className='App'>
      <CssBaseline>
        <BrowserRouter>
          <Panel/>
          <Router/>
        </BrowserRouter>
        <MyFooter/>
    </CssBaseline>
    </div>
  
  );
}

export default App;
