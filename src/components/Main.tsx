import { ContentProps } from "../types";

const Content = ({ user }: ContentProps) => {
  return (
    <main>
      <p>
        Welcome back, {user.handle}. Here’s what your friends have been
        listening to…{" "}
      </p>
      <div>
        <div className="album-poster">Album 1</div>
        <div className="album-poster">Album 2</div>
        <div className="album-poster">Album 3</div>
        <div className="album-poster">Album 4</div>
        <div className="album-poster">Album 5</div>
        <div className="album-poster">Album 6</div>
      </div>
    </main>
  );
};

export default Content;
