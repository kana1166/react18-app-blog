import React from "react";
import { posts } from "../data/posts";
import { useParams } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
  categories: string[];
  createdAt: string;
  content: string;
}

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  const formatDate = (jsonDate: string) => {
    const dateObj = new Date(jsonDate);
    const year = dateObj.getFullYear();
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    return `${year}/${month}/${date}`;
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="flex justify-center m-4">
          <img src={post.thumbnailUrl} alt={post.title} />
        </div>
        <div className="flex justify-between w-full max-w-3xl px-4 text-xs">
          <p>{formatDate(post.createdAt)}</p>
          <div>
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="border border-gray-400 py-2 px-2 rounded ml-2"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <h1 className="text-2xl m-4">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </>
  );
};

export default Post;
