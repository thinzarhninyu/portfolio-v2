import Link from "next/link";
import { strengths, weaknesses } from "@/data/data";
import { Badge } from "@/components/ui/badge";

const Personality = () => {
    return (
        <div className='px-10'>

            <div className='flex flex-col sm:flex-row md:flex-row justify-between items-center md:space-y-5 sm:space-y-5 lg:space-x-10'>
                <h3 className="text-lg mb-3 flex-2 lg:w-[200px]">My Personality Type</h3>
                <div className='text-justify flex-1'>
                    <p className='mb-4'>My MBTI is: <Link href="https://16personalities.com/isfj-personality"><u>ISFJ</u></Link>, The Defender. (Introverted, Sensing, Feeling, Judging). ISFJs are hardworking and devoted, with a deep sense of responsibility. They have excellent analytical abilities and an eye for detail. Even though they may seem reserved, they tend to have well-developed people skills and social relationships.</p>
                    <Link href='https://www.16personalities.com/profiles/121a9b151439f' className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 ">View my personality profile!</Link>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row md:flex-row justify-between items-center md:space-y-5 sm:space-y-5 lg:space-x-10 mt-10'>
                <h3 className="text-lg mb-3 flex-2  w-[200px]">My Values</h3>
                <div className='text-justify flex-1'>
                    <p className='mb-4'>My MBTI is: <Link href="https://16personalities.com/isfj-personality"><u>ISFJ</u></Link>, The Defender. (Introverted, Sensing, Feeling, Judging). ISFJs are hardworking and devoted, with a deep sense of responsibility. They have excellent analytical abilities and an eye for detail. Even though they may seem reserved, they tend to have well-developed people skills and social relationships.</p>

                </div>
            </div>

            <div className='flex flex-col sm:flex-row md:flex-row justify-between items-center md:space-y-5 sm:space-y-5 lg:space-x-10 mt-10'>
                <h3 className="text-lg mb-3 flex-2 lg:w-[200px]">My Strengths</h3>
                <div className='flex flex-1 flex-row flex-wrap items-center'>
                    {strengths.map(strength => (
                        <div key={strength} className='flex flex-row items-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <Badge>{strength}</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col sm:flex-row md:flex-row justify-between items-center md:space-y-5 sm:space-y-5 lg:space-x-10 mt-10'>
                <h3 className="text-lg mb-3 flex-2 lg:w-[200px]">My Weaknesses</h3>
                <div className='flex flex-1 flex-row flex-wrap items-center'>
                    {weaknesses.map(weakness => (
                        <div key={weakness} className='flex flex-row items-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <Badge>{weakness}</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Personality;