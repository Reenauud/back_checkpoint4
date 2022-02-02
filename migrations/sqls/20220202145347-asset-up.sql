CREATE TABLE `asset` (
    `id` int PRIMARY KEY AUTO_INCREMENT NOT NULL ,
    `nom` varchar(100)  NOT NULL ,
    `valeur` varchar(100)  NOT NULL ,
    `quantite` varchar(100)  NOT NULL ,
    `kingdom_id` int  NOT NULL
);

ALTER TABLE `asset` ADD CONSTRAINT `fk_asset_kingdom_id` FOREIGN KEY(`kingdom_id`)
REFERENCES `kingdom` (`id`);