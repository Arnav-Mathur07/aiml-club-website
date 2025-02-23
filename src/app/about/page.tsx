import { poppins, space_grotesk } from "../fonts/fonts";

export default function Page() {
    return (
        <div className="container pt-32 pl-12 mx-auto w-1/2">
            <h1 className={`${poppins.className} abt-h1`}><strong>About</strong></h1>
            <p className={`${space_grotesk.className} abt-p1`}><b>MRAC (Manav Rachna AIML Club)</b> is a vibrant student-led community dedicated to explore the ever-evolving world of Artificial Intelligence and Machine Learning. Our club serves as a hub for AI enthusiasts, providing a collaborative space where students can engage with cutting-edge technologies, participate in hands-on projects, mentoring, and enhance their technical expertise.<br />We emphasize learning through experience, offering workshops, coding sessions, and research opportunities to help students stay ahead in the rapidly growing AI landscape. Through industry interactions, hackathons, and knowledge-sharing sessions, we aim to nurture talent, encourage critical thinking, and inspire innovation.<br />At MRAC, we welcome students from all backgrounds—whether you're just starting your AI journey or looking to refine your expertise.</p><br />


            <h3 className={`${poppins.className} abt-h3`}>Mission</h3>
            <p className={`${space_grotesk.className} abt-p1`}>Our mission is to <b>cultivate a community of passionate and driven individuals</b> who are eager to explore and innovate in the ever-evolving world of technology. We strive to provide our members with the right blend of knowledge and hands-on experience to help them excel in the field of Artificial Intelligence and Machine Learning.<br />Through collaborative learning, mentorship, and real-world projects, we aim to not only enhance technical expertise but also nurture leadership, critical thinking, and problem-solving skills. Our goal is to empower future innovators to make meaningful contributions to technology and drive impactful change in the industry.</p><br />
            
            <h3 className={`${poppins.className} abt-h3`}>Vision</h3>
            <p className={`${space_grotesk.className} abt-p1`}>our vision is built on three core pillars: <b>Learn, Develop, and Advance</b>. We believe that a strong foundation in technology begins with mastering the fundamentals, equipping individuals with the skills and confidence to explore new ideas and innovations.<br />Beyond just learning, we foster a culture of <b>collaboration and hands-on development</b>, encouraging our members to apply their knowledge in meaningful ways. Through projects, teamwork, and shared experiences, we aim to inspire a university-wide mindset of innovation and problem-solving.</p>
        </div>
    );
}