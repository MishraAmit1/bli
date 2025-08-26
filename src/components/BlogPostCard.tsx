import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  category
}: BlogPostCardProps) => {
  return (
    <Link to={`/resources/blogs/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all duration-300 h-full bg-[#F8FFFF] border-[#185EAA]/20">
        <div className="grid grid-rows-[200px,1fr]">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          >
            <div className="w-full h-full bg-[#113C6A]/30 flex items-center justify-center">
              <span className="px-3 py-1 bg-[#FF7729]/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#FFFDF7] inline-block">
                {category}
              </span>
            </div>
          </div>
          <CardContent className="p-6 bg-[#F8FFFF]">
            <p className="text-[#0a213a]/90 text-sm mb-2">{date}</p>
            <h3 className="text-xl font-bold mb-2 line-clamp-2 text-[#113C6A]">{title}</h3>
            <p className="text-[#0a213a]/90 mb-4 line-clamp-3">{excerpt}</p>
            <Button variant="outline" className="group mt-auto border-[#185EAA] text-[#113C6A] hover:bg-[#113C6A] hover:text-[#FFFDF7] hover:border-[#113C6A]">
              Read more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default BlogPostCard;