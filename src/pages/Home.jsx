import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`https://videoplayer-9bb8.onrender.com/api/videos/${type}`);
        setVideos(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchVideos();
  }, [type]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      {videos && videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
