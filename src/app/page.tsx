import Introduction from '@/components/profile/intro'
import RecentProjects from '@/components/project/recent-projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className='w-full flex justify-center items-center'>
        <Introduction />
      </div>
      <div className='mt-20'>
        <RecentProjects />
      </div>
    </main>
  )
}
