import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMoveNotes1740006116987 implements MigrationInterface {
  name = 'CreateMoveNotes1740006116987';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "movie_notes" (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        title character varying NOT NULL,
        description character varying,
        rating integer NOT NULL,
        "user_id" uuid NOT NULL,
        created_at timestamp NOT NULL DEFAULT now(),
        updated_at timestamp  NULL,
        deleted_at timestamp  NULL,
        CONSTRAINT "movie_notes_pkey" PRIMARY KEY (id),
        CONSTRAINT "movie_notes_userId_fkey" 
            FOREIGN KEY ("user_id") REFERENCES "users"("id")
            ON DELETE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE "movie_notes";
    `);
  }
}
