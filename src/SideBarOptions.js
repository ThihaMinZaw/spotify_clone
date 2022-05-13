import React from 'react';
import "./SideBarOptions.css";

const SideBarOptions = ({option="test",Icon}) => {
    return (
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebarOptions_icon" />}
            {Icon ? <h4>{option}</h4>:<p>{option}</p>}
            
        </div>
    );
};

export default SideBarOptions;