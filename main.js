console.log('ciao');

const order1=new Order('toufu',3,100);

console.log(order1.toString());

const client1 = new Client('giovanni', 'rossi', 'via san lorenzo', [order1]);

const order2 = new Order('noodles',2,50);

const order3 = new Order('fork', 0.10 ,500);

client1.addOrder(order2);

client1.addOrder(order3);

console.log(client1.toString());

const employee1 = new Employee('andrea','asioli',[]);

employee1.addClient(client1);

console.log(employee1);

const manager1 = new Manager('jing','wang',[]);

manager1.hire(employee1);
console.log(manager1);