import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

// Refactor Collection to be reusable to any type of data
// Replacing type User, which includes a type UserProps, we included the generic T
// plus a second generic called K, which represents, in this example, the User looking model
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  //use get as an accessor to events methods
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        // const user = User.buildUser(value);
        // this.models.push(user);
        this.models.push(this.deserialize(value));
      });
      this.trigger("change");
    });
  }
}
