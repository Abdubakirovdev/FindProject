import React from 'react';
import GrandHero from "./Grand/GranHero/GrandHero";
import AboutGrand from "./Grand/AbountGrand/AboutGrand";
import GrandPrice from "./Grand/GrandPrice/GrandPrice";
import GrandAmenities from "./Grand/GrandAmenities/GrandAmenities";
import GrandLocation from "./Grand/GrandLocation/GrandLocation";
import GrandPlace from "./Grand/GrandPlace/GrandPlace";

const Apartamen = () => {
    return (
        <div>
            <GrandHero/>
            <AboutGrand/>
            <GrandPrice/>
            <GrandAmenities/>
            <GrandLocation/>
            <GrandPlace/>
        </div>
    );
};

export default Apartamen;