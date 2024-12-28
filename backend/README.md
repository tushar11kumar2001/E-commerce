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

## POST /captain/register

Register a new captain in the system.

### Description
This endpoint allows new captains to create an account in the Swift Ride application.

### Request Body
```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "emailId": "string",
  "password": "string",
  "vechicle": {
    "color": "string",
    "plate": "string",
    "capacity": 1,
    "vechicleType": "car"
  }
}
```

### Request Body Parameters
| Parameter              | Type   | Required | Description                            |
|------------------------|--------|----------|----------------------------------------|
| fullName.firstName     | string | Yes      | Captain's first name                   |
| fullName.lastName      | string | No       | Captain's last name                    |
| emailId                | string | Yes      | Captain's email address                |
| password               | string | Yes      | Captain's password (min 6 chars)       |
| vechicle.color         | string | Yes      | Vehicle color                          |
| vechicle.plate         | string | Yes      | Vehicle plate                          |
| vechicle.capacity      | number | Yes      | Vehicle capacity (min 1)               |
| vechicle.vechicleType  | string | Yes      | Vehicle type (car, motorcycle, auto)   |

### Response Status Codes
| Status Code | Description                                          |
|-------------|------------------------------------------------------|
| 201         | Captain successfully registered                      |
| 400         | Bad Request - Invalid input data                     |
| 409         | Conflict - Email already exists                      |
| 500         | Internal Server Error                                |

### Example Request
```bash
curl -X POST \
  http://localhost:8000/captain/register \
  -H 'Content-Type: application/json' \
  -d '{
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "emailId": "john.doe@example.com",
    "password": "password123",
    "vechicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vechicleType": "car"
    }
}'
```

### Success Response
```json
{
  "status": "Captain successfully registered",
  "captain": {
    "id": "captain_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "emailId": "john.doe@example.com",
    "vechicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vechicleType": "car"
    }
  },
  "token": "jwt_token"
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

## POST /captain/login

Authenticate a captain and return a JWT token.

### Description
This endpoint allows existing captains to log in to the Swift Ride application.

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
| emailId   | string | Yes      | Captain's email address       |
| password  | string | Yes      | Captain's password (min 6 chars) |

### Response Status Codes
| Status Code | Description                                          |
|-------------|------------------------------------------------------|
| 200         | Captain successfully logged in                       |
| 400         | Bad Request - Invalid input data                     |
| 401         | Unauthorized - Invalid credentials                   |
| 500         | Internal Server Error                                |

### Example Request
```bash
curl -X POST \
  http://localhost:8000/captain/login \
  -H 'Content-Type: application/json' \
  -d '{
    "emailId": "john.doe@example.com",
    "password": "password123"
}'
```

### Success Response
```json
{
  "status": "Captain successfully logged in",
  "token": "jwt_token",
  "captain": {
    "id": "captain_id",
    "emailId": "john.doe@example.com"
  }
}
```

## GET /user/profile

Retrieve the profile of the authenticated user.

### Description
This endpoint allows authenticated users to retrieve their profile information.

### Headers
| Header          | Type   | Required | Description                    |
|-----------------|--------|----------|--------------------------------|
| Authorization   | string | Yes      | Bearer token for authentication|

### Response Status Codes
| Status Code | Description                                          |
|-------------|------------------------------------------------------|
| 200         | User profile retrieved successfully                  |
| 401         | Unauthorized - Invalid or missing token              |
| 500         | Internal Server Error                                |

### Example Request
```bash
curl -X GET \
  http://localhost:8000/user/profile \
  -H 'Authorization: Bearer jwt_token'
```

### Success Response
```json
{
  "status": "successfully",
  "user": {
    "id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "emailId": "john.doe@example.com"
  }
}
```

## GET /captain/profile

Retrieve the profile of the authenticated captain.

### Description
This endpoint allows authenticated captains to retrieve their profile information.

### Headers
| Header          | Type   | Required | Description                    |
|-----------------|--------|----------|--------------------------------|
| Authorization   | string | Yes      | Bearer token for authentication|

### Response Status Codes
| Status Code | Description                                          |
|-------------|------------------------------------------------------|
| 200         | Captain profile retrieved successfully               |
| 401         | Unauthorized - Invalid or missing token              |
| 500         | Internal Server Error                                |

### Example Request
```bash
curl -X GET \
  http://localhost:8000/captain/profile \
  -H 'Authorization: Bearer jwt_token'
```

### Success Response
```json
{
  "status": "Successfully",
  "captain": {
    "id": "captain_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "emailId": "john.doe@example.com",
    "vechicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vechicleType": "car"
    }
  }
}
```

## GET /user/logout

Logout the authenticated user.

### Description
This endpoint allows authenticated users to logout by invalidating their token.

### Headers
| Header          | Type   | Required | Description                    |
|-----------------|--------|----------|--------------------------------|
| Authorization   | string | Yes      | Bearer token for authentication|

### Response Status Codes
| Status Code | Description                                          |
|-------------|------------------------------------------------------|
| 200         | User logged out successfully                         |
| 401         | Unauthorized - Invalid or missing token              |
| 500         | Internal Server Error                                |

### Example Request
```bash
curl -X GET \
  http://localhost:8000/user/logout \
  -H 'Authorization: Bearer jwt_token'
```

### Success Response
```json
{
  "message": "Logout successfully"
}
```

## GET /captain/logout

Logout the authenticated captain.

### Description
This endpoint allows authenticated captains to logout by invalidating their token.

### Headers
| Header          | Type   | Required | Description                    |
|-----------------|--------|----------|--------------------------------|
| Authorization   | string | Yes      | Bearer token for authentication|

### Response Status Codes
| Status Code | Description                                          |
|-------------|------------------------------------------------------|
| 200         | Captain logged out successfully                      |
| 401         | Unauthorized - Invalid or missing token              |
| 500         | Internal Server Error                                |

### Example Request
```bash
curl -X GET \
  http://localhost:8000/captain/logout \
  -H 'Authorization: Bearer jwt_token'
```

### Success Response
```json
{
  "message": "Successfully logged out"
}
```
