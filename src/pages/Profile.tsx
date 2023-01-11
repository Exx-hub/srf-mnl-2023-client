import UserProfile from "../components/userProfile";
import useTitle from "../hooks/useTitle";

function Profile() {
  useTitle("SRF MNL - Profile");
  return <UserProfile />;
}

export default Profile;
