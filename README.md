# Preptime API

Node.js/Express app that serves as a backend for the preptime analyzer web application.

## Getting Started

This repository contains the resources and instructions that will get you a copy of the project up and running on your local machine for development and testing purposes, and also with notes on how to deploy the project on a live system.

### Prerequisites

To get the project started, there are some tools you need to install on your local machine. The list of tools you need to install have been provided with a guide on how to install these tools.

#### `Install git`

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

#### `Install Node.js`

For users on Mac, install Node.js with Homebrew using the following command:

```
$ brew update
$ brew install node
```

For users on Windows, download and install the [Node.js](https://nodejs.org/en/download/) .msi installer. Follow the guide on the installer and node.js should be installed successfully on your local machine. After that, check for a successful installation by logging the version of Node.js with:

```
$ node --version
```

#### `Install MongoDB`

The project uses mongodb as the database for storing all data and other relevant informations. The community edition of mongodb is the prefered edition used in this project. For users on Mac, we can install mongodb using the Homebrew package manager as we did for the previous installations.

Installing Mongodb on Mac:

Tap the MongoDB Homebrew Tap to download the official Homebrew formula for MongoDB and the Database Tools, by running the following command in your macOS Terminal:

```
$ brew tap mongodb/brew
```

Update Homebrew and all existing formulae:

```
$ brew update
```

To install MongoDB, run the following command in your macOS Terminal application:

```
$ brew install mongodb-community@6.0
```

To run MongoDB (i.e. the mongod process) as a macOS service, run:

```
$ brew services start mongodb-community@6.0
```

To run MongoDB (i.e. the mongod process) manually as a background process, run:

```
$ mongod --config /usr/local/etc/mongod.conf --fork   //for MacOS running intel processor
$ mongod --config /opt/homebrew/etc/mongod.conf --fork   // for MacOS running Apple M1 processor
```

Installation on Windows:

Install MongoDB Community Edition on Windows using the default installation wizard. Download the MongoDB Community .msi installer from the following
link: [MongoDB Download Center](https://www.mongodb.com/try/download/community?tck=docs_server). You can also follow the [documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) for a step by step guide on how to install MongoDB using the .msi installer
on Windows. The .msi installer does not include mongosh. Follow the [mongosh installation instructions](https://www.mongodb.com/docs/mongodb-shell/install/) to download and install the shell separately.

### Installing

Now that you have installed the tools required to start the project locally, we provide a step by step series of examples that tell you how to get a development environment running. Before you can get the dev environment running, you need to download the project resources (files) from the github repository using git (which you installed earlier). To do this, you simply need to run the following command:

```
$ git clone https://github.com/Scribble-Works/preptime-api.git
```

After git is done cloning the project repository, move into the project folder and install the dependencies:

```
$ cd preptime-api
$ npm install yarn    // project uses yarn
$ yarn install        // or simply "yarn"
```

You will then have to create your environment variables in a .env file with the following variables:

* PORT - port on which the server runs on. Default is port 5000.
* DB_HOST - database hostname. Default is mongo_db (should be the same as the MongoDB service name in the docker-compose file)
* DB_PORT - database port. Defaults to 27017.
* DB_NAME - name of your database.

Now start the development server with the following command:

```
$ yarn dev
```

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
