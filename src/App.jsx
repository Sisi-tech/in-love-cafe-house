import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Menu from './Menu/Menu.jsx';
import Reservation from './Reservation.jsx';
import Contact from './Contact.jsx';
import SignUp from './SignUp.jsx';
import Logo from './assets/cafeLogo.png';
import HotCoffee from './Menu/HotCoffee.jsx';
import IcedCoffee from './Menu/IcedCoffee.jsx';


function App() {
  const [showMenuOption, setShowMenuOption] = useState(false);
  const handleMouseEnter = () => {
    setShowMenuOption(true);
  };
  const handleMouseLeave = () => {
    setShowMenuOption(false);
  };

  return (
    <Router>
      <div className='w-full flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center gap-4 sm:gap-10 pb-6 pt-2'>
        <img src={Logo} alt='logo' className='w-40 rounded-full' />
        <h2 className='text-3xl md:text-4xl font-semibold font-serif text-orange-900'>In Love Cafe House</h2>
      </div>
      <nav className='flex h-12 w-5/6 sm:w-4/5 p-2 text-xl md:text-3xl bg-orange-950 justify-center text-gray-50 gap-4 sm:gap-4 md:gap-16 mb-10 rounded-2xl'>
        <Link to='/'>Home</Link>
        <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to='/menu' className='flex items-center'>
            Menu
          </Link>
          {showMenuOption && (
            <div className='absolute top-full left-0 bg-orange-100 text-black text-base rounded-md mt-1'>
              <Link to='/hot_coffee' className='block py-2 px-4 hover:bg-orange-200'>Hot Coffee</Link>
              <Link to='/iced_coffee' className='block py-2 px-4 hover:bg-orange-200'>Iced Coffee</Link>
              <Link to='/menu' className='block py-2 px-4 hover:bg-orange-200'>All</Link>
            </div>
          )}
        </div>
        <Link to='/reservation'>Reservation</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/sign_up'>Sign Up</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/reservation' element={<Reservation />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/sign_up' element={<SignUp />}></Route>
        <Route path='/hot_coffee' element={<HotCoffee />}></Route>
        <Route path='/iced_coffee' element={<IcedCoffee />}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App;
