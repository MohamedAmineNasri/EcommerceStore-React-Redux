import Header from "./containers/Header";
import {Route, Routes} from 'react-router-dom'
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
