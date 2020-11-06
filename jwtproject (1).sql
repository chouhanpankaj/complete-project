-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2020 at 04:05 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jwtproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `status`, `created_at`, `updated_at`) VALUES
(20, 'Television', 1, '2020-10-31 03:37:48', '2020-10-31 03:37:48'),
(21, 'Cooler', 1, '2020-10-31 03:37:55', '2020-10-31 03:37:55'),
(22, 'AC', 0, '2020-10-31 03:38:34', '2020-10-31 03:38:34'),
(23, 'laptops', 1, '2020-11-02 01:41:55', '2020-11-02 01:41:55');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `order_amount` float NOT NULL,
  `deliver_address` varchar(200) NOT NULL,
  `order_status` int(11) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` float NOT NULL,
  `product_desc` varchar(200) DEFAULT NULL,
  `product_image` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category_id`, `product_name`, `product_price`, `product_desc`, `product_image`, `status`, `created_at`, `updated_at`) VALUES
(14, 21, 'Surya', 12500, 'coolller', '1604306129.jpg', 1, '2020-10-31 03:39:30', '2020-11-02 03:05:29'),
(15, 22, 'Symphony Bogoooo', 75000, '', NULL, 1, '2020-10-31 03:40:50', '2020-10-31 03:40:50'),
(16, 20, 'LG tv', 20000, 'not for sale', NULL, 1, '2020-10-31 08:52:33', '2020-10-31 08:52:33'),
(17, 20, 'LG Smarty', 30120, 'not for sale', NULL, 1, '2020-10-31 08:55:02', '2020-10-31 08:55:02'),
(18, 21, 'coca', 320, 'not for sale', '1604307037.jpg', 1, '2020-10-31 08:55:34', '2020-11-02 03:20:37'),
(19, 21, 'new cooler', 5000, '', '1604307066.jpg', 1, '2020-11-02 01:32:48', '2020-11-02 03:21:06'),
(22, 23, 'asus s14', 42000, 'not for sale', '1604309410.jpg', 1, '2020-11-02 03:53:41', '2020-11-02 04:00:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `verifystatus` tinyint(1) DEFAULT 0,
  `activestatus` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `address`, `password`, `verifystatus`, `activestatus`, `created_at`, `updated_at`) VALUES
(1, 'pankaj', 'pankaj@gmail.com', '9074977902', 'ujjain', '$2y$10$zN3BC03wEujiKQ13ZbvReeUgHuQdnbF/9w1GB.r9lZWgBsbX6A8le', 0, 1, '2020-11-03 09:24:32', '2020-11-03 09:24:32'),
(2, 'uttam', 'uttam@gmail.com', '9074977901', 'indore', '$2y$10$PZC8vRw2mFYueJI0i9BLjeSFvmHp196JGiCJF06weXI2J9g5s9m2K', 0, 1, '2020-11-03 09:29:51', '2020-11-03 09:29:51'),
(3, 'rahul', 'rahul@gmail.com', '9074977903', 'indore', '$2y$10$vYzKvW1U1d0b.9hfRbh17e3ktNs2vm48APnkzIKy5YFKChN7moJea', 0, 1, '2020-11-03 09:32:30', '2020-11-03 09:32:30'),
(4, 'neha', 'neha@gmail.com', '9074977904', 'indore', '$2y$10$54cPCpYGseakDDbAIBDViu7Kgd0Gq1It4qdqzlwG2TQDkWVz192n.', 0, 1, '2020-11-03 10:45:12', '2020-11-03 10:45:12'),
(5, 'shadman', 'shadman@gmail.com', '9074977905', 'indore', '$2y$10$Jgiy6Wt6MMbuyHeWRH63CuhxEeb/xMuXhYBehdPDMQ9UIcst4QMLe', 0, 1, '2020-11-03 10:54:19', '2020-11-03 10:54:19'),
(6, 'abhay', 'abhay@gmail.com', '123546789', 'indore', '$2y$10$aDqPsqhwocwkREpKl..pW.rc/DPNUtXaez/UeNnpBeOQbyGAlddmq', 0, 1, '2020-11-03 12:13:48', '2020-11-03 12:13:48'),
(15, 'sakshi', 'sakshi@gmail.com', '123456', 'indore', '$2y$10$51qlC.jW1iQh68VpokWLLeAYARABPI604wcBrzRehCeWb.zraXzAu', 0, 1, '2020-11-03 14:06:59', '2020-11-03 14:06:59'),
(16, 'sakshi', 'sakshi2@gmail.com', '12345', '', '$2y$10$FFSu2vNA9K//0dZBl5BgluIUfqWU/A30O0PHkWqTFmCCDuCjGBkP6', 0, 1, '2020-11-03 14:08:08', '2020-11-03 14:08:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_name` (`category_name`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_name` (`product_name`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
