import React, {Component} from 'react';
import Like from "./common/like";
import TableMain from "./common/tableMain";
import {Link} from "react-router-dom";


class Movies extends Component {
  displayColumns = [
    { name: "title", label: "Title" ,
    component: movie=>
        <Link to={`/movies/${movie._id}`} className="nav-link">
          {movie.title}
        </Link>
    },
    { name: "genre.name", label: "Genre" },
    { name: "numberInStock", label: "Stock" },
    { name: "dailyRentalRate", label: "Rate" },
    {
      name: "",
      label: "Like",
      component: item => (
        <Like
          onLike={() => this.props.handleLike(item)}
          item={item}
          liked={item.liked}
        />
      ),
      sortable: false
    },
    {
      name: "",
      label: "Action",
      component: item => (
        <i
          className="fa fa-cut "
          onClick={() => this.props.removeLineItem(item)}
        />
      ),
      sortable: false
    }
  ];

  render() {
    return <React.Fragment>{this.renderMovies()}</React.Fragment>;
  }

  renderMovies = () => {
    let { data: allMovies, totalItems, sortType, onSort,
        historyFromParent, searchText } = this.props;

    if (totalItems === 0) return <p>There are no movies!</p>;
    return (
      <React.Fragment>

        <p>Showing <span className="badge badge-info">{totalItems}</span> movies!

            <button
                className="btn btn-outline-primary m-md-2"
                onClick={() => historyFromParent.push("/movies/new")}
            >
                New
            </button>

        </p>
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          value={searchText}
          onChange={this.props.onSearch}
        />
        <TableMain
          data={allMovies}
          displayColumns={this.displayColumns}
          sortType={sortType}
          onSort={onSort}
        />
      </React.Fragment>
    );
  };

 }

export default Movies;