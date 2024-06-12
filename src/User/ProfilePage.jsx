import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfileData } from './Api';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const userProfileData = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (userProfileData && userProfileData.user && userProfileData.user._id) {
      const fetchProfileData = async () => {
        try {
          const response = await getProfileData(userProfileData.user._id);
          setUserData(response.data); // Set the user data from the response
        } catch (error) {
          console.error('Error fetching profile data:', error.message);
        }
      };

      fetchProfileData();
    }
  }, [userProfileData]);

  return (
    <div>
      <h1>Profile Page</h1>
      {userData && (
        <div>
          <h3>Username: {userData.user.username}</h3>
          <h3>Email: {userData.user.email}</h3>
          <h3>User ID: {userData.user._id}</h3>
          <h3>Token: {userData.token}</h3>
        </div>
      )}
    </div>
  );
};

export default Profile;
