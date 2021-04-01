
exports.seed = function(knex) {
  return knex('menuitems').del()
    .then(function () {
      return knex('menuitems').insert([
        {item_name: 'tacos', item_description: '3 soft shell tacos', item_img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', item_price: '8.99'},
        {item_name: 'pho', item_description: 'bowl of chicken pho', item_img: 'https://unsplash.com/photos/L1ZhjK-R6uc', item_price: '7.95'},
        {item_name: 'nutella crepe', item_description: 'nutella crepe with bananas and strawberries', item_img: 'https://images.unsplash.com/photo-1601501077525-4fa2d0c40f48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', item_price: '4.99'},
      ]);
    });
};
