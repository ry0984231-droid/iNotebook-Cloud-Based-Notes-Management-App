import React, { useContext, useState } from 'react';
import notecontext from '../context/notes/noteContext';
import './AddNote.css';

const AddNote = () => {
    const context = useContext(notecontext);
    const { addnote } = context;

    const [note, setnote] = useState({
        title: "",
        description: "",
        tag: ""
    });
    const handleclick = async (e) => {
        e.preventDefault();
        const wasAdded = await addnote(note.title, note.description, note.tag);
        if (wasAdded) {
            setnote({ title: "", description: "", tag: "" });
        }

    };
    const onChange = (e) => {
        setnote({
            ...note,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="add-note-page">
            <section className="add-note-panel">
                <div className="add-note-heading">
                    <div>
                        <span className="add-note-eyebrow">YOUR NOTEBOOK</span>
                        <h1>Add a note</h1>
                        <p>Capture an idea, a reminder, or anything worth keeping.</p>
                    </div>
                    <span className="add-note-heading-icon" aria-hidden="true"><i className="fa-regular fa-note-sticky" /></span>
                </div>
                <form className="add-note-form" onSubmit={handleclick}>
                    <div className="mb-3 note-field-title">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Give your note a title" value={note.title} onChange={onChange} required />
                    </div>
                    <div className="mb-3 note-field-tag">
                        <label htmlFor="tag" className="form-label">Tag <span>(optional)</span></label>
                        <input type="text" className="form-control" id="tag" name="tag" placeholder="e.g. Ideas, Work" value={note.tag} onChange={onChange} />
                    </div>
                    <div className="mb-3 note-field-description">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" name="description" placeholder="Write down the details you want to remember..." value={note.description} onChange={onChange} rows="3" minLength={10} required />
                    </div>
                    <button disabled={note.title.length <= 5 || note.description.length <= 5} type="submit" className="btn btn-primary add-note-submit"><i className="fa-solid fa-plus" aria-hidden="true" /> Add Note</button>
                </form>
            </section>

        </main>
    );
};

export default AddNote;

