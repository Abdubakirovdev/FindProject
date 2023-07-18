import React from 'react';
import Loc1 from "../../../../../../Imgs/gr-loc-1.png"
import Loc2 from "../../../../../../Imgs/gr-loc-2.png"
import Loc3 from "../../../../../../Imgs/gr-loc-3.png"
const GrandLocation = () => {
    return (
        <div className="container pt-16">
            <h2 className="text-2xl font-semibold mb-4 mt-8 992:hidden  max-768:hidden">Location</h2>
           <div className="flex justify-between items-start 992:flex-col-reverse 992:items-center max-768:flex-col-reverse max-768:items-center">
               <div className="w-[600px] h-[405px] 1200:w-[480px] 1200:h-[380px] 1024:w-[430px] 1024:h-[340px] 992:w-[134%] max-768:w-[124%] relative">
                   <iframe
                       src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1568.401964256764!2d74.57828584103574!3d42.88629468695778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1688632320302!5m2!1sru!2skg" loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade" className="w-[100%] h-[100%]"></iframe>
                   <div className="rounded-xl flex items-center cursor-pointer justify-center py-3 left-[6rem] -bottom-7 px-[7rem] bg-[#004A60] 992:left-[17rem] 640:left-[8rem] 768:left-[10rem] text-white absolute 1200:py-2 1200:px-10 1200:left-[7rem] 1024:px-6 1024:left-[6rem]">8/25 St.Aaly Tokombaeva </div>
               </div>
               <h2 className="hidden text-2xl font-semibold mb-4 mt-8 992:block text-start items-start max-768:block  ">Location</h2>
               <div className="flex items-start overflow-hidden 992:w-[134%] 992:h-[620px] max-768:w-[124%] 768:h-[556px] 640:h-[498px] ">
                   <img src={Loc1} alt="img" className="1200:w-[170px] 1024:w-[150px] 992:w-[33.5%] max-768:w-[33.6%]"/>
                   <img src={Loc2} alt="img" className="1200:w-[170px] 1024:w-[150px] 992:w-[33.5%] max-768:w-[33.6%]"/>
                   <img src={Loc3} alt="img" className="1200:w-[170px] 1024:w-[150px] 992:w-[33.5%] max-768:w-[33.6%]"/>
               </div>
           </div>
        </div>
    );
};

export default GrandLocation;