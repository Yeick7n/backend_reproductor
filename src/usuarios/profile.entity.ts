import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_profile')
export class Profile {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   nombre: string

   @Column()
   apellido: string

   @Column()
   edad: number

   
}