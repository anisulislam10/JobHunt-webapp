import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Full Stack Developer",
]

function CategoryCarousel() {
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>

                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/3 lg-basis-1/4 ">
                                <Button variant="inline" className="rounded-full bg-[#6a38c2] text-[#FFFFFF]">{cat}</Button>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel