import React from 'react'
import Navbar from './shared/navbar'
import FilterCard from './FilterCard'
import Job from './Job'

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
    return (
        <div>{/* main div starts */}
            <Navbar />
            <div className='max-w-7xl  mt-16  ml-10'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        {/* filter page */}
                        <FilterCard />
                    </div>
                    {/* job card */}
                    {
                        jobsArray.length <= 0 ? <span>Job Not Found</span> : (
                            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                    <div className='grid grid-cols-3 gap-4'> 
                    {
                        jobsArray.map((item, index) => (
                            <div> 
                                <Job/> 
                                </div>
                        ))

                    }
                </div>
                </div>
                        )
                    }
            </div>


        </div>

        </div > //  /* main div Ends */

    )
}

export default Jobs