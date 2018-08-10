SELECT p.*, u.username
FROM posts p
JOIN users u ON p.authorid = u.id;