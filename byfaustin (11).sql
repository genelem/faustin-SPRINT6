-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-05-2022 a las 03:09:13
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
  `delivery_dir` varchar(100) DEFAULT NULL,
  `delivery_cost` int(10) DEFAULT NULL,
  `total` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoice-item`
--

CREATE TABLE `invoice-item` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_invoice` int(10) UNSIGNED DEFAULT NULL,
  `id_product` int(10) UNSIGNED NOT NULL,
  `quantity` int(8) NOT NULL,
  `item_u_price` int(10) NOT NULL,
  `id_user` int(10) UNSIGNED DEFAULT NULL,
  `made` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='item de factura . con precio unitario del producto';

--
-- Volcado de datos para la tabla `invoice-item`
--

INSERT INTO `invoice-item` (`id`, `id_invoice`, `id_product`, `quantity`, `item_u_price`, `id_user`, `made`) VALUES
(81, NULL, 10, 10, 27500, 1, NULL),
(82, NULL, 4, 10, 21000, 1, NULL),
(83, NULL, 13, 5, 29000, 1, NULL),
(84, NULL, 12, 8, 15000, 1, NULL);

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
(4, 'BOLSO LEON FERRARI', 'CUERO ENCERADO INTERVENCIÓN ARTISTA', 'MANIJA REFORZADA ', 21000, 1, 7, 2, 5, NULL, NULL, 'carteraColoresNew.ppal.png', 'carteraColoresNew.back.png', 'carteraColoresNew.det1.png', 'carteraColoresNew.det2.png', 'carteraColoresNew.det1.png'),
(5, 'MOCHILA DAYRELAX ', 'CUERO ACERADO HUECO GRABADO', 'LIVIANA CON BOLSILLOS ', 30000, 10, 5, 1, 10, NULL, NULL, 'mochilAzulRelax.ppal.png', 'mochilAzulRelax.back.png', 'mochilAzulRelax.detail1.png', 'mochilAzulRelax.detail2.png', 'mochilAzulRelax.detail1.png'),
(6, 'CARTERA MONTECARLO GLIP', 'CUERO ARGENTINO CON RELIEVES ', 'CON ACCESORIOS', 55000, 4, 7, 2, 30, NULL, NULL, 'carteraVerdeGlipSinFondo.png', 'carteraVerdeGlipSinFondo.back.png', 'carteraVerdeGlipSinFondo.detail1.png', 'carteraVerdeGlipSinFondo.detail2.png', 'carteraVerdeGlipSinFondo.detail1.png'),
(7, 'BOLSO FAUSTINE', 'CUERO PIEL', 'INTERIOR ECOLOGICO', 25000, 1, 6, 2, 10, NULL, NULL, 'bolsoFaustineSinFondo.png', 'bolsoFaustineSinFondo.back.png', 'bolsoFaustineSinFondo.detail1', 'bolsoFaustineSinFondo.detail3', NULL),
(8, 'CARTERA BRIGIT', 'CUERO PIEL', 'MANIJAS TRENZADAS', 50000, 4, 6, 2, 20, NULL, NULL, 'bandoleraBeigeSinFondo.png', 'bandoleraBeigeSinFondo.back.png', 'bandoleraBeigeSinFondo.detail1.png', 'bandoleraBeigeSinFondo.detail1.png', 'bandoleraBeigeSinFondo.detailxxx.jpg'),
(9, 'CARTERA VERSACE STILE', 'CUERO ENCERADO', 'MANIJAS TRENZADAS', 35000, 4, 6, 2, 15, NULL, NULL, 'carteraVersaceNegraSinFondo.png', 'carteraVersaceNegraSinFondo.back.png', 'carteraVersaceNegra.detail2.png', 'carteraVersaceNegra.detail1.png', 'carteraVersaceNegra.detail2.png'),
(10, 'BANDOLERA DE MANO NUEVA COLECCION', 'CUERO GRANEADO', 'MANIJAS DESMONTABLES', 27500, 5, 6, 2, 20, NULL, NULL, 'cartera 2SinFondo.png', 'cartera 1SinFondo.png', 'cartera 4.jpg', 'cartera 3.jpg', 'cartera 4.jpg'),
(11, 'MOCHILA VERDE START YOUNG', 'CUERO VACA ENGRASADO', 'HERRAJES USAFORT', 46000, 10, 6, 6, 18, NULL, NULL, 'mochilaGVerdeSinFondo.png', '', 'mochilaGVerdeSinFondo.detail1.png', ' mochilaGVerdeSinFondo.detail2.png', 'mochilaGVerdeSInFondo.detail2.jpg'),
(12, 'BANDOLERA EXCLUSIVE', 'CUERO ENCERADO TRUGAL', 'DETALLES COCIDOS /MANIJAS DESMONTABLES', 15000, 5, 6, 2, 15, NULL, NULL, 'bandoleraRojaSinFondo.png', 'bandoleraRojaSinFondo.back.png', 'bandoleraRojaSinFondo.detail1.png', 'bandoleraRojaSInFondo.detail2.png', 'bandoleraRojaSinFondo.detail1.png'),
(13, 'BANDOLERA GUCCI', 'CUERO VACA ARGENTINO', 'DETALLES SOBRE RELIEVE ', 29000, 5, 5, 1, 10, NULL, NULL, 'bandoleraAzulSinFondo.png', 'bandoleraAzulSInFondo.back.png', 'bandoleraAzulSinFondo.detail1.png', 'bandoleraAzulSInFondo.detail2.png', 'bandoleraAzulSinFondo.detail1.png'),
(14, 'BANDOLERA BIG MAN', 'CUERO VACA ARGENTINO', 'CARRY NOTEBOOK', 38000, 5, 5, 2, 11, NULL, NULL, 'morralHombreSinFondo.png', 'morralHombreSInFondo.back.png', 'morralHombreSinFondo.detail1.png', 'morralHombreSInFondo.detail2.png', 'morralHombreSinFondo.detail1.png'),
(15, 'MOCHILA GUCCI TEXTURADA', 'CUERO CHAROL CON BAJO RELIEVE', 'EXTRA LIGHT CON 3 BOLSILLOS', 33000, 10, 7, 1, 10, NULL, NULL, 'mochilaGucciSinFondo.png', 'mochilaGucciSinFondo.back.png', 'mochilaGucciSinFondo.detail1.png', 'mochilaGucciSInFondo.detail1.png', 'morchilaGucciSinFondo.detail2.png'),
(16, 'MOCHILA CHILDREN FASHION', 'CUERO ESTAMPADO RESISTENTE', 'IMPERMEABLE', 11000, 10, 7, 6, 10, NULL, NULL, 'bandoleraLouisSinFondo.png', 'bandoletaLouisSinFondo.back.png', 'bandoleraLouisSinFondo.det1.png', ' bandoleraLouisSinFondo.det2.png', 'bandoleraLouisSinFondo.det1.png'),
(17, 'CARTERA PAMPAS ARGENTINAS', 'CUERO ARGENTINO CON INTERIOR PIEL', 'MANIJAS AJUSTABLES', 29500, 4, 6, 2, 10, NULL, NULL, 'dymsSinFondo.png', 'dymsSinFondo.back.png', 'dymsSinFondo.det1.png', ' dymsSinFondo.det2.png', 'dymsSinFondo.det1.png'),
(18, 'BOLSO FRESH PRETTY', 'INTERIOR CON ACCESORIOS', 'IMPERMEABLE Y RESISTENTE', 23500, 1, 7, 2, 5, NULL, NULL, 'carteraLouisRosa1.SinFondo.png', 'carteraLouisRosa1.back.png', 'carteraLouis.det1.png', 'carteraLouis.det2.png', 'carteraLouis.det1.png'),
(19, 'BOLSO OFFICE TIME', 'CUERO LABRADO TORNASOLADO', 'RESISTENTE Y LIVIANO', 27500, 1, 5, 1, 15, NULL, NULL, 'bolsoLuoisSinFondo.png', 'bolsoLuoisSinFondo.back.png', 'bolsoLuoisSinFindo.det1.png', 'bolsoLuoisSinFondo.det2.png', 'bolsoLuoisSinFondo.det1.png'),
(20, 'BANDOLERA JEEP COUNTRY', 'CUERO ARGENTINO RUSTICO', 'BOLSILLOS Y HERRAJES PREMIUNS', 22000, 5, 6, 1, 11, NULL, NULL, 'bandoleraHombre1SinFondo.png', 'bandoleraHombre1SinFondo.back.png', 'bandoleraHombre1SinFondo.det1.png', ' bandoleraHombre1SinFondo.det2.png', 'bandoleraHombre1SinFondo.det1.png'),
(21, 'CARTERA NEW YORK ', 'CUERO LABRADO CON BORDES CHAROL ', 'MANIJAS REFORZADAS', 21000, 4, 5, 6, 8, NULL, NULL, 'new.Louis.ppal.png', 'new.Louis.back.png', 'new.Louis.det1.png', 'new.Louis.det2.png', 'newLouis.det1.png');

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
(6, 'INVIERNO'),
(7, 'PRIMAVERA');

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
(1, 5, 4, 150, 'remito para 150 ahora'),
(2, 7, 4, 250, 'remito para los 250'),
(3, 5, 5, 500, 'remito.11111111111111111111111111'),
(4, 6, 5, 500, 'remito.11111111111111111111111111'),
(5, 4, 6, 410, 'remito para 410'),
(6, 5, 6, 190, 'remito para 190'),
(7, 3, 7, NULL, NULL),
(8, 5, 7, NULL, NULL),
(9, 2, 8, NULL, NULL),
(10, 7, 8, NULL, NULL),
(11, 6, 9, 500, 'remito abril por 500'),
(12, 7, 9, 150, 'remito para 150'),
(13, 3, 10, NULL, NULL),
(14, 6, 10, NULL, NULL),
(15, 4, 11, NULL, NULL),
(16, 6, 11, NULL, NULL),
(17, 4, 12, NULL, NULL),
(18, 6, 12, NULL, NULL),
(19, 3, 13, NULL, NULL),
(20, 6, 13, NULL, NULL),
(21, 7, 14, NULL, NULL),
(22, 3, 15, NULL, NULL),
(23, 6, 15, NULL, NULL),
(24, 4, 16, NULL, NULL),
(25, 7, 16, NULL, NULL),
(26, 3, 17, NULL, NULL),
(27, 7, 17, NULL, NULL),
(28, 2, 18, NULL, NULL),
(29, 5, 18, NULL, NULL),
(30, 2, 19, NULL, NULL),
(31, 3, 19, NULL, NULL),
(32, 4, 20, NULL, NULL),
(33, 7, 20, NULL, NULL),
(34, 3, 21, NULL, NULL),
(35, 4, 21, NULL, NULL);

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
  `dtoSale` int(3) NOT NULL,
  `id_product` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product-sale`
--

INSERT INTO `product-sale` (`id`, `date_week_max`, `date_week_min`, `dtoSale`, `id_product`) VALUES
(1, NULL, NULL, 12, 12),
(2, NULL, NULL, 12, 14),
(3, NULL, NULL, 12, 15),
(4, NULL, NULL, 15, 9);

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
(5, 'BANDOLERAS'),
(10, 'MOCHILAS');

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
(2, '2019'),
(5, 'EN STOCK'),
(6, '2020');

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
(2, 'usuarioJefe', 'jefecito', 'dorsen', 'jefecito@gmail.com', 2, '$2a$10$rng5orz9re9tOQbNpoV46ua8ujjxv7DhhVvuurno7M3txjJmhEwKu', 'nuevo-1650456510853.png', '1994-02-22', ''),
(3, 'usuarioJazmi', 'JAZMIN', 'DE CHEDDAR', 'jazmin@gmail.com', 1, '$2a$10$znao08QjCtQIFNPB9P0Ctu6q3yyG3VD26fE5bc9mMKBTcGDRHsPcK', 'nuevo-1651237460351.png', '1990-02-12', ''),
(4, 'usuarioLucas', 'lucas', 'Calamitoso', 'lucas@gmail.com', 1, '$2a$10$0wvH1FpUGy8s3iLww7I3xe0nTDXrhrb.UzcptvU8C7Exmusv7s6Zm', 'nuevo-1651237611605.png', '1965-01-18', ''),
(5, 'usuarioTito', 'TITO', 'GARCIA', 'tito@gmail.com', 2, '$2a$10$WyY2E5aikXgXVCb0bn6hCOwbehWPzntqd0cU0x20s1/YDZQMYy9xK', 'nuevo-1651530836954.png', '1976-02-15', '');

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
-- Volcado de datos para la tabla `user-taxes`
--

INSERT INTO `user-taxes` (`id`, `id_user`, `tax_condition`, `cuit`, `cuil`, `ingresosBrutos`, `retGanancias`) VALUES
(1, 1, 'Consumidor FInal', '', '30-151515-22-36-202', '', ''),
(2, 4, 'Responsabe Inscripto', '30708075112-11', '', '151515-33333-10', 'si'),
(3, 2, 'Responsabe Inscripto', '307801115-40', '', '2535556607-1', 'si');

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
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_user` (`id_user`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `product-colection`
--
ALTER TABLE `product-colection`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `product-color`
--
ALTER TABLE `product-color`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `product-color-product`
--
ALTER TABLE `product-color-product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `product-dto`
--
ALTER TABLE `product-dto`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product-sale`
--
ALTER TABLE `product-sale`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product-stock`
--
ALTER TABLE `product-stock`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product-type`
--
ALTER TABLE `product-type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `product-year`
--
ALTER TABLE `product-year`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `type-card`
--
ALTER TABLE `type-card`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `invoice-item_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoice-item_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

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
