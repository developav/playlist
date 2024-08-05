import { Link, useParams } from "react-router-dom";
import { USERS, PLAYLISTS } from "../../data";

import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>пользователя c таким userId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p className="users__bio">{user.bio}</p>
				<p>playlist: 
						<Link to={`/playlist/${user.playlist?.id}`} key={user.playlist?.id}>
							{user.playlist?.genre}
						</Link>
					 </p>
			</div>
		</div>
	);
}
