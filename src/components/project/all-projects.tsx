import { projects, tags } from '@/data/data'
import Project from '@/components/project/project';
import { ProjectType } from '@/types/project';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';

const AllProjects = () => {

    const all_projects: ProjectType[] = projects
        .slice()
        .sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        <>
            <div>
                {all_projects.map((project, index) => (
                    <div key={index} className='w-full flex justify-center items-center mb-10'>
                        <Project project={project} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllProjects;