import React from 'react';
import './Property.scss'

const Property = () => {
    return (
   <div>
       <div id='property'>
           <div className='container'>
               <div className='property'>
                   <div className="property--place">
                       <h1>
                           Place a paid ad <br/>
                           from 7 to 30 days
                       </h1>
                       <button>Place an ad</button>
                   </div>
               </div>
           </div>
       </div>
       <div className='property--select'>
           <div className='property--select__left'>
               <h4>Select a category</h4>
               <div className='property--select__left--one'>
                   <div>
                       <h5>Sale</h5>
                   </div>
                   <div>
                       <h5>Rent</h5>
                   </div>
               </div>
           </div>
           <div className='property--select__right'>
               <h4>Your property type</h4>
               <div className='property--select__left--two'>
                   <div><h5>Apartment</h5></div>
                   <div><h5>Townhouse</h5></div>
                   <div><h5>Penthouse</h5></div>
                   <div><h5>Office</h5></div>
               </div>
           </div>
       </div>

   </div>
)
    ;
};

export default Property;