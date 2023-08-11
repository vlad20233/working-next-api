import { connect } from "@/config/connect";
import Movie from "@/model/MOVIE";
import { NextResponse } from "next/server";

export async function GET(){

    try{

        await connect()

        const movies = await Movie.find({})
        return NextResponse.json(movies,{status: 200})
    }catch(err){
        console.log(err)
    }
}

export async function POST(req){

    const {title,description} = await req.json()

    try{
        await connect()

        const movie = await Movie.create({
            title,description,
        })

        return NextResponse.json(movie,{status: 201})

    }catch(err){
        console.log(err)
    }

    return NextResponse.json({message: 'create a movie'})
}