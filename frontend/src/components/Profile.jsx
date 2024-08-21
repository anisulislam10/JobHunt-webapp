import React, { useState } from 'react'
import Navbar from './shared/navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './updateProfileDialog'
import { useSelector } from 'react-redux'
import { Input } from './ui/input'
// const skills=["HTML", "CSS", "React","Node", "Express", "MongoDB"] add static skills
const Profile = () => {
    const [open, setOpen] = useState(false);
    const isResume = true;

    //dynamic and description
    const { user } = useSelector(store => (store.auth));
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
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /> </Button>
                </div>
                <div className='flex items-center gap-3'>
                    <Mail />
                    <span>{user?.email}</span>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div>
                    <h1 >Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item, index) => <Badge className={'bg-[#6A38C2] rounded-sm'} key={index}>{item}</Badge>) : <span>N/A</span>
                        }
                    </div>
                </div>

                <div className='grid w-full max-sm items-center gap-1.5'> {/* resume start here */}
                    <Label className="text-md font-bold">Resume</Label>

                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div> {/* resume end here */}


            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg m-5'>Applied Jobs</h1>
                {/* application table */}
                <AppliedJobTable />

            </div>

            {/* dilog form open */}
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile