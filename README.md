# angular-github-adapter

> Angular adapter module for github.js

Full API: [Github.js](https://github.com/michael/github)

## Quick Start

Install adapter via bower:

````
$ bower install angular-github-adapter
````

Declare it as dependency in your app:

```js
angular.module('myApp', ['pascalprecht.github-adapter']);
```

Use the `$github` provider to configure the service:

```js
angular.module('myApp').config(function ($github) {
  $github.username('YOUR_USERNAME');
  $github.password('YOUR_PASSWORD');
  $github.authType('basic');
});
```

It is also possible to set credentials through the service itself

```js
$github.setCreds('YOUR_USERNAME', 'YOUR_PASSWORD', 'basic');
```

Now you can access `$github` service within your controller and services. It provides the same API as [Github.js](https://github.com/michael/github), just with promises :)
