import React from 'react';
import Easy from "./Easy/Easy";
import Hero from "./Hero/Hero";
import Explore from "./Explore/Explore";
import SuperAgent from "./SuperAgent/SuperAgent";

const Main = () => {
    return (
        <div>
            <Hero/>
            <Easy/>
            {/*<Explore/>*/}
            <SuperAgent/>
        </div>
    );
};

export default Main;