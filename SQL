CREATE DATABASE BloodDonationApp;

USE BloodDonationApp;

CREATE TABLE Donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    blood_group VARCHAR(5) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    health_issues TEXT
);

CREATE TABLE Receivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    blood_group VARCHAR(5) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    health_issues TEXT
);
