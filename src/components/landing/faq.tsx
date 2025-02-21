import { poppins, space_grotesk } from "@/app/fonts/fonts"


const faq = [
    {
        q: "What is the Manav Rachna AIML Club?",
        a: "MRAC is a where students curious about AIML come together to conduct workshops, projects, and mentorship sessions to help other students learn and grow."
    },
    {
        q: "Who can join MRAC?",
        a: "If you're in year 1-3 and curious about AI/ML, you're in! No experience? No problem. Just bring your enthusiasm."
    },
    {
        q: "How can I join the club?",
        a: "Just fill out the Google form on our website. Membership is free, and yes, we welcome absolute beginners! We do expect you to know a bit though, so be prepared!"
    },
    {
        q: "How can I contribute?",
        a: "Attend events, build cool projects, share ideas! If you have an idea for a workshop or project, we'd love to hear from you!"
    },
    {
        q: "How can I contact MRAC?",
        a: "You can contact MRAC on Twitter, Instagram, or by email. You can also join our Discord server to chat with other members of the community."
    },
    {
        q: "How can I sponsor MRAC?",
        a: "If you're interested in sponsoring MRAC or collaborating on an event, send us an email or fill the form on our site to discuss partnership opportunities. We're always looking for new sponsors to help us grow and provide more opportunities for students."
    }
]

export default function FAQ(){
    return (
        <section className="container mx-auto px-4 py-8" id="faq">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
                <h1 className={`${poppins.className} text-3xl sm:text-4xl font-bold mb-6 text-text`}>Frequently Asked Questions</h1>
                <p>Have another question? Contact us by&nbsp;
                    <a href="mailto:mrac.executive@gmail.com" className="link">Email</a>.</p>
            </div>
            <div className="lg:w-1/2 space-y-4 mb-4">
                {
                    faq.map((item, index) => {
                        return (
                            <div className="join join-vertical w-full divide-y" key={index}>
                                <div className="collapse collapse-plus join-item border-b border-gray-300">
                                    <input type="radio" name={`faq`} className="peer" />
                                    <div className={`${poppins.className}  collapse-title text-xl font-medium peer-checked:text-accent`}>{item.q}</div>
                                    <div className="collapse-content">
                                        <p className={`${space_grotesk.className} text-md text-gray-600`}>{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    )
}