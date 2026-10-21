import React, { useContext } from 'react';
import notecontext from '../context/notes/noteContext';
import './NoteCard.css';

const NotesCard = ({ note, updatenote }) => {
    const context = useContext(notecontext);
    const { deletenote } = context;
    const handleclick = () => {
        deletenote(note._id);
    }
    return (
        <div className="col-md-4 col-lg-3 my-3 note-card-column">
            <article className="card h-100 note-card">
                <div className="card-body note-card-body">
                    <h5 className="card-title note-card-title">{note.title}</h5>
                    <p className="card-text note-card-description">{note.description}</p>
                    <p className="card-text note-card-tag">
                        <span>{note.tag || 'General'}</span>
                    </p>
                    <div className="note-card-actions">
                        <button type="button" className="note-card-action note-card-delete" onClick={handleclick} aria-label={`Delete ${note.title}`} title="Delete note">
                            <i className="fa-solid fa-trash" aria-hidden="true" />
                        </button>
                        <button type="button" className="note-card-action note-card-edit" onClick={() => updatenote(note)} aria-label={`Edit ${note.title}`} title="Edit note">
                            <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default NotesCard;
