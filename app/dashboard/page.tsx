import Link from "next/link";
import { redirect } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/app/utils/db";
import { BlogpostCard } from "@/components/general/BlogpostCard";

async function getBlogs(userId: string) {
    const data = await prisma.blogPost.findMany({
        where: {
            authorId: userId,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return data;
}

export default async function Dashboard() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect('/login');
    }

    const data = await getBlogs(user.id);

    return (
        <div>
            <div className={'flex items-center justify-between mb-4'}>
                <h2 className={'text-xl font-medium'}>Your Blog Articles</h2>
                <Link className={buttonVariants()} href="/dashboard/create">
                    Create a Blog
                </Link>
            </div>
            <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
                {data.map((item) => (
                    <BlogpostCard data={item} key={item.id}/>
                ))}
            </div>
        </div>
    );
}
