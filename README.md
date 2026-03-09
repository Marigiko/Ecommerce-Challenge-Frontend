# Ecommerce Frontend Challenge

This project is a simple React interface created to interact with the backend API.

It allows testing the main features of the system such as authentication and product creation.

---

## Tech Stack

- React
- Vite
- Axios API
- Swagger

---

## Features

The UI provides a simple interface to test the backend endpoints.

Available actions:

- User registration
- User login
- View user profile
- CRUD product

---

## Running the project

### 1 Install dependencies

pnpm install

### 2 Setup .env variables

create a new file .env with the following variables:

VITE_API_URL=http://localhost:3000

### 3 Start the development server

pnpm dev

The application will run at:

http://localhost:5173

---

## Backend dependency

The frontend expects the backend API to be running at:

http://localhost:3000

If needed, update the API base URL inside the project configuration.

---

## Error Handling

Basic error handling has been implemented in the UI.

If an API request fails, the user will see a descriptive error message returned by the backend.

---

## Purpose of this UI

This frontend is intentionally minimal and was created only to:

- interact with the backend
- demonstrate API usage
- test authentication and product flows