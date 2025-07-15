import { JSX } from "react";

type ButtonProps = {
    type?: "primary" | "secondary";
    href?: string;
    func?: () => void;
    text: string;
    className?: string;
    Icon?: JSX.ElementType;
};

export default function Button({
    type,
    href,
    func,
    text,
    className = "",
    Icon,
}: ButtonProps) {
    const baseClasses =
        "px-5 py-2 rounded-full  transition-all transform hover:-translate-y-0.5 tracking-normal flex flex-row items-center justify-center gap-2 font-lexend-deca font-normal text-lg uppercase tracking-tighter";

    const primaryClasses =
        "bg-[#5465FF] text-[#ffffff] hover:bg-[#5465FF]/90";

    const secondaryClasses =
        "border border-[#5465FF] text-[#090909] hover:bg-[#f6f4f0]/90 bg-[#f6f4f0]";

    const selectedClasses =
        type === "primary" ? primaryClasses : secondaryClasses;

    return (
        <>
            {href ? (
                <a
                    href={href}
                    className={`${baseClasses} ${selectedClasses} ${className}`}
                >
                    {text}
                    {Icon && <Icon className="w-5 h-5" />}
                </a>
            ) : (
                <button
                    onClick={func}
                    className={`${baseClasses} ${selectedClasses} ${className}`}
                >
                    {text}
                    {Icon && <Icon className="w-5 h-5" />}
                </button>
            )
            }
        </>
    );
}