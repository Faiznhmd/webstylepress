import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, SetPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchPosts();
    // console.log(posts);
  }, []);

  async function fetchPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => SetPosts(json))
      .then(setLoader(false));
  }
  return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrump justify-content-end">
                  <li className="breadcrump-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrump-item active">Posts</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        {loader ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="row">
            {posts.map((post) => {
              return (
                <div className="col-sm-6" key={post.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Posts;
