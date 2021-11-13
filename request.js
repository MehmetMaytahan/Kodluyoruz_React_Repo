import axios from "axios";

export default async function getData(id) {
  let { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  let { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  console.log("users", users);
  console.log("posts", posts);
}
