import { Poppins } from 'next/font/google';
import Image from 'next/image';
import logo from "../../assets/logo.png"
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 border w-[90%] mx-auto rounded-full px-6 mt-4 fixed left-0 right-0 shadow-md">
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
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/team">Team</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-sm btn-accent rounded-lg">Join Us</button>
            </div>
        </div>
    )
}