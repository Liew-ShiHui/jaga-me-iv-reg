## Intravenous (IV) therapy Registration Page (Jaga-me Technical Assessment)

Technology stack:
- Backend: Use of Node.js Express to export REST apis, and interact with PostgreSQL database using Sequelize Object Relational Mapper
- Frontend: ReactJS to build reusable UI components, along with Material-UI. Use of axios to send HTTP requests and retrieve HTTP responses

Information:
+ This application consists of a registration page, where user fills in the required details via a multi-step form. Upon completing the form and submitting it, a new customer will be created in postgresDB. Note that there is no form validation.
+ To test REST api, you may use Postman and type in the baseurl <localhost:5000/api>. Eg GET localhost:5000/api/customers to see new customer created, or GET localhost:5000/api/serviceConsumables to view pre-loaded data.

---

### Instructions to run the application
1. Start PostgresDB and create database ivregbackend; before connecting to that database (Command on psql terminal: \c ivregbackend)
2. Change your password for postgresDB accordingly, if need be, in app/config/env.js file 
3. Go to project directory for backend, eg C:/Users/User/jaga-me-iv-reg/iv-reg-backend
4. Run command <npm install>, then <node server.js>
5. Go to project directory for frontend, eg C:/Users/User/jaga-me-iv-reg/iv-reg-frontend
6. Run command <npm install>, then <npm start>. Your browser should open up localhost:3000 after the command runs successfully.

