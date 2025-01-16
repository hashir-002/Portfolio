import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '../contentful/client';
import { Link } from 'react-router-dom';

const Blogs = ({ direction = 'grid' }) => {

    const [Loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries({ content_type: "blog" });
        setBlogs(entries.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (Loading) return <p className='pt-16 text-2xl font-bold text-violet-950'>Loading</p>;
  return (
    <div className={`grid gap-6 ${direction === 'flex-col' ? 'flex flex-col' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
      {blogs.map((item, index) => {
        return (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg m-3 transition-shadow "
            // whileHover={{ scale: 1.1 }}
          >
            {/* Image Wrapper */}
            <div className="relative w-auto h-32 lg:h-40 overflow-hidden rounded-t-lg">
              <img
                src={item.fields.cover.fields.file.url}
                alt={item.fields.title}
                className="w-full h-full object-cover mx-auto transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.fields.title}</h3>
              <p className="text-gray-500 mb-4">{item.fields.date}</p>
              <p className="text-gray-600 mb-4">{item.fields.excerpt}</p>
              <a href={`/blog/${item.fields.slug}`}>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-700">
                  Read
                </button>
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  )
}

export default Blogs