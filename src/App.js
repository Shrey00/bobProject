import Input from '../src/Components/Input';
import { useState } from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SavingsAccount from './Pages/SavingsAccount';
// import Product from './Components/Product';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/savingsAccountForm' element={<SavingsAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;




