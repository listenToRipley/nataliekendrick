import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter} from 'react-router-dom';
import Router from './Routing';
import Panel from './Components/Panel';

function App() {
  return (
 
    <CssBaseline>
      <BrowserRouter>
        <Panel/>
        <Router/>
      </BrowserRouter>
    </CssBaseline>
  
  );
}

export default App;
