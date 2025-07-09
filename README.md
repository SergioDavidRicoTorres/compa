## Compa - Music Emotion Explorer

This is the prototype of **Compa**, a mobile app for subjective emotional exploration of music. It has two main modes:

1. **Exploration Mode** – search music by vibe (LLM prompt), mood tags, or serendipity.
2. **Expression Mode** – users tag their own Spotify songs with moods.

### Tech Stack

- Expo + React Native + TypeScript
- Firebase (Auth, Firestore)
- Spotify Web API (OAuth + song data)

### Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:

   ```
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   ```

3. Set up Firebase:

   - Create a new Firebase project
   - Enable Authentication and Firestore
   - Copy the configuration values to your `.env` file

4. Set up Spotify:

   - Create a Spotify Developer account
   - Create a new application
   - Add `exp://localhost:19000/--/` as a redirect URI
   - Copy the Client ID to your `.env` file

5. Start the development server:
   ```bash
   npx expo start
   ```

### Project Structure

```
src/
  components/      # Reusable UI components
  constants/       # App-wide constants
  contexts/        # React contexts (Auth, etc.)
  hooks/          # Custom React hooks
  navigation/     # Navigation configuration
  screens/        # Main app screens
    Exploration/  # Music discovery features
    Expression/   # Mood tagging interface
    Profile/      # User profile and settings
  services/       # Firebase and Spotify services
  utils/          # Helper functions
```

### Features

- **Exploration Mode**

  - Search music by vibe using natural language
  - Filter by mood tags
  - Discover new tracks through serendipity

- **Expression Mode**
  - Tag songs from your Spotify library
  - Create personal mood collections
  - Edit and manage your tags
