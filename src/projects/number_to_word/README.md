# NumberToWord
A PHP file to convert any number to word form.

## Setup

Setup is very easy, just import the file into your project and you are all set.

```php
include("NumberToWord.php");
```

or

```php
require 'NumberToWord.php';
```

## Convert a number
To convert any number to its word form, create an instance of NumberToWord class. you can then call the convert() function on the NumberToWord object, passing one parameter as the number you want to convert

:::tip Note
* Input must be an integer value in string format.

* **Maximum limit of length of input string = 99**
:::

```php
$obj = new NumberToWord();
echo $obj->convert("123");
```
Output
> one hundred twenty-three
