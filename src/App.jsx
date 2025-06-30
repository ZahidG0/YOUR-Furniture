
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <ThemeProvider>
      <CartProvider>
        <div>
          <Navbar />
          <main className='min-h-screen'>
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
