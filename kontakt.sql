-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Cze 27, 2023 at 12:05 AM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `formularze`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kontakt`
--

CREATE TABLE `kontakt` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `imie` varchar(255) NOT NULL,
  `numer_telefonu` varchar(20) DEFAULT NULL,
  `sprawa` varchar(255) NOT NULL,
  `komentarz` text DEFAULT NULL,
  `data_insert` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kontakt`
--

INSERT INTO `kontakt` (`id`, `email`, `imie`, `numer_telefonu`, `sprawa`, `komentarz`, `data_insert`) VALUES
(1, 'szymon@gmail.com', 'Szymon', '123456789', 'zapytanie', 'Chciałbym zapytać o dostępność danego produktu', '2023-06-26 20:44:21'),
(2, 'krystian@wp.pl', 'Krystian', '186429389', 'skarga', 'Dostarczony produkt  nie spełnia moich wymagań', '2023-06-26 20:48:33'),
(3, 'Adam@onet.com', 'Adam', '', 'propozycja', 'Mam propozycję dotyczącą współpracy', '2023-06-26 20:49:07'),
(4, 'Dawid@o2.pl', 'Dawid', '973432790', 'inne', 'Chciałbym się dowiedzieć czegoś interesującego', '2023-06-26 20:50:14');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `kontakt`
--
ALTER TABLE `kontakt`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kontakt`
--
ALTER TABLE `kontakt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
