import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { ProjectType } from '@/types/project';

const Project = ({
    project
}: {
    project: ProjectType
}) => {
    return (
        // <Link href={project.link!}>
        <Card className='w-full h-full flex flex-row justify-between shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.010]'>
            <div className='w-full lg:w-25'>
                <Image
                    src={project.image}
                    layout='responsive'
                    alt="project image"
                    width={100}
                    height={100}
                    className='rounded-l-lg w-full'
                />
            </div>
            <div className='flex w-full lg:w-75'>
                <div>
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className='text-justify'>{project.description}</p>
                        <div className='flex flex-row flex-wrap justify-left items-center mt-5 space-x-3'>
                            {project.language.map(language => (
                                <div key={language} className='flex items-center justify-left'>
                                    <div className='w-full justify-left mb-4'>
                                        <Badge className=''>{language}</Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className='flex flex-row flex-wrap justify-left items-center space-x-3'>
                            {project.link && (
                                <Link
                                    href={project.link}
                                    className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
                                >
                                    Link to Demo
                                </Link>
                            )}
                            <Link href={project.code} className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Link to Code</Link>
                        </div>
                    </CardFooter>
                </div>
            </div>
        </Card>
        // </Link>
    )
}

export default Project;