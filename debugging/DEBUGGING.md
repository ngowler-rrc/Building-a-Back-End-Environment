# Debugging Analysis

## Scenario 1: Routing Logic

-   **Breakpoint Location:** healthRoutes.ts, line 21
-   **Objective:** Make sure that the correct status, timestamp, uptime, and version are assigned and sent.

### Debugger Observations

-   **Variable States:**
-   status - "OK"
-   timestamp - "2025-01-20T04:37:04.896Z"
-   uptime - 6.96762
-   version - "1.0.0"

-   **Call Stack:**
-   The server was listening for a get request at this particular endpoint
-   The server got a get request at that endpoint
-   The correct values were assigned to the correct variables

-   **Behavior:**
-   The program captures these values into variables before sending them back to the server

### Analysis

-   What did you learn from this scenario?
I learned about how route handlers process incoming requests.

-   Did you observe any unexpected behavior? If so, what might be the cause?
I didn't notice anything that I didn't expect.

-   Are there areas for improvement or refactoring in this part of the code?
Maybe I could have implemented some error handling in case something went wrong processing the request.

-   How does this enhance your understanding of the overall project?
I beleive it does because I can see how different parts of applications process and send data between each-other.

## Scenario 2: Endpoint Behavior

-   **Breakpoint Location:** app.ts, line 35
-   **Objective:** How my api is able to communicate with the server when this endpoint gets a request.

### Debugger Observations

-   **Variable States:**
-   req.method = 'GET'
-   req.url = '/tasks'

-   **Call Stack:**
-   The server listens for a get request being sent to this endpoint
-   The server got a get request at this endpoint
-   A short message was sent.

-   **Behavior:**
The /tasks endpoint is hit and it sends a response.

### Analysis

-   What did you learn from this scenario?
I learned that things like the method and url need to be stored in variables for endpoints to be able to communicate.

-   Did you observe any unexpected behavior? If so, what might be the cause?
I didn't see any unexpected behaviour.

-   Are there areas for improvement or refactoring in this part of the code?
Perhaps if this was a bigger part of the application it could be better to have this endpoint located in another file.   

-   How does this enhance your understanding of the overall project?
It helps me understand how to create endpoint and things I can do to make them behave how I want them to.

## Scenario 3: Test Execution

-   **Breakpoint Location:** app.test.ts, line 30
-   **Objective:** How the variables get assigned in the mock environment

### Debugger Observations

-   **Variable States:**
-   response.statusCode = 200
-   response.text = "{\"status\":\"OK\",\"uptime\":2.950929,\"timestamp\":\"2025-01-20T05:35:39.283Z\",\"version\":\"1.0.0\"}"

-   **Call Stack:**
-   A request was made to the endpoint
-   The endpoint preformed as it should
-   The expected and actual values are being compared

-   **Behavior:**
-   Based on if the values are the same the test will either fail or pass

### Analysis

-   What did you learn from this scenario?
I learned how you could use the debugger in test scenarios. I was unaware that this was possible.

-   Did you observe any unexpected behavior? If so, what might be the cause?
It said a bunch of tests failed and the amount of thests there were were about double what I've writen. This might be because of some weirdness that happens when using the debugger along with npm test.

-   Are there areas for improvement or refactoring in this part of the code?
Other than documenting the code such as arrange, act, and assert I don't think so.

-   How does this enhance your understanding of the overall project?
Now that I know I can use the debugger in a test environment I'm sure I'll use it more.