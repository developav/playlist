import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistInfoPage.css";
export function PlaylistInfoPage(){
    const { playlistId } = useParams();
    const play = PLAYLISTS[Number(playlistId)]

    if(!play){
        return (
			<div className="playlistInfoPage">
				<h2>UserInfoPage</h2>

				<div className="playlists">
					<p>Трека c таким названием нет</p>
				</div>
			</div>
		);
    }
	const genre = play.genre.toLowerCase()
    return (
		<div className="PlaylistInfoPage">
			<h2>PlaylistInfoPage</h2>

			<div className="playlists">
				<p>Жанр:  <Link to={`/playlist/genre/${genre}`}>{play.genre}</Link></p>
				<p>Название: {play.name}</p>
            </div>
            <div className="playlists__list">
				<ul>
					{play.songs.map((song, index)=>(
						<li key={index}>{song}</li>
					))}
					
                </ul>
            </div>
		</div>
	);
}