## project name
- TaskManager

## Description
-Crud operation for create , update , read and delete task.

## Installation
1.DownLoad Repo
2.Use command - npm install
3.Run - npm run dev

### Api Documentation

1.Create Task

# Request
method:post
url:http://localhost:5000/tasks/create
{
  "title": "Complete Assignment",
  "description": "Build a REST API using Node.js",
  "status": "in-progress"
}
# Response
{
    "success": true,
    "data": {
        "id": 1,
        "title": "Complete Assignment",
        "description": "Build a REST API using Node.js",
        "status": "in-progress",
        "createdAt": "2025-05-12T14:30:24.851Z",
        "updatedAt": "2025-05-12T14:30:24.851Z"
    }
}

2.get all Task
# Request
method:get
url:http://localhost:5000/tasks/
# Response

[
    {
        "id": 1,
        "title": "First Task",
        "description": "This is the first task",
        "status": "pending",
        "createdAt": "2025-05-12T14:47:51.172Z",
        "updatedAt": "2025-05-12T14:47:51.172Z"
    },
    {
        "id": 2,
        "title": "Second Task",
        "description": "This is the second task",
        "status": "in-progress",
        "createdAt": "2025-05-12T14:47:51.172Z",
        "updatedAt": "2025-05-12T14:47:51.172Z"
    }
]

3.Get BY Id
# Request
method:get
  url : http://localhost:5000/tasks/1
#  Response
{
    "id": "1",
    "title": "First Task",
    "description": "This is the first task",
    "status": "pending",
    "createdAt": "2025-05-12T14:58:58.415Z",
    "updatedAt": "2025-05-12T14:58:58.415Z"
}
4. Updata data
# Request
method:put
url: http://localhost:5000/tasks/1
{
	"title": "This is a Third task"
}
# Response
{
    "id": "1",
    "title": "This is a Third task",
    "createdAt": "2025-05-12T15:08:05.208Z",
    "updatedAt": "2025-05-12T15:08:52.730Z"
}
5. delete data
# Request
method:put
url: http://localhost:5000/tasks/1

# Response
{
    "message": "Task deleted successfully."
}

6.pagination filtering and sorting
## Request
method- get
url: http://localhost:5000/tasks?page=1&limit=2&status=pending&sort=createdAt&order=desc

#  Response
[
    {
        "id": "1",
        "title": "First Task",
        "description": "This is the first task",
        "status": "pending",
        "createdAt": "2025-05-12T15:26:10.365Z",
        "updatedAt": "2025-05-12T15:26:10.365Z"
    },
    {
        "id": "2",
        "title": "Second Task",
        "description": "This is the second task",
        "status": "in-progress",
        "createdAt": "2025-05-12T15:26:10.365Z",
        "updatedAt": "2025-05-12T15:26:10.365Z"
    }
]

## Included
-Implemented pagination for the `GET /tasks` endpoint.
-sorting and filtering options for task retrieval.
-authentication and authorization mechanisms for protecting certain endpoints








