import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/utlis/blogData";
import { format, startOfWeek, subWeeks, isWithinInterval } from "date-fns";

interface RecentPostsProps {
  blogData: typeof blogData;
}

const getStartOfWeekAndLastWeek = () => {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today);
  const startOfLastWeek = subWeeks(startOfCurrentWeek, 1);
  return { startOfCurrentWeek, startOfLastWeek };
};

const filterBlogsByWeek = (blogs: typeof blogData) => {
  const { startOfCurrentWeek, startOfLastWeek } = getStartOfWeekAndLastWeek();

  return blogs.filter((blog) => {
    const blogDate = new Date(blog.date);
    return isWithinInterval(blogDate, {
      start: startOfLastWeek,
      end: startOfCurrentWeek,
    });
  });
};

const recentBlogs = filterBlogsByWeek(blogData);

const RecentPosts: React.FC<RecentPostsProps> = ({  }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {recentBlogs.length > 0 ? (
        <div className="flex flex-wrap gap-6">
          {recentBlogs.map((blog) => (
            <div key={blog.id} className="week-blog rounded-lg">
              <Link href={`/blog/posts/${blog.id}`} key={blog.id} className="inline-block w-full relative">
                <Image
                  src={blog.image}
                  alt={blog.heading}
                  className="w-full h-auto rounded-[32px]"
                  width={1400}
                  height={800}
                />
                <div className="absolute z-[2] bottom-[0px] w-full text-center p-[30px]">
                  <div className="bg-white rounded-[90px] text-black text-[14px] py-[7px] px-[24px] w-max mx-auto md:text-[18px]">
                    {blog.category}
                  </div>
                  <h2 className="text-white text-[20px] leading-[28px] my-[15px] font-HelveticaNeue md:text-[24px] md:my-[30px]">
                    {blog.heading}
                  </h2>
                  <span className="block text-gray-400 text-[14px] md:text-[18px]">
                    {format(new Date(blog.date), "MMM d, yyyy")}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No recent posts available.</p>
      )}
    </div>
  );
}

export default RecentPosts;