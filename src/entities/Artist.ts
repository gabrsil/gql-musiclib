import { Field, ID, ObjectType } from "type-graphql";
import { getModelForClass, prop as Property } from "@typegoose/typegoose";

@ObjectType({ description: "Artist" })
export class Artist {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ required: true })
  name: String;

  @Field()
  @Property({ required: true })
  bornDate: Date

  @Field()
  @Property()
  bio: String
}

export const ArtistModel = getModelForClass(Artist);
