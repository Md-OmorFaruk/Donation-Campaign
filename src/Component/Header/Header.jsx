import myImage from './Group.png'
import { NavLink } from "react-router-dom";

const Header = () => {
      const activeLinkStyle = {
    backgroundColor: 'red',
    color: 'white',
  };
      return (
             <div  className="max-w-screen-xl mx-auto">
                        <div className="navbar bg-base-100 flex md:flex-row flex-col ">
                        <div className="flex-1">
                              <div className="flex gap-3 items-center">
                                    <div className='w-10' ><img src={myImage} alt="logo" /></div>
                                    <div >
                                          <h3 className="text-red-600 font-bold text-xl">Donation</h3>
                                          <h4 className="text-sm font-semibold">C a m p a i g n</h4>
                                    </div>
                        </div>
                        </div>
                        <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                              <li><NavLink to="/" exact activeStyle={activeLinkStyle.backgroundColor}>Home</NavLink> </li>
                               <li><NavLink to="/donation" activeStyle={activeLinkStyle}>Donation</NavLink></li>
                              <li><NavLink to="/statistics" activeStyle={activeLinkStyle}>Statistics</NavLink></li>
      
                        </ul>
                        </div>
                        </div>
                  
            </div>
      );
};

export default Header;