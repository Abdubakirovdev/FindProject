import React from 'react';
import ExCard from "../../../ExCard/ExCard";
import "../../../Explore.scss"

const GrandPlace = () => {
    return (
        <div className="container my-4">
            <h2 className="text-2xl font-semibold mb-4 mt-8 pt-[100px]">Similar places in Bishkek</h2>
            <ExCard/>
        </div>
    );
};

export default GrandPlace;