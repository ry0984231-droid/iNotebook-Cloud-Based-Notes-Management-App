import React from 'react';
import { Link } from 'react-router-dom';
import Notes from './Notes';
import './MyNotes.css';

const MyNotes = () => (
    <main className="my-notes-page">
        <header className="my-notes-intro">
            <div>
                <span className="my-notes-eyebrow">YOUR NOTEBOOK</span>
                <p>All your thoughts, gathered in one place.</p>
            </div>
            <Link className="my-notes-add-link" to="/addnote">
                <i className="fa-solid fa-plus" aria-hidden="true" />
                Add a note
            </Link>
        </header>
        <section className="my-notes-content" aria-label="Your saved notes">
            <Notes />
        </section>
    </main>
);

export default MyNotes;
