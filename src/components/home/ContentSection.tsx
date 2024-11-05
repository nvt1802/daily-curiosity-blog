import { IPost } from "@/types/posts";
import LatestPost from "@/components/home/LatestPost";
import PopularSection from "@/components/home/PopularSection";

interface IProps {
  posts?: IPost[];
}

const ContentSection: React.FC<IProps> = ({ posts }) => {
  return (
    <div className="px-4 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-8 w-full gap-3 xmd:gap-5">
      <div className="col-span-5 col-nam w-full space-y-5">
        <h2 className="text-2xl lg:text-3xl font-bold">Lasted posts</h2>
        <LatestPost posts={posts?.splice(0, 2)} />
      </div>
      <div className="col-span-3 w-full space-y-5">
        <p className="text-2xl lg:text-3xl font-bold">Popular Posts</p>
        <PopularSection posts={posts?.splice(0, 6)} />
      </div>
    </div>
  );
};

export default ContentSection;
