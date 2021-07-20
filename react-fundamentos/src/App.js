import React, { useState } from "react";
import { Post } from "./Post";
import { Header } from "./Header";

const fixedPosts = [
  { title: 'Title#01', subtitle: 'Sub#01', likes: 20, id:Math.random() },
  { title: 'Title#02', subtitle: 'Sub#02', likes: 10, id:Math.random() },
  { title: 'Title#03', subtitle: 'Sub#03', likes: 50, id:Math.random() },
  { title: 'Title#04', subtitle: 'Sub#04', likes: 50, id:Math.random() },
]


export function App() {
  const [posts,setPosts] = useState(fixedPosts)
  function handleRefresh() {
    setTimeout(() => {
    setPosts(prevState =>[...prevState, {
       title: `Title#0${prevState.length+1}`, 
       subtitle: `Sub#0${prevState.length+1}`, 
       likes: parseInt(Math.random() * 100), 
       id:Math.random(),
    }])
    console.log({posts});
  },2000)
  }

  return (
    <>
      <Header title="Notícias Diadema Blog">
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />


      {posts.map(post =>
        <Post
          key={post.id}
          post={{
              title: post.title,
              subtitle: post.subtitle
          }}
          likes={post.likes}
        />
      )}


    </>
  );
}
