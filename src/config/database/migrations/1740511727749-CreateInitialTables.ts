import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialTables1740511727749 implements MigrationInterface {
  name = ' CreateInitialTables1740511727749';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movie_notes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "rating" integer NOT NULL, "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_cb5e3aeeb8400f0b0d2ea5cdfc2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE ("name"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "movie_tags" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "noteId" uuid, "userId" uuid, CONSTRAINT "PK_34596c16970e7093ff8221311ca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_tags" ADD CONSTRAINT "FK_5a6719e182195e70e5c534d9899" FOREIGN KEY ("noteId") REFERENCES "movie_notes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_tags" ADD CONSTRAINT "FK_d987f62018819a12893deb32911" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movie_tags" DROP CONSTRAINT "FK_d987f62018819a12893deb32911"`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_tags" DROP CONSTRAINT "FK_5a6719e182195e70e5c534d9899"`,
    );
    await queryRunner.query(`DROP TABLE "movie_tags"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "movie_notes"`);
  }
}
