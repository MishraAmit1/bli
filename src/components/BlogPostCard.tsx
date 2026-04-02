import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  slug: string;
  category: string;
}

const BlogPostCard = ({
  title,
  excerpt,
  imageUrl,
  date,
  slug,
  category,
}: BlogPostCardProps) => {
  return (
    <div className="overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300 h-full bg-white flex flex-col">
      {/* Image */}
      <div
        className="bg-cover bg-center h-[200px] relative flex-shrink-0"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-400 text-xs mb-3 uppercase tracking-wider">
          {date}
        </p>

        <h3 className="text-lg font-bold mb-3 line-clamp-2 text-[#1a1a1a] leading-snug">
          <Link
            to={`/resources/blogs/${slug}`}
            className="hover:text-[#FF7300] transition-colors duration-300"
          >
            {title}
          </Link>
        </h3>

        <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>

        <Link
          to={`/resources/blogs/${slug}`}
          className="mt-auto group inline-flex items-center gap-1.5 text-[#1a1a1a] hover:text-[#FF7300] transition-colors duration-300"
          aria-label={`Read more about ${title}`}
        >
          <span className="text-sm font-semibold">Read more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
