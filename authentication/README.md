## Login Component

Imports

useState: React hook for managing component state.
axios: Library for making HTTP requests to APIs.
User: A child component that will display the user's information

State Variables

email: Stores the user's email. Pre-filled with the test email required by reqres.in.
password: Stores the user's password (inputted by the user).
token: Holds the JWT token received after a successful login.

handleLogin Function

Handles the login process by sending the email and password to the reqres.in API:

Prevent Default Form Submission:
e.preventDefault(); ensures the page doesn't reload when the form is submitted.

Make POST Request:
Sends the email and password in the request body to https://reqres.in/api/login.

Extract and Log JWT Token:
Retrieves the token from the API response.
Stores it in the component state (setToken(jwtToken)).

Store Token in Session Storage:
Saves the token in session storage for use across other parts of the app.

Handle Errors:
Logs any error that occurs during the login process (e.g., network issues or invalid credentials).

logoutUser Function

Handles logout by:
Clearing session storage (sessionStorage.clear()).
Resetting the token in the component state (setToken("")).


Render Function

The UI structure of the component includes:
Title and Instructions:
Prompts the user to use the specific email and any password (per reqres.in requirements).
Login Form:
Input fields for email and password, with event handlers to update state (setEmail, setPassword).
Submit button triggers handleLogin.
Logout Button:
Clears the token and session storage when clicked.
Conditional Rendering of User Component:
If a token is present, the User component is rendered.

## User Component
user: State variable to store the user data fetched from the API.
setUser: Function to update the user state.

useEffect Hook
Executes the side effect (data fetching) when the component mounts:

Retrieves the JWT token from session storage (assumed to have been stored during login).

Configuring Axios with a JWT
axios.create: Creates a pre-configured Axios instance.
Authorization header: Sends the JWT with each request, simulating protected API access

Making an Authenticated GET Request
axiosInstance.get('/api/users/4'):
Fetches user data for user ID 4 from the /api/users/4 endpoint.
If successful, the response contains user data, which is logged and stored in the user state.
Error Handling:
If the request fails, the error is logged to the console.

Rendering User Data
Conditional Rendering:
Only displays the user data if the user state is populated.
Displayed Data:
User's avatar (user.data.avatar).
Full name (user.data.first_name and user.data.last_name).
Email (user.data.email).

## Purpose of JWT, sessionstorage, and HTTP headers
In a web application, JWTs, session storage, and HTTP headers collaborate seamlessly for secure user authentication and authorized API communication.

When a user logs in, the server generates a JWT containing user details. This JWT is securely stored in the session storage on the client side, persisting throughout the user's session.

As the user interacts with authenticated areas of the application, the stored JWT is retrieved from session storage. When making requests to an API that requires authentication, the JWT is added to the HTTP headers, typically using the Authorization: Bearer your-jwt-token format.

This combination of technologies ensures a secure and efficient authentication process, allowing the client to communicate with APIs while maintaining the user's authenticated state.