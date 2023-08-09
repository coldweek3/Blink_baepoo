import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Map from "../../components/post/Map";
import PostList from "../../components/post/PostList";

const HomeContainer = styled.div`
  /* margin-left: 200px; */
  width: 1920px;
  height: 1080px;
  background-color: gray;
  display: flex;
  justify-content: flex-start;
`;

export default function Home() {
  return (
    <HomeContainer>
      <PostList />
      <Map />
    </HomeContainer>
  );
}
