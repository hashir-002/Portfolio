import React, { useState, useEffect } from 'react';
// import BlogList from '../components/BlogList';
import { useParams } from 'react-router-dom';
import { client } from '../contentful/client';
import RichText from '../contentful/RichText';
import Blogs from './Blogs';

const BlogPost = () => {
  const params = useParams();
  const id = params.slug;
  const [Loading, setLoading] = useState(true);
  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries({ content_type: "blog" });
        let a = entries.items;
        a.map((item) => {
          if (item.fields.slug === id) {
            setBlog(item.fields);
          }
        });
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [Loading]);

  if (Loading) return <p className="pt-3 lg:pt-16 text-2xl font-bold text-violet-950">Loading</p>;

  return (
    <div className="container mx-auto p-4 pt-4 lg:pt-24">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Main Content */}
        <div className="flex flex-col items-center lg:w-2/3 mb-6 lg:mb-0 space-y-6">
          {/* Responsive Image */}
          <div className="w-full h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
            <img
              src={blog.cover.fields.file.url}
              alt="Main"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="m-3 text-center text-xl lg:text-3xl font-bold">{blog.title}</h1>
          <p className="text-gray-500 text-sm text-left">{blog.date}</p>

          <RichText richTextContent={blog.content} />
        </div>

        <hr className="border-[1.5px] border-black lg:hidden mb-3" />

        {/* Right Side Blog List */}
        <div className="lg:w-1/3">
          <h1 className="font-bold text-center mb-3">Other updates:</h1>
          <Blogs direction="flex-col" />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;