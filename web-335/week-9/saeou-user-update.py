from pymongo import MongoClient
import pprint
import datetime

client = MongoClient ('mongodb+srv://admin:abc222abc@buwebdev-cluster-1-2eedp.mongodb.net/test?authSource=admin&replicaSet=buwebdev-cluster-1-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true')

db = client.web335

db.users.update_one(

    {"employee_id": "1100011"},

    {

        "$set": {

            "email": "jsaeou@my365.bellevue.edu"

        }

    }

)

pprint.pprint(db.users.find_one({"employee_id": "1100011"}))