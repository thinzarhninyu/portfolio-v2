import { Card, CardContent } from "@/components/ui/card";

const InterestBox = ({ image, interest }: { image: string, interest: string }) => {
    return (
        <div className="p-1">
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                    <img className="rounded-lg h-48 w-full object-cover" src={image} alt="product image" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <p className="text-black bg-white px-4 py-2 rounded-md">{interest}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default InterestBox;