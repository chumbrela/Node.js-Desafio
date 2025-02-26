import { MovieNotes } from '@/movie-notes/entities/movie-notes.entity';
import { User } from '@/users/entities/user.entity';
import { Delete } from '@nestjs/common';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'movie_tags' })
export class MovieTags {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => MovieNotes, (note) => note.movieTags)
  note: MovieNotes;

  @ManyToOne(() => User, (user) => user.movieTags)
  user: User;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
    name: 'deleted_at',
  })
  deletedAt: Date;
}
