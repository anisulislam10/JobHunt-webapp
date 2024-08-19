import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { LogOut, User2, House, ScanText, Layers2, FolderSearch,NotebookPen  } from 'lucide-react'
import { useSelector } from 'react-redux';
import store from '../../redux/store';


const Navbar = () => {
  // const user = true;
  const {user}=useSelector(store=>store.auth) //destructure user for hiding/unhiding when login
  return (
    // <div className='bg-gradient-to-r from-white to-blue-500 h-10'>
    <div className='bg-white-200'>

      <div className='flex item-center justify-between mx-auto max-w-6xl'>
        <div>
          <h1 className='text-2xl font-bold' ><u className='text-white bg-[#6A38C2] rounded-sm'>Job</u><span className='text-[#6A38C2] rounded-medium '>Hunt</span></h1>
        </div>

        <div className='flex item-center gap-12 h-18'>
          <ul className='flex font-medium items-center gap-5'>

            <div className='flex gap-1 text-[#000000]'>
              <House />
              <li> <Link to="/">Home</Link> </li>
            </div>
            <div className='flex gap-1 text-[#000000]'>
            <NotebookPen />
              <li> <Link to="/Jobs">Jobs</Link></li>
            </div>
            <div className='flex gap-1 text-[#000000]'>
              <FolderSearch />
              <li>  <Link to="/Browse">Browse</Link> </li>
            </div>
          </ul>
          {
            !user ? (
              <div className='flex item-center gap-2'>
                <Link to="/Login"><Button variant="outline">Login</Button></Link>
                <Link to="/SignUp"><Button className="bg-[#0000FF] hover:bg-[#00008B] font-bold">SignUp</Button></Link>
              </div>
            ) : (
              <Popover className>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>

                <PopoverContent className="w-80">
                  <div className='flex gap-4 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>Anisul Islam</h4>
                      <p className='text-sm text-muted-foreground h-10'>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>

                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>

                  </div>
                </PopoverContent>
              </Popover>
            )
          }

        </div>
      </div>

    </div>
  )
}

export default Navbar