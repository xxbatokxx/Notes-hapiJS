const { addNoteHandler, getAllNotesHandler } = require("../src/handler");

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
    {
        method : 'GET',
        path : '/notes',
        handler : getAllNotesHandler,
    },
];

module.exports = routes;