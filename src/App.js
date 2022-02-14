import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Core/Components/Header';
import ProductSearch from './Pages/ProductSearch';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
            <Header></Header>
        </header>
        <main className='App-main'>
          <div className='container pb-6'>
              <Routes>
                <Route path="/items" element={<ProductSearch />}></Route>
                <Route path="/items/:id" element={<ProductDetail />}></Route>
              </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
