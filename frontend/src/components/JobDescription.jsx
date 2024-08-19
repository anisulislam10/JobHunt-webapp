import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function JobDescription() {
    const isApplied=true;
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between ml-20 mr-20'>
        <div>
        <h1 className='font-bold text-xl'>Frontend Developer</h1>
        <div className='flex items-center gap-2 mt-4'>{/* for job details start */}
                <Badge className={'text-blue-700 font-bold'} variant="ghost">10 Position</Badge>
                <Badge className={'text-green-700 font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-yellow-700 font-bold'} variant="ghost">50K P/M</Badge>

            </div>
        </div>
        
            <Button 
            disabled={isApplied} 
            className={`rounded-lg ${isApplied ? 'bg-red-700 cursor-not-allowed hover:bg-red-700' :
             'bg-[#6A38C2] hover:bg-[#6a11a1]'}`}>
                { isApplied ? 'Already Applied' : 
                 'Apply Now'}
                 </Button>
        </div>
<h1 className='border-b-2 border-b-gray-300 font-medium py-4 ml-20 mr-20' >Job Description</h1>
        <div className='ml-20 mr-20'>
                        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Islamabad</span></h1>
                        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime numquam hic, nostrum nulla off</span></h1>
                        <h1 className='font-bold my-1'>Experience:<span className='pl-4 font-normal text-gray-800'>2 Years</span></h1>
                        <h1 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>50K P/M</span></h1>
                        <h1 className='font-bold my-1'>Total Application:<span className='pl-4 font-normal text-gray-800'>4</span></h1>
                        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>08-19-2024</span></h1>

        </div>
    </div>
  )
}

export default JobDescription