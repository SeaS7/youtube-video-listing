# YouTube Video Gallery

This project is a simple web-based YouTube video gallery that fetches videos from an API and displays them in a grid layout. It includes features like infinite scrolling, dark mode, and a search functionality.

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
