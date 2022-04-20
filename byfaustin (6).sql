-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-04-2022 a las 23:49:46
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `byfaustin`
--
CREATE DATABASE IF NOT EXISTS `byfaustin` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `byfaustin`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distribution-standard`
--

CREATE TABLE `distribution-standard` (
  `id` int(10) UNSIGNED NOT NULL,
  `distribution_type` int(10) UNSIGNED NOT NULL,
  `area` int(10) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='precios de distribución standard por area';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distribution-type`
--

CREATE TABLE `distribution-type` (
  `id` int(10) UNSIGNED NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='tipo de distribución';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoice`
--

CREATE TABLE `invoice` (
  `id` int(10) UNSIGNED NOT NULL,
  `number` int(50) NOT NULL,
  `invoice_date` date NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `total` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoice-item`
--

CREATE TABLE `invoice-item` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_invoice` int(10) UNSIGNED NOT NULL,
  `id_product` int(10) UNSIGNED NOT NULL,
  `quantity` int(8) NOT NULL,
  `item_u_price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='item de factura . con precio unitario del producto';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `description2` varchar(100) DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  `id_type` int(10) UNSIGNED DEFAULT NULL,
  `id_colection` int(10) UNSIGNED DEFAULT NULL,
  `id_product_year` int(10) UNSIGNED DEFAULT NULL,
  `dto` int(10) DEFAULT NULL,
  `created` date DEFAULT NULL,
  `updated` date DEFAULT NULL,
  `image_ppal` varchar(80) DEFAULT NULL,
  `image_back` varchar(80) DEFAULT NULL,
  `image_det1` varchar(80) DEFAULT NULL,
  `image_det2` varchar(80) DEFAULT NULL,
  `image_det3` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='maestro de productos';

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `description2`, `price`, `id_type`, `id_colection`, `id_product_year`, `dto`, `created`, `updated`, `image_ppal`, `image_back`, `image_det1`, `image_det2`, `image_det3`) VALUES
(3, 'CARTERA FASHION CROWN', 'cuero piel ultra soft', 'ajustable a diferentes largos', 25000, 4, 5, 2, 20, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'BOLSO ABRIL BEATTY', 'cuero engrasado', 'manija ajustable', 38000, 1, 6, 1, 20, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product-colection`
--

CREATE TABLE `product-colection` (
  `id` int(10) UNSIGNED NOT NULL,
  `colection_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product-colection`
--

INSERT INTO `product-colection` (`id`, `colection_name`) VALUES
(5, 'VERANO'),
(6, 'INVIERNO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product-color`
--

CREATE TABLE `product-color` (
  `id` int(10) UNSIGNED NOT NULL,
  `color_name` varchar(100) DEFAULT NULL,
  `color_image` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product-color`
--

INSERT INTO `product-color` (`id`, `color_name`, `color_image`) VALUES
(2, 'BEIGE', 'etiqueta11Beige1.png'),
(3, 'AZUL', 'etiqueta11Azul.png'),
(4, 'VERDE', 'etiqueta11Verde.png'),
(5, 'BRUE', 'etiqueta11Brue.png'),
(6, 'GUINDA', 'etiqueta11Guinda.png'),
(7, 'SUELA', 'etiqueta11Suela.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product-color-product`
--

CREATE TABLE `product-color-product` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_color` int(10) UNSIGNED DEFAULT NULL,
  `id_product` int(10) UNSIGNED DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `dispach` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product-color-product`
--

INSERT INTO `product-color-product` (`id`, `id_color`, `id_product`, `quantity`, `dispach`) VALUES
(1, 5, 4, NULL, NULL),
(2, 7, 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product-dto`
--

CREATE TABLE `product-dto` (
  `id` int(10) UNSIGNED NOT NULL,
  `start_dto_date` date DEFAULT NULL,
  `end_dto_date` date DEFAULT NULL,
  `id_product` int(10) DEFAULT NULL,
  `dto` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='descuento de producto';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product-sale`
--

CREATE TABLE `product-sale` (
  `id` int(10) UNSIGNED NOT NULL,
  `date_week_max` date DEFAULT NULL,
  `date_week_min` date DEFAULT NULL,
  `dto` int(3) NOT NULL,
  `id_product` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product-stock`
--

CREATE TABLE `product-stock` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity` int(8) DEFAULT NULL,
  `break_point` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product-type`
--

CREATE TABLE `product-type` (
  `id` int(10) UNSIGNED NOT NULL,
  `type_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product-type`
--

INSERT INTO `product-type` (`id`, `type_name`) VALUES
(1, 'BOLSOS'),
(4, 'CARTERAS'),
(5, 'BANDOLERAS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product-year`
--

CREATE TABLE `product-year` (
  `id` int(10) UNSIGNED NOT NULL,
  `year_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product-year`
--

INSERT INTO `product-year` (`id`, `year_name`) VALUES
(1, '2022'),
(2, '2019');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type-card`
--

CREATE TABLE `type-card` (
  `id` int(10) UNSIGNED NOT NULL,
  `card_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `userName` varchar(12) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `id_category` int(10) UNSIGNED DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `bornDate` date DEFAULT NULL,
  `terminos` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='maestro de usuarios';

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `userName`, `first_name`, `last_name`, `email`, `id_category`, `password`, `avatar`, `bornDate`, `terminos`) VALUES
(1, 'usuarioPepe', 'PEPE', 'español', 'pepito@gmail.com', 1, '$2a$10$KwGzQpVhar97qy.AUD8HTuHB0bUoweNA1nzyBNX2j.ZHLzViF0qoC', 'nuevo-1650456416697.png', '1979-01-25', ''),
(2, 'usuarioJefe', 'jefecito', 'dorsen', 'jefecito@gmail.com', 2, '$2a$10$rng5orz9re9tOQbNpoV46ua8ujjxv7DhhVvuurno7M3txjJmhEwKu', 'nuevo-1650456510853.png', '1994-02-22', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user-cards`
--

CREATE TABLE `user-cards` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `type_card` int(10) UNSIGNED NOT NULL,
  `number_card` int(100) NOT NULL,
  `bank-card` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user-category`
--

CREATE TABLE `user-category` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='categoria de usuarios';

--
-- Volcado de datos para la tabla `user-category`
--

INSERT INTO `user-category` (`id`, `category_name`) VALUES
(1, 'usuario'),
(2, 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user-taxes`
--

CREATE TABLE `user-taxes` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `tax_condition` varchar(100) NOT NULL,
  `cuit` varchar(100) NOT NULL,
  `cuil` varchar(100) NOT NULL,
  `ingresosBrutos` varchar(100) NOT NULL,
  `retGanancias` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `distribution-standard`
--
ALTER TABLE `distribution-standard`
  ADD PRIMARY KEY (`id`),
  ADD KEY `distribution_type` (`distribution_type`);

--
-- Indices de la tabla `distribution-type`
--
ALTER TABLE `distribution-type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `invoice-item`
--
ALTER TABLE `invoice-item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_invoice` (`id_invoice`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_colection` (`id_colection`),
  ADD KEY `id_type` (`id_type`),
  ADD KEY `id_product-year` (`id_product_year`);

--
-- Indices de la tabla `product-colection`
--
ALTER TABLE `product-colection`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product-color`
--
ALTER TABLE `product-color`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product-color-product`
--
ALTER TABLE `product-color-product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_color` (`id_color`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `product-dto`
--
ALTER TABLE `product-dto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `product-sale`
--
ALTER TABLE `product-sale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `product-stock`
--
ALTER TABLE `product-stock`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product-type`
--
ALTER TABLE `product-type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product-year`
--
ALTER TABLE `product-year`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `type-card`
--
ALTER TABLE `type-card`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `user-cards`
--
ALTER TABLE `user-cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `type_card` (`type_card`);

--
-- Indices de la tabla `user-category`
--
ALTER TABLE `user-category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user-taxes`
--
ALTER TABLE `user-taxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `distribution-standard`
--
ALTER TABLE `distribution-standard`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `distribution-type`
--
ALTER TABLE `distribution-type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `invoice-item`
--
ALTER TABLE `invoice-item`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product-colection`
--
ALTER TABLE `product-colection`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `product-color`
--
ALTER TABLE `product-color`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `product-color-product`
--
ALTER TABLE `product-color-product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `product-dto`
--
ALTER TABLE `product-dto`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product-sale`
--
ALTER TABLE `product-sale`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product-stock`
--
ALTER TABLE `product-stock`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product-type`
--
ALTER TABLE `product-type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `product-year`
--
ALTER TABLE `product-year`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `type-card`
--
ALTER TABLE `type-card`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user-cards`
--
ALTER TABLE `user-cards`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user-category`
--
ALTER TABLE `user-category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user-taxes`
--
ALTER TABLE `user-taxes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `distribution-standard`
--
ALTER TABLE `distribution-standard`
  ADD CONSTRAINT `distribution-standard_ibfk_1` FOREIGN KEY (`distribution_type`) REFERENCES `distribution-type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `invoice-item`
--
ALTER TABLE `invoice-item`
  ADD CONSTRAINT `invoice-item_ibfk_1` FOREIGN KEY (`id_invoice`) REFERENCES `invoice` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoice-item_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`id_colection`) REFERENCES `product-colection` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`id_type`) REFERENCES `product-type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_5` FOREIGN KEY (`id_product_year`) REFERENCES `product-year` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `product-color-product`
--
ALTER TABLE `product-color-product`
  ADD CONSTRAINT `product-color-product_ibfk_1` FOREIGN KEY (`id_color`) REFERENCES `product-color` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product-color-product_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `product-sale`
--
ALTER TABLE `product-sale`
  ADD CONSTRAINT `product-sale_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `user-category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user-cards`
--
ALTER TABLE `user-cards`
  ADD CONSTRAINT `user-cards_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user-cards_ibfk_3` FOREIGN KEY (`type_card`) REFERENCES `type-card` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user-taxes`
--
ALTER TABLE `user-taxes`
  ADD CONSTRAINT `user-taxes_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
