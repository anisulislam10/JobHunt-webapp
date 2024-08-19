import React from 'react'
import Navbar from './shared/navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
const skills=["HTML", "CSS", "React","Node", "Express", "MongoDB"]
const Profile=()=> {
    const isResume=true;
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-5 '>
                <div className='flex justify-between p-5 m-5'>
                <div className='flex items-center gap-4 '>
                    <Avatar className='w-10 h-10'>
                        <AvatarImage 
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png'
                        />
                    </Avatar>
                    <div>
                        <h1 className='font-medium text-xl'>Full Name</h1>
                        <p>Add Your Bio Here</p>
                    </div>
                </div>
                <Button className="text-right" variant="outline"><Pen/> </Button>
                </div>
                <div className='flex items-center gap-3'>
                <Mail/>
                <span>you@domain.com</span>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                    <Contact/>
                    <span>03×××××××××</span>
                    </div>
                </div>
                <div>
                    <h1 >Skills</h1>
                    <div className='flex items-center gap-1'>
                    {
                      skills.length != 0 ? skills.map((item,index)=><Badge className={'bg-[#6A38C2] rounded-sm' }  key={index}>{item}</Badge>) : <span>N/A</span>
                    }
                    </div>    
                </div>

<div className='grid w-full max-sm items-center gap-1.5'> {/* resume start here */}
    <Label className="text-md font-bold mt-5">Resume</Label>


{
    isResume ? <a target='blank' href='https://anis-ul-islam.vercel.app' className='text-blue-500 w-full hover:underline cursor-pointer'>Resume</a> : <span> N/A</span>
}


</div> {/* resume end here */}


            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
    <h1 className='font-bold text-lg m-5'>Applied Jobs</h1>
    {/* application table */}
    <AppliedJobTable/>

</div>

        </div>
    )
}

export default Profile