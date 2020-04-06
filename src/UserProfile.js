import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const getUser = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUserData(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  if (loading) return <div>로딩중...</div>;

  if (!userData) return null;

  const { username, email } = userData;

  return (
    <div>
      <p>
        <b>Username:</b>
        {username}
      </p>
      <p>
        <b>Email:</b>
        {email}
      </p>
    </div>
  );
};

export default UserProfile;
