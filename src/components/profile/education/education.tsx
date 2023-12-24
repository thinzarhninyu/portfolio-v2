import Link from "next/link";
import { education } from "@/data/data";
import { Calendar } from "lucide-react";

const Education = () => {
    return (
        <div className='flex flex-col justify-between md:space-y-5 sm:space-y-5 lg:space-x-5 px-10'>
            <ol className="relative border-l px-5 z-0 mt-10">
                {education.map(({ school, concentration, period, description, view, link }) => (
                    <li key={concentration} className="mb-10 ml-6">
                        <div className="absolute flex items-center justify-center w-10 h-10 bg-blue-900 rounded-full -left-5">
                            <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="flex items-center mb-1 text-lg font-semibold ">
                            {concentration}  <br />@ {school}
                        </h3>
                        <time className="block mb-4 text-sm font-normal leading-none mt-4">{period}</time>
                        <p className="mb-4 text-base font-normal  text-justify">{description}</p>
                        <Link href={link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 ">View {view}</Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Education;