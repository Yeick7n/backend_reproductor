import { Cancion } from "src/canciones/cancion.entity";
import { Usuario } from "src/usuarios/usuario.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    creadorId: number

    // listaCanciones;

    @ManyToOne(() => Usuario, user => user.playlists)
    creador: Usuario

    @ManyToMany(() => Cancion, (canciones) => canciones.playlists)
    canciones: Cancion[];
}

