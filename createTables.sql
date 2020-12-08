drop database if exists calypso;
create database calypso;
use calypso;

drop table if exists Users;
create table Users
(
	id int auto_increment,
	name varchar(50) not null,
	email varchar(50) not null,
	password varchar(50) not null,
	image1 varchar(70) not null,
	image2 varchar(70),
	image3 varchar(70),
	image4 varchar(70),
	bio varchar(160),
	currMatch varchar(50),
	score int not null,
	gender int not null,
	desiredGender int not null,
	radius int not null,
	encounters int not null,
	matches int not null,
	lat Decimal(8,6) not null,
	lon Decimal(9,6) not null,
	constraint Users_pk
		primary key (id)
);


drop table if exists Matches;
create table Matches
(
	matchId int not null auto_increment,
	userId1 int not null,
	userId2 int not null,
    constraint Matches_pk
		primary key (matchId),
	constraint Matches_Users_userId1_fk
        foreign key (userId1) references Users (id),
    constraint Matches_Users_userId2_fk
        foreign key (userId2) references Users (id)
);

drop table if exists ActiveUsers;
create table ActiveUsers
(
	activeId int not null auto_increment,
	userId1 int not null,
    constraint ActiveUsers_pk
		primary key (activeId),
	constraint ActiveUsers_Users_userId_fk
        foreign key (userId) references Users (id)
);


