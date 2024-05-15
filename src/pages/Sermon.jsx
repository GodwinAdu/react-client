import React, { useState, useEffect } from 'react';
import SingleBlog from "../components/blog/SingleBlog";
import blogData from "../components/blog/blogData";
import Breadcrumbs from "../components/commons/Breadcrumbs";
import ScrollUp from '../components/commons/ScrollUp';

const POSTS_PER_PAGE = 4;

const SermonPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogData.slice(startIndex, endIndex);

  useEffect(() => {
    // Reset to the first page if the data changes (for example, if you load new posts)
    setCurrentPage(1);
  }, [blogData]);

  return (
    <>
      {/* ... Breadcrumbs component ... */}
      <ScrollUp />
      <Breadcrumbs
        pageName="Sermons"
        description="At Altar of Grace, our sermons serve as a bridge between God's timeless word and our daily lives. They're designed not only to provide spiritual nourishment but also to inspire action, introspection, and a deeper understanding of God’s love for us. Whether you're a long-time member or a first-time visitor, our sermons aim to touch your heart and mind."
      />
      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                  <SingleBlog blog={blog} />
              
              </div>
            ))}
          </div>
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {/* Rendering dynamic pagination links based on totalPages and currentPage */}
                <li className="mx-1">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </button>
                </li>
                {[...Array(totalPages).keys()].map(page => (
                  <li key={page + 1} className="mx-1">
                    <button
                      onClick={() => setCurrentPage(page + 1)}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm ${currentPage === page + 1 ? 'bg-primary text-white' : 'bg-body-color text-blue-500 hover:bg-primary hover:text-white'}`}
                    >
                      {page + 1}
                    </button>
                  </li>
                ))}
                <li className="mx-1">
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SermonPage;
