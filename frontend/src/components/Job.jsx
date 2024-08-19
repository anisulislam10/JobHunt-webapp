import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';


function Job() {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between '>
                <p className='text-sm text-gray-600'> 2 days ago</p>
                <Button variant="outline" clasName="Rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button variant="outline" clasName="p-6" size="icon" >
                    <Avatar >
                        <AvatarImage
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png"
                        />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-600'>Pakistan</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga blanditiis debitis accusantium, dolorem tempore labore repudiandae, dicta deleniti eum modi aut possimus cumque a! Dolor voluptatibus eaque cumque omnis?</p>
            </div>

            <div className='flex items-center gap-2 mt-4'>{/* for job details start */}
                <Badge className={'text-blue-700 font-bold'} variant="ghost">10 Position</Badge>
                <Badge className={'text-green-700 font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-yellow-700 font-bold'} variant="ghost">50K P/M</Badge>

            </div>


            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className={"bg-[#6A38C2] text-[#FFFFFF]"}>Save for Latter</Button>
            </div>


        </div>
    )
}

export default Job