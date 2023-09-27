import { NavLink } from "react-router-dom";

const Header = () => {
      return (
             <div  className="max-w-screen-xl mx-auto">
                        <div className="navbar bg-base-100 flex md:flex-row flex-col ">
                        <div className="flex-1">
                              <div className="flex gap-3 items-center">
                                    <div ><img src="../Group.png" alt="logo" /></div>
                                    <div >
                                          <h3 className="text-red-600 font-bold text-xl">Donation</h3>
                                          <h4 className="text-sm font-semibold">C a m p a i g n</h4>
                                    </div>
                        </div>
                        </div>
                        <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                              <li><NavLink to="/">Home</NavLink> </li>
                               <li><NavLink to="/donation">Donation</NavLink></li>
                              <li><NavLink to="/statistics">Statistics</NavLink></li>
      
                        </ul>
                        </div>
                        </div>
                  
            </div>
      );
};

export default Header;