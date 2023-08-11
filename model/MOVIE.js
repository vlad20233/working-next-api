import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})


const Movie = mongoose.models.Movie || mongoose.model('Movie', MovieSchema)
export default Movie;
