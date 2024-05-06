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

### Installation

Now that you have installed the tools required to start the project locally, we provide a step by step series of examples that tell you how to get a development environment running. Before you can get the dev environment running, you need to download the project resources (files) from the github repository using git (which you installed earlier). To do this, you simply need to run the following command:

```
$ git clone https://github.com/Scribble-Works/preptime-api.git
```

After git is done cloning the project repository, move into the project folder and install the dependencies:

```
$ cd preptime-api
$ npm install -g yarn // project uses yarn
$ yarn install // or simply "yarn" if yarn is already installed

```

### Supabase Integration

Supabase is used as the database for this project.

To use a managed supabase project hosted by supabase , you will need to :

- Set up a Supabase account and project at [Supabase](https://supabase.com).

To setup supabase locally you will need to :

- Install [Docker](https://www.docker.com/)

After installing docker and making sure it is running,follow these steps to start an instance of supabase locally.
It is recommended to create this in a new project folder to isolate the environments of your database and backend(preptime-api) project folder

```
git clone --depth 1 https://github.com/supabase/supabase

# Go to the docker folder
cd supabase/docker

# Copy the fake env vars
cp .env.example .env

# Pull the latest images
docker compose pull

# Start the services (in detached mode)
docker compose up -d

```

Supbase dashboard can be accessed on port `8000`. Eg. (localhost:8000).

You will be prompted for a username and password. By default, the credentials are:

- Username: supabase
- Password: this_password_is_insecure_and_should_be_updated

These are the default credentials for supabase and should be changed as soon as possible by changing their respective values in the .env file.

You can find guidelines on updating your .env file for optimal security [here](https://supabase.com/docs/guides/self-hosting/docker#dashboard-authentication)

- Create a table for responses using the model :

- Name - Type
- sheet_id - uuid
- title - varchar
- created_at - timestamp
- metaData - jsonb
- dataMatrix - varchar
- questions - jsonb
- responses - jsonb

- Update the read and write policies for the responses table to allow aunauthenticated access to make it accessible to the public

- For a managed supabase project hosted on supabase, the project URL and anon key can be found in the project setting of your supabase project.

- For a local instance of supabase,the project URL will be hosted on `localhost:8000` and the anon key can be found in the .env file.It is recommended to update your anon key when deploying your supabase instance.

To self host supabase on your local computer to make app accessible without internet access ,refer to the self hosting guide by supabase [here](https://supabase.com/docs/guides/self-hosting)

You will then have to create your environment variables in a .env file with the following variables:

- SUPABASE_URL - The URL endpoint for your supabase project instance whether being hosted on the web or locally.
- SUPABASE_KEY - The Anon key for authenticating requests to supabase.

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
- [Supabase](https://supabase.com/database) - Database Management
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

```

```
