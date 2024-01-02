import Post from "../components/post";
import Todo from "../components/todo";
import Link from "next/link";


export const metadata = {
    title: 'Posts',
    'description': 'Posts page',
    keywords: ['Posts', 'Blog'],
}

export default async function posts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            next: {
                revalidate: 120,
            },
        }
    );
    const posts = await response.json();

    const postsList = posts.map((post) => {
        return (
            <Link href={`/posts/${post.id}`}>
                <div key={post.id} style={
                    {
                        border: '1px solid #000',
                        margin: '10px',
                        padding: '10px',
                        // width: '300px',
                        // height: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        boxShadow: '0 0 2px #000',
                        // cursor: 'pointer',
                        // transition: 'all 0.3s ease-in-out',
                        // '&:hover': {
                        //     transform: 'scale(1.05)',
                        //     boxShadow: '0 0 10px #eee',
                        //     backgroundColor: '#f5f5f5',
                        //     color: '#000',
                        //     border: '1px solid #000',
                        // },
                    }
                }>
                    {/* <Post post={post} /> */}
                    <p>{post.id}</p>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    {/* <hr/> */}
                </div>
            </Link>
        )
    })
    // console.log(posts);
    return (
        <div>
            <h1>Posts Page</h1>
            <Link href="/articles">
                <button>Go to Articles</button>
            </Link>
            <hr/>
            {/* START ALL POSTS */}
                <div>
                    {postsList}
                </div>
            {/* END ALL POSTS */}

        </div>
    );
}