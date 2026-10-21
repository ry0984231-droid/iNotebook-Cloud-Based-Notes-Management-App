import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-hero-copy">
                    <span className="about-eyebrow"><span /> A little about us</span>
                    <h1>Make room for<br /><span>your best ideas.</span></h1>
                    <p>iNotebook gives your thoughts a calm, organized place to land. Capture what matters, find it when you need it, and get back to what you were doing.</p>
                    <Link className="about-cta" to="/addnote">Start a new note <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
                </div>
                <div className="about-visual" aria-label="A preview of organized notes">
                    <div className="about-orbit orbit-one" /><div className="about-orbit orbit-two" />
                    <div className="about-note note-back"><span className="note-dot" /> <span className="note-line line-long" /><span className="note-line" /></div>
                    <div className="about-note note-main"><div className="note-header"><span className="note-dot" /><span>MY NOTEBOOK</span><i className="fa-solid fa-ellipsis" aria-hidden="true" /></div><h2>Ideas worth<br />remembering.</h2><p>A space for the little things that turn into big things.</p><div className="note-divider" /><div className="note-footer"><span><i className="fa-regular fa-clock" aria-hidden="true" /> Just now</span><span className="note-spark"><i className="fa-solid fa-sparkles" aria-hidden="true" /></span></div></div>
                    <div className="about-float"><i className="fa-solid fa-check" aria-hidden="true" /><span>Saved for later</span></div>
                </div>
            </section>

            <section className="about-details">
                <div className="about-section-heading"><span>Thoughtfully simple</span><h2>Less clutter. More clarity.</h2><p>Good tools make it easier to focus on the things you want to remember.</p></div>
                <div className="about-feature-grid">
                    <article className="about-feature"><div className="feature-icon icon-blue"><i className="fa-solid fa-pen-to-square" aria-hidden="true" /></div><h3>Capture in a moment</h3><p>Quickly write down ideas, reminders, and details before they slip away.</p></article>
                    <article className="about-feature"><div className="feature-icon icon-violet"><i className="fa-solid fa-layer-group" aria-hidden="true" /></div><h3>Keep it organized</h3><p>Bring your notes together in one tidy place that feels easy to return to.</p></article>
                    <article className="about-feature"><div className="feature-icon icon-green"><i className="fa-solid fa-lock" aria-hidden="true" /></div><h3>Yours to manage</h3><p>Sign in to keep your personal notes associated with your account.</p></article>
                </div>
            </section>

            <section className="about-bottom-cta"><div><span>Your next thought starts here</span><h2>A clearer mind is one note away.</h2></div><Link to="/addnote">Create a note <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link></section>
        </main>
    );
}

export default About;
