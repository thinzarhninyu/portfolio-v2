import { Card, CardContent } from "@/components/ui/card"

const ProfileBox = ({ section, component }: { section: string, component: React.ReactNode }) => {
    return (
        <div className="mb-16">
            <h1 className='text-center mb-16 text-3xl font-bold'>{section}</h1>
            <div className='w-full flex flex-col gap-y-7 justify-center items-center'>
                <div className="w-11/12">
                    <div className="p-1">
                        <Card>
                            <CardContent className="items-center justify-center p-6 rounded-lg">
                                {component}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ProfileBox;