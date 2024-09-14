
// import images from '../images/download.jpg';
import React from 'react'

// function About() {
const About = () => {
    // Example team member data
    const teamMembers = [
      {
          name: 'Alice Johnson',
          role: 'CEO',
          image: 'https://via.placeholder.com/100',
          bio: 'Alice is the visionary behind our company. With over 20 years of experience in the industry, she leads our team with passion and expertise.'
      },
      {
          name: 'Bob Smith',
          role: 'CTO',
          image: 'https://via.placeholder.com/100',
          bio: 'Bob oversees all technological advancements and ensures our platform is at the cutting edge of technology.'
      },
      {
          name: 'Carol White',
          role: 'Marketing Director',
          image: 'https://via.placeholder.com/100',
          bio: 'Carol is responsible for all our marketing efforts and customer engagement strategies.'
      }
  ];

  return (
    <div>
    <div>
            <header>
                <h1>About Us</h1>
            </header>
            <main>
                <section>
                    <h2>Our Company</h2>
                    <p>Welcome to our store! We are dedicated to providing the best products and services to our customers. Our journey started in [Year], and since then, we have been committed to quality and customer satisfaction.</p>
                </section>
                <section>
                    <h2>Meet Our Team</h2>
                    <div>
                        {teamMembers.map(member => (
                            <div key={member.name}>
                                <img src={member.image} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p><strong>{member.role}</strong></p>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Product Store. All rights reserved.</p>
            </footer>
        </div>

      
    </div>
  )
}

export default About



        // img src={images}  */}
      

// use link tag instead of a tag to 