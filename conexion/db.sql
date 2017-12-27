CREATE DATABASE poll_api;

CREATE TABLE usuarios
(
  usuario_id serial,
  usuario_nombre character varying,
  usuario_username character varying(15),
  usuario_password character varying(150),
  usuario_estado character varying(1) DEFAULT 'A'::character varying,
  usuario_token character varying(250),
  fchadd time with time zone,
  fchmod time with time zone,
  useradd integer,
  usermod integer,
  CONSTRAINT usuarios_pkey PRIMARY KEY (usuario_id)
);

