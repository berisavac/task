
const posts = document.querySelector('.posts')

const getPosts = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
   .then(response => response.json())

  
  data.map(el => console.log(el.title))
} catch (error) {

  }
};

getPosts();


// const markup =  => {
  
// }

// posts.insertAdjacentHTML('beforeend', markup())

