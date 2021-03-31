# Build Week Food Truck

### POST - Create Account
create a user with role type of diner or operator
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/auth/register</summary>

```JSON
what you need:
{
    "username": "Joe",
    "password": "1234",
    "email": "c@gmail.com",
    "role": "operator"
}

what you get back:
{
    "data": {
        "user_id": 1,
        "username": "Joe",
        "password": "$2a$08$0oUfmvlujUay2NBGG8CWJOhqhpB8gZRk/UmVa9X8NEZhUKDVIxt5S",
        "role": "operator"
    }
}
```
</details>

-----------------------------------------------------------------------------------------

### POST - Login
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/auth/login</summary>

```JSON
what you need:
{
    "username": "Joe",
    "password": "1234"
}

what you get back:
{
    "message": "Joe is back!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IkpvZSIsImlhdCI6MTYxNzIwMDYxMSwiZXhwIjoxNjE3Mjg3MDExfQ.5FpUhxzDRrpl73-4zWpOJSmv2W7vtwrwilAFQ__wdIc"
}
```
</details>

-----------------------------------------------------------------------------------------

### DELETE - Logout User
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/auth/logout</summary>

```JSON
Status: 200 OK
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get Diner by id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/diners/{diner_id}</summary>

```JSON
what you get back:
{
    "diner_id": 2,
    "longitude": "01.44888",
    "latitude": "90.12322",
    "diner_favetruck_id": 2
}
    
    
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get Diner favorite truck by id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/diners/{diner_id}/trucks</summary>

```JSON
what you get back:
[
    {
        "truck_id": 1,
        "truck_img": "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
        "cuisine_type": "french",
        "departure_time": "19:00:00",
        "longitude": "44.88888",
        "latitude": "22.12121",
        "diner_favetruck_id": 3,
        "diner_id": 1
    }
]
```
</details>

-----------------------------------------------------------------------------------------

### POST - Create new truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks</summary>

```JSON
what you need: 
{
    "truck_img": "eugene-chystiakov-nlHdn7AhJHY-unsplash.jpg",
    "cuisine_type": "american",
    "departure_time": "11:00pm",
    "longitude": "12.12121",
    "latitude": "13.13133"
}

what you get back: 

{
    "truck_id": 4,
    "truck_img": "eugene-chystiakov-nlHdn7AhJHY-unsplash.jpg",
    "cuisine_type": "american",
    "departure_time": "23:00:00",
    "longitude": "12.12121",
    "latitude": "13.13133"
}
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

