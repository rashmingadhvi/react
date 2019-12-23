import React from 'react';
const MovieDetail = ({match, history} )=>
{

        return (
            <div>
                Movie: {match.params.id}&nbsp;
                <button className="btn btn-primary" onClick={()=> history.push("/movies")}>Save</button>
            </div>
        );



}

export default MovieDetail;