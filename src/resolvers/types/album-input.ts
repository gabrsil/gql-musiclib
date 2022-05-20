import { Album } from '../../entities/Album'
import { Field, InputType } from "type-graphql";
import { ObjectId } from 'mongodb';

@InputType()
export class AlbumInput implements Partial<Album> {
    @Field()
    name: string;

    @Field()
    releaseDate: Date;

    @Field(() => String)
    artist_id: ObjectId
}