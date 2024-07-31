import { Album } from "src/albumes/album.entity";
import { Cancion } from "src/canciones/cancion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    nombreArtistico: string;

    @OneToMany(() => Cancion, cancion => cancion.autor)
    canciones: Cancion[]

    @OneToMany(() => Album, album => album.autor)
    albums: Album[]
    // canciones
    // albums
}