CREATE DATABASE test;

use test;

CREATE TABLE users_test_jacobohernandez(
    id: INT(11) NOT NULL,
    nombre: VARCHAR(30) NOT NULL,
    nombreDos: VARCHAR(30),
    apellido: VARCHAR(30) NOT NULL,
    apellidoMa: VARCHAR(30) NOT NULL,
    fecha: VARCHAR(15) NOT NULL,
    email, VARCHAR(40) NOT NULL,
    telefono: VARCHAR(15) NOT NULL
)

ALTER TABLE users_test_jacobohernandez
    ADD PRIMARY KEY (id);

ALTER TABLE users_test_jacobohernandez
    MODIFY id int(11) NOT NULL AUTO_INCREMENT