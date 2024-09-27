# QTify - Song Browsing Application

QTify is a React-based song-browsing application that allows users to explore music by genres and albums, offering a modern, responsive UI built with Material UI and Swiper.js. The app fetches song data from a backend API and supports filtering and conditional rendering for a seamless music experience with a responsive design for seamless experiences across different devices.

## Features

### 1. **Albums and Songs Browsing**

- **Albums Section**: Displays top albums using a modular `Section` component, switchable between carousel and grid views.
- **Songs Section**: Allows users to browse songs by genre, using a tab-based filtering system.

### 2. **Reusable UI Components**

- **Buttons**: Designed a reusable button component with adaptable styling.
- **Carousels**: Implemented a dynamic carousel with custom navigation for the album and song sections.

### 3. **Genre Filtering**

- **Genre Tabs**: Customized Material-UI tabs for an intuitive genre-filtering system.
- **Dynamic Content**: Displayed songs and albums dynamically based on genre using conditional rendering.

### 4. **Responsive Design**

- Optimized for different screen sizes using `Material UI` and `Flexbox` for layout management.
- Seamless transitions between carousel and grid layouts.

### 5. **Data Fetching and API Integration**

- Fetched song, album, and genre data using `Axios` from REST APIs.
- Error handling and graceful fallbacks for failed API requests.

## Tech Stack

- **React.js**: Developed the front-end with modular and reusable components.
- **Material UI**: Customized and used for the primary UI framework.
- **Swiper.js**: Integrated for responsive carousels with custom navigation.
- **Axios**: Used for making API calls to fetch song and album data.
- **Vercel**: Deployed the project for production hosting.

## Installation

To run QTify locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/adityaamaiya/QTify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd qtify
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Deployment

The project has been deployed to Vercel. Visit the live demo [here](https://q-tify-lime.vercel.app/).

## Screenshots

### 1. QTify Component Architecture

![Component Architecture](https://i.imgur.com/nvgxYkb.png)

### 2. Albums Section

![Albums Section](https://i.imgur.com/ZwUTu67.png)

### 3. Top Albums - Carousel View

![Top Albums Carousel View](https://i.imgur.com/9HQs2HI.png)

### 4. Top Albums - Grid View

![Top Albums Grid View](https://i.imgur.com/B902iS0.png)

### 5. Songs Section with Genre Filter

![Songs Section](https://i.imgur.com/ngoHmYJ.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
