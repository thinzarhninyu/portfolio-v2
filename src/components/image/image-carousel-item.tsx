import { Card, CardContent } from "@/components/ui/card"
import { ImageType } from "@/types/image";
import Image from "next/image"

const ImageCarouselItem = ({ image }: { image: ImageType }) => {
    return (
        <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6 rounded-lg">
                <Image
                    src={image.url}
                    alt={image.alt}
                    width={image.width ?? 300}
                    height={image.width ?? 300}
                    className='rounded-lg'
                />
            </CardContent>
        </Card>
    )
}

export default ImageCarouselItem;