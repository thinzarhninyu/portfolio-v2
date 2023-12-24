import ProfileBox from "@/components/profile/profile-box";
import Overview from "@/components/profile/overview";
import Education from "@/components/profile/education/education";
import Extracurricular from "@/components/profile/extracurricular/extracurricular";
import Skills from "@/components/profile/skills/skills";
import Certifications from "@/components/profile/certifications/certifications";
import Interests from "@/components/profile/interests/interests";
import Testimonials from "@/components/profile/testimonials/testimonials";
import Personality from "@/components/profile/personality/personality";

const AboutMe = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
            <ProfileBox section={'About Me'} component={<Overview />} />
            <ProfileBox section={'Education'} component={<Education />} />
            <ProfileBox section={'Skills'} component={<Skills />} />
            <ProfileBox section={'Certifications'} component={<Certifications />} />
            <ProfileBox section={'Extracurricular'} component={<Extracurricular />} />
            <ProfileBox section={'Interests'} component={<Interests />} />
            {/* <ProfileBox section={'Testimonials'} component={<Testimonials />} /> */}
            <ProfileBox section={'Personality'} component={<Personality />} />
        </main>
    )
}

export default AboutMe;