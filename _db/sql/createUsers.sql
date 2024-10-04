CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "externalId" VARCHAR(255) NOT NULL UNIQUE,
  "firstName" VARCHAR(255) NOT NULL,
  "lastName" VARCHAR(255) NOT NULL,
  "role" VARCHAR(255) NOT NULL DEFAULT 'user' CHECK ("role" IN ('admin', 'user'))
);

DROP TABLE IF EXISTS "users";