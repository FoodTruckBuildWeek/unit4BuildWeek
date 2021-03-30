
exports.seed = function(knex) {
  return knex('menuitems').del()
    .then(function () {
      return knex('menuitems').insert([
        {item_name: 'tacos', item_description: '3 soft shell tacos', item_img: 'krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg', item_price: '8.99'},
        {item_name: 'pho', item_description: 'bowl of chicken pho', item_img: 'sharon-chen-L1ZhjK-R6uc-unsplash.jpg', item_price: '7.95'},
        {item_name: 'nutella crepe', item_description: 'nutella crepe with bananas and strawberries', item_img: 'paolo-cifuentes-jO586SsEfEA-unsplash.jpg', item_price: '4.99'},
      ]);
    });
};
