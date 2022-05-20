import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import 'reflect-metadata'
import mongoose from 'mongoose'
import { buildSchema } from 'type-graphql'
import { AlbumResolver } from './resolvers/Album'
import { ArtistResolver } from './resolvers/Artist'

const main = async () => {
    const schema = await buildSchema({
        resolvers: [AlbumResolver, ArtistResolver],
        emitSchemaFile: true,
        validate: false,
    })


mongoose.connect('mongodb://localhost:27017/music') 

const server = new ApolloServer({
    schema,
    plugins: [ ApolloServerPluginLandingPageGraphQLPlayground ]
})

const app = express()
await server.start()

server.applyMiddleware({ app })

app.listen({ port: 3333 }, () => {
    console.log('Server started at http://localhost:3333/graphql')
})

}

main().catch((error) =>{
    console.log(error, 'Error ')
})