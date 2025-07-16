async function getPost() {
async function getPost(postNum) {
try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    let data = await response.json();
    console.log(data);
    let response = await fetch(
      `https://jsonplaceholderfdfdfdfdfdf.typicode.com/posts/${postNum}`
    );
    console.log(response);
    // let data = await response.json();
    // console.log(data);
} catch (error) {
    console.log(error);
alert("에러: " + error.message);
}
}
getPost();
getPost("fdfd");