CREATE TABLE events(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(40) NOT NULL,
    date TEXT NOT NULL
)

CREATE TABLE addresses(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    zipCode INTEGER(8) NOT NULL,
    street VARCHAR(100) NOT NULL,
    number INTEGER(10) NOT NULL,
    complement VARCHAR(100) NULL,
    neighborhood VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(30) NOT NULL,
    eventId INTEGER NOT NULL,
    CONSTRAINT fk_eventId
    FOREIGN KEY (eventId)
    REFERENCES events (id)
)

SELECT * FROM events;
SELECT * FROM addresses;

DROP TABLE events;
DROP TABLE addresses;

INSERT INTO events(title,date)
VALUES ('Teste', datetime('now'))

INSERT INTO addresses(zipCode, street, number, complement, neighborhood, city, state, eventId)
VALUES (123456789, 'Rua tralala', 1, 'tralala', 'tralala', 'tralala', 'tralala', 1)
