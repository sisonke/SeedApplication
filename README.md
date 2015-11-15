# Seed Application

## Why?

Have you ever had an idea for an application or arrived at a Hackathon energized to get going on an application? Then reality hits, all the work you need to do just to start working on your latest and greatest application idea. Energy levels are goinf down... 4 hours later you are trawling your github account for all the things you need from applications you did in the past.

There is a solution to this problem! Create a seed application... 

A seed application is a small but fully functional application grow and tweak easily. An application that does all the basic things you need for your application, without any of the clutter of the business logic of your previous killer application.

It's a small spark that set your application development alight. It's important that you understand it well. You should own it. It should reflect your style and choices.. and you should maintain it. As you learn new things you should update your seed application.

## Create one

Create an Express Seed application.

That supports:
* Forms
* Handlebar templates
* Http sessions
* Authentication using middleware
* password encryption using bcrypt

* Basic CRUD using Mysql
  * include a basic mysql database script
  * 2-3 database tables
  * example of how to create database and username/password
* Configures to use a CSS framework:
  * bootstrap
  * foundation
* Basic navigation
* Error handling
* The port number it run on should be configurable using an environment variable.

All application dependencies in the `package.json` file should be up to date.

Include a `.gitignore` file and ensure that the `node_modules` folder is not committed to github.

To get the application running one should follow instructions like this:

* Clone from github
* Setup the database - reference which scripts / commands a user need to run
* install dependencies : `npm install`
* run the application: `nodemon index.js`
