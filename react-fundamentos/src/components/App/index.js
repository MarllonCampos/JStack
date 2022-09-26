import React, { useState } from "react";
import Post from "../Post";
import Header from "../Header";
import ThemeProvider from "../../contexts/ThemeContext";
import styles from './App.scss'
import { Title } from "./styles";

const fixedPosts = [
  {
    title: "Title#001",
    subtitle: "Sub#001",
    likes: 20,
    id: Math.random(),
    read: true,
    removed: false,
  },
  {
    title: "Title#002",
    subtitle: "Sub#002",
    likes: 10,
    id: Math.random(),
    read: false,
    removed: true
  },
  {
    title: "Title#003",
    subtitle: "Sub#003",
    likes: 50,
    id: Math.random(),
    read: false,
    removed: false
  },
  {
    title: "Title#004",
    subtitle: "Sub#004",
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
        title: `Title#${(prevState.length + 1).toString().padStart(3, 0)}`,
        subtitle: `Sub#${(prevState.length + 1).toString().padStart(3, 0)}`,
        likes: parseInt(Math.random() * 100),
        id: Math.random(),
      },
    ]);
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