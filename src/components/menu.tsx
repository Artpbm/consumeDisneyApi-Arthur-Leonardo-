import Link from "next/link";

interface Iprops{
    op1: string;
    op2: string;
    op3: string;
}

export const Menu = ({op1, op2, op3} : Iprops) => {
    return(
        <header className="bg-black shadow-md">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link className="text-white font-semibold hover:text-blue-600 transition" href={"/"}>{op1}</Link>
                <Link className="text-white font-semibold hover:text-blue-600 transition" href={"/axiosPage"}>{op2}</Link>
                <Link className="text-white font-semibold hover:text-blue-600 transition" href={"/hookPage"}>{op3}</Link>
            </nav>
        </header>
    )
}