# Tip Calculator - Extra

The POS system also generates a list of the busser who worked that day.  The busser should take 10% of the each server's
total tips for the night.

Update your class to take busser into account.  This means:

* Each server's tips should be 90% of what they were previously
* The busser should be included in the hash, and their total should be the sum of 10% of all the server's total tips

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
      },
      {
        "id": 4524,
        "first_name": "Joe",
        "last_name": "Smith",
        "job_title": "busser"
      }
    ]

    # bussers.json
    [
      {
        "busser_id": 4524,
        "date": "2014-05-06"
      },
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
      "Ila Nikolaus" => "$7.05",
      "Cierra Johnson" => "$4.06",
      "Joe Smith" => "$1.23"
    }
