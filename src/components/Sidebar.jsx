import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";

import imgprofile from '../images/imgprofile.svg';
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as FaIcons  from "react-icons/fa6";
import * as IoIcons from "react-icons/io";
import * as IoIcons5 from "react-icons/io5";
import * as CgIcons from "react-icons/cg";
import * as CiIcons from "react-icons/ci";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<MdIcons.MdOutlineDashboard />

        },
        {
            path:"/Admin",
            name:"Admin",
            icon:<MdIcons.MdOutlineManageAccounts />

        },
        {
            path:"/Manageevents",
            name:"Manageevents",
            icon:<RiIcons.RiCalendarCheckLine/> 

        },
        {
            path:"/Requests",
            name:"Requests",
            icon:<FaIcons.FaPen/> 

        },

        {
            path:"/Candidates",
            name:"Candidates",
            icon:<IoIcons.IoMdPerson /> 

        },
        {
            path:"/Addnews",
            name:"Addnews",
            icon:<IoIcons5.IoNewspaper/> 

        },
        {
            path:"/Profile",
            name:"Profile",
            icon:<CgIcons.CgProfile  /> 

        },
        {
            path:"/Help",
            name:"Help",
            icon: <IoIcons5.IoHelpCircleOutline /> 

        },
        {
            path:"/Logout",
            name:"Logot",
            icon: < CiIcons.CiLogout /> 

        }
       
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "304px" : "97px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={imgprofile} alt="" className='iconOfSide' /> </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <MdIcons.MdOutlineKeyboardDoubleArrowRight onClick={toggle}/>
                  
                   </div>
               
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                          
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;