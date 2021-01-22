db = db.getSiblingDB('customer-app');
db.createCollection('users');
db.users.insert({
  name: 'Admin',
  email: 'admin',
  password: '123456',
});
