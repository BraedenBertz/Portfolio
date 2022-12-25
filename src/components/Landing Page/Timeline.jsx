import React from 'react';
import timeline from '../../data/timeline';
import TimelineItem from './TimeLineItem';
import Title from './Title';

function Timeline() {
   return (
      <>
      <div className='margin-auto mt-20'>
         <Title >&lt;timeline&gt;</Title>
      </div>
      <div className="flex flex-col md:flex-row justify-left mx-20">
         <div className="w-full md:w-7/1">
            {timeline.map(item => (
               <TimelineItem key={item.title} 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
      <div className='margin-auto mt-4'>
         <Title >&lt;/timeline&gt;</Title>
      </div>
      </>
      
   )
}

export default Timeline;