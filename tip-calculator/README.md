# Tip Calculator

You run a restaurant.  Each night, the waitstaff get tips.  You record each tip in your POS (point-of-sale) system,
and at the end of the night you need to tally everything up.

Your POS system generates two files for you, both in JSON format:

* the list of servers - each server has
    * a unique server id
    * a first name
    * a last name
* the list of sales - each sale has
    * the total amount in pennies
    * the tip amount in pennies
    * the server's id
    * the date

Unfortunately, the sales report always includes 8 days of sales, and it only shows things in pennies.

Your mission, should you choose to accept it, is write a class that can return the tips for each server for a given date.
Your class should have a method that returns a hash where:

* the key is the server's full name
* the value is the total amount that the server earned formatted like "$xx.xx"

## Setup

Put your class in the lib directory.

Put your spec in the spec directory.  Treat the JSON files like production data - that is, don't use them in your tests.

To check your work, create a bin directory and drop a script in there that runs your class against the JSON files.

## Example

For example, imagine you have the following json:

    # staff.json
    [
      {
        "id": 3135,
        "first_name": "Ila",
        "last_name": "Nikolaus",
        "job_title": "server"
      },
      {
        "id": 4029,
        "first_name": "Cierra",
        "last_name": "Johnson",
        "job_title": "server"
      }
    ]

    # sales.json
    [
      {
        "server_id": 3135,
        "date": "2014-05-06",
        "total": 2404,
        "tip": 385
      },
      {
        "server_id": 3135,
        "date": "2014-05-06",
        "total": 2212,
        "tip": 398
      },
      {
        "server_id": 4029,
        "date": "2014-05-06",
        "total": 3005,
        "tip": 451
      }
    ]

Your class should be able to produce something like this for any given date:

    {
      "Ila Nikolaus" => "$7.83",
      "Cierra Johnson" => "$4.51"
    }

## Checking your work

If you run your code for 5/11/2014 you should get a hash that looks like this:

    {
      "Evans Kub"=>"$12.89",
      "Lawrence Stamm"=>"$17.94",
      "Abby Bauch"=>"$32.85",
      "Eula Abbott"=>"$35.52",
      "Warren Haley"=>"$33.31",
      "Benedict Bruen"=>"$21.23"
    }

## Hints

Formatting Ruby numbers can be tricky.  Here's an example of converting pennies to a dollar string:

    "$%.2f" % (780/100.0)
