# Lab 06 - HTTP Static File Server

Create a node server that serves files from a public directory.

If a user hits your server at `http://localhost:7890/index.html`
your server should go into the `public` directory and find an
`index.html` file, read it, and send the contents as a response.
If no file is found respond with a Not Found message.

## Steps

* design a solution (in english what do you need to do)
* break down the problem into smaller chunks
* start working on chunks
  * define an outcome (how do you know when the chunk is complete)
  * define a validation (write a test)
  * write code
  * validate code (test passes)
  * commit
  * read code and refactor
  * commit
  * repeat for next chunk

## Rubric **10pts**

* Followed Steps *5pts*
* Meaningful Tests: *2pt*
* Clean Code: *2pt*
* It Works: *1pt*

TO DO: 
* Set up public folder with index.html file 
* Have to set up a server listening on local host 5432
* write test for expectation for a response to url/index.html
    * * user hits url
    * * check if file named in url/:name exists in public folder 
        * * * if not send a Not Found error message
    * * if it does READ FILE named in url/:name
    * * send file string as response to user
* write endpoint for url.index.html
* get tests passing
* refactor
* try adding other files to public folder 
* keep tests passing 

