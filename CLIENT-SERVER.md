How a request gets served in Client-Server Model

In client-server model there are two things first is Client and second is server. Client created a request and send to the server and server handle request that comes from the client side and response back to the client. In receving the request from the client and sending a response ,server exectue all the tasks that attached with the request. for sending and receving a request a medium is needed and that medium is known as Internet. Internet acts like a bridge beetwen client and server, whenever client want to send a request than through internet client send request to the server.
In client-server model clients do not share any of their resources. Examples of Client-Server Model are Email, World Wide Web, etc. 

Client and server communication :
Clients and servers exchange messages in a request–response messaging pattern. This exchange of messages is an example of inter-process communication. Here all the request and response are done internally. All client-server protocols operate in the application layer. The application layer protocol defines the basic patterns of the dialogue. To formalize the data exchange even further, the server may implement an application programming interface (API).

How the client interacts with the server :
Here the Browser acts as a client and interacts with the server.
firstly a user enter the URL in the browser and than browser requests the DNS server.
DNS server firstly lookup for the WEB Server.
DNS server respond back with the IP address of the WEB server.
Now browser sends requests to the WEB server directly.
WEB server responds back to the browser.
Atlast browser shows the output on the screen.

Features of the Client :
Always start applications servers;
Waits for responses;
Get answers;
Usually connects to a small number of servers at once;
Normally, interacts directly with end users through any user interface, such as graphical user interface.

Features of the Server :
Always wait for a request from a client;
Serves clients’ requests, then responds with the requested data to clients;
A server can communicate with other servers in order to meet a client’s request.
