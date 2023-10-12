// src/entities/Task.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  constructor() {
    this.description = '';
    this.id = 0; // Or whatever default value you prefer
  }
}
