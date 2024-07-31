import { Autor } from 'src/autores/autor.entity'
import { Cancion } from 'src/canciones/cancion.entity'
import { Genero } from 'src/generos/genero.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    nombre: string

    @Column()
    autorId: number

    @Column()
    generoId: number

    
    // RELACIONES 

    @ManyToOne(() => Autor, autor => autor.albums)
    autor: Autor

    @ManyToOne(() => Genero, genero => genero.albums)
    genero: Genero

    @OneToMany(() => Cancion, cancion => cancion.album)
    canciones: Cancion[]



    // genero: string

    // ListaCanciones: string
}