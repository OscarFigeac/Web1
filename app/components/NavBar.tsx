import Link from "next/link";

export default function NavBar (){
    return(
        <header className = "container mx-auto space-x-6">
            <nav className = "border-cyan-900">
                <Link href="/"  ><button className="font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200" aria-current="page">Home</button></Link>
                <Link href="/scratch"><button className="font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200" aria-current="page">Scratch</button></Link>
                <Link href="/python"><button className="font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200" aria-current="page">Python</button></Link>
                <Link href="/web"><button className="font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200" aria-current="page">Web</button></Link>
            </nav>
        </header>
    )
}