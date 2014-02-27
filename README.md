clevernote
==========

---
status: draft

---

Warning
-----

This app relies on window.crypto.getRandomValues() and so you probably want to use something else if you're here for anything other than curiosity. 


Now what
-----

We want to store encrypted notes on a webserver, for access later. 

Clone the repo, go to `./server/cryptokeys/` and follow these instructions. This will create an AES256 encrypted key for your [Certificate Authority](http://en.wikipedia.org/wiki/Certificate_authority):

    openssl genrsa -aes256 -out ca.key 2048
    openssl req -new -key ca.key -out ca.csr
    openssl x509 -req -days 365 -in ca.csr -out ca.crt -signkey ca.key

The `ca.key` will be trusted by the Client to verify that messages with the Server are authentic. 

    openssl genrsa -aes256 -out server.key 2048
    openssl req -new -key server.key -out server.csr
    openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt


This will create the self-signed certificate for the server. 

Now you can remove the password from the server.key: 

    openssl rsa -in server.key.org -out server.key
    

Then `npm install` & `bower install` 

Finally `nodemon server/app.js` and you should be good to go. 


