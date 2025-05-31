import "./Profile.scss";

function Profile() {
  return (
    <div className="profile-section">
      <div className="first-section">
        <div className="profile-photo">
          <p>Here photos</p>
        </div>
        <div className="user-details">
          <p>Padmakumar</p>
          <p>padmakumar@gmail.com</p>
          <p>9944035088</p>
        </div>
      </div>

			<div className="section">
				<p>Total orders : 10</p>
			</div>
    </div>
  );
}

export default Profile;