
// Function to fetch posts from the API
async function fetchPosts(id :string) {
  const response = await fetch(`https://wellobe.aftonbladet.se/webapi/v1/pages/articles/${id}/sales`);

  // Check if the response is successful
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  // Parse the JSON data from the response
  const data = await response.json();
  return data;
}


// interface Post {
//   id: number;
//   title: {value:string};
// }

// Main Posts component to display the fetched posts
const Posts = async({
  params,
}: {
  params: Promise<{ id: string }>
}) =>{
  const {id} = (await params)
  const posts = await fetchPosts(id);
 return (
  <div>
    <h1>{posts.title.value}</h1>
    <ul>
      {/* {posts.map((post) => (
        <li key={post.id}>{post.title}</li> // Display each post title
      ))} */}
    </ul>
  </div>
)};

export default Posts;
