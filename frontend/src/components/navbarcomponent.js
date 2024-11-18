import searchbar from '../assets/searchicon.svg';
import usericon from '../assets/usericon.svg';
import { Link } from "react-router-dom";
import LogoComp from './logocomponent';

export default function NavbarComp(){
    return(
        <>
        <nav id="navId">
            <div> <LogoComp/> </div>
            <div id="navUserNameDivId" className='navbarelemclass'><Link to="/user">UserName</Link></div>
            <div id="navSearchBarDivId" className='navbarelemclass navbariconpic'><img src={searchbar} alt='Search bar'/></div>
            <div id="navBtnProfilDivId" className='navbarelemclass navbariconpic'><img src={usericon} alt='Your Profile' /></div>

        </nav>
        </>
    );
};