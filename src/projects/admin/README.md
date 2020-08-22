# Admin
I made this project to manage all the stuff from one panel.

## Project Requirements
Make a project to manage all the other project in one place.
* Create a login page.
* There will be no registration page, because we don't want to outside user access this portal. user will be created from inside. also insert a **Admin** user by default.
* After login, user can switch to different **apps**, if they have access.
* Give basic pages like profile update, apps and modules list page.
* Must be a clean and user friendly UI.
* Give Database backup system

## Technologies
|||
|---|---|
|Frontend|Vue JS, HTML, SCSS, Blade Template|
|Backend|Php, Laravel, MVC Framework|
|Database|Mysql|
|Authentication|JWT|
|Backup|Google Drive|

## Installation
For installation, I have created a custom command which will do all the setup for the project.

### Normal 
In normal installation, it will ask for **first_name**, **last_name**, **email**, **password**. if you provide everything it will create this user, assign all the permission to this user, and make this software ready to use.

```sh
php artisan install
```
![](/images/install_command.png)

### Dummy
If you are lazy like me, then you can pass extra parameter **--dummy**. It will automatically create a user with these details

```sh
php artisan install --dummy
```
![](/images/install_command_dummy.png)

|First Name|Last Name|Email|Password|
|---|---|---|---|
|John|Doe|admin@gmail.com|123456|

## Features



## Database Design

## Snapshots
### Login Page
There are two fields, **email** and **password**. if both will be correct then you will be able to go to the inside otherwise it will through error.
![Login page](/images/login.png)

### User List Page
After Login, lets go to the users list page. As you can see there is a side bar, with is fully based on you permission. there is a dropdown for the default app. you can select different app and move to that app.

In all the listing page, you will see the filter option. pagination, searching, ordering the column. All these thing is request based. means data is not comming in one shot. defaut pagination is 10 data in one page. so only 10 data is coming in this page, which make this listing page very fast.
![User list](/images/user_list.png)

### User Detail Page
A very nice and clean for detail page as well.
![User Detail Page](/images/user_detail.png)

### User Permission Update page
In the tab, there are multiple apps. So whatever permission will be assigned toa user you can modify from here.
![User Permission Update Page](/images/user_permission.png)

### Backup Page
There is a page from where we can take the backup of all the database which is connected to this portal.

When we will click on the backup button, it will automatically take the backup and put it in the google drive.
![Backup Page](/images/backup.png)