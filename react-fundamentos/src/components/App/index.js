import React, { useState } from "react";
import Post from "../Post";
import Header from "../Header";
import ThemeProvider from "../../contexts/ThemeContext";
import styles from './App.scss'
import { Title } from "./styles";

const fixedPosts = [
  {
    title: "Title#01",
    subtitle: "Sub#01",
    likes: 20,
    id: Math.random(),
    read: true,
    removed: false,
  },
  {
    title: "Title#02",
    subtitle: "Sub#02",
    likes: 10,
    id: Math.random(),
    read: false,
    removed: true
  },
  {
    title: "Title#03",
    subtitle: "Sub#03",
    likes: 50,
    id: Math.random(),
    read: false,
    removed: false
  },
  {
    title: "Title#04",
    subtitle: "Sub#04",
    likes: 50,
    id: Math.random(),
    read: true,
    removed: false,
  },
];

function App() {
  const [posts, setPosts] = useState(fixedPosts);
  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: parseInt(Math.random() * 100),
        id: Math.random(),
      },
    ]);
    console.log({ posts });
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => post.id === postId
        ? { ...post, removed: true }
        : post
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2" >Posts da semana</Title>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}
export default App