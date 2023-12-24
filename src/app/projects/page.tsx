import AllProjects from "@/components/project/all-projects"

const Projects = () => {
    return (

        <main className="flex min-h-screen flex-col items-center justify-between p-16">
            <h1 className='text-center mb-16 text-3xl font-bold'>All Projects</h1>
            <AllProjects />
        </main>
    )
}

export default Projects;