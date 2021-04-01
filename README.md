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
role can be operator or diner
{
    "username": "luke",
    "password": "1234",
    "role": "operator"
}

what you get back:
{
    "message": "luke is back!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6Imx1a2UiLCJpYXQiOjE2MTcyMjU3OTcsImV4cCI6MTYxNzMxMjE5N30.q8woGClRqHNN1tTHwd48FhHalKHdHW-z5dMSzHqbLL4",
    "role": "operator"
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

### GET - Get ALL trucks
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks</summary>

```JSON
what you get back:
[
    {
        "truck_id": 1,
        "truck_img": "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
        "cuisine_type": "french",
        "departure_time": "19:00:00",
        "longitude": "99.00333",
        "latitude": "44.77777"
    },
    {
        "truck_id": 2,
        "truck_img": "s-o-c-i-a-l-c-u-t--eeAvufLf9A-unsplash.jpg",
        "cuisine_type": "vietnamese",
        "departure_time": "17:00:00",
        "longitude": "91.00998",
        "latitude": "14.75577"
    },
    {
        "truck_id": 3,
        "truck_img": "harry-gillen-b2gdRynjL9Q-unsplash.jpg",
        "cuisine_type": "mexican",
        "departure_time": "21:00:00",
        "longitude": "90.00322",
        "latitude": "77.76654"
    }
]
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get truck by id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks/{truck_id}</summary>

```JSON
what you get back:
{
    "truck_id": 1,
    "truck_img": "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
    "cuisine_type": "french",
    "departure_time": "19:00:00",
    "longitude": "99.00333",
    "latitude": "44.77777"
}
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

### PUT - Update Truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks/{truck_id}</summary>

```JSON
What you need: 
{
    "truck_id": 2, 
    "truck_img": "eugene-chystiakov-nlHdn7AhJHY-unsplash.jpg",
    "cuisine_type": "eithopian",
    "departure_time": "11:11pm",
    "longitude": "15.12121",
    "latitude": "13.13443"
}

What you get is:
Status: 200 Ok
```
</details>

-----------------------------------------------------------------------------------------

### DELETE - Delete truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks/{truck_id}</summary>

```JSON
{
    "message": "truck deleted"
}
```
</details>


-----------------------------------------------------------------------------------------

### GET - Get operator by id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/operators/{operator_id}</summary>

```JSON
what you get back:
{
    "operator_id": 2,
    "truck_id": 3
}
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get trucks based on operator's id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/operators/{operator_id}/trucks</summary>

```JSON
what you get back:
[
    {
        "truck_id": 1,
        "truck_img": "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
        "cuisine_type": "french",
        "departure_time": "19:00:00",
        "longitude": "99.00333",
        "latitude": "44.77777",
        "operator_id": 1
    }
]
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get ALL items on menu
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/menu</summary>

```JSON
[
    {
        "menuitem_id": 1,
        "item_name": "tacos",
        "item_description": "3 soft shell tacos",
        "item_img": "krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg",
        "item_price": 8.99
    },
    {
        "menuitem_id": 2,
        "item_name": "pho",
        "item_description": "bowl of chicken pho",
        "item_img": "sharon-chen-L1ZhjK-R6uc-unsplash.jpg",
        "item_price": 7.95
    },
    {
        "menuitem_id": 3,
        "item_name": "nutella crepe",
        "item_description": "nutella crepe with bananas and strawberries",
        "item_img": "paolo-cifuentes-jO586SsEfEA-unsplash.jpg",
        "item_price": 4.99
    }
]
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get menu item by id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/menu/{menu_id}</summary>

```JSON
what you get back:
{
    "menuitem_id": 2,
    "item_name": "pho",
    "item_description": "bowl of chicken pho",
    "item_img": "sharon-chen-L1ZhjK-R6uc-unsplash.jpg",
    "item_price": 7.95
}
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get menu based on truck id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/menu/{truck_id}</summary>

```JSON

{
    "menuitem_id": 2,
    "item_name": "pho",
    "item_description": "bowl of chicken pho",
    "item_img": "https://unsplash.com/photos/L1ZhjK-R6uc",
    "item_price": 7.95
}
    
```
</details>

-----------------------------------------------------------------------------------------




