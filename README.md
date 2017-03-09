# AWS_DrWang

Redirct to a New Result Page
====
* **server.js** provides nodejs server code. we can use **node server_test.js** to start this server which is listening with the port **8081**.

* Visit the url [http://localhost:8081/query](http://localhost:8081/query)

 ![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/searchfilter.png "search filter")

* Click **Redirect to Result Page**, it will redirect to [http://localhost:8081/process_get](http://localhost:8081/process_get) and display the search result.

![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/searchresult.png "search result")

Get Data From Server
=====
* **server.js** provides nodejs server code. we can use **node server** to start this server which is listening with the port **3000**.

 ![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/startserver.png "Start Server")
* Visit the url [http://localhost:3000/search_res.html](http://localhost:3000/search_res.html)

 ![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/search_res.png "Start Server")
* Click the button **Get Data From Server**. It will display the data responsed from the server.

 ![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/serverdata.png "Start Server")

Preparing
=====
* [install nodejs](http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/)
* [install npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* [install express](https://www.npmjs.com/package/express)
* [install body-parser](https://www.npmjs.com/package/body-parser)
* [install jsonfile](https://www.npmjs.com/package/jsonfile)

How it works?
=====
* **server.js** provides nodejs server code. we can use **node server** to start this server which is listening with the port **3000**.

 ![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/startserver.png "Start Server")

* use the url [http://localhost:3000/submit-event.html](http://localhost:3000/submit-event.html) to visit the web page.

 ![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/visit.png "Visit web")

* fill **Login UserName** as **admin**, and then click **submit** button, this page will submit a request to **http://localhost:3000/formlogin** with the parameter **{username:admin}**. **formlogin** is the action of form in _submit-event.html_.

 ![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/submit.png "submit")

* in line 15 of _server.js_ could catch the url end with **formlogin**. In the callback function, we can use **req.body** to get all the request parameters. In this example, I saved the requested parameters to a file named _data.json_.

 ![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/server.png "SErver")

* look at the file _data.json_, we can find the contents we just input in the Login UserName textbox.
