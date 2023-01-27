import React from 'react'
import{Link} from 'react-router-dom';
import logo from '../../assests/logo.png';
import search from '../../assests/search-solid.svg';
import Avatar from '../../components/Avatar/Avatar';
import './Navbar.css';


const Navbar = () => {
  var User=null;
  return (
<nav className='main-nav'>
    <div className='navbar'>
      <Link to={'./Home'} className='nav-item nav-logo'>
       <img src={logo} alt="logo" />
      </Link>
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/'  className='nav-item nav-btn'>Products</Link>
      <Link to='/' className='nav-item nav-btn'>For teams</Link>
      <form>
        <input type="text" placeholder='Search here' />
        <img src={search} alt="search" width="18" className='search-icon'/>

      </form>
      {User === null ? 
        <Link to='/Auth'className='nav-item nav-links'>Log in</Link>:
        <>
        <Avatar backgroundColor="#009dff" borderRadius="50%" fontSize="" px="10px" py="7px"><Link to='/' style={{textDecoration:"none",color:"white"}}> M </Link></Avatar>
         <button className='nav-iten nav-links'>Log out</button>
        </>
        }

   </div>
</nav>   
  )
}

export default Navbar
