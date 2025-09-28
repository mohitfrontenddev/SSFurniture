import type { ReactElement } from "react"

interface ButtonProps {
    variant :"primary" | "secondary";
    title : string ;
    startIcon? : ReactElement;
    onClick?: (() => void | Promise<void>) | undefined;
    endIcon?:ReactElement;
}
const variantClasses = {
    primary:"bg-secondary text-text-dark hover:bg-dark hover:text-text-dark dark:hover:bg-primary dark:hover:text-dark ",
    secondary:"bg-dark text-text-dark hover:bg-secondary hover:text-primary dark:bg-text-dark dark:text-dark dark:hover:bg-teritory dark:hover:text-text-dark"
}

export function Button({variant , title , startIcon , onClick , endIcon}:ButtonProps) {
    return (
        <button className={`${variantClasses[variant]} flex gap-2 items-center px-3 py-3 md:px-4 md:py-4 text-caption md:text-body-sm leading-none rounded-md font-medium cursor-pointer transition-all duration-300 `} onClick={onClick}>{startIcon && <span className="w-5 h-5">{startIcon}</span>}{title}{endIcon && <span className="w-5 h-5">{endIcon}</span>}</button>
    )
}