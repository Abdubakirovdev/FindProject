import React from 'react';

const GrandPrice = () => {
    return (
        <div className="container flex items-start justify-between my-4">
            <p className="w-[60%] 1200:w-[55%] 1024:w-[50%] mt-8">The unsurpassed panoramic view into the horizon, where earth and sky embrace, and the enticing summer
                breeze, offer moments of unique relaxation and wellbeing. The calm design of the property, combined with
                the harmonious synthesis of natural material, and the exceptional landscape of Aleomandra, complete this
                luxurious setting.
                The location of Untold Mykonos is ideal. It offers absolute privacy and tranquillity to guests, only 200
                meters from the serene, crystal clear Glyfadi beach, and has direct access to tourist amenities.
            </p>
            <div className="border-2 border-[#B9B9B9] flex flex-col justify-center rounded-2xl px-[25px] py-[30px] w-[27%] 1200:w-[33%] 1024:w-[38%] mt-8">
                <h3 className="text-2xl font-medium text-center">60 000com<span className="text-lg font-light">/month</span></h3>
                <div className="flex flex-col items-start">
                    <div className="flex items-center justify-between w-full my-3">
                        <h3 className="flex text-xl font-medium">Minimum stay</h3>
                        <h4>6 month</h4>
                    </div>
                    <div className="flex items-center justify-between w-full my-3">
                        <h3 className="flex text-xl font-medium">Deposit</h3>
                        <h4>20 000 с</h4>
                    </div>
                </div>
                <button className="bg-blue-500 rounded py-1 px-14 text-white items-center text-center mx-3">Contact owner</button>
            </div>
        </div>
    );
};

export default GrandPrice;