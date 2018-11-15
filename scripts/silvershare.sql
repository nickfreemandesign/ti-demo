USE silvershare;

DROP TABLE IF EXISTS

users,
posts

CASCADE;

CREATE TABLE `users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`ratings` varchar(255) NOT NULL,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `posts` (
	`post_id` INT NOT NULL AUTO_INCREMENT,
	`status` varchar(255) NOT NULL,
	`item` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`lender_id` INT NOT NULL,
	`borrower_id` INT,
	PRIMARY KEY (`post_id`)
);

ALTER TABLE `posts` ADD CONSTRAINT `posts_fk0` FOREIGN KEY (`lender_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `posts` ADD CONSTRAINT `posts_fk1` FOREIGN KEY (`borrower_id`) REFERENCES `users`(`user_id`);

