import React, { useEffect, useState } from "react";
import Servers from "../redux/services/services";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const FormComponent = () => {
  const navigateTo = useNavigate();
  const [posts, setPosts] = useState([]);

  const AddedPosts = useSelector((state) => state.form.postsData);

  useEffect(() => {
    Servers.getProducts()
      .then((res) => {
        if (!AddedPosts) {
          setPosts(res);
        } else {
          let newArray = [AddedPosts, ...res];

          setPosts(newArray);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="button-div">
        <button
          className="button-home"
          onClick={() => {
            navigateTo("/add-post");
          }}
        >
          Add Post
        </button>
      </div>
      <p className="ml-3">
        <span className="font-bold">Note:</span> Listing of the posts:{" "}
      </p>
      {posts?.length > 0 ? (
        posts?.map((item) => (
          <div className="Post-section" key={item.title}>
            <p>
              <span className="font-bold"> Title: </span>
              {item?.title}
            </p>
          </div>
        ))
      ) : (
        <div className="align-center">
          <h2>loading...</h2>
        </div>
      )}
      <div className="button-div">
        <button
          className="button-home"
          onClick={() => {
            navigateTo("/add-post");
          }}
        >
          Add Post
        </button>
      </div>
    </>
  );
};

export default FormComponent;
