import { Album } from "src/albumes/album.entity";
import { Cancion } from "src/canciones/cancion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Cancion, cancion => cancion.genero)
    canciones: Cancion[]

    @OneToMany(() => Album, album => album.genero)
    albums: Album[]

}
