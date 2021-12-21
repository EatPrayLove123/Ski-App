import { GiMountainRoad } from 'react-icons/gi';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Button} from './Button';
import "./Navbar.css"

function Navbar () {
    const [click,setClick] = useState(false);
    const [button, setButton]= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMeniu = () =>setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
           <div className='navbar-container'>
               <Link to="/" className='navbar-logo' onClick={closeMobileMeniu}>
                    <GiMountainRoad/> SKY RIGHT NEW   
               </Link>
               
               <div className='menu-icon' onClick={handleClick}> 
                  {click ? <CgMenuGridR/> : <AiOutlineCloseCircle/>}
                </div>  

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMeniu}>
                               Home
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/bulgaria' className='nav-links' onClick={closeMobileMeniu}>
                             Bulgaria
                         </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/austria' className='nav-links' onClick={closeMobileMeniu}>
                             Austria
                        </Link>
                    </li>
                     <li >
                         <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMeniu}>
                           Sign Up
                        </Link>
                    </li>
                 </ul>
                   
                </div>
            </nav>
        </>
    );
}
export default Navbar;