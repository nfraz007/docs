# Portfolio v3
A fully customized portfolio website made in the Codeigniter framework which is a very powerful and widely used framework in PHP. 

## Technologies: 
| | |
|-|-|
|**Frontend**|HTML, CSS, SASS, JavaScript, Jquery, Bootstrap| 
|**Backend**|PHP, Mysqli, JSON|
|**Framework**|Codeigniter, MVC|
|**Software**|Xampp (or any local server), Phpmyadmin, Any browser|

## Demo
Yes, this is a live project and you can see the demo here.
[Open in new tab](https://me.nfraz.co.in)

## Features
* This website is fully dynamic and anybody can use it.
* Fully SEO Optimised.
![Audit Report](/images/portfolio_v3/audit.png)
* Fully supported mobile device.
* Simple and clean user interface.

## Installation
:::warning
Sorry but this repository is now private
:::

First thing first, go to the server public folder. I have installed wamp
```sh
cd /var/www/html
```

clone the repository.
```sh
git clone https://github.com/nfraz007/portfolio_v3.git
```

goto the project directory
```sh
cd portfolio_v3
```

Let's go to the PHPMyAdmin and create a table with the name **portfolio_v3**
there is a file for importing the table. For this go to the PHPMyAdmin and choose the file from this location.
portfolio_v3/sql/portfolio_v3.sql
After the import database with the table is ready to use.

Now let's create config file. Let's copy the sample file
```sh
cp my_config.sample my_config.php
```
put all the details like database credentials.

And Now the Website is ready. you can visit the localhost

type **localhost/portfolio_v3** in the browser

## Database Design
![ER diagram](/images/portfolio_v3/er_diagram.png)


## Snapshot
### Home Page
![Home](/images/portfolio_v3/home.png)

### Work Experience Page
![Work Experience](/images/portfolio_v3/work_experience.png)

### Project Page
![Project](/images/portfolio_v3/project.png)

### Certification Page
![Certification](/images/portfolio_v3/certification.png)
