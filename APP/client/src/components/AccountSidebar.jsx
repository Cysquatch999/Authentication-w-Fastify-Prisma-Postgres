import React from 'react'
import {
    BsPersonFill,
    BsFillKeyFill,
    BsDoorOpenFill,
    BsServer,
    BsFillCreditCardFill,
} from "react-icons/bs"
import { NavLink } from 'react-router-dom'

const AccountSidebar = ({children}) => {

    const menuItem = [
        {
            path: "/profile/main",
            name: "Profile",
            icon: <BsPersonFill />
        },
        {
            path: "/profile/services",
            name: "Services",
            icon: <BsServer />
        },
        {
            path: "/profile/paymentmethods",
            name: "Payment",
            icon: <BsFillCreditCardFill />
        },
        {
            path: "/profile/changepassword",
            name: "Change Password",
            icon: <BsFillKeyFill />
        },
        {
            path: "/logout",
            name: "Logout",
            icon: <BsDoorOpenFill />
        }
    ]


    return (
        <div className='container'>
            <div className='sidebar'>
                {
                    menuItem.map((item, index) => 
                        (
                            <NavLink to={item.path} key={index} className="link">
                                <div className='icon'>{item.icon}</div>
                                <div className='link-text'>{item.name}</div>
                            </NavLink>
                        )
                    )
                }
            </div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default AccountSidebar;