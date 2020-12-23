-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Des 2020 pada 03.44
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kembaliin`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Daniel Manurung', 'daniel@gmail.com', '2020-12-20 05:46:16', '$2y$10$9C4gc6ba0ufGVXxFZbUbyuqBGfNkRRLBg/ZayRQ0dK0x0P65..vq.', NULL, '2020-12-20 05:46:16', '2020-12-20 05:46:16'),
(2, 'Daniel Manurung', 'giryindra@gmail.com', '2020-12-20 05:55:25', '$2y$10$8obs5phqUyoWEr/jzbA.juCe6VnQ5xisASEPBSh9X55VyEAhx5mu6', NULL, '2020-12-20 05:55:25', '2020-12-20 05:55:25'),
(3, 'Pacilayam', 'pacil@gmail.com', '2020-12-20 05:59:48', '$2y$10$ICzeJTsIFNiZWrIqep/RJeaMD.r137MQirknfHvcTYDhHoGcOJiC6', NULL, '2020-12-20 05:59:48', '2020-12-20 05:59:48'),
(4, 'Daniel Manurung', 'jukijamu@gmail.com', '2020-12-20 06:14:17', '$2y$10$Wjx1XAPa2ib1wyAZMeIEGOd3Mkme.8ezT2AYO.MHvxST55Zklzfne', NULL, '2020-12-20 06:14:17', '2020-12-20 06:14:17'),
(5, 'Mirjaaaa', 'mirja@gmail.com', '2020-12-20 06:15:20', '$2y$10$RjWgRrnIQerfjTDn0DzzM.ME6xpSD2RH7H7xkLzMB.8lv/uwKmonq', NULL, '2020-12-20 06:15:20', '2020-12-20 06:15:20'),
(6, 'Daniel Dwi', 'danieldwi@gmail.com', '2020-12-20 08:08:23', '$2y$10$j9GZksEe6PkR9xT3KUKFJe5kN9ZHQefGtTt/jIaCT5C.fIMZqCPxW', NULL, '2020-12-20 08:08:23', '2020-12-20 08:08:23'),
(7, 'Daniel Manurung', 'danielm@gmail.com', '2020-12-22 19:24:21', '$2y$10$bA2LE8V201pR6CT33DhYZuQoCn38WaI/sbkv.hMAPqsWpBqa9Tic6', NULL, '2020-12-22 19:24:22', '2020-12-22 19:24:22');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
