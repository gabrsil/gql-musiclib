import { Artist, ArtistModel } from "../entities/Artist";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ArtistInput } from "./types/artist-input";

@Resolver()
export class ArtistResolver {
    @Query((_returns) => [Artist])
    async returnSingleArtist(@Arg('id') id: string) {
        return await ArtistModel.findById(id)
    }

    @Query(() => [Artist])
    async returnAllArtists() {
        return await ArtistModel.find()
    }

    @Mutation(() => Artist)
    async createArtist(@Arg('data') { name, bornDate, bio }: ArtistInput): Promise<Artist> {
        const artist = await ArtistModel.create({ name, bornDate, bio })
        await artist.save()
        return artist
    }

    @Mutation(() => Boolean)
    async deleteArtist(@Arg('id') id: string) {
        await ArtistModel.deleteOne({ id })
        return true
    }
}