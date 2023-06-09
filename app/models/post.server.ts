import { prisma } from "~/db.server"
import type { Post } from "@prisma/client";

// type Post = {
//     slug: string;
//     title: string;
// }

// export async function getPosts(): Promise<Array<Post>> {
//     return [
//         {slug: "my-first-post", title: "My First Post"},
//         {slug: "my-second-post", title: "My Second Post"},
//     ]
// }

export async function getPosts() {
    return prisma.post.findMany()
}

export async function getPost(slug: string) {
    return  prisma.post.findUnique({   
        where: { slug },
    })
}

export async function createPost(post: Pick<Post, "slug" | "title" | "markdown">) {
    return prisma.post.create({ data: post });
  }
