import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Meu Deus",
        body: "Relaxa Marcos",
      },
      {
        id: 2,
        title: "Tá de boas",
        body: "Eeee",
      },
      {
        id: 3,
        title: "Faz o seu",
        body: "Falo nada",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
