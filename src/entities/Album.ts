import { Field, ID, ObjectType } from "type-graphql";
import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { Artist } from "./Artist";
import { Ref } from "../types";

@ObjectType({ description: "Album" })
export class Album {
    @Field(() => ID)
    
    @Field()
    @Property({ required: true })
    name: String

    @Field()
    @Property({ required: true })
    releaseDate: Date

    @Field((_type) => String)
    @Property({ ref: Artist })
    artist_id: Ref<Artist>;
}

export const AlbumModel = getModelForClass(Album);