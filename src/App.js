import './App.css';
import { BrowserRouter , Routes ,Route   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Series from './Pages/Series';
import TvDetails from './Pages/TvDetails';
import About from './Pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Series/>} />
          <Route path="/series/:series_id" element={<TvDetails />} />
          {/* <Route path='/' element={ <About/> } /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
