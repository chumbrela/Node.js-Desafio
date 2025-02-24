import { MigrationInterface, QueryRunner } from "typeorm";
export class CreateMovieTags1640438086438 implements MigrationInterface {
    name = 'CreateMovieTags1640438086438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "movie_tags" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "note_id" uuid NOT NULL,
                "user_id" uuid NOT NULL,
                "name" character varying NOT NULL,
                "created_at" timestamp NOT NULL DEFAULT now(),
                "updated_at" timestamp  NULL,
                "deleted_at" timestamp  NULL,
                CONSTRAINT "movie_tags_pkey" PRIMARY KEY ("id"),
                CONSTRAINT "movie_tags_noteId_fkey" 
                    FOREIGN KEY ("note_id") REFERENCES "movie_notes"("id")
                    ON DELETE CASCADE,
                CONSTRAINT "movie_tags_userId_fkey" 
                    FOREIGN KEY ("user_id") REFERENCES "users"("id")
                    ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "movie_tags";
        `);
    }

}
