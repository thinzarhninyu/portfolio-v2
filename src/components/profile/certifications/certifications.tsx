"use client"

import { certifications } from "@/data/data";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CertificationBox from "@/components/profile/certifications/certification-box";

const Certifications = () => {
    return (
        <div className='flex justify-between items-center px-10'>
            <Carousel opts={{
                align: "start",
            }}
                className="w-full max-w-full">
                <CarouselContent className="">
                    {certifications.map((certification, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <CertificationBox certification={certification} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default Certifications;