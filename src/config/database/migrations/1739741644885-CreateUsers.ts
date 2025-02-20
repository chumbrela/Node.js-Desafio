import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1739741644885 implements MigrationInterface {
  name = 'CreateUsers1739741644885';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
         CREATE TABLE users (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          name VARCHAR NOT NULL UNIQUE,
          email VARCHAR NOT NULL UNIQUE,
          avatar VARCHAR,
          password VARCHAR NOT NULL,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          is_active BOOLEAN DEFAULT true
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "mydatabase"."users";
        `);
  }
}
