# Build Week Food Truck

### POST - Create Account
create a user with role type of diner or operator
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/auth/register</summary>

```JSON
[
    {username: 'minnie mouse', password: '1234', email: 'm@gmail.com', role: 'diner'}, 
    {username: 'mickey mouse', password: '1234', email: 'mm@gmail.com', role: 'operator'}
]
```
</details>

-----------------------------------------------------------------------------------------

### POST - Login
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/auth/login</summary>

```JSON
[
    {username: 'minnie mouse', password: '1234'}, 
    {username: 'mickey mouse', password: '1234'}
]
```
</details>

-----------------------------------------------------------------------------------------

### DELETE - Logout User
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/auth/logout</summary>

```JSON
HttpStatus OK
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get Diner by location
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/diners</summary>

```JSON

    {longitude: '44.88888', laditude: '22.12121', diner_favetruck_id: 3}
    
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get Diner favorite truck by id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/diners/:id</summary>

```JSON

    {diner_favetruck_id: 1, diner_id: 1, truck_id: 1}
    
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get Menu Item by id 
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/menu/:id</summary>

```JSON

    {item_name: 'tacos', item_description: '3 soft shell tacos', item_img: 'krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg', item_price: '8.99'},
    
```
</details>

-----------------------------------------------------------------------------------------

### POST - Create new truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/</summary>

```JSON

 {truck_img: 'arturo-rey-m6fYkq_P2Cc-unsplash.jpg', cuisine_type: 'french', departure_time: '7:00pm', laditude: '44.77777', longitude: '99.00333'},

```
</details>

-----------------------------------------------------------------------------------------

### DELETE - Delete truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/</summary>

```JSON
HttpStatus OK
```
</details>


-----------------------------------------------------------------------------------------

### PUT - Edit a truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/</summary>

```JSON
HttpStatus OK
```
</details>


-----------------------------------------------------------------------------------------

### POST - Create rating

number one through five

<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/</summary>

```JSON

 {rating: 5, truck_id: 3, menuitem_id: 1}

```
</details>

-----------------------------------------------------------------------------------------


trucks = [
    {truck_id: 1, truck_img: 'arturo-rey-m6fYkq_P2Cc-unsplash.jpg', cuisine_type: 'french', departure_time: '7:00pm', laditude: '44.77777', longitude: '99.00333'},
]

operators = [
    {operator_id: 1, truck_id: 1}
]

trucks_menuitems = [
    {trucks_menuitems_id: 1, truck_id: 1, menuitem_id: 3},
]
