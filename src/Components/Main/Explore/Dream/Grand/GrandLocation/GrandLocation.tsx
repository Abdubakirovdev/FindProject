import React from 'react';
import Loc1 from "../../../../../../Imgs/gr-loc-1.png"
import Loc2 from "../../../../../../Imgs/gr-loc-2.png"
import Loc3 from "../../../../../../Imgs/gr-loc-3.png"
const GrandLocation = () => {
    return (
        <div className="container pt-16">
            <h2 className="text-2xl font-semibold mb-4 mt-8">Location</h2>
           <div className="flex justify-between items-start">
               <div className="w-[660px] h-[405px] relative">
                   <iframe
                       src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1568.401964256764!2d74.57828584103574!3d42.88629468695778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1688632320302!5m2!1sru!2skg" loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade" className="w-[660px] h-[405px] 1200:w-[480px]"></iframe>
                   <div className="rounded-xl flex items-center cursor-pointer justify-center py-3 left-[8rem] -bottom-7 px-[7rem] bg-[#004A60] text-white absolute 1200:py-2 1200:px-10 1200:left-[7rem]">8/25 St.Aaly Tokombaeva </div>
               </div>
               <div className="flex items-start overflow-hidden">
                   <img src={Loc1} alt="img" className="1200:w-[200px]"/>
                   <img src={Loc2} alt="img" className="1200:w-[200px]"/>
                   <img src={Loc3} alt="img" className="1200:w-[200px]"/>
               </div>
           </div>
        </div>
    );
};

export default GrandLocation;