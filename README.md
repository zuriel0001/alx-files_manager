# ALX Files Manager
This project is part of the ALX curriculum and serves as a practical
exercise in building a simple file management platform.
The project covers various aspects of back-end development
including authentication, NodeJS, MongoDB, Redis, pagination, and background processing.

## Project Overview

The objective is to build a platform for uploading and managing files.

Key features include:

- User authentication via token
- Listing all files
- Uploading new files
- Changing permission of a file
- Viewing files
- Generating thumbnails for images

## Team Members

- Zuriel Azameti
- Chigozirim Uwaezuoke

## Tasks

1. Redis Utils
Create a RedisClient class with methods for connection management and data operations.
2. MongoDB Utils
Implement a DBClient class for managing connections to MongoDB and performing database operations.
3. First API
Set up an Express server with routes for checking status and fetching stats.
Implement corresponding controller methods for handling these endpoints.
4. Create a New User
Add an endpoint for creating new users.
Implement controller logic for creating users in the database.
5. Authenticate a User
Implement endpoints for user authentication, token generation, and token validation.
Create corresponding controller methods for handling authentication.
6. First File
Create endpoints for uploading files.
Implement controller logic for uploading files to the server and storing metadata in the database.
7. Get and List Files
Add endpoints for retrieving and listing files.
Implement controller methods for fetching individual files and paginated lists of files.
8. File Publish/Unpublish
Implement endpoints for changing file visibility.
Create controller methods for updating file visibility in the database.
9. File Data
Add an endpoint for accessing file data.
Implement controller logic for retrieving and serving file content.

## Setup Instructions
1. Clone the repository from GitHub: [alx-files_manager](https://github.com/zuriel0001/alx-files_manager.git).
2. Install dependencies by running `npm install`.
3. Start the server using ``npm start``.
4. Access the API endpoints using appropriate HTTP requests.

## Requirements
Editors: vi, vim, emacs, Visual Studio Code
Interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
Code should end with a new line
ESLint should be used for linting

## Resources

- [Node JS Getting Started](https://intranet.alxswe.com/rltoken/buFPHJYnZjtOrTd610j6Og).
- [Express Getting Started](https://intranet.alxswe.com/rltoken/SujfeWKCWmUMomfETjETEg).
[MongoDB Documentation](https://intranet.alxswe.com/rltoken/g1x7y_3GskzVAJBTXcSjmA).
[Redis Documentation](https://intranet.alxswe.com/rltoken/nqwKRszO8Tkj_ZWW1EFwGw)
[Mocha Documentation](https://intranet.alxswe.com/rltoken/FzEwplmoZiyGvkgKllZNJw).
[Nodemon Documentation](https://intranet.alxswe.com/rltoken/pdNNTX0OLugbhxvP3sLgOw)
[Bull Documentation](https://intranet.alxswe.com/rltoken/NkHBpGrxnd0sK_fDPMbihg).
[Image Thumbnail](https://intranet.alxswe.com/rltoken/KX6cck2nyLpQOTDMLcwxLg).
[Mime-Types](https://intranet.alxswe.com/rltoken/j9B0Kc-4HDKLUe88ShbOjQ).

## Learning Objectives

Upon completion of this project, you should be able to:

- Create an API with Express
- Authenticate users
- Store data in MongoDB
- Manage temporary data in Redis
- Setup and use background workers

## Note:
This README provides an overview of the project and its tasks.
For detailed instructions and code implementation, refer to
the corresponding files in the repository.
