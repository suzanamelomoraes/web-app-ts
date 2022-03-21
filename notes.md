## PLanning the application

### Model Classes

- Need to create a class to represent a User and all this data (properties)
- User class needs to have the ability to store, retrieve and update data
- User class needs to have the ability to notify the rest of the app when some data is changed
- User needs to be able to persist data to an outside server and retrieve it at some future point

### Approach

- Build User class as a major class with tons of methods
- Refactor User to use composition
- Refactor User to be a reusable class that can represent any piece of data, not just a User

### Steps

- Phase 1: class User

* private data: UserProps
* get(propName: string): (string | number)
* set(update: UserProps): void // using Object.assign()
* on(eventName: string, callback: () => void): void
* trigger(eventName:string): void
* fetch(): Promise
* save(): Promise

- Phase 2

Rather than have a tons of methods inside it, the goal is have a couple of properties that class User can use to delegate out important operations

- Attributes - to store properties tied to the user
- Events - to tell other parts whenever data tied to a user is changed
- Sync - to save and retrieve this persons data to a remote server

* Phase 3

At this moment to use the methods, it's necessary to this kind of call:
user.events.trigger

- Direct passthrough of arguments - get(), on(), trigger() - by using get property
- Need coordination between different modules in User - set(), fetch(), save()

- Reminder on Accessors - 'get' - Good when you are not making changes or modification on a property using a function, but only retrieving a information

* Phase 4

- The nested objects are all public - they probably shouldn't be
- The nested objects are hardcoded + don't use interfaces
- We don't want to have to re implement all these methods for each new 'model' we create

### REST conventions

- GET - /posts - retrieve all posts
- GET - /posts/:id - retrieve post with the given ID
- POST - /posts - create a new post
- PUT - /posts/:id - update a post
- DELETE - /posts/:id - delete a post

### Two important rules for this project

- in TS, all objects keys are strings
- In JS (and therefore TS), all object keys are strings

### View Classes

- Each view must produce HTML
- We should be able to nest one view in another
- Need to handle user events
- There will be a coupling between a view and a model
- We need to be able to reach into the HTML produced by a view and get a specific element

### Approach

- Implement UserForm
- Extract reusable logic from it and use that to build 'UserShow' and 'UserEdit'
