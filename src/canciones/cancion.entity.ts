import { Album } from "src/albumes/album.entity";
import { Autor } from "src/autores/autor.entity";
import { Genero } from "src/generos/genero.entity";
import { PlayList } from "src/play-lists/play-list.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cancion {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string
    
    @Column()
    duracionSeg: number

    @Column()
    autorId: number

    @Column()
    albumId: number

    @Column()
    generoId: number

    @ManyToOne(() => Autor, autor => autor.canciones)
    autor: Autor

    @ManyToOne(() => Album, album => album.canciones)
    album: Album

    @ManyToOne(() => Genero, genero => genero.canciones)
    genero: Genero

    @ManyToMany(() => PlayList, (playlist) => playlist.canciones)
    @JoinTable({
        name: 'playlist_cancion',
        joinColumn: {
            name: 'playlist_id'
        },
        inverseJoinColumn: {
            name: 'cancion_id'
        },
    })
    playlists: PlayList[]

    // album (ManyToOne)
    // genero (ManyToOne)
}