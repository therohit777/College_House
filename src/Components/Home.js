import React from 'react';
import '../Components/css/home.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { MdPerson , MdHome , MdMessage ,MdLogout,MdViewHeadline } from "react-icons/md";
import { useState } from 'react';


export const Home = () => {
    
    const [display, setdisplay] = useState(false);

    return (
        <div className="homepage">

            <header>
                <nav>
                    <IconButton><div className="logoname"><Link to="/home" className='logolnk'>College House</Link></div></IconButton>
                    <div className={(display)?"navitems dropanimate":"navitems"}>
                        <ul>
                            <li><IconButton className='specicon'><Link to="" className='homenavlnk'><MdHome/></Link></IconButton></li>
                            <li><IconButton className='specicon'><Link to="" className='homenavlnk'><MdMessage/></Link></IconButton></li>
                            <li><IconButton className='specicon'><Link to="" className='homenavlnk'><MdPerson/></Link></IconButton></li>
                            <li><IconButton className='specicon'><Link to="/logout" className='homenavlnk'><MdLogout/></Link></IconButton></li>
                        </ul>
                    </div>
                    <div className="hamburgmenu"><IconButton className='specicon'><MdViewHeadline className='hamburg' onClick={()=>setdisplay(!display)}/></IconButton></div> 
                </nav>
            </header>

            
            
        </div>
    )
}
