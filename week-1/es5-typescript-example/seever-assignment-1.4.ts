/*
============================================
; Title:  seever-assignment-1.4.ts
; Author: Jake Seever
; Date:   14 July 2019
; Description: TypeScript string concatenate example.
;===========================================
*/

// Variables
let city: string = 'Milwaukee';
let teamName: string = 'Brewers';

// Function
function myTeam(city: string, teamName: string): string {
    return 'Go ' + city + ' ' + teamName + '!';
}

// Output
console.log(myTeam(city, teamName));
