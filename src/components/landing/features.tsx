import { poppins, space_grotesk } from "@/app/fonts/fonts";

export default function Features(){
    return (
        <div className="pt-[10rem] py-12 ">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-4xl font-bold text-center mb-12 ${poppins.className}`}>How We Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Workshops",
                        description: "Regular hands-on sessions on cutting-edge technologies and development practices",
                        icon: "🎯"
                    },
                    {
                        title: "Projects",
                        description: "Collaborate on real-world projects and build your portfolio",
                        icon: "💻"
                    },
                    {
                        title: "Mentorship",
                        description: "Get guidance from experienced developers and seniors",
                        icon: "👨‍💻"
                    }
                ].map((feature, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl hover:border-orange-500 border transition-shadow">
                        <div className="card-body text-center">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className={`text-xl font-bold mb-2 ${poppins.className}`}>{feature.title}</h3>
                            <p className={`${space_grotesk.className}`}>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}