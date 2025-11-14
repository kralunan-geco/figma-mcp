# Authentication API Specification

## Overview
This document defines the API endpoints required to support the Login Frame UI functionality, including user authentication, password management, and session handling.

**Base URL**: `/api/v1`

---

## Endpoints

### 1. User Login

**Endpoint**: `POST /auth/login`

**Description**: Authenticates a user with username and password credentials.

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "username": "string",
  "password": "string"
}
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "string",
      "username": "string",
      "email": "string",
      "firstName": "string",
      "lastName": "string",
      "createdAt": "ISO 8601 timestamp",
      "lastLogin": "ISO 8601 timestamp"
    },
    "tokens": {
      "accessToken": "string",
      "refreshToken": "string",
      "expiresIn": 3600
    }
  },
  "message": "Login successful"
}
```

**Error Responses**:

- **401 Unauthorized**:
```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Invalid username or password"
  }
}
```

- **400 Bad Request**:
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request payload",
    "details": [
      {
        "field": "username",
        "message": "Username is required"
      }
    ]
  }
}
```

- **429 Too Many Requests**:
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many login attempts. Please try again later.",
    "retryAfter": 300
  }
}
```

---

### 2. Forgot Password

**Endpoint**: `POST /auth/forgot-password`

**Description**: Initiates the password reset process by sending a reset link to the user's email.

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "username": "string"
}
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "If an account with that username exists, a password reset link has been sent to the associated email address"
}
```

**Notes**:
- Returns same response regardless of whether username exists (security best practice)
- Reset token expires after 1 hour
- Rate limited to prevent abuse

**Error Responses**:

- **400 Bad Request**:
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request payload"
  }
}
```

- **429 Too Many Requests**:
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later.",
    "retryAfter": 60
  }
}
```

---

### 3. Reset Password

**Endpoint**: `POST /auth/reset-password`

**Description**: Resets user password using a valid reset token.

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "token": "string",
  "newPassword": "string"
}
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "Password has been reset successfully"
}
```

**Error Responses**:

- **400 Bad Request**:
```json
{
  "success": false,
  "error": {
    "code": "INVALID_TOKEN",
    "message": "Reset token is invalid or has expired"
  }
}
```

- **400 Bad Request** (Weak Password):
```json
{
  "success": false,
  "error": {
    "code": "WEAK_PASSWORD",
    "message": "Password does not meet security requirements",
    "details": [
      "Password must be at least 8 characters long",
      "Password must contain at least one uppercase letter",
      "Password must contain at least one number",
      "Password must contain at least one special character"
    ]
  }
}
```

---

### 4. Refresh Access Token

**Endpoint**: `POST /auth/refresh`

**Description**: Obtains a new access token using a valid refresh token.

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "refreshToken": "string"
}
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "string",
    "expiresIn": 3600
  }
}
```

**Error Responses**:

- **401 Unauthorized**:
```json
{
  "success": false,
  "error": {
    "code": "INVALID_REFRESH_TOKEN",
    "message": "Refresh token is invalid or has expired"
  }
}
```

---

### 5. Logout

**Endpoint**: `POST /auth/logout`

**Description**: Invalidates the current user session and tokens.

**Request Headers**:
```
Content-Type: application/json
Authorization: Bearer <access_token>
```

**Request Body**:
```json
{
  "refreshToken": "string"
}
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "Logout successful"
}
```

**Error Responses**:

- **401 Unauthorized**:
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing access token"
  }
}
```

---

### 6. Get Current User

**Endpoint**: `GET /auth/me`

**Description**: Retrieves information about the currently authenticated user.

**Request Headers**:
```
Authorization: Bearer <access_token>
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "string",
      "username": "string",
      "email": "string",
      "firstName": "string",
      "lastName": "string",
      "createdAt": "ISO 8601 timestamp",
      "lastLogin": "ISO 8601 timestamp"
    }
  }
}
```

**Error Responses**:

- **401 Unauthorized**:
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing access token"
  }
}
```

---

## Authentication & Authorization

### Access Token
- **Type**: JWT (JSON Web Token)
- **Expiration**: 1 hour (3600 seconds)
- **Usage**: Include in `Authorization` header as `Bearer <token>`
- **Contains**: User ID, username, roles/permissions

### Refresh Token
- **Type**: Opaque token or JWT
- **Expiration**: 7 days
- **Storage**: HttpOnly, Secure cookie (recommended) or stored client-side
- **Usage**: Use to obtain new access token when current one expires

---

## Security Considerations

1. **Rate Limiting**:
   - Login: Max 5 attempts per 15 minutes per IP
   - Forgot Password: Max 3 requests per 15 minutes per IP
   - Token Refresh: Max 10 requests per 15 minutes per user

2. **Password Requirements**:
   - Minimum 8 characters
   - At least 1 uppercase letter
   - At least 1 lowercase letter
   - At least 1 number
   - At least 1 special character

3. **Password Storage**:
   - Passwords must be hashed using bcrypt with salt rounds >= 12
   - Never store or log plain-text passwords

4. **Token Security**:
   - Access tokens should be short-lived
   - Refresh tokens should be rotated on use
   - Implement token blacklisting for logout

5. **HTTPS Only**:
   - All authentication endpoints must use HTTPS in production
   - Set Secure flag on cookies

6. **Input Validation**:
   - Sanitize all user inputs
   - Prevent SQL injection, XSS attacks
   - Validate username format (alphanumeric, length limits)

---

## Error Code Reference

| Code | Description |
|------|-------------|
| `INVALID_CREDENTIALS` | Username or password is incorrect |
| `VALIDATION_ERROR` | Request payload validation failed |
| `RATE_LIMIT_EXCEEDED` | Too many requests from client |
| `INVALID_TOKEN` | Token is invalid or expired |
| `WEAK_PASSWORD` | Password doesn't meet requirements |
| `INVALID_REFRESH_TOKEN` | Refresh token is invalid or expired |
| `UNAUTHORIZED` | Missing or invalid authentication |

---

## Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request (validation errors) |
| 401 | Unauthorized (authentication failed) |
| 429 | Too Many Requests (rate limit) |
| 500 | Internal Server Error |

---

## Example Frontend Integration

### Login Flow
```javascript
async function handleLogin(username, password) {
  try {
    const response = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Store tokens securely
      localStorage.setItem('accessToken', data.data.tokens.accessToken);
      localStorage.setItem('refreshToken', data.data.tokens.refreshToken);

      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      // Show error message
      alert(data.error.message);
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('An error occurred during login');
  }
}
```

### Forgot Password Flow
```javascript
async function handleForgotPassword(username) {
  try {
    const response = await fetch('/api/v1/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
    }
  } catch (error) {
    console.error('Forgot password error:', error);
  }
}
```

---

## Testing Checklist

- [ ] Successful login with valid credentials
- [ ] Failed login with invalid credentials
- [ ] Rate limiting on login attempts
- [ ] Forgot password email delivery
- [ ] Password reset with valid token
- [ ] Password reset with expired token
- [ ] Token refresh flow
- [ ] Logout and token invalidation
- [ ] Protected endpoint access with valid token
- [ ] Protected endpoint access without token
- [ ] Password validation rules enforcement

---

**Version**: 1.0
**Last Updated**: 2025-11-07
**Maintained By**: API Development Team
