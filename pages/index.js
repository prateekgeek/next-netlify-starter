// pages/index.js
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Sparsh.module.css'; // Create this CSS module

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sparsh - Empowering Autism Communities</title>
        <meta name="description" content="Sparsh non-profit supporting autism communities through connection & innovation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.mission}>
          <h1>Sparsh - Empowering Autism Communities Through Connection & Innovation</h1>
          <p>
            Sparsh is a non-profit dedicated to providing unwavering support and resources for individuals with autism and their families. We believe in fostering a community of understanding, connection, and empowerment. Through personalized support, educational resources, and innovative technology solutions, we strive to enhance the lives of autistic children and adults, and build a more inclusive future.
          </p>
        </section>

        <section className={styles.services}>
          <h2>How We Make a Difference</h2>
          <ul>
            <li>
              <img src="/heart-hands.png" alt="Family Support" />
              Family Support & Counseling
            </li>
            <li>
              <img src="/book.png" alt="Educational Resources" />
              Educational Resources & Workshops
            </li>
            <li>
              <img src="/tech.png" alt="Technology Development" />
              Technology Development
            </li>
            <li>
              <img src="/people.png" alt="Community Events" />
              Community Events & Social Gatherings
            </li>
            <li>
              <img src="/megaphone.png" alt="Advocacy" />
              Advocacy & Awareness
            </li>
          </ul>
        </section>

        <section className={styles.techInitiatives}>
          <h2>Innovating for Brighter Futures</h2>
          <p>
            Sparsh is committed to leveraging the power of technology to create meaningful solutions. We are actively developing and investing in AI-driven tools that can personalize education, improve communication, and enhance the overall quality of life for autistic individuals.
          </p>
          <p>
            Examples: AI-powered AAC app development, personalized learning platforms utilizing AI, and wearable technology for sensory regulation.
          </p>
        </section>

        <section className={styles.getInvolved}>
          <h2>Join Our Community</h2>
          <p>
            Your support can make a profound difference. Whether you're interested in volunteering, donating, or simply spreading awareness, we welcome your involvement.
          </p>
          <a href="#donate">Donate Now</a>
          <a href="#volunteer">Volunteer with Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#newsletter">Sign Up for Our Newsletter</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Contact: <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <a href="#facebook">Facebook</a> | <a href="#instagram">Instagram</a>
      </footer>
    </div>
  );
}
