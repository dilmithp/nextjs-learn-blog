import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import {prisma} from "@/app/utils/db";
import {BlogpostCard} from "@/components/general/BlogpostCard";
import {Suspense} from "react";

async function getBlogPosts() {
  const data = await prisma.blogPost.findMany({
      select: {
          title: true,
          content:true,
          imageUrl: true,
          authorImage: true,
          authorName: true,
          id: true,
          createdAt: true,
          authorId: true,
          updatedAt: true,
      },
  })
    return data;
}
export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Trending</h1>
        <Suspense fallback={<p>Loading...</p>}>
            <BlogPosts />
        </Suspense>
    </div>
  );
}
async function BlogPosts() {
  const data = await getBlogPosts();
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item)=>(
              <BlogpostCard data={item} key={item.id}/>
          ))}
      </div>
  )
}
