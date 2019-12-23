import React, { Component } from "react";
import Movies from "./movies";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import {paginate, sort} from "../utils/paginate";
import {toast} from "react-toastify";
import {getGenres} from "../services/genreService";
import {getMovies, deleteMovie} from "../services/movieService";

class AllMovies extends Component {

  state = {
    count: 0,
    movies: [],
    genres: [], 
    currentPage:1,
    pageSize:3,
    selectedGenre:{},
    sortType:{column:"title",order:"asc"},
    searchText:""
  };
    
  render() {
      const {pageSize, movies:allMovies, genres, currentPage, selectedGenre, sortType, searchText} = this.state;

      const filteredData = this.filterData(allMovies, selectedGenre, searchText);

      const sortedData = sort(filteredData,sortType.column,sortType.order);

      const paginatedData =  paginate( sortedData, currentPage, pageSize   );


    return (
      <React.Fragment>
        <div className="container">
          <div className="container-fluid">
            <div className="row row-cols-2">
              <div className="col">
                <ListGroup
                    items={genres}
                    onItemClick={this.handleGenreClick}
                    selected={selectedGenre}
                />
              </div>
              <div className="col">
                <Movies
                  data={paginatedData}
                  handleLike={this.handleLike}
                  removeLineItem={this.removeLineItem}
                  onSort={this.handleSort}
                  sortType={sortType}
                  historyFromParent={this.props.history}
                  onSearch={this.searchMovies}
                  searchText={searchText}
                  totalItems={filteredData.length}
                />
                <Pagination
                  totalItems={filteredData.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageClick={this.handlePageClick}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    try{
      const {data:genres} = await getGenres();
      const {data:movies} = await  getMovies();
      const allGenres = [{_id:"-1",name:"All"},...genres];
      this.setState({ movies, genres:allGenres, selectedGenre: {_id:"-1",name:"All"} });
    }catch (e) {
      toast.error("Can't get movies and genres");
    }

  }

  removeLineItem = async targetItem => {
    const previousMovies = this.state.movies;

    const updatedMovies = this.state.movies.filter(
      item => item._id !== targetItem._id
    );
    this.setState({
      movies: updatedMovies
    });
    try{
      await  deleteMovie(targetItem._id);
      toast.success("Success!");
    }catch (e) {
      if(e.status===404)
        toast.error("Can't delete this movie with ID "+ targetItem._id);
      this.setState({
        movies: previousMovies
      });
    }



  };

  handleLike = targetItem => {
    const items = [...this.state.movies];
    const index = items.indexOf(targetItem);
    items[index] = { ...items[index] };
    items[index].liked = !items[index].liked;
    this.setState({ movies: items });
  };

    handlePageClick = (page) =>{
        this.setState({
          currentPage: page
        });
    }

  handleGenreClick = (genre) =>{
    this.setState({
      selectedGenre:genre,
      currentPage: 1,
      searchText:""
    });
  }

  handleSort = (sortColumn)=>{

    this.setState({sortType:sortColumn});

  }

  filterData(allData, selectedGenre, searchText){
      if(selectedGenre._id!=="-1"){
        return allData.filter(
            item => item.genre._id === selectedGenre._id
        )
      }
      if(searchText){
      return allData.filter(
            item =>   item.title.toLowerCase().startsWith(searchText.toLowerCase())
        );

      }
      return allData;
  }

  searchMovies = (e)=>{
      const searchText = e.target.value;
      this.setState({selectedGenre: {_id:"-1",name:"All"},searchText,currentPage: 1});
  }

}

export default AllMovies;
