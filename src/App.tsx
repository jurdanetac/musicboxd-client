import { useState } from "react";

import "./App.css";
import { User } from "./types.tsx";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Main.tsx";

function App() {
  const [user, setUser] = useState<User>({
    id: 1,
    handle: "john_doe",
  });

  return (
    <>
      <Header user={user} />
      <Content user={user} />
      <Footer />
    </>
  );
}

export default App;
