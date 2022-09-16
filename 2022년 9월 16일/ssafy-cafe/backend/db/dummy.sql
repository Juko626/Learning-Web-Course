CREATE TABLE `orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `menu_id` INT NOT NULL,
  `menu_quantity` INT NOT NULL,
  `menu_order_detail` TEXT
) default character set utf8 collate utf8_general_ci;

CREATE TABLE `menus` (
  `menu_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `menu_name` VARCHAR(20) NOT NULL,
  `menu_description` TEXT NOT NULL,
  `menu_img_link` TEXT NOT NULL
) default character set utf8 collate utf8_general_ci;

INSERT INTO `orders`
(`menu_id`, `menu_quantity`, `menu_order_detail`)
VALUES
(1, 1, "뜨겁게 만들어주세요");

INSERT INTO `orders`
(`menu_id`, `menu_quantity`, `menu_order_detail`)
VALUES
(3, 2, "레몬아이스티 없나요");

INSERT INTO `menus`
(`menu_name`, `menu_description`, `menu_img_link`)
VALUES
("아이스 아메리카노", "여름엔 아아가 진리", "/menus/ice-americano.jpg");

INSERT INTO `menus`
(`menu_name`, `menu_description`, `menu_img_link`)
VALUES
("카페라떼", "Latte is horse", "/menus/cafe-latte.jpg");

INSERT INTO `menus`
(`menu_name`, `menu_description`, `menu_img_link`)
VALUES
("복숭아 아이스티", "내 입안 복숭아향 가득", "/menus/peach-icetea.jpg");

