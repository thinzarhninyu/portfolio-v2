"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"

const Testimonials = () => {
    return (
        <div className='flex justify-between items-center px-10'>
            <Carousel className="w-full">
                <CarouselContent className="">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        Coming Soon!
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Testimonials;