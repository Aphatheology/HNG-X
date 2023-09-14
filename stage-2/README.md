Stage Two Task
You are to build a simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice. Y

# HNG Backend Stage 2

A simple REST API capable of CRUD operations on a "person" resource, interfacing with MongoDB database.

## Built With
- Node
- Express
- MongoDB
- Mongoose

## Quick Start

Clone the repo:

```bash
git clone https://github.com/Aphatheology/HNG-X
cd HNG-X/stage-2
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .envExample .env

# open .env and modify the environment variables 
```

To run the project:

```bash
yarn run dev
# will run the server with node --watch
# if you are using old node version, install nodemon and edit the dev script

yarn run start
# will run the server with node
```

## API Endpoints

The API provides the following endpoints:

- **Create a Person**

  - Route: `POST /api`
  - Request Body: JSON object with a `name` field.
  - Example:

    ```json
    {
      "name": "John Doe"
    }
    ```

- **Retrieve All Persons**

  - Route: `GET /api`
  - Response: An array of person objects.

- **Retrieve Details of One Person**

  - Route: `GET /api/:id`
  - Response: A person object with the specified ID.

- **Update Details of an Existing Person**

  - Route: `PUT /api/:id`
  - Request Body: JSON object with an updated `name` field.
  - Response: The updated person object.

- **Delete One Person**

  - Route: `DELETE /api/:id`
  - Response: The deleted person object.


  ## Links
  Hosted URL: https://hng-x-stage-two-aphatheology.onrender.com/
  Postman Documentation: https://documenter.getpostman.com/view/13406320/2s9YC5xXxH

Thanks
