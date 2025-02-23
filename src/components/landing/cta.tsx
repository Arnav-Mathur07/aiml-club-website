import { poppins, space_grotesk } from "@/app/fonts/fonts";

export default function CTA() {
    return (
        <div className="py-16 bg-cyan-800 text-white">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className={`text-3xl font-bold mb-6 ${poppins.className}`}>Ready to Start Your Journey?</h2>
                <p className={`mb-8 text-lg ${space_grotesk.className}`}>
                    Join our community of passionate developers and start building your future today!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href = "https://forms.gle/GX9iwv9uvSCmgT866" className={`btn bg-white text-cyan-800 hover:bg-gray-100 ${space_grotesk.className} transition-all duration-150 hover:px-7`}>
                        Join Us &rarr;
                    </a>
                </div>
            </div>
        </div>
    )
}