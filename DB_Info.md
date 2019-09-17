# DB Info

## Database Creation

```sql
CREATE DATABASE piedPiper_db;
USE piedPiper_db;
```

## Table Creation and Description

```sql
CREATE TABLE user_table (
id NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(255) NOT NULL,
password VARCHAR(50) NOT NULL,
created_on DATETIME DEFAULT CURRENT_TIMESTAMP,
last_modified DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE orders_table (
id NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(255) NOT NULL,
song_title VARCHAR(255) NOT NULL,
artist_name VARCHAR(255) NOT NULL,
album_name VARCHAR(255) NOT NULL,
link  VARCHAR(255) NOT NULL,
purchase_date  DATETIME DEFAULT CURRENT_TIMESTAMP,
purchase_price DECIMAL(5,2),
created_on DATETIME DEFAULT CURRENT_TIMESTAMP,
last_modified DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Login

From the main page will be a login button.

When the user attempts to log in, a request goes to the database to see if the user exists.

```sql
SELECT
  a.user_name 
FROM
  user_table a
WHERE
  a.user_name = "somebody@somewhere.com"
AND
  a.user_password = "password123";
```

## Registration Page

There is also a register button.

Upon submit, a call is made to the databast to first see if the username already exists.

If not, then the code will create the user.

If the user already exists, a message is sent to the user saying as much. 

```sql
INSERT INTO user_table
(
  'user_name',
  'password'
)
VALUES
(
  'somebody@somewhere.com',
  'password123'
);
```

## Record Orders

After a purchase, the user's sale will be entered into the orders table ONLY if the user is logged in!
We do not log anonymous sales.

```sql
INSERT INTO user_table
(
  'user_name', 
  'song_title', 
  'artist_name', 
  'album_name', 
  'link', 
  'purchase_price'
)
VALUES
(
  'somebody@somewhere.com',
  'Pied Piper',
  'Crispian St Peters',
  'Follow Me',
  'https://www.youtube.com/watch?v=pG6CN0Dk6os',
  '.99'
);
```
Note: We don't need to insert the purchase_date since it will be set automatically when the row is created.

## View Orders

The user can view past purchases by clicking on the `Orders` button.
```sql
SELECT
  a.user_name
  b.song_title
  b.artist_name
  b.album_name
  b.link
  b.purchase_date
  b.purchase_price
FROM
  user_table a,
  orders_table b
WHERE
  a.user_name = b.user_name;
```

This data is then displayed in an html table.

