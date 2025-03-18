import EventCard from "@/components/cards/event-card";

const events = [
    {
        title: "Ideathon",
        description: "The Manav Rachna AIML Club hosted an exciting Ideathon where participants pitched their ideas, collaborated, and worked on innovative tech projects to add to their portfolios.",
        category: [ "Idea","Collaboration","Innovation" ],
        image:""
    },
    {
        title: "Expert Talk",
        description: "An insightful session where experts discussed ethical challenges in AI & ML research, focusing on the impact of Generative AI.",
        category: [ "Ethics","AI","ML" ]
    },
    {
        title: "Hands-On Workshop",
        description: "A practical workshop where participants explored Large Language Models, built their own GPT, and experimented with local AI setups.",
        category: [ "Workshop","LLM","GPT" ]
    },
]

export default function Page() {
    return (
        <main className="container pt-32 pl-12 mx-auto">
            <header>
                <h1> Events </h1>
                <p> Hosting events today that set you up for success tomorrow. </p>
                <hr />
            </header>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <EventCard title={event.title} description={event.description} category={event.category} />
                ))}
            </div>

            <section>
                <h3>Upcoming Events</h3>
                <div>
                    <p>Stay tuned for more exciting events!</p>
                </div>
            </section>
        </main>
    );
}