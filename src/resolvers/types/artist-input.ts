
import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { Artist } from '../../entities/Artist';

@InputType()
export class ArtistInput implements Partial<Artist> {
    @Field()
    name: string;

    @Field()
    bornDate: Date;

    @Field()
    @Length(1, 255)
    bio: String;
}