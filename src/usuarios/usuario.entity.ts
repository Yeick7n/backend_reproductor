import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";
import { PlayList } from "src/play-lists/play-list.entity";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    usuario: string;

    @Column()
    contraseña: string;

    @Column()
    correo: string;

    @OneToOne(() => Profile, { cascade: true })
    @JoinColumn()
    profile: Profile

    @OneToMany(() => PlayList, playlist => playlist.creador)
    playlists: PlayList[]
}
