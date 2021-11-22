import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import { Button } from "@mui/material";
import { useAuth }  from '../../context/AuthContext'
import './Navbar.css'


const Navbar = () => {
    const { cartLength } = useContext(productContext)

    const {
      handleLogout,
      user: { email },
    } = useAuth();
   

    return (
        <>
          <div className="upper">
            <Link to="/">
               <p className="navbar-left">PORTEN</p>
            </Link>
              <div className="navbar-right">
                 <Link to="/chosen">
                       <div className="navbar-text">CHOSEN</div>
                 </Link>
                  <Link to="/comments">
                       <div className="navbar-text">COMMENTS</div>
                  </Link>
                  <Link to="/cart">
                       <div className="navbar-text">BASKET</div>
                  </Link>
                  <div className="navbar-text">
                         {email ? (
                            <Link to="/auth">
                                <Button
                                    className="btn_logout"
                                    variant="contained"
                                    disableElevation
                                    onClick={handleLogout}
                                    >
                                Logout
                               </Button>
                            </Link>
                                    ) : null}

                            {email ? null : (
                              <Link to="/auth">
                                <Button className="btn_login" variant="contained" disableElevation>
                                  Login
                                </Button>
                              </Link>
                            )}
                  </div>
              </div>
          </div>
            
        </>
    );
};

export default Navbar;