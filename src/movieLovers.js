import React from 'react'

const MovieLovers = props => {
        const { profiles, users, movies, usersByMovie } = props;
        const usersList = (id) => {
        if (!usersByMovie[id] || usersByMovie[id].length === 0){
            return <p>None of the current users liked this movie.</p>
        } else{
            const listofItems = usersByMovie[id].map(id => (
                <li key={id}>
                  <p>{users[id].name}</p>
                </li>
              ));
          
              return <ul>{listofItems}</ul>;   
        }}
        
        return(
            <ol>
               {Object.keys(movies).map(id => (
                   <li key={id}>
                    <h3>{movies[id].name}</h3>
                    <h4>Liked By:</h4>
                    {usersList(id)}
                   
                   </li>
               ))} 
            </ol>
        )
    } 

export default MovieLovers