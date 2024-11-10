import { useState } from "react";

function App() {
  // user structure: { id: number, handle: string }
  const [user, setUser] = useState({
    id: 1,
    handle: "john_doe",
  });

  return (
    <>
      <style>
        {`
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: #333;
            color: white;
          }

          ul {
            display: flex;
            gap: 1rem;
          }

          * {
            list-style: none;
          }

          main div {
            display: flex;
            gap: 1rem;
          }
        `}
      </style>

      <header>
        <p>Logo</p>
        <nav>
          <ul>
            <li>{user.handle}</li>
            <li>Activity</li>
            <li>Albums</li>
            <li>Lists</li>
            <li>Members</li>
            <li>Journal</li>
            <li>Search</li>
            <li>Log</li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          Welcome back, {user.handle}. Here’s what your friends have been
          listening to…{" "}
        </p>
        <div>
          <p>Album 1</p>
          <p>Album 2</p>
          <p>Album 3</p>
        </div>
      </main>
      <footer className="letterboxd-footer">
        <div className="footer-links">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Pro</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Apps</a>
            </li>
            <li>
              <a href="/">Podcast</a>
            </li>
            <li>
              <a href="/">Year in Review</a>
            </li>
            <li>
              <a href="/">Gifts</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">API</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>

          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i
              className="fa
 fa-tiktok"
            ></i>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube"></i>
          </a>
        </div>

        <div className="footer-copyright">
          <p>
            © Musicboxd Limited. Made by fans in Maracaibo, Venezuela. Music
            data from <a href="https://open.spotify.com/">Spotify</a>. Mobile
            site.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
