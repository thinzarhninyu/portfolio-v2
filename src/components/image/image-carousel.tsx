"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ImageCarouselItem from "@/components/image/image-carousel-item"
import Autoplay from "embla-carousel-autoplay"
import { ImageType } from "@/types/image"

const ImageCarousel = ({ images }: { images: ImageType[] }) => {
    return (
        <Carousel
            className="w-full max-w-xs w-12/12 sm:w-12/12 md:w-12/12 lg:w-6/12"
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                <CarouselItem>
                    {images.map((image) => (
                        <ImageCarouselItem image={image} />
                    ))}
                </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}

export default ImageCarousel;