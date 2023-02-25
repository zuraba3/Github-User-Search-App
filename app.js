const moon = document.getElementById("moon");
// console.log(moon);
const sun = document.getElementById("sun");
// console.log(sun);
const title = document.querySelector(".title");
const themeText = document.querySelector(".theme-text");

const input = document.getElementById("user");
const button = document.querySelector(".btn");
const cards = document.querySelectorAll(".card");

const avatarMobile = document.querySelector(".avatar-mobile");
const avatarDesktop = document.querySelector(".avatar-desktop");
const nameElement = document.querySelector(".name");
const login = document.querySelector(".login");
const joindate = document.querySelector(".join-date");
const bio = document.querySelector(".bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const city = document.getElementById("city");
const blog = document.getElementById("blog");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");
const errorElement = document.querySelector(".error");
const stats = document.querySelector(".stats");

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

input.addEventListener("input", () => {
  errorElement.textContent = "";
});

// Manipulate Date

const dateTransformer = (date) => {
  const dateObject = new Date(date);
  const dateString = dateObject.toDateString();
  const [weekday, month, day, year] = dateString.split(" ");
  return `Joined ${day} ${month} ${year}`;
};

// Display the user's information

const displayInfo = (user) => {
  avatarMobile.src = user.avatar_url;
  avatarDesktop.src = user.avatar_url;
  nameElement.textContent = user.name;
  login.textContent = "@" + user.login;
  const date = dateTransformer(user.created_at);
  joindate.textContent = date;
  bio.textContent =
    user.bio ||
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
  repos.textContent = user.public_repos;
  followers.textContent = user.followers;
  following.textContent = user.following;
  if (user.location) {
    city.textContent = user.location;
  } else {
    city.textContent = "Not Available";
    city.parentElement.style.opacity = 0.5;
  }
  if (user.twitter_username) {
    twitter.textContent = user.twitter;
  } else {
    twitter.textContent = "Not Available";
    twitter.parentElement.style.opacity = 0.5;
  }
  if (user.blog) {
    blog.textContent = user.blog;
    blog.href = user.blog;
  } else {
    blog.textContent = "Not Available";
    blog.href = "#";
    blog.parentElement.style.opacity = 0.5;
  }
  if (user.company) {
    company.textContent = user.company;
  } else {
    company.textContent = "Not Available";
    company.parentElement.style.opacity = 0.5;
  }
};

displayInfo(octocat);

const flipTheme = (theme) => {
  if (theme === "dark") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.background = "#141d2f";
    title.style.color = "#ffffff";
    themeText.innerHTML = "light";
    themeText.style.color = "#ffffff";
    login.style.color = "#";
  } else if (theme === "sun") {
    moon.style.display = "block";
    sun.style.display = "none";
    document.body.style.background = "#fefefe";
    title.style.color = "#222731";
    themeText.innerHTML = "dark";
    themeText.style.color = "#1e2a47";
  }
  input.classList.toggle("dark");
  Array.from(cards).forEach((card) => card.classList.toggle("dark"));
  blog.classList.toggle("dark");
  login.style.color = "#0079FF";
  stats.classList.toggle("dark");
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
    // console.log(user);
    displayInfo(user);
  } catch (error) {
    console.log("error");
    errorElement.textContent = "No result";
  }
});
