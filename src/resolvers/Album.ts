import { Album, AlbumModel } from "../entities/Album";
import { Artist, ArtistModel } from "../entities/Artist";
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { AlbumInput } from "./types/album-input";


@Resolver((_of) => Album)
export class AlbumResolver {
    @Query((_returns) => Album, { nullable: false })
    async returnSingleAlbum(@Arg('id') id: string) {
        return await AlbumModel.findById({ _id: id })
    }
    
    @Query(() => [Album])
    async returnAllAlbums() {
        return await AlbumModel.find()
    }

    @Mutation(() => Album)
    async createAlbum(@Arg('data') { name, releaseDate, artist_id }: AlbumInput ): Promise<Album> {
        const album = await AlbumModel.create({ name, releaseDate, artist_id })
        await album.save()
        return album
    }

    @Mutation(() => Boolean)
    async deleteAlbum(@Arg('id') id: string) {
        await AlbumModel.deleteOne({ id })
        return true
    }

    @FieldResolver((_type) => Artist)
    async artist(@Root() album: Album): Promise<Artist> {
        return (await ArtistModel.findById(album?.artist_id))!
    }
}