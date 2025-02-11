import Link from "next/link";

export default function NavBar (){
    return(
        <header className = "container mx-auto">
            <nav className = "border-cyan-900">
                <Link href="/"><button className="font-bold text-black underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-black dark:hover:text-gray-300" aria-current="page">Home</button></Link>
                <Link href="/scratch"><button className="font-bold text-black underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-black dark:hover:text-gray-300" aria-current="page">Scratch</button></Link>
                <Link href="/python"><button className="font-bold text-black underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-black dark:hover:text-gray-300" aria-current="page">Python</button></Link>
                <Link href="/web"><button className="font-bold text-black underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-black dark:hover:text-gray-300" aria-current="page">Web</button></Link>
            </nav>
        </header>
    )
}