import PersonalInfo from "./_components/personal-info";
import ProfileImage from "./_components/profile-image";

export default function Profile() {
  return (
    <div className="p-8">
      <ProfileImage />
      <PersonalInfo />
    </div>
  );
}
