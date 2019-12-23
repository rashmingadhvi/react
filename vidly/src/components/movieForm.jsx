import React from 'react';
import Form from "./common/form";
import Joi from "joi-browser";
import {toast} from 'react-toastify';
import {getGenres} from "../services/genreService";
import {saveMovie, getMovie} from "../services/movieService";

class MovieForm extends Form {

    state = {
        formData: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
        errors:{},
        genres:[]
    };

    schema = {
        _id:Joi.string().optional(),
        title:Joi.string().min(5).required().label("Title"),
        genreId:Joi.string().optional().label("Genre"),
        numberInStock:Joi.number().min(0).max(100).integer().positive().required().label("Stock"),
        dailyRentalRate:Joi.number().min(1).max(10).required().label("Rate")
    };

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title","Title")}
                    {this.renderSelect("genreId", "Genre",this.state.genres)}
                    {this.renderInput("numberInStock","Stock", null,"number") }
                    {this.renderInput("dailyRentalRate","Rate", null,"number")}
                    {this.renderSubmitBun("Save")}
                    <button
                        className="btn btn-primary m-md-2"
                        onClick={() => this.props.history.push("/movies")}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        );
    }

    async componentDidMount() {
        await this.populateGenres();

        await this.populateMovies(this.props.match.params.id)
    }

    populateGenres = async ()=>{
      const {data:genres} = await getGenres();
      this.setState({genres});
    };

    populateMovies = async (movieId)=>{
        try{
            if(movieId==="new") return;
            const {data} = await getMovie(movieId);
            this.fillForm(data);
        }catch (e) {
            console.error("Can't get movie with given ID");
            this.props.history.replace("/notfound");
        }
        //const dbMovie = moviesAPI.getMovie(movieId);
    };

     implSubmit = async()=>{
        const {formData} = this.state;
        saveMovie(formData);
        //moviesAPI.saveMovie(this.state.formData);
        toast.success("Success!");
        setTimeout(this.props.history.push("/movies"),3000);
    };

    fillForm = (movie)=> {
        if(!movie) return;
        const formData = {};
        formData._id=movie._id;
        formData.title = movie.title;
        formData.genreId = movie.genre._id;
        formData.numberInStock = movie.numberInStock;
        formData.dailyRentalRate = movie.dailyRentalRate;
        this.setState({formData});
    }


}

export default MovieForm;