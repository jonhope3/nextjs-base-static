import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ParallaxProvider>
            <div className={styles.container}>
                <Head>
                    <title>Our Wedding</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;700&display=swap" rel="stylesheet" />
                </Head>

                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#story">Our Story</a></li>
                        <li><a href="#details">Details</a></li>
                        <li><a href="#rsvp">RSVP</a></li>
                    </ul>
                </nav>

                {mounted && (
                    <>
                        <ParallaxBanner
                            layers={[
                                {
                                    image: 'https://wallpapercave.com/wp/wp4902063.jpg',
                                    speed: -20
                                }
                            ]}
                            className={styles.parallaxBanner}
                        >
                            <main className={styles.main} id="home">
                                <h1 className={styles.title}>John & Jane</h1>
                                <p className={styles.date}>August 15, 2025</p>
                                <a href="#rsvp" className={styles.rsvpButton}>RSVP</a>
                            </main>
                        </ParallaxBanner>

                        <section id="story" className={styles.section}>
                            <Parallax translateY={[-20, 20]}>
                                <h2>Our Story</h2>
                                <p>We met on a rainy day in Central Park. John was trying to catch his runaway dog, and Jane was there to help. The rest, as they say, is history.</p>
                            </Parallax>
                        </section>

                        <ParallaxBanner
                            layers={[
                                {
                                    image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
                                    speed: -15
                                }
                            ]}
                            className={styles.parallaxBanner}
                        >
                            <div className={styles.overlayContent}>
                                <h2>"Love is composed of a single soul inhabiting two bodies."</h2>
                                <p>- Aristotle</p>
                            </div>
                        </ParallaxBanner>

                        <section id="details" className={styles.section}>
                            <Parallax translateY={[-15, 15]}>
                                <h2>Wedding Details</h2>
                                <p>Join us for our celebration of love!</p>
                                <ul>
                                    <li>Date: August 15, 2025</li>
                                    <li>Time: 4:00 PM</li>
                                    <li>Venue: The Grand Hotel, New York City</li>
                                    <li>Dress Code: Formal</li>
                                </ul>
                            </Parallax>
                        </section>

                        <ParallaxBanner
                            layers={[
                                {
                                    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
                                    speed: -15
                                }
                            ]}
                            className={styles.parallaxBanner}
                        >
                            <div className={styles.overlayContent}>
                                <h2>"To love and be loved is to feel the sun from both sides."</h2>
                                <p>- David Viscott</p>
                            </div>
                        </ParallaxBanner>

                        <section id="rsvp" className={styles.section}>
                            <Parallax translateY={[-10, 10]}>
                                <h2>RSVP</h2>
                                <p>We would be honored to have you join us on our special day. Please RSVP by July 1, 2025.</p>
                                <button className={styles.rsvpButton}>RSVP Now</button>
                            </Parallax>
                        </section>
                    </>
                )}
            </div>
        </ParallaxProvider>
    );
}