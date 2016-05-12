
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),


      // TODO crypt the password
    // Inserts seed entries
    knex('users').insert({
      email: 'user1@example.com',
      name: 'Dwayne Johnson',
      password_hash: 'password'
    })
  );
};
