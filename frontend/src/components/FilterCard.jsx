import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
const filterData = [
    {
        filterType: "Location",
        array: ['Islamabad', 'Lahore', 'Karachi']
    },
    {
        filterType: "Industry",
        array: ['Frontend Developer', 'Backend Developer', 'FullStack Developer']
    },
    {
        filterType: "Salary",
        array: ['0-40K', '41-80K', '80K+']
    },
]

function FilterCard() {
    return (
        <div className='w-full bg-blue-50 p-3 rounded-md shadow-lg '>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mr-3' />
            <RadioGroup>
                {
                    filterData.map((data, index)=>(
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item,index)=>{
                                    return(

                                            <div className='flex items-center space-x-2 m-2'>
                                                <RadioGroupItem
                                                value={item}
                                                />
                                                <Label>{item}</Label>
                                                </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
           
        </div>
    )
}

export default FilterCard