-- CreateTable
CREATE TABLE `todolist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `todolist` VARCHAR(100) NOT NULL,
    `created_at` TIME NOT NULL,
    `username` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `todolist` ADD CONSTRAINT `todolist_username_fkey` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
