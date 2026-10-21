const Notes = require("../models/notes");

async function handleGetAllNotes(req, res) {
    try {
        const allNotes = await Notes.find({ user: req.user.id });
        return res.json(allNotes);
    } catch (err) {
        return res.status(500).json({ msg: "server error" });
    }
}
async function handleCreateNotes(req, res) {
    try {
        const body = req.body;
        if (!body || !body.title?.trim() || !body.description?.trim()) {
            return res.status(400).json({ msg: "Title and description are required" });
        }
        const note = await Notes.create({
            title: body.title,
            description: body.description,
            tag: body.tag?.trim() || "General",
            user: req.user.id,
        });
        return res.status(200).json({
            msg: "Note created successfully",
            note
        });
    } catch (err) {
        return res.status(500).json({ msg: "server error" });
    }
}

async function handleGetAllNotesById(req, res) {
    try {
        const note = await Notes.findOne({ _id: req.params.id, user: req.user.id });
        if (!note) {
            return res.status(404).json({
                msg: "Note not found"
            });
        }
        return res.status(200).json({
            msg: "Note findById successfully",
            note
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Server error"
        });
    }
}

async function handleEditAllNotes(req, res) {
    try {
        const { title, description, tag } = req.body;
        if (!title?.trim() || !description?.trim()) {
            return res.status(400).json({ msg: "Title and description are required" });
        }
        const updatedNote = await Notes.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            {
                $set: {
                    title: title.trim(),
                    description: description.trim(),
                    tag: tag?.trim() || "General"
                }
            },
            { new: true, runValidators: true }
        );
        if (!updatedNote) {
            return res.status(404).json({
                msg: "Note not found"
            });
        }
        return res.status(200).json({
            msg: "Note updated successfully",
            note: updatedNote
        });
    } catch (err) {
        console.error("Update note error:", err);
        return res.status(500).json({
            msg: "Server error"
        });
    }
}
async function handleDeletNotes(req, res) {
    try {
        const deletedNote = await Notes.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!deletedNote) {
            return res.status(404).json({
                msg: "Note not found"
            });
        }
        return res.status(200).json({
            msg: "Note deleted successfully",
            note: deletedNote
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Server error"
        });
    }
}

module.exports = {
    handleGetAllNotes,
    handleCreateNotes,
    handleGetAllNotesById,
    handleEditAllNotes,
    handleDeletNotes


}
