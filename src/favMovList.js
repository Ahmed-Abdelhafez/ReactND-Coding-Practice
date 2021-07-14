import React from 'react'

const FavMovList = props => {
	return(
        <ol>
          {props.profiles.map((profile) => (
			<li key={profile.id}>
				<p>{props.users[profile.userID].name} favorite movie is {props.movies[profile.favoriteMovieID].name}</p>
			</li>      
        	))}
        </ol>
	)
}


export default FavMovList