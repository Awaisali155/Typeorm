import { BaseEntity,Column,Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity("patient")

class Patient extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    age:number


    @Column()
    descise:string
}

export default Patient