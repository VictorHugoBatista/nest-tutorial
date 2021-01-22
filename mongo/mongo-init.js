print('Start #################################################################');

db = db.getSiblingDB('api_prod_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_prod_db' }],
  },
);
db.createCollection('users');

db = db.getSiblingDB('api_dev_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_dev_db' }],
  },
);
db.createCollection('users');

db = db.getSiblingDB('api_test_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_test_db' }],
  },
);
db.createCollection('users');

print('END #################################################################');

// db.createCollection('meuuser2');
// db.meuuser2.insert({
//     "first_name": "teste4",
//     "last_name": "teste4",
//     "email": "teste4",
//     "phone": "teste4",
//     "address": "teste4",
//     "description": "teste4",
// });

// console.log('aqui2')
// mongo customer-app --authenticationDatabase admin -u root -p 123456 /docker-entrypoint-initdb.d/mongo-init.js
// cat /docker-entrypoint-initdb.d/mongo-init.js