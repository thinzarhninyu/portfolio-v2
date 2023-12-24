import { CertificationType } from "@/types/certification";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const CertificationBox = ({ certification }: { certification: CertificationType }) => {
    return (
        <div className="p-1">
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Link href={certification.link} className="text-3xl font-semibold">
                        <div className="flex flex-col justify-center items-center text-center gap-y-5">
                            <Image className="w-8 h-8 rounded-full" src={certification.image} alt="Image" width={24} height={24} />
                            <p className="text-sm font-semibold text-center">{certification.name}</p>
                            {certification.school.map(school => (
                                <div key={school} className='text-sm flex items-center justify-center'>
                                    <Badge>{school}</Badge>
                                </div>
                            ))}
                            <p className="text-sm truncate">{certification.date}</p>
                        </div>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default CertificationBox;