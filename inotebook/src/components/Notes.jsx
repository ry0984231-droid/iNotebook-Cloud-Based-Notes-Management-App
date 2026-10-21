import React, { useContext, useEffect, useRef, useState } from 'react';
import Notecontext from '../context/notes/noteContext';
import NotesCard from './NoteCard';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const navigate = useNavigate();
    const { notes, getnote, editnote } = useContext(Notecontext);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getnote();
        } else {
            navigate("/login");
        }
    }, [getnote, navigate]);
    const ref = useRef(null);
    const closeref = useRef(null);
    const updatenote = (note) => {
        setnote({
            id: note._id,
            title: note.title,
            description: note.description,
            tag: note.tag
        });

        ref.current.click();
    };
    const [note, setnote] = useState({
        id: "",
        title: "",
        description: "",
        tag: ""
    });
    const handleclick = async (e) => {
        e.preventDefault();
        const wasUpdated = await editnote(
            note.id,
            note.title,
            note.description,
            note.tag
        );
        if (wasUpdated) {
            closeref.current.click();
        }
    };
    const onChange = (e) => {
        setnote({
            ...note,
            [e.target.name]: e.target.value
        });
    };
    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleclick}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">  Description</label>
                                    <textarea className="form-control" id="description" name="description" value={note.description} onChange={onChange} rows="3" minLength={10} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.title.length <= 5 || note.description.length <= 5} onClick={handleclick} type="button" className="btn btn-primary">Update Notes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Notes</h1>
                <div className='container'>
                    {notes.length === 0 && 'No notes to display'}
                </div>
                <div className="row">
                    {notes.map((note) => (
                        <NotesCard key={note._id} updatenote={updatenote} note={note} />
                    ))}
                </div>
            </div>
        </>
    );

};
export default Notes;

