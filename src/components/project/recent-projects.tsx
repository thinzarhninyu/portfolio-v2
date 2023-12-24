import { projects, tags } from '@/data/data'
import Project from '@/components/project/project';
import { ProjectType } from '@/types/project';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';

const RecentProjects = () => {

    const latest_projects: ProjectType[] = projects
        .slice()
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 3);

    return (
        <>
            <div className='flex flex-row justify-between items-center mb-10'>
                <h1 className='text-2xl font-semibold ms-3'>Recent Projects</h1>
                <Link href='/projects' className='font-medium hover:underline me-3'>
                    <div className='flex flex-row justify-center items-center space-x-2'>
                        <p>View All</p>
                        <ArrowRightCircle className='w-5 h-5' />
                    </div>
                </Link>
            </div>
            <div>
                {latest_projects.map((project, index) => (
                    <div key={index} className='w-full flex justify-center items-center mb-10'>
                        <Project project={project} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default RecentProjects;