import Image from 'next/image';
import logo from "../../assets/logo.png"
import Link from 'next/link';
import { poppins, space_grotesk } from '@/app/fonts/fonts';

export default function Navbar() {
    return (
        <div className="navbar border w-[90%] mx-auto rounded-full px-6 mt-4 fixed left-0 right-0 shadow-md bg-gray-50 z-10">
            <div className="navbar-start">
                <div className='flex items-center'>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                    <h1 className={`${poppins.className} font-extrabold text-3xl text-[#302e2f]`}>
                        <Link href="/">mrac</Link>
                    </h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 ${space_grotesk.className}`}>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/team">Team</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className={`btn btn-sm btn-accent rounded-lg ${space_grotesk.className}`}>Sponsor Us</button>
            </div>
        </div>
    )
}