class Employee extends Person{
  constructor(name, surname, clients){
    super(name,surname);
    this.clients=clients;
  }

  addClient(newClient){
    this.clients.push(newClient);
  }
}