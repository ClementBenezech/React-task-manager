import '../styles/App.scss';
import AppRoutes from '../router/AppRoutes';


function App() {
  return (
    <div className="App">
        {<div>{AppRoutes()}</div>}
    </div>
  );
}

export default App;
