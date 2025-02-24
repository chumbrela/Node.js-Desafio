import { Delete } from "@nestjs/common";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MovieTags {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ 
        type: 'varchar',
        nullable: false,
        name: 'note_id'
    })
    noteId: string

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'user_id'
    })
    userId: string
    
    @Column({ type: 'varchar', nullable: false })
    name: string

    @UpdateDateColumn({
        type: 'timestamp',
        nullable: true,
        name: 'updated_at',
    })
    updatedAt: Date

    @DeleteDateColumn({
        type: 'timestamp',
        nullable: true,
        name: 'deleted_at',
    })
    deletedAt: Date
}