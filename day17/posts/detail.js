
// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (!postId) throw new Error("No post ID provided");

    const cacheKey = `post_${postId}`;
    const cachedData = localStorage.getItem(cacheKey);
    let post = null;

    if (cachedData) {
      const cached = JSON.parse(cachedData);
      const now = new Date().getTime();
      const FIVE_MINUTES = 5 * 60 * 1000;

      if (now - cached.timestamp < FIVE_MINUTES) {
        post = cached.data;
        console.log("Post loaded from localStorage");
      }
    }

    if (!post) {
      const response = await fetch(`${apiUrl}/posts/${postId}`);
      if (!response.ok) throw new Error("Failed to fetch post");
      post = await response.json();
      // 캐시에 저장
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ data: post, timestamp: new Date().getTime() })
      );
      console.log("Post fetched from API");
    }

    renderPost(post);
  } catch (error) {
    console.error("Error:", error.message);
    document.getElementById("post-detail").innerHTML =
      "<p>Error loading post details</p>";
  }
}

// 포스트 렌더링 함수
function renderPost(post) {
  const postDetail = document.getElementById("post-detail");
  postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
