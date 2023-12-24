import { skills } from "@/data/data";
import SkillBox from "@/components/profile/skills/skill-box";

const Skills = () => {
    return (
        <div className='flex flex-col gap-x-3 md:flex-row justify-center place-items-baseline md:space-y-5 sm:space-y-5 lg:space-x-5 px-10'>
            {/* <div className="flex-1 p-2"> */}
            <SkillBox topic={'Frontend Skill-sets'} skills={skills[0]} />
            {/* </div> */}
            {/* <div className="flex-1 p-2"> */}
            <SkillBox topic={'Backend Skill-sets'} skills={skills[1]} />
            {/* </div> */}
            {/* <div className="flex-1 p-2"> */}
            <SkillBox topic={'Database Skill-sets'} skills={skills[2]} />
            {/* </div> */}
            {/* <div className="flex-1 p-2"> */}
            <SkillBox topic={'Other Skill-sets'} skills={skills[3]} />
            {/* </div> */}
        </div>
    );
}

export default Skills;
