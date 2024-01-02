import Link from "next/link";

export const metadata = {
    title: 'Articles',
    description: 'Articles page'
}

export default function articles() {
    return (
        <div>
            <h1>Articles Page</h1>
            <Link href="/posts">
                <button>Go to Posts</button>
            </Link>
        </div>
    );
}