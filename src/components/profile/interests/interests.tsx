"use client"

import { interests } from "@/data/data";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import InterestBox from "@/components/profile/interests/interest-box";

const Interests = () => {
    return (
        <div className='flex justify-between items-center px-10'>
            <Carousel className="w-full">
                <CarouselContent className="">
                    {interests.map(({ image, text: interest }) => (
                        <CarouselItem key={interest} className="md:basis-1/2 lg:basis-1/3">
                            <InterestBox image={image} interest={interest} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default Interests;