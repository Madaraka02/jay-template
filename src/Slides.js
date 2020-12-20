import React from 'react';
import './Slides.css';
import SlideDb from './SlideDb';

function Slides() {
    return (
        <div className="slides">
           <SlideDb
           id="1"
           title="Gucci slides"
           price={3500}
           image="/images/casual (1).jpg"
           
           />
           <SlideDb 
           id="11"
           title="Nike Air"
           price={3500}
           image="https://static.nike.com/a/images/t_default/i1-fef294c6-8e6b-4bf8-a816-4b5677a050d8/air-max-270-womens-shoe-Pgb94t.jpg"
           
           />
           <SlideDb 
           id="12"
           title="Nike Air"
           price={3500}
           image="https://static.nike.com/a/images/t_default/i1-fef294c6-8e6b-4bf8-a816-4b5677a050d8/air-max-270-womens-shoe-Pgb94t.jpg"
           
           />
           <SlideDb 
           id="121"
           title="Nike Air"
           price={3500}
           image="./images/casual (10).jpg"
           
           />
           <SlideDb 
           id="123"
           title="Nike Air"
           price={3500}
           image="./images/casual (1).jpg"
           
           />
           <SlideDb 
           id="1"
           title="slimfit shirt"
           price={3500}
           image="/images/casual (1).jpg"
           
           />
           <SlideDb
           id="11"
           title="Nike Air"
           price={3500}
           image="https://static.nike.com/a/images/t_default/i1-fef294c6-8e6b-4bf8-a816-4b5677a050d8/air-max-270-womens-shoe-Pgb94t.jpg"
           
           />
           <SlideDb 
           id="12"
           title="Nike Air"
           price={3500}
           image="https://static.nike.com/a/images/t_default/i1-fef294c6-8e6b-4bf8-a816-4b5677a050d8/air-max-270-womens-shoe-Pgb94t.jpg"
           
           />
           <SlideDb 
           id="121"
           title="Nike Air"
           price={3500}
           image="./images/casual (10).jpg"
           
           />
           <SlideDb
           id="123"
           title="Nike Air"
           price={3500}
           image="./images/casual (1).jpg"
           
           />
            
           
        </div>
    );
}

export default Slides;
