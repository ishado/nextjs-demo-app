import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

export default async function post({params}) {
    // console.log(params);
    const postId = params.postId;

    const loadingJsx = <div><h3>Waiting...</h3></div>;
    return (
        <div>
            <h1>Post Details</h1>
            <Suspense fallback={loadingJsx}>
                <PostDetails postId={postId}/>
            </Suspense>
        </div>
    );
}