users = [
    {user_id: 1, username: 'minnie mouse', password: '1234', email: 'm@gmail.com', role: 'diner'}, 
    {user_id: 2, username: 'mickey mouse', password: '1234', email: 'mm@gmail.com', role: 'operator'}
]

//role can only be diner or operator

trucks = [
    {truck_id: 1, truck_img: 'arturo-rey-m6fYkq_P2Cc-unsplash.jpg', cuisine_type: 'french', departure_time: '7:00pm', laditude: '44.77777', longitude: '99.00333'},
]

diners = [
    {diner_id: 1, longitude: '44.88888', laditude: '22.12121', diner_favetruck_id: 3},
]

operators = [
    {operator_id: 1, truck_id: 1}
]

menuitems = [
    {menuitem_id: 1, item_name: 'tacos', item_description: '3 soft shell tacos', item_img: 'krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg', item_price: '8.99'},
]

trucks_menuitems = [
    {trucks_menuitems_id: 1, truck_id: 1, menuitem_id: 3},
]

ratings: [
    {rating_id: 1, rating: 5, truck_id: 3, menuitem_id: 1},
]
//ratings are whole number can be 1, 2, 3, 4, 5 

diner_favetruck = [
    {diner_favetruck_id: 1, diner_id: 1, truck_id: 1}
]