import { useParams } from "react-router";
import blogData from "../components/blog/blogData";
import Breadcrumbs from "../components/commons/Breadcrumbs";
import ScrollUp from "../components/commons/ScrollUp";

const SermonDetails = () => {

    const {blogId} = useParams()
    console.log(blogId)
    
  // Find the blog with the matching ID
  const blog = blogData.find((blog) => blog.id === parseInt(blogId));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const {image,title, sermonBody,sermonTopic,bible, author,tags, publishDate } = blog
  return (
    <>
      <ScrollUp />
        <Breadcrumbs
        pageName="Sermon Details"
        description="At Altar of Grace, we believe every sermon carries a message beyond its spoken words. On our Sermon Details page, journey deeper into each sermon, exploring scripture references, contextual interpretations, and related resources. Here, you'll find a comprehensive breakdown of the sermon, allowing for reflection, understanding, and spiritual growth. "
      />
      <div className=" shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} loading='lazy' className="w-full object-cover " />

      <div className="p-4">
        <h3 className="mb-4 mt-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">{sermonTopic}</h3>
        <h2 className="mb-4 mt-4 text-xl font-bold !leading-tight text-black dark:text-white ">{title}</h2>

        <div className="mt-4">
          <h4 className="mb-4 mt-4 text-lg font-bold !leading-tight text-black dark:text-white ">Bible Verses:</h4>
          <ul className="list-disc list-inside text-gray-500 mt-1">
            {bible.map((verse, index) => (
              <li className="text-base font-medium leading-relaxed text-body-color text-md pb-3  sm:leading-relaxed" key={index}>{verse}</li>
            ))}
          </ul>
        </div>

        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">{sermonBody}</p>

        <div className="flex items-center mt-4">
          <img src={author.image} alt={author.name} className="w-10 h-10 rounded-full object-cover object-center" />
          <div className="ml-2">
            <p className="text-base text-sm font-medium leading-relaxed text-body-color sm:leading-relaxed">{author.name}</p>
            <p className="text-base text-xs font-medium leading-relaxed text-body-color sm:leading-relaxed">{author.designation}</p>
          </div>
        </div>

        <div className="flex items-center mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-base font-medium leading-relaxed text-body-color  sm:leading-relaxed text-sm rounded-full mr-2">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-base font-medium leading-relaxed text-body-color text-xs sm:leading-relaxed">{`Published on ${publishDate}`}</p>
      </div>
    </div>
    </>
  );
};

export default SermonDetails;
