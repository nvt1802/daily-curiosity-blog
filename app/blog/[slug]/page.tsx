import { Avatar, Badge } from "flowbite-react";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Blog - ${params.slug} | Daily Curiosity`,
    description: `Read about ${params.slug} and discover insights on science, health care, and more.`,
  };
}

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-5">
      <div className="w-full flex flex-col gap-4">
        <Badge color="info" size="sm" className="w-fit">
          Blogs
        </Badge>
        <h1 className="text-3xl">
          The Impact of Technology on the Workplace: How Technology is Changing
          - {params?.slug}
        </h1>
        <div className="inline-flex justify-between gap-8 w-fit">
          <div className="inline-flex gap-3">
            <Avatar
              img="/zhou-shiyu.png"
              alt="avatar of Jese"
              size="sm"
              rounded
            />
            <p className="my-auto text-neutral-400 font-medium text-sm">
              Zhou Shiyu
            </p>
          </div>
          <p className="my-auto text-neutral-400 text-xs">August 20, 2022</p>
        </div>
      </div>
      <div className="rich-text">
        <Image
          src="/images/blog.png"
          alt=""
          width={500}
          height={500}
          className="w-full max-w-[800px]"
        />
        <p>
          {`Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.`}
        </p>
        <p>
          {`One of the most rewarding aspects of traveling is immersing yourself in
          the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.`}
        </p>
        <h2>Research Your Destination</h2>
        <p>
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
        <h2>Plan Your Itinerary</h2>
        <p>
          {`While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.`}
        </p>
        <p>
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
        <blockquote>
          {`Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.`}
        </blockquote>
        <Image
          src="/images/blog2.png"
          alt=""
          width={500}
          height={500}
          className="w-full max-w-[800px]"
        />
        <h2>Pack Lightly and Smartly</h2>
        <p>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
        <h2>Stay Safe and Healthy</h2>
        <p>
          {`Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.`}
        </p>
        <h2>Immerse Yourself in the Local Culture</h2>
        <p>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <h2>Capture Memories</h2>
        <p>
          {`Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.`}
        </p>
        <h2>Conclusion:</h2>
        <p>
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
