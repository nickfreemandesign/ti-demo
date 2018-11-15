DROP TABLE IF EXISTS

users,
posts

CASCADE;

CREATE TABLE "users" (
	"user_id" serial NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"rantings" varchar NOT NULL
	"created_at" TIMESTAMP NOT NULL,
	"updated_at" TIMESTAMP NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "posts" (
	"post_id" serial NOT NULL,
	"item" varchar NOT NULL,
	"description" varchar NOT NULL,
	"lender_id" integer NOT NULL,
	"borrower_id" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_at" TIMESTAMP,
	CONSTRAINT posts_pk PRIMARY KEY ("post_id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("borrower_id") REFERENCES "users"("user_id");
ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("lender_id") REFERENCES "users"("user_id");
