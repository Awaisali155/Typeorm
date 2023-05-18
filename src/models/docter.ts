import { BaseEntity,Column ,PrimaryGeneratedColumn,Entity } from "typeorm";

@Entity("docter")

class Docter extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number


    @Column()
    name:string
    @Column()
    age:string
    @Column()
    type:string
}

export default Docter;