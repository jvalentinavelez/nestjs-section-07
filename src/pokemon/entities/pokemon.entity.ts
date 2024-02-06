import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

//decorador para indicar que es esquema de base de datos
@Schema()
export class Pokemon extends Document{

    //id: string // Mongo lo entrega

    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

//exportar schema basado en clase definida
export const PokemonSchema = SchemaFactory.createForClass( Pokemon );