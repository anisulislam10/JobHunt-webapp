// import { Badge } from 'lucide-react'
import React from 'react'
import { Badge } from "./ui/badge"


function LatestJobCards() {
    return (
        <div className='p-5 rounded-medium shadow-xl bg-white border border-gray-200 cursor-pointer ml-10 mr-10 '>
            <div>
                <h1 className='font-medium text-lg '>Company Name</h1>
                <p className='text-sm text-gray-500'>Pakistan</p>
            </div>
            <div> {/* for job title start */}
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            </div>{/* for job title end */}

            <div className='flex items-center gap-2 mt-4'>{/* for job details start */}
                <Badge className={'text-blue-700 font-bold'} variant="ghost">10 Position</Badge>
                <Badge className={'text-green-700 font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-yellow-700 font-bold'} variant="ghost">50K P/M</Badge>

            </div>{/* for job details end */}
        </div>
    )
}

export default LatestJobCards