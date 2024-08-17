import React from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { ReactTyped } from "react-typed";

function HeroSection() {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <h1 className='text-5xl font-bold'>
          Search. Apply & <br/> 
          Get Your &#160;
          <span className='text-[#6a38c2]'>
            <ReactTyped
              strings={[' Dream Job ', ' Next Opportunity ']}
              typeSpeed={50} // Speed of typing effect
              backSpeed={30} // Speed of backspace effect
              backDelay={1000} // Delay before starting to backspace
              startDelay={500} // Delay before starting to type
              loop
            />
          </span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt ad natus iste, sint reiciendis.</p>
        <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>   
          <input 
            type="text" 
            placeholder='Find Your Dream Jobs'
            className='outline-none border-none w-full'
          />
          <Button className="rounded-r-full bg-[#6a38c2]">
            <Search className="h-5 w-5"/>        
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
