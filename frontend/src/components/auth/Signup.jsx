import React from 'react'
import Navbar from '../shared/navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import axios from "axios"
// import { Toaster } from "@/components/ui/sonner"
import { toast } from 'sonner'
import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import { USER_API_END_POINT } from '../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import store from '../../redux/store'





function Signup() {
  // const [phone, setPhone] = useState('');

  // const handleInputChange = (e) => {
  //   const valuee = e.target.value.replace(/[^0-9]/g, '');
  //   setPhone(valuee);
  // };
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""

  });
  const {loading}=useSelector(store=>store.auth);
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  //for file
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input);
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          'Content-Type': "multipart/form-data"
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      
    }finally{
      dispatch(setLoading(false));
    }


  }
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Signup</h1>
          <div className='my-2'>
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              id="fullname"   /* Added `id` */
              onChange={changeEventHandler}
              placeholder="Your Full Name"
            />
          </div>

          <div className='my-2'>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              id="email"   /* Added `id` */

              onChange={changeEventHandler}
              placeholder="you@domain.com"
            />
          </div>

          <div className='my-2'>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="tel"
              // valuee={phone}
              value={input.phoneNumber}
              name="phoneNumber"
              id="phoneNumber"   /* Added `id` */

              onChange={changeEventHandler}
              placeholder="03439275550"
            // onChange={handleInputChange}
            />
          </div>


          <div className='my-2'>
            <Label htmlFor="password">Password</Label>
            <Input
              type="Password"
              value={input.password}
              name="password"
              id="password"   /* Added `id` */

              onChange={changeEventHandler}
              placeholder="*********"
            />
          </div>
          <div className='flex items-center justify-between'>

            <RadioGroup className="flex items-center gap-4 my-5">

              <div className="flex items-center space-x-2">

                {/* <RadioGroupItem value="default" id="r1" /> */}

                <Input
                  type="radio"
                  name="role"
                  value="student"
                  id="student" /* Added `id` */

                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label> {/* Updated `htmlFor` to match `id` */}

                {/* <Label htmlFor="r1">Student</Label> */}
              </div>
              <div className="flex items-center space-x-2">

                {/* <RadioGroupItem value="comfortable" id="r2" /> */}
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  id="recruiter" /* Added `id` */

                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter">Recruiter</Label> {/* Updated `htmlFor` to match `id` */}

                {/* <Label htmlFor="r2">Recruiter</Label> */}
              </div>
            </RadioGroup>
            <div className='flex items-center gap-2'>
              <Label htmlFor="profile">Profile</Label>
              <Input
                accept="image/*"
                type="file"
                id="profile" /* Added `id` */

                onChange={changeFileHandler}
                className="cursor-pointer"
              />

            </div>
          </div>
          {
            loading ? <Button className=" w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' />Please Wait... </Button> : <Button type="submit" className="w-full my-4">Signup</Button>

          }
          <span className='text-sm'>Already have an Account? <Link to={"/logIn"} className='text-blue-600'>Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Signup