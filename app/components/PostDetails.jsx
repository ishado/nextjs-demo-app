export default async function PostDetails({postId}) {
    // console.log(params);
    // const postId = params.postId;
    
    /* Simulation for waiting get data */
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate: 120,
            },
        }
    );
    const post = await response.json();

    return (
        <div>
            <div style={
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
                <p>{post.id}</p>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    );
}