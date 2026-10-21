import React, { useState } from 'react'
import Notecontext from './noteContext'

const NoteState = (props) => {
    const host = process.env.REACT_APP_API_URL
    const state = []
    const [notes, setNotes] = useState(state);
    // Get ALl Notes
    const getnote = async () => {
        try {
            const response = await fetch(`${host}/api/note/getnote`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            });
            const note = await response.json();
            if (!response.ok) {
                throw new Error(note.msg || "Failed to fetch notes");
            }
            setNotes(note);
        } catch (error) {
            console.error("Get notes error:", error);
        }
    };
    // Add notes
    const addnote = async (title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/note/addnote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ title, description, tag })
            });
            const json = await response.json();
            console.log(json);
            if (!response.ok) {
                throw new Error(json.msg || "Failed to add note");
            }
            setNotes(prevNotes => [...prevNotes, json]);
        } catch (error) {
            console.error("Add note error:", error);
        }
    };
    const deletenote = async (id) => {
        try {
            const response = await fetch(`${host}/api/note/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            });
            const json = await response.json();
            console.log(json);
            if (!response.ok) {
                throw new Error(json.msg || "Failed to delete note");
            }
            const newnote = notes.filter((note) => note._id !== id);
            setNotes(newnote);
            console.log("Deleting note with id:", id);
        } catch (error) {
            console.error("Delete note error:", error);
        }
    };

    const editnote = async (id, title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/note/editnote/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ title, description, tag })
            });
            const json = await response.json();
            console.log(json);
            if (!response.ok) {
                throw new Error(json.msg || "Failed to update note");
            }
            const newNotes = notes.map((note) =>
                note._id === id
                    ? { ...note, title, description, tag }
                    : note
            );
            setNotes(newNotes);
        } catch (error) {
            console.error("Edit note error:", error);
        }
    };

    return (
        <Notecontext.Provider value={{ notes, getnote, addnote, deletenote, editnote }}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default NoteState
