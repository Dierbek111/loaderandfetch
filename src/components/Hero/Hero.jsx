import "./Hero.scss";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
             {loading ? (
              <preloader>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </preloader>
             ) : (
              <>
              {data.map(post => (
                <div key={post.id} className="hero__card">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              ))}

</>
             )}
            
            

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
