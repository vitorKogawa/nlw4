import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnIsEnabledInEntityUsers1614172509086 implements MigrationInterface {
    name = 'AddColumnIsEnabledInEntityUsers1614172509086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` ADD `isEnabled` tinyint NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `isEnabled`");
    }

}
