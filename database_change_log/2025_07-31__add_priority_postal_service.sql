ALTER TABLE public."Application" ADD COLUMN "priority_post" boolean default false;
ALTER TABLE public."ApplicationTypes" ADD COLUMN "enabled" boolean default true;

INSERT INTO public."ApplicationTypes"(
  "applicationType", id, casebook_description, enabled)
VALUES ('Priority', 5, 'Priority Postal Service', true);
