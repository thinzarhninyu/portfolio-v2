import Link from "next/link";
import ContactCard from "@/components/header/contact-card";

const Header = () => {

    return (
        <header className="bg-white dark:bg-black drop-shadow-lg sticky top-0 z-5 py-2">
            <nav className="mx-auto flex items-center justify-between p-2 lg:px-10" aria-label="Global">
                <div className="flex items-center pl-4">
                    <Link href="/" className="-m-1.5 p-1.5 font-bold">
                        Thinzar's Space
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-x-5">
                    <Link href="/about-me" className="-m-1.5 p-1.5 rounded-lg hover:bg-gray-100 hover:dark:bg-gray-700">
                        <p>About Me</p>
                    </Link>
                    <Link href="/projects" className="-m-1.5 p-1.5 rounded-lg hover:bg-gray-100 hover:dark:bg-gray-700">
                        <p>Projects</p>
                    </Link>
                    <ContactCard />
                </div>
            </nav>
        </header >
    )
}

export default Header;