const { nanoid } = require("nanoid");
const notes = require("../src/notes");

const addNoteHandler = (request, h) => {
    const {title, tags, body} = request.payload;
    
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt
    };

    notes.push(newNote)

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status : 'success',
            message : 'catatan berhasil ditambahkan',
            data: {
                noteId : id,
            },
        });
        response.code(201);
        return response;
    }
    
    const response = h.response({
        status : 'fail',
        message : 'catatan gagal ditambahkan',
    });

    response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
    response.code(500);
    return response;
};

const getAllNotesHandler = () => ({
    status : 'success',
    data : {
        notes,
    },
});

// mengekspor dengan cara object literals
module.exports = {addNoteHandler, getAllNotesHandler};