# YouTube Video Gallery

🔗 **Live Demo:** [Youtube video listing App](https://youtube-video-listing-two.vercel.app/) 

This project is a simple web-based YouTube video gallery that fetches videos from an API and displays them in a grid layout. It includes features like infinite scrolling, dark mode, and a search functionality.

![image](https://github.com/user-attachments/assets/1e6c5e03-42cf-45f0-b5a6-b099f82789de)

![image](https://github.com/user-attachments/assets/3deff4ff-b632-433e-99a2-1a98ed23f0f7)

## Features
- Fetches YouTube videos dynamically using an API
- Infinite scrolling to load more videos automatically
- Dark mode toggle for better user experience
- Search functionality to filter videos by title
- Responsive design for different screen sizes


## Usage

- The application will automatically fetch and display videos.
- Scroll down to load more videos.
- Use the search bar to filter videos by title.
- Click the theme toggle button to switch between light and dark mode.

## File Structure
```
/
│── index.html        # Main HTML file
│── styles.css        # Styling file
│── script.js         # JavaScript functionality
```

## API Information
The project fetches videos from the following API endpoint:
```
https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=20
```
This API returns a list of YouTube videos along with metadata such as thumbnails, titles, and channel names.
