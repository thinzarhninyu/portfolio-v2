import { extra, other_extra } from "@/data/data";
import { Calendar, CheckCircle } from "lucide-react";

const Extracurricular = () => {
    return (
        <div className="flex flex-col">
            <div className='flex flex-col justify-between md:space-y-5 sm:space-y-5 lg:space-x-5 px-10'>
                <ol className="relative border-l  px-5 z-0 mt-10">
                    {extra.map(({ club, school, period, position, description }) => (
                        <li key={club} className="mb-10 ml-6">
                            <div className="absolute flex items-center justify-center w-10 h-10 bg-blue-900 rounded-full -left-5">
                                <Calendar className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="flex items-center mb-1 text-lg font-semibold">{club} <br /> @ {school}</h3>
                            <p className='block mb-2 text-sm font-normal leading-none mt-4'>{position}</p>
                            <time className="block mb-4 text-sm font-normal leading-none mt-4">{period}</time>
                            <ul className="space-y-1 list-inside">
                                {description.map(description => (
                                    <li key={description} className="flex items-center text-justify gap-x-3">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        {description}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>

            <div className='flex flex-col justify-between md:space-y-5 sm:space-y-5 lg:space-x-5 px-10'>
                <ol className="relative border-l  px-5 z-0 mt-10">
                    {other_extra.map(({ event, place, period, position, description }) => (
                        <li key={event} className="mb-10 ml-6">
                            <div className="absolute flex items-center justify-center w-10 h-10 bg-blue-900 rounded-full -left-5">
                                <Calendar className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="flex items-center mb-1 text-lg font-semibold">{event} <br /> @ {place}</h3>
                            <p className='block mb-2 text-sm font-normal leading-none mt-4'>{position}</p>
                            <time className="block mb-4 text-sm font-normal leading-none mt-4">{period}</time>
                            <ul className="space-y-1 list-inside">
                                {description.map(description => (
                                    <li key={description} className="flex items-center text-justify gap-x-3">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        {description}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Extracurricular;