import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    BiLogoLinkedinSquare,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoFacebookSquare,
    BiLogoGmail,
    BiLogoTelegram
} from "react-icons/bi";

const ContactCard = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <p className="hover:cursor-pointer rounded-lg hover:bg-gray-100 p-1.5">Contact</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white flex flex-row w-fit me-5 mt-5">
                <DropdownMenuItem>
                    <a href="https://www.linkedin.com/in/thinzarhninyu/">
                        <BiLogoLinkedinSquare className="text-2xl hover:decoration-white" />
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://github.com/thinzarhninyu">
                        <BiLogoGithub className="text-2xl hover:decoration-white" />
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://www.instagram.com/micxehye/">
                        <BiLogoInstagram className="text-2xl hover:decoration-white" />
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://www.facebook.com/thinzarhninyu/">
                        <BiLogoFacebookSquare className="text-2xl hover:decoration-white" />
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://t.me/micxehye">
                        <BiLogoTelegram className="text-2xl hover:decoration-white" />
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="mailto:thinzarhninyu.17@gmail.com">
                        <BiLogoGmail className="text-2xl hover:decoration-white" />
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ContactCard;