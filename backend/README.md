# User Registration API Documentation

## POST /user/register

Register a new user in the system.

### Description
This endpoint allows new users to create an account in the Swift Ride application.

### Request Body
```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "emailId": "string",
  "password": "string"
}
```

### Request Body Parameters
| Parameter          | Type   | Required | Description                    |
|--------------------|--------|----------|--------------------------------|
| fullName.firstName | string | Yes      | User's first name              |
| fullName.lastName  | string | No       | User's last name               |
| emailId            | string | Yes      | User's email address           |
| password           | string | Yes      | User's password (min 6 chars)  |

### Response Status Codes
| Status Code | Description                                          |
|-------------|------------------------------------------------------|
| 201         | User successfully registered                          |
| 400         | Bad Request - Invalid input data                      |
| 409         | Conflict - Email already exists                       |
| 500         | Internal Server Error                                 |

### Example Request
```bash
curl -X POST \
  http://localhost:8000/user/register \
  -H 'Content-Type: application/json' \
  -d '{
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "emailId": "john.doe@example.com",
    "password": "password123"
}'
```

### Success Response
```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "emailId": "john.doe@example.com"
  }
}
```

## POST /user/login

Authenticate a user and return a JWT token.

### Description
This endpoint allows existing users to log in to the Swift Ride application.

### Request Body
```json
{
  "emailId": "string",
  "password": "string"
}
```

### Request Body Parameters
| Parameter | Type   | Required | Description                   |
|-----------|--------|----------|-------------------------------|
| emailId   | string | Yes      | User's email address          |
| password  | string | Yes      | User's password (min 6 chars) |

### Response Status Codes
| Status Code | Description                                          |
|-------------|------------------------------------------------------|
| 200         | User successfully logged in                          |
| 400         | Bad Request - Invalid input data                     |
| 401         | Unauthorized - Invalid credentials                   |
| 500         | Internal Server Error                                 |

### Example Request
```bash
curl -X POST \
  http://localhost:8000/user/login \
  -H 'Content-Type: application/json' \
  -d '{
    "emailId": "john.doe@example.com",
    "password": "password123"
}'
```

### Success Response
```json
{
  "status": "success",
  "message": "User login successfully",
  "token": "jwt_token",
  "data": {
    "id": "user_id",
    "emailId": "john.doe@example.com"
  }
}
```
