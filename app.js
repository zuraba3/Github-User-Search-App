const moon = document.getElementById("moon");
// console.log(moon);
const sun = document.getElementById("sun");
// console.log(sun);
const title = document.querySelector(".title");
const themeText = document.querySelector(".theme-text");

const input = document.getElementById("user");
const button = document.querySelector(".btn");

const octocat = {
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: null,
  blog: "https://github.blog",
  company: "@github",
  created_at: "2011-01-25T18:44:36Z",
  email: null,
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  followers: 8419,
  followers_url: "https://api.github.com/users/octocat/followers",
  following: 9,
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/octocat",
  id: 583231,
  location: "San Francisco",
  login: "octocat",
  name: "The Octocat",
  node_id: "MDQ6VXNlcjU4MzIzMQ==",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  public_gists: 8,
  public_repos: 8,
  received_events_url: "https://api.github.com/users/octocat/received_events",
  repos_url: "https://api.github.com/users/octocat/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  twitter_username: null,
  type: "User",
  updated_at: "2023-01-22T12:13:51Z",
  url: "https://api.github.com/users/octocat",
};

const flipTheme = (theme) => {
  if (theme === "dark") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.background = "#141d2f";
    title.style.color = "#ffffff";
    themeText.innerHTML = "light";
    themeText.style.color = "#ffffff";
  } else if (theme === "sun") {
    moon.style.display = "block";
    sun.style.display = "none";
    document.body.style.background = "#fefefe";
    title.style.color = "#222731";
    themeText.innerHTML = "dark";
    themeText.style.color = "#1e2a47";
  }
};

moon.addEventListener("click", () => flipTheme("dark"));
sun.addEventListener("click", () => flipTheme("sun"));

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

button.addEventListener("click", async (event) => {
  event.preventDefault();
  // console.log(input.value);
  try {
    const response = await axios.get(
      "https://api.github.com/users/" + input.value
    );
    // console.log(response);
    const user = response.data;
    input.value = "";
    console.log(user);
  } catch (error) {
    console.log("error");
  }
});
