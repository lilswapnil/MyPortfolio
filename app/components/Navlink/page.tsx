"use client";

export default function Navlink() {
    return (
        <nav className="flex flex-col lg:flex-row justify-center gap-8">
            <a href="/about" className="text-gray-800 hover:text-blue-500 transition font-medium">About</a>
            <a href="/credentials" className="text-gray-800 hover:text-blue-500 transition font-medium">Credentials</a>
            <a href="/projects" className="text-gray-800 hover:text-blue-500 transition font-medium">Projects</a>
        </nav>
    )
}