# feathers-vue-boilerplate
A prestructured boilerplate to get feathers and vue quickly running for a real-time application.<br>

## Oficial Docs
[Vuejs](https://vuejs.org/v2/guide/)<br>
[Feathersjs](https://docs.feathersjs.com/)

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
If you application requires authentication run:
``` bash
feathers generate authentication
```
All the client side methods should be put in client/libs/auth.js<br>
Don't need authentication? The client/libs/auth.js can be safely deleted.
### Rest Services
For every service (users, messages, etc.) you need to run:
``` bash
feathers generate service
```
### Listening To Server Events
``` javascript
import client from "../libs/client";

export default {
	created(){
		client.service("messages").on("created", message => {
			// Do something
		});
	}
};
```
