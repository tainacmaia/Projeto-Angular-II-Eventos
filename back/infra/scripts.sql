CREATE TABLE events(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL,
    date DATETIME NOT NULL,
    local VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    address VARCHAR(255) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME
);

CREATE TABLE reservations(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    eventId INTEGER NOT NULL REFERENCES events(id)
);

CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    createdAt DATETIME,
    updatedAt DATETIME
);

DROP TABLE reservations;
DROP TABLE users;
DROP TABLE events;

INSERT INTO reservations(name, quantity, eventId) VALUES ('Testadora', 2, 1)
-- INSERT INTO users(username, password) VALUES ('adm', '12345')
INSERT INTO users(username, password) VALUES ('adm', '$2a$15$4Nc.eT1FkTL4EVrZfgxHxu9Q3teJ3hKyHoCGEYpbtD.Fap649Droa')

INSERT INTO events(title,description,date, local, price, address)
VALUES ('Teste', 'Testinho', datetime('now'), 'Estádio Unicórnio', 200, 'Rua do Unicórnio, 666')

SELECT * FROM reservations;
SELECT * FROM users;
SELECT * FROM events;

SELECT * FROM events as e JOIN reservations as r ON e.id = r.eventId WHERE e.title = 'Teste'