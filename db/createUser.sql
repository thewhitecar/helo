INSERT INTO users (username, password) 
VALUES ( $1, $2)
RETURNING id, username, profile_pic;