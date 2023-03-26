BEGIN;
--
-- Create model Facilitator
--
CREATE TABLE "polls_facilitator" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(200) NOT NULL, "question_id" bigint NOT NULL REFERENCES "polls_question" ("id") DEFERRABLE INITIALLY DEFERRED);
CREATE INDEX "polls_facilitator_question_id_107edf0c" ON "polls_facilitator" ("question_id");
COMMIT;
