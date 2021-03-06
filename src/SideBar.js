import React from 'react';
import "./SideBar.css";
import SideBarOption from './SideBarOptions';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {getTokenFromResponse} from './spotify';
import {useStateValue} from './StateProvider';
const SideBar = () => {

    const [{playlists},dispatch]=useStateValue();
    console.log(playlists);
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SideBarOption Icon={HomeIcon} option="Home" />
            <SideBarOption Icon={SearchIcon} option="Search" />
            <SideBarOption Icon={LibraryMusicIcon} option="Your Library" />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist)=>(
                <SideBarOption option={playlist.name} />
            ))}
        </div>
    );
};

export default SideBar;