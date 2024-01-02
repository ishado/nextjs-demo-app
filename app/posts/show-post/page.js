import Post from "../../components/post";
import Todo from "../../components/todo";
import Link from "next/link";


export const metadata = {
    title: 'Posts',
    'description': 'Posts page',
    keywords: ['Posts', 'Blog'],
}

export default async function posts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
        {
            next: {
                revalidate: 60
            }
        }
    );
    const data = await response.json();
    return (
        <div>
            <h1>Posts Page</h1>
            <Link href="/articles">
                <button>Go to Articles</button>
            </Link>
            <hr />
            <h2>Post form server component</h2>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <p>{data.id}</p>

            <hr />
            <div>
                <Post />
                {/* <Todo /> */}
            </div>
        </div>
    );
}