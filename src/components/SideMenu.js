import React from 'react'
import {MdAccountCircle, MdChangeHistory, MdDateRange, MdDelete} from "react-icons/md";

const SideMenu = () => {
    return (
        <div className="side-menu">
            <MdAccountCircle className="icon-user"/>
            <MdChangeHistory className="icon"/>
            <MdDateRange className="icon"/>
            <MdDelete className="icon"/>
        </div>
    )
}

export default SideMenu;
