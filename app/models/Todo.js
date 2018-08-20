export default class Todo {
  constructor(data) {
    {
      this.description = data.description //has to be a string
      this.completed = data.completed //the server will do this for you
      this.user = data.user //the server will do this for you
      this.id = data._id
    }

  }
}