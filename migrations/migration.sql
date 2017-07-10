  -- database name got_predictions

  BEGIN TRANSACTION;

  DROP TABLE IF EXISTS predictions;
  DROP TABLE IF EXISTS users;

  CREATE TABLE users
  (id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(500)
  );


  CREATE TABLE predictions
  (id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  user_email VARCHAR(255) REFERENCES users(email),
  predictions TEXT[]
  );

  COMMIT;
