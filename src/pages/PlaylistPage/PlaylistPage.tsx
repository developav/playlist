import { useParams, Link, useSearchParams, useSt } from "react-router-dom";
import { ChangeEvent } from "react";
import { PLAYLISTS } from "../../data";
import "./PlaylistPage.css";

export function PlaylistPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { genre } = useParams();

    const handleSearchPlaylistName = (event:ChangeEvent<HTMLInputElement>):void => {
        const { value } = event.target;
        setSearchParams({
            searchPlaylistName: value.toLowerCase(),
            searchPlaylistGenre: searchParams.get("searchPlaylistGenre") || ""
        });
    }
    const handleSearchPlaylistGenre = (event:ChangeEvent<HTMLInputElement>):void => {
        const { value } = event.target;
        setSearchParams({
            searchPlaylistGenre: value.toLowerCase(),
            searchPlaylistName: searchParams.get("searchPlaylistName") || ""
        });
    }
    const searchPlaylistName = searchParams.get("searchPlaylistName") || "";
    const searchPlaylistGenre = genre || searchParams.get("searchPlaylistGenre") || "";

    const filteredPlaylist = PLAYLISTS.filter(({name, genre,songs})=>
        name.toLowerCase().includes(searchPlaylistName) &&
        genre.toLowerCase().includes(searchPlaylistGenre) && 
        songs.length > 0

    )
    const playlist = PLAYLISTS[0]                                       
    return (
        <div className="usersPage">
			<h2>PlaylistPage</h2>
           
			<div className="playlist">
            <label>
					введите название{" "}
					<input type="text" value={searchPlaylistName} onChange={handleSearchPlaylistName} />
			</label>
            <label>
					введите жанр{" "}
					<input type="text" value={searchPlaylistGenre} onChange={handleSearchPlaylistGenre} />
			</label>
            {filteredPlaylist.map(({name, id}) => (
                <Link to={`/playlist/${id}`} key={id}>
                    {name}
                </Link>
            ))}
			</div>
		</div>
    )
}