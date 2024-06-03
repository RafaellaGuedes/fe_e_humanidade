create database feHumanidade;

use feHumanidade;

create table religiao(
idReligiao int primary key auto_increment,
religiao varchar(45)
);

select * from religiao;

create table usuario (
idUsuario int primary key not null auto_increment,
nomeCompleto varchar(45) not null,
dtNasc char(10) not null,
telefone varchar(16) not null,
email varchar(45) not null,
senha varchar(45) not null,
fkReligiao int,
	foreign key (fkReligiao) references religiao(idReligiao)
);

select * from usuario;

create table game (
idGame int primary key auto_increment,
pontos varchar(45),
fkUsuario int,
	foreign key (fkUsuario) references usuario(idUsuario)
);

select * from game;