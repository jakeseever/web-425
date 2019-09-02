/*
============================================
; Title:  app.ts
; Author: Jake Seever
; Date:  30 August 2019
; Description: Server-side communication
; with Node and Express Example.
;===========================================
*/

import * as express from "express";

const app = express();

// Composer constructor
interface Composer {
    id: number,
    firstName: string,
    lastName: string
}

// Array of Composer objects
const composers: Composer[] = [
    { id: 1, firstName: "Johann", lastName: "Bach"},
    { id: 2, firstName: "Wolfgang", lastName: "Mozart"},
    { id: 3, firstName: "Ludwig", lastName: "Beethoven"},
    { id: 4, firstName: "Giuseppe", lastName: "Verdi"},
    { id: 5, firstName: "Frederic", lastName: "Chopin"},
];

// Function to get composers
function getComposers(): Composer[] {
    return composers;
}

app.get('/', (request, response) => {
    response.send('The URL for composers is http://localhost:3000/api/composers');
});

// URL for the list of composers
app.get('/api/composers', (request, response) => {
    response.json(getComposers());
});

function getComposerById(composerId: number): Composer {
    return composers.find(c => c.id == composerId);
}

// Get composers by ID
app.get('/api/composer/:id', (request, response) => {
    response.json(getComposerById(request.params.id));
});

// Server connection on port 3000
const server = app.listen(3000, "localhost", () => {
    console.log("Listening on port 3000");
});
