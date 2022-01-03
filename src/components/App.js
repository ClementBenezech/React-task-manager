import '../styles/App.scss';
import AppRoutes from '../router/AppRoutes';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';



function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
        {<div>{AppRoutes()}</div>}
    </div>
    </LocalizationProvider>
  );
}

export default App;
