import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1739741644885 implements MigrationInterface {
    name ='CreateUsers1739741644885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "avatar" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "created_by" character varying NOT NULL,
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "is_active" boolean NOT NULL DEFAULT true,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "mydatabase"."users";
        `);
    }

}
