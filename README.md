# Team One
Millennial Disrupt Hackathon Project

### Set Up Local Database
- Install Postgres
  - Update apt-get
    - `sudo apt-get update`
  - Install Postgres dependencies
    - `sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib`

- Create Database and Database User
  - Enter Postgres shell session
    - `sudo su - postgres`
  - Login to Postgres
    - `psql`
  - Create database
    - `CREATE DATABASE teamone;`
  - Create User
    - `CREATE USER teamone WITH PASSWORD 'disrupt';`
  - Alter roles
    - `ALTER ROLE myprojectuser SET client_encoding TO 'utf8';`
    - `ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';`
    - `ALTER ROLE myprojectuser SET timezone TO 'UTC';`
  - Grant all priviledges to user
    - `GRANT ALL PRIVILEGES ON DATABASE teamone TO teamone;`
  - Exit
    - `\q`
    - `exit`
