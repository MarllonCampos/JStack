import React, { useState } from "react";
import { Post } from "./Post";
import { Header } from "./Header";
import ThemeProvider from "./ThemeContext";


const fixedPosts = [
  {
    title: "Title#01",
    subtitle: "Sub#01",
    likes: 20,
    id: Math.random(),
    read: true,
  },
  {
    title: "Title#02",
    subtitle: "Sub#02",
    likes: 10,
    id: Math.random(),
    read: false,
  },
  {
    title: "Title#03",
    subtitle: "Sub#03",
    likes: 50,
    id: Math.random(),
    read: false,
  },
  {
    title: "Title#04",
    subtitle: "Sub#04",
    likes: 50,
    id: Math.random(),
    read: true,
  },
];

export function App() {
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
    setPosts((prevState) =>
      prevState.filter((post) => post.id !== postId)
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>Posts da semana</h2>
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
