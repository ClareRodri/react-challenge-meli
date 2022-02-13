import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Core/Components/Header';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
            <Header></Header>
        </header>
        <main className='App-main'>
          <div className='container'>
            <Routes>
              <Route path="search/:searchItem" element={<Home />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
