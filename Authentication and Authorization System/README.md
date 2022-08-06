# Simple Authentication API using Bcrypt and JSON Web Tokens

# Setting up the local server.
1. Get a free MongoDB atlas account [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_emea_nigeria_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624539&adgroup=115749718503)
2. Set up a free tier project and obtain connection URI that looks like so - `mongodb+srv://<USERNAME>:<PASSWORD>@auth-authorizationjwt.xsbmedo.mongodb.net/?retryWrites=true&w=majority`
3. Clone this repository,  switch into this directory and run `yarn` or `npm install` to install all required packages
4. Create .env file and add your `SECRET_KEY_<ROLE>`

# Routes definition
All routes are protected except for creating a user route and logging in to obtain the token

## User
![User](/Authentication%20and%20Authorization%20System/screenshots/user-register.png)
1. The base route is `/user`
2. Create a user route `/register`. Method = `POST`
3. Log-in user route `/login`. Method = `POST`
4. Delete user route `/delete/<id>`. Method = `DELETE`

## Staff
![Staff](/Authentication%20and%20Authorization%20System/screenshots/staff-login.png)
1. The base route is `/staff`
2. Create a staff route `/register`. Method = `POST`
3. Log-in staff route `/login`. Method = `POST`
4. Delete staff route `/delete/<id>`. Method = `DELETE`

## Manager
![Manager](/Authentication%20and%20Authorization%20System/screenshots/manager-protected-delete.png)
1. The base route is `/manager`
2. Create a manager route `/register`. Method = `POST`
3. Log-in manager route `/login`. Method = `POST`
4. Delete manager route `/delete/<id>`. Method = `DELETE`

## Admin
![Admin](/Authentication%20and%20Authorization%20System/screenshots/admin-delete.png)
1. The base route is `/admin`
2. Create a admin route `/register`. Method = `POST`
3. Log-in admin route `/login`. Method = `POST`
4. Delete admin route `/delete/<id>`. Method = `DELETE`
