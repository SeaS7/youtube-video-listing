document.addEventListener("DOMContentLoaded", function () {
  const videoGrid = document.getElementById("videoGrid");
  const loading = document.getElementById("loading");
  const themeToggle = document.getElementById("themeToggle");
  const searchInput = document.getElementById("search");

  let isDarkMode = false;
  let page = 1;
  let isFetching = false;
  let allVideos = [];
  let filteredVideos = [];

  // Fetch Videos Function
  async function fetchVideos() {
    if (isFetching) return;
    isFetching = true;
    loading.style.display = "block"; // Show loading

    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}&limit=20`
      );
      const data = await response.json();

      console.log("Full API Response:", data);

      if (data.data && Array.isArray(data.data.data)) {
        data.data.data.forEach((videoResponse) => {
          const video = videoResponse.items;

          if (video && video.snippet) {
            allVideos.push(video); // Store for searching
          }
        });

        page++; // Increase page number for next load
        applySearch();
      } else {
        console.error("Unexpected API response structure:", data);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }

    isFetching = false;
    loading.style.display = "none";
  }

  // Function to Display Videos
  function displayVideos(videos) {
    // Clear grid before inserting new content
    videoGrid.innerHTML = "";

    if (videos.length === 0) {
      videoGrid.innerHTML = "<p>No videos found</p>";
      return;
    }

    videos.forEach((video) => {
      const videoCard = document.createElement("div");
      videoCard.classList.add("video");

      videoCard.innerHTML = `
                <img src="${
                  video.snippet?.thumbnails?.medium?.url ||
                  "default-thumbnail.jpg"
                }" alt="${video.snippet?.title || "No Title"}">
                <div class="video-info">
                    <p class="video-title">${
                      video.snippet?.title || "Untitled"
                    }</p>
                    <p class="video-channel">${
                      video.snippet?.channelTitle || "Unknown Channel"
                    }</p>
                </div>
            `;

      videoGrid.appendChild(videoCard);
    });

    // Ensure grid layout consistency
    videoGrid.style.display = videos.length === 1 ? "flex" : "grid";
    videoGrid.style.justifyContent = videos.length === 1 ? "center" : "";
  }

  // Apply Search Filtering
  function applySearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filteredVideos = allVideos.filter((video) =>
        video.snippet?.title.toLowerCase().includes(searchTerm)
      );
      displayVideos(filteredVideos);
    } else {
      displayVideos(allVideos);
    }
  }

  // Search Event Listener
  searchInput.addEventListener("input", applySearch);

  // Infinite Scroll
  window.addEventListener("scroll", function () {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      fetchVideos();
    }
  });

  // Dark Mode Toggle
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    isDarkMode = !isDarkMode;
    themeToggle.innerHTML = isDarkMode ? "☀️" : "🌙";
  });

  // Load initial videos
  fetchVideos();
});
