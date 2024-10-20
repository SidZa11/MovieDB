import { useLocation, useNavigate } from 'react-router';
import './Navbar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchText } from '../../features/search/searchSlice';
import MenuIcon from '../../asset/MenuIcon';
import CrossIcon from '../../asset/CrossIcon';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigation (link) {
    navigate(link);
  }

  function isActive (path) {
    return location.pathname == path? "#FFFFFF" : "#777";
  }
  
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  function handleSearchChange (value) {
    setSearchInput(value);
    dispatch(updateSearchText(value));
    navigate('/searchresult');
  }

  function handleSearch () {
    dispatch(updateSearchText(searchInput));
    navigate('/searchresult');
  }

  function handleMenuOpen () {
    document.getElementsByTagName("ul")[0].style.display = "flex";
  }

  function handleMenuClose () {
    document.getElementsByTagName("ul")[0].style.display = "none";
  }

  return (
    <div style={{position : "sticky", top : "0px"}}>
        <div className='navContainer flex space-around'>
          <div className='color-white bold' onClick={() => handleNavigation("/")} style={{cursor : "pointer"}}>MovieDB</div>
          <div className='navRight flex'>
            <div>
                <b className='openMenu' onClick={() => handleMenuOpen()}><MenuIcon /></b>
              <ul className='flex ul gap'>
                <li className='closeMenu' onClick={() => handleMenuClose()}><CrossIcon /></li>
                <li onClick={() => handleNavigation("/popular")} style={{color : isActive("/popular")}}>Popular</li>
                <li onClick={() => handleNavigation("/toprated")} style={{color : isActive("/toprated")}}>Top Rated</li>
                <li onClick={() => handleNavigation("/upcoming")} style={{color : isActive("/upcoming")}}>Upcomings</li>
              </ul>
            </div>
            <div className='flex'>
              <input type='text' placeholder='Movie Name' className='input-text' onChange={(e) => handleSearchChange(e.target.value)} />
              <button className='search-button' onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Navbar