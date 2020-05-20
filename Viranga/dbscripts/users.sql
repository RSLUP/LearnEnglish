-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2020 at 06:44 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loginsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` tinytext NOT NULL,
  `email` tinytext NOT NULL,
  `userpwd` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `userpwd`) VALUES
(1, 'viranga', 'virangapasindu4@gmail.com', '$2y$10$aB0EDJXZadFQalMYQEG3V.Tn8s/JjC9w7OAZnL2Bpu.PbtTVVFXsu'),
(2, 'admin', 'admin@gmail.com', '$2y$10$zr0NojDax8TMmZSo/Z2dBO036RkkygviGVG7fjt6JpMjfxxioqJ6O'),
(3, 'RSLUP', 'rslup@gmail.com', '$2y$10$Zx9tvgdO1e9Itgu6vzhGruWduO13CT1CwBYc2ExYcwbhBUna79ZKC'),
(4, 'Pasindu', 'pasindu@gmail.com', '$2y$10$x409xOLV79Y/2vVqYrWdd.zWI4uEQCyKnbFCiU.Eyaa5tWiQgp7dS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
