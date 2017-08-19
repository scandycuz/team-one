# Team One
Millennial Disrupt Hackathon Project

### Set Up Local Database
- Install Postgres on system

- Create Database and Database User
  - Enter Postgres shell session
    - `sudo su - postgres`
  - Login to Postgres
    - `psql`
  - Create database
    - `CREATE DATABASE teamonedb;`
  - Create User
    - `CREATE USER teamone WITH PASSWORD 'disrupt';`
  - Alter roles
    - `ALTER ROLE teamone SET client_encoding TO 'utf8';`
    - `ALTER ROLE teamone SET default_transaction_isolation TO 'read committed';`
    - `ALTER ROLE teamone SET timezone TO 'UTC';`
  - Grant all priviledges to user
    - `GRANT ALL PRIVILEGES ON DATABASE teamone TO teamonedb;`
  - Exit
    - `\q`
    - `exit`
