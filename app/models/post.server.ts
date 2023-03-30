import { prisma } from "~/db.server"

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
