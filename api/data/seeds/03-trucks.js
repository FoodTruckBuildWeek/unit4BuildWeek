
exports.seed = function(knex) {
  return knex('trucks').del()
    .then(function () {
      return knex('trucks').insert([
        {truck_img: 'https://images.unsplash.com/photo-1565991958468-9a794aeb07d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80', cuisine_type: 'french', departure_time: '7:00pm', latitude: '44.77777', longitude: '99.00333'},
        {truck_img: 'https://images.unsplash.com/photo-1500338427510-5deb175987d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1054&q=80', cuisine_type: 'vietnamese', departure_time: '5:00pm', latitude: '14.75577', longitude: '91.00998'},
        {truck_img: 'https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=945&q=80', cuisine_type: 'mexican', departure_time: '9:00pm', latitude: '77.76654', longitude: '90.00322'}
      ]);
    });
};
