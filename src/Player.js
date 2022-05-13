import React from 'react';
import Footer from './Footer';
import "./Player.css";
import SideBar from "./SideBar";
import Body from './Body';

const Player = ({spotify}) => {
    return (
        <div>
            <div className="player">
                <div className="player_body">
                    <SideBar />
                    <Body spotify={spotify} />

                </div>
                <Footer spotify={spotify} />
            </div>
        </div>
    );
};

export default Player;