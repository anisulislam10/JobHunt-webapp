import React from 'react'
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
import { LogOut, User2, House,ScanText,Layers2, FolderSearch    } from 'lucide-react'


const Navbar = () => {
  const user=false;
  return (
    <div className='bg-gradient-to-r from-white to-blue-500 h-10'>
      <div className='flex item-center justify-between mx-auto max-w-7xl h-12'>
        <div>
          <h1 className='text-2xl font-bold ' >Job<span className='text-[#0000FF] '>Hunt</span></h1>
        </div>

        <div className='flex item-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>

            <div className='flex gap-1 text-[#FFFFFF]'>
              <House /> 
            <li>Home</li>
            </div>
            <div className='flex gap-1 text-[#FFFFFF]'>
            <Layers2 />
            <li>Jobs</li>
            </div>
             <div className='flex gap-1 text-[#FFFFFF]'>
             <FolderSearch />
             <li>Browse</li>
            </div>
           

          
          </ul>
          {
            !user ? (
              <div className='flex item-center gap-2'>
              <Button variant="outline">Login</Button>
              <Button className="bg-[#0000FF] hover:bg-[#00008B] font-bold">SignUp</Button>

              </div>
            ) :(
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
                    <User2/>
                    <Button variant="link">View Profile</Button>
                  </div>
               
  <div className='flex w-fit items-center gap-2 cursor-pointer'>
    <LogOut/>
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