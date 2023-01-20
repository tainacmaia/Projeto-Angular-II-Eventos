DROP TABLE reservations;
DROP TABLE users;
DROP TABLE events;

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

INSERT INTO users(username, password) VALUES ('adm', '$2a$15$4Nc.eT1FkTL4EVrZfgxHxu9Q3teJ3hKyHoCGEYpbtD.Fap649Droa');

INSERT INTO events(title,description,date, local, price, address) VALUES ('Tai a Ruiva', 'show de k-pop', datetime('now'), 'Estádio Unicórnio', 700, 'Rua do Unicórnio, 70');
INSERT INTO events(title,description,date, local, price, address) VALUES ('Show do Miguel', 'show para adultos', datetime('now'), 'Creche', 620, 'Rua Fraldas, 1404');
INSERT INTO events(title,description,date, local, price, address) VALUES ('Ma a Praina', 'lual na praia', datetime('now'), 'Caraguatatuba', 672, 'Avenida do sol, 09');
INSERT INTO events(title,description,date, local, price, address) VALUES ('Nat e os Amigurumis', 'festival de crochê', datetime('now'), 'ExpoCenter Norte', 598, 'Rua Bernardo, 333');
INSERT INTO events(title,description,date, local, price, address) VALUES ('Teteus Tênis', 'feira de sneakers', datetime('now'), 'Praça Central', 550, 'Rua dos descalços, 25');
INSERT INTO events(title,description,date, local, price, address) VALUES ('Leitão a Pururuca', 'festival do torresmo', datetime('now'), 'Mercadão', 550, 'Avenida Cardoso, 98');

INSERT INTO reservations(name, quantity, eventId) VALUES ('Mateus Augusto', 2, 5);
INSERT INTO reservations(name, quantity, eventId) VALUES ('Lucas Henriques', 3, 2);


-- INSERT INTO users(username, password) VALUES ('adm', '12345')

SELECT * FROM reservations;
SELECT * FROM users;
SELECT * FROM events;

-- SELECT * FROM events as e JOIN reservations as r ON e.id = r.eventId WHERE e.title = 'Teste'