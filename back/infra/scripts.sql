CREATE TABLE events(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NULL,
    date TEXT NOT NULL,
    local TEXT NOT NULL,
    price INTEGER NOT NULL,
    address TEXT NOT NULL
)

SELECT * FROM events;

DROP TABLE events;

INSERT INTO events(title,description,date, local, price, address)
VALUES ('Teste', 'Testinho', datetime('now'), 'Estádio Unicórnio', 200, 'Rua do Unicórnio, 666')
