import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Core/Components/Header';
import ProductSearch from './Pages/ProductSearch';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
            <Header></Header>
        </header>
        <main className='App-main'>
          <div className='container pb-6'>
            <Routes>
              <Route path="search/:sKeyword" element={<ProductSearch />} />
              <Route path="detail/:id" element={<ProductDetail />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
