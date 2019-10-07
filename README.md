# Girls Code Lincoln Website
[![CircleCI](https://circleci.com/gh/GirlsCodeLincoln/Website/tree/master.svg?style=shield)](https://circleci.com/gh/GirlsCodeLincoln/Website/tree/master)

This project is the source code for the nonprofit company, Girls Code Lincoln. It contains information on the organization for those who want to know about us, such as parents and sponsors. The website can be accessed at [girlscodelincoln.com](http://www.girlscodelincoln.com). The website is a basic HTML/CSS/JS website which utilizes [Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/introduction/) and [JQuery](https://jquery.com/)

## Getting Started

### Prerequisites

The main dependency of the project is NPM (Node Package Manager), which can be installed alongside the entirety of **[Node](https://nodejs.org/en/download/)**.

### Installing

Once NPM is installed, install project dependencies in a shell

```bash
npm install
```

## Running the project

The project can be run locally for testing

```bash
npm run start
```

After this command, a local development server should be available and an output similar to this should be outputted to your shell

```bash
Starting up http-server, serving ./src
Available on:
  http://172.22.114.113:8080
  http://10.0.75.1:8080
  http://192.168.8.146:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

When you access one of these local hosts, the shell will output any local imports that are made and if they were successful.
The contact form submissions are done through Netlify, so submissions on localhost will not work. Refer to the website's [Netlify](https://app.netlify.com/sites/girlscodelincoln/settings/forms) to make changes to the contact form.

## Deployment

When any changes are made to the master branch of the [repository](https://github.com/GirlsCodeLincoln/Website), the changes are automatically deployed to [girlscodelincoln.com](http://www.girlscodelincoln.com) via [Netlify](https://app.netlify.com/sites/girlscodelincoln/overview)
