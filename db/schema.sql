SET check_function_bodies = false;


/* Table 'users' is not implemented yet */
CREATE TABLE users(
  user_id serial,
  "name" varchar(100) NOT NULL,
  "password" varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  PRIMARY KEY(user_id)
);

/* Table 'charts' */
CREATE TABLE charts(
  chart_id serial,
  chart_name varchar(255) NOT NULL,
  chart_start_date date NOT NULL,
  chart_end_date date NOT NULL,
  users_user_id integer NOT NULL,
  PRIMARY KEY(chart_id)
);

/* Table 'tasks' */
CREATE TABLE tasks(
  task_id serial,
  task_description varchar(255) NOT NULL,
  task_start_date date NOT NULL,
  task_end_date date NOT NULL,
  charts_chart_id integer NOT NULL,
  PRIMARY KEY(task_id)
);

-- /* Relation 'users_charts' */
ALTER TABLE charts
  ADD CONSTRAINT users_charts
    FOREIGN KEY (users_user_id) REFERENCES users (user_id);

/* Relation 'charts_tasks' */
ALTER TABLE tasks
  ADD CONSTRAINT charts_tasks
    FOREIGN KEY (charts_chart_id) REFERENCES charts (chart_id);
