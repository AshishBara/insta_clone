import Post from "./Post";

const posts = [
    {
    id: '123',
    username: 'ashish',
    userImage: 'https://links.papareact.com/3ke',
    caption: "hello friends"
    },
    {
        id: '124',
        username: 'hell boy',
        userImage: 'https://links.papareact.com/3ke',
        caption: "do or die"
    },
    {
        id: '125',
        username: 'hacker',
        userImage: 'https://links.papareact.com/3ke',
        caption: "hack the box"
    },
]

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} username={post.username}
                img={post.userImage} caption={post.caption} />
            ))}
           
           
        </div>
    )
}

export default Posts
