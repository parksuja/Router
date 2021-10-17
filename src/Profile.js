import React from "react";

const profileData = {
  velopert: {
    name: "박수진",
    description: "Front Engineer 개발자 되고싶다아아",
  },
  gildong: {
    name: "홍길동",
    description: "주인공",
  },
};
const Profile = ({ match }) => {
  // 파타미터 받아올 땐 match 안에 들어있는 params 값을 참조
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
