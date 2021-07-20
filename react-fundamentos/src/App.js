import React from "react";
import { Post } from "./Post";
import { Header } from "./Header";

export function App() {
  return (
    <>
      <Header title="Component Header">
        <h2>Posts da semana</h2>
      </Header>
      <hr />
      <Post
        post={{
          title: "Titulo da noticia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />

      <Post
        post={{
          title: "Titulo da noticia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />

      <Post
        post={{
          title: "Titulo da noticia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />

      <Post
        post={{
          title: "Titulo da noticia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />

      <Post
        post={{
          title: "Titulo da noticia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />

      <Post
        post={{
          title: "Titulo da noticia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />

      <Post
        post={{
          title: "Titulo da noticia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />
    </>
  );
}
