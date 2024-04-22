# Preptime API

Node.js/Express app that serves as a backend for the preptime analyzer web application.

## Getting Started

This repository contains the resources and instructions that will get you a copy of the project up and running on your local machine for development and testing purposes, and also with notes on how to deploy the project on a live system.

### Prerequisites

To get the project started, there are some tools you need to install on your local machine. The list of tools you need to install have been provided with a guide on how to install these tools.

##### `Install git`

For users on Mac, the best way to install git is by using [Homebrew](https://brew.sh/). To install Homebrew, open your shell and run the following command:

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After the command is done running, check if Homebrew is successfully installed by running:

```
$ brew --version
```

If Homebrew is successfully installed, the version will be logged to the screen. Now proceed to install git using Homebrew with the following command:

```
$ brew install git
```

For users on Windows, download the [latest version](https://git-scm.com/downloads) of Git and choose the 64/32 bit version. After the file is downloaded, install it in the system. Once installed, select Launch the Git Bash, then click on finish. After that, check for a successful installation by opening your terminal and logging the version of git with:

```
$ git --version
```

##### `Install Node.js`

For users on Mac, install Node.js with Homebrew using the following command:

```
$ brew update
$ brew install node
```

For users on Windows, download and install the [Node.js](https://nodejs.org/en/download/) .msi installer. Follow the guide on the installer and node.js should be installed successfully on your local machine. After that, check for a successful installation by logging the version of Node.js with:

```
$ node --version
```

##### `Install Firebase CLI`

The project uses firebase firestore as the database for storing all data and other relevant informations.

Installation

You can install the Firebase CLI using npm (the Node Package Manager). Note that you will need to install Node.js and npm. Installing Node.js should install npm as well.

To download and install the Firebase CLI run the following command:

To install yarn globally use:

```
$ npm install -g yarn //
$ npm install -g firebase-tools //when using npm
$ yarn global add firebase-tools //when using yarn
```

This will provide you with the globally accessible firebase command.

### Installation

Now that you have installed the tools required to start the project locally, we provide a step by step series of examples that tell you how to get a development environment running. Before you can get the dev environment running, you need to download the project resources (files) from the github repository using git (which you installed earlier). To do this, you simply need to run the following command:

```
$ git clone https://github.com/Scribble-Works/preptime-api.git
```

After git is done cloning the project repository, move into the project folder to initialize a firebase project by creating a new project or adding the app to an existing project and install the dependencies:

Creating or adding a Firebase project

Create a new firebase project with the following command:

```
$ firebase init //
```

Or Add an existing project by using :

```
$ firebase use --add
```

```
$ cd preptime-api
$ npm install -g yarn    // project uses yarn
$ yarn install        // or simply "yarn" if yarn is already installed
```

### `Supabase Integration (Opensource alternative to Firebase Firestore)`

For an opensource alternative , Supabase is recommended.
To use Supabase as your database, you will need to :

- Set up a Supabase account and project at [Supabase](https://supabase.com).
- Create a table for responses with the model in the route `expressEndpoints/models/responseModel.js`

To set up Supabase JS client:

```
$ yarn add @supabase/supabase-js

```

- The project url and key can be found in the project setting of your supabase project

You will then have to create your environment variables in a .env file with the following variables:

- HUBSPOT_KEY - The API key to communicate with hubspot crm
- HUBSPOT_FORMID - Form Id for contact us form created on hubspot crm linked to the contact us form on the front-end.
- HUBSPOT_PORTALID - The unique key for your app created on hubspot crm

Now start the development server with the following command:

```
$ yarn serve
```

## Deployment

The original project is deployed and hosted on Firebase Cloud Functions. But developers are encouraged to deploy or host it on any other service they prefer.Cloud functions are only available with the blaze plan on Firebase which requires addition of billing details to the project.

Once a firebase project has been initialized use the follow command to deploy your function:

```
$ yarn deploy
```

## Built With

- [Express](https://expressjs.com/) - The backend framework used
- [Firebase Firestore](https://firebase.google.com/docs/firestore/quickstart) - Database Management
- [Firebase Cloud Functions](https://firebase.google.com/docs/functions) - Serverless hosting
- [Yarn](https://yarnpkg.com/) - Dependencies and package management

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Scribble-Works/preptime-api/blob/main/Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Scribble-Works/project/tags).

## Authors

- **Scribble Works** - _Initial work_ - [Scribble Works](https://github.com/Scribble-Works)

See also the list of [contributors](https://github.com/Scribble-Works/preptime-analytics/graphs/contributors) who participated in this project.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
