const sqlite3 = require('sqlite3').verbose();

// open database
let db = new sqlite3.Database('./db/chinook.db');

let sql = `SELECT PlaylistId id,
            Name name
            FROM playlists
            WHERE PlaylistId = ?`;

let PlaylistId = 100;

db.get(sql, [PlaylistId], (err, row) => {
    if (err) {
        return console.error(err.message);
    }
    return row
        ? console.log(row.id, row.name)
        : console.log(`No playlist found with the id ${PlaylistId}`);
});


// close the database connection
db.close();