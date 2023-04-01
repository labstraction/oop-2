class Manager extends Person{

  constructor(name, surname, employees){
    super(name,surname);
    this.employees=employees;
  }

  hire(newEmployee){
    this.employees.push(newEmployee);
  }
}

