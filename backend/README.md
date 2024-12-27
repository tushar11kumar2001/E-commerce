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
