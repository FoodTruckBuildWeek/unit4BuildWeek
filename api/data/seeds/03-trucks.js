
exports.seed = function(knex) {
  return knex('trucks').del()
    .then(function () {
      return knex('trucks').insert([
        {truck_img: 'arturo-rey-m6fYkq_P2Cc-unsplash.jpg', cuisine_type: 'french', departure_time: '7:00pm'},
        {truck_img: 's-o-c-i-a-l-c-u-t--eeAvufLf9A-unsplash.jpg', cuisine_type: 'vietnamese', departure_time: '5:00pm'},
        {truck_img: 'harry-gillen-b2gdRynjL9Q-unsplash.jpg', cuisine_type: 'tex-mex', departure_time: '9:00pm'}
      ]);
    });
};
