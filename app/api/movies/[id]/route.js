import { connect } from "@/config/connect"
import Movie from "@/model/MOVIE"
import { NextResponse } from "next/server"

export async function PUT(req, {params}) {
    const {id} = params


    const {newTitle: title, newDescription: description} = await req.json()
    await connect()
    const updated_movie = await Movie.findByIdAndUpdate(id,{title, description}) //trebuie sa ii schimb fieldurile eg din title in newTitle , chiar in postman m tf!?
    return NextResponse.json(updated_movie)
}


export async function DELETE(req, {params}) {
    const {id} = params
    await connect()
    await Movie.findByIdAndRemove(id)
    return NextResponse.json({message: 'deleted'})
}


export async function GET(req, {params}) {
    const {id} = params
    await connect()
    const movie = await Movie.findById(id)
    return NextResponse.json(movie)
}