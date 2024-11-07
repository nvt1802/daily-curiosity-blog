import { IPost } from "@/types/posts";
import LatestPost from "@/components/home/LatestPost";
import PopularSection from "@/components/home/PopularSection";
import Link from "next/link";

interface IProps {
  posts?: IPost[];
}

const ContentSection: React.FC<IProps> = ({ posts }) => {
  return (
    <div className="px-4 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-8 w-full gap-3 xmd:gap-5">
      <div className="col-span-5 col-nam w-full space-y-5">
        <div className="inline-flex w-full justify-between">
          <h2 className="text-2xl lg:text-3xl font-bold dark:text-white">
            Lasted posts
          </h2>
          <Link href={`/blog`} className="flex flex-col justify-end">
            <p className="text-sm font-medium">View All</p>
          </Link>
        </div>
        <LatestPost posts={posts?.splice(0, 2)} />
      </div>
      <div className="col-span-3 w-full space-y-5">
        <p className="text-2xl lg:text-3xl font-bold dark:text-white">
          Popular Posts
        </p>
        <PopularSection posts={posts?.splice(0, 7)} />
      </div>
    </div>
  );
};

export default ContentSection;
