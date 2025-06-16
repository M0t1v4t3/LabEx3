const BASE_URL = "https://supabase-socmed.vercel.app";

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}

export async function createPost(postData) {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return res.json();
}