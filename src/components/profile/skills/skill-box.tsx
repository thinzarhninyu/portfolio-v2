import { Badge } from "@/components/ui/badge";

const SkillBox = ({ topic, skills }: { topic: string, skills: string[] }) => {
    return (
        <div className="flex-1 p-2">
            <p className="mb-5 text-center">{topic}</p>
            <div className='flex flex-row flex-wrap items-center justify-center gap-x-3'>
                {skills.map((skill, index) => (
                    <div key={index} className='flex items-center justify-center mb-4'>
                        <Badge>{skill}</Badge>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillBox;
