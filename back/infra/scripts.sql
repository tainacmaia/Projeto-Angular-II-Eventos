CREATE TABLE events(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL,
    date DATETIME NOT NULL,
    local VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    address VARCHAR(255) NOT NULL
)

SELECT * FROM events;

DROP TABLE events;

INSERT INTO events(title,description,date, local, price, address)
VALUES ('Teste', 'Testinho', datetime('now'), 'Estádio Unicórnio', 200, 'Rua do Unicórnio, 666')
