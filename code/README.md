# Fetch Country Details App

This is a web application that allows users to input a country name, fetch details about the country, and display it in a user-friendly format. The application consists of two main parts: a React frontend and a Node.js backend running Express. The backend communicates with the REST Countries API to retrieve country information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### Setup

1. Navigate to the project directory:

   ```bash
   cd fetch-country-details-app
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install

   # Return to the root directory and go to backend:
   cd ..
   cd backend
   npm install
   ```

## Usage

### Start the Application

1. Start the backend server:

   ```bash
   cd backend
   node server.js
   ```

   The backend server will be running on `http://localhost:3001`.

2. Start the React frontend:

   ```bash
   cd frontend
   npm start
   ```

   The React development server will be running on `http://localhost:3000`.

3. Open your web browser and navigate to `http://localhost:3000` to use the application.

### Using the Application

1. Enter a country name in the input field and click the "Fetch Details" button.

2. The application will fetch information about the country from the REST Countries API via the backend.

3. The retrieved country information will be displayed on the web page.

## Project Structure

The project is divided into two main directories:

- `frontend`: Contains the React frontend application.
- `backend`: Contains the Node.js backend built with Express.

## API Endpoints

The backend provides the following API endpoint:

- `https://restcountries.com/v3.1/name/${country}`: Retrieves information about the specified country from the REST Countries API. Replace `:country` with the name of the country.

