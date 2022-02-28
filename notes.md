### PLanning the application

- Need to create a class to represent a User and all this data (properties)
- User class needs to have the ability to store, retrieve and update data
- User class needs to have the ability to notify the rest of the app when some data is changed
- User needs to be able to persist data to an outside server and retrieve it at some future point

### Approach

- Build User class as a major class with tons of methods
- Refactor User to use composition
- Refactor User to be a reusable class that can represent any piece of data, not just a User

### Steps

Phase 1: class User

- private data: UserProps
- get(propName: string): (string | number)
- set(update: UserProps): void // using Object.assign()
- on(eventName: string, callback: () => void): void
- trigger(eventName:string): void
- fetch(): Promise
- save(): Promise
