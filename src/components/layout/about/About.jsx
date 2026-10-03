import "./About.scss"
import AboutUsMainContent from '/src/assets/img/about-us-main-content.jpg';
import Team1Image from '/src/assets/img/team1.png';
import Team2Image from '/src/assets/img/team2.png';
import Team3Image from '/src/assets/img/team3.png';
import Team4Image from '/src/assets/img/team4.png';
import Team5Image from '/src/assets/img/team5.png';
import Team6Image from '/src/assets/img/team6.png'

const TeamMembers = [
    { name: "John Doe", role: "CEO", image: Team1Image, alt: "Team Member 1" },
    { name: "Jane Smith", role: "CTO", image: Team2Image, alt: "Team Member 2" },
    { name: "Sarah Brown", role: "Frontend Developer", image: Team3Image, alt: "Team Member 3" },
    { name: "Emily Davis", role: "Backend Developer", image: Team4Image, alt: "Team Member 4" },
    { name: "Mike Johnson", role: "Marketing Manager", image: Team5Image, alt: "Team Member 5" },
    { name: "David Wilson", role: "Lead Designer", image: Team6Image, alt: "Team Member 6" },
]

export default function About() {
    return (
        <div className="about-container">
            <section className="about-main-content">
                <div className="about-main-left">
                    <img src={AboutUsMainContent} alt="About-Main-Content" className="about-main-image" />
                </div>

                <div className="about-main-right">
                    <h2 className="about-main-title">About Us</h2> 
                    <p className="about-main-description"> GlobeSystem We provide reliable Enterprise Resource Planning (ERP) solutions designed to help businesses streamline operations, improve efficiency, and make better decisions. Our platform brings essential business processes—including finance, inventory, sales, purchasing, human resources, and reporting—together in one integrated system. We focus on creating practical, scalable, and user-friendly solutions that adapt to the unique needs of growing businesses. By simplifying complex processes and providing real-time insights, we help organizations save time, reduce operational challenges, and build a stronger foundation for sustainable growth. </p>
                </div>
            </section>

            <section className="about-team-list-content">
                <div className="about-team-list-header">
                    <h2 className="about-team-list-title">Meet Our Team</h2>
                    <p className="about-team-list-description">Our team consists of talented individuals who are passionate about what they do.</p>
                </div>
                <div className="about-team-list">
                    {TeamMembers.map((member, index) => (
                        <div className="about-team-member" key={index}>
                            <img src={member.image} alt={member.alt} className="about-team-member-image" />
                            <h3 className="about-team-member-name">{member.name}</h3>
                            <p className="about-team-member-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
