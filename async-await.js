// fetch data from a server
async function fetchPosts() {
  // URL 
  const url = 'https://test.typicode.com/posts?_limit=10';
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    // add to webpage
  } catch (error) {
    console.log("ERROR ", error)
  }
}

fetchPosts();