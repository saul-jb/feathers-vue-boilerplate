# feathers-vue-boilerplate
A prestructured boilerplate to get feathers and vue quickly running for a real-time application.<br>
This boilerplate can be built for:<br>
* Web
* Desktop
* Mobile (soon)

## Oficial Docs
[Vuejs](https://vuejs.org/v2/guide/)<br>
[Feathersjs](https://docs.feathersjs.com/)<br>
[Electron](https://electronjs.org/docs)<br>
[Nativescript](https://docs.nativescript.org/)

## Setup For Mobile Dev
Just follow the commands under install [here.](https://organicdesign.nz/User:Saul/nativescript#Android)
## Usage
### Install
Clone the repo:
``` bash
git clone https://github.com/saul-avikar/feathers-vue-boilerplate.git
```
Install feathers cli:
``` bash
sudo npm i -g @feathersjs/cli
```
### Authentication
If your application requires authentication run:
``` bash
feathers generate authentication
```
All the client side methods should be put in client/libs/auth.js<br>
Don't need authentication? The client/libs/auth.js file can be safely deleted.<br>
Set the `JAVA_HOME` and `ANDROID_HOME` env variables (mobile only):
``` bash
export JAVA_HOME=$(update-alternatives --query javac | sed -n -e 's/Best: *\(.*\)\/bin\/javac/\1/p')
export ANDROID_HOME=~/android/sdk
```
### Rest Services
For every service (users, messages, etc.) you need to run:
``` bash
feathers generate service
```
### Listening To Server Events
``` javascript
import client from "@/libs/client";

export default {
	created(){
		client.service("messages").on("created", message => {
			// Do something
		});
	}
};
```
### Running
#### Development
Here are the commands for running in development mode
``` bash
# Run on the browser with hot reload
npm run dev

# Run on the desktop
npm run build
npm run desktop

# Run on android with hot reload
npm run android

# Run on ios with hot reload
npm run ios
```
#### Building
The client can be built into files ready for the desktop application to run via:
``` bash
npm run build
```
To build the app for production run:
``` bash
build:OS
```
Where OS can be:
* linux (defualt)
* windows
* mac
* android
* ios<br>
And `:ia32` can be appended for ia32 builds (Desktop only).
#### Server
The client can be built into files ready for the server with this command:
``` bash
npm run build
```
The server that runs the REST api and delivers the build files can be run via:
``` bash
npm run Server
```
