import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payble":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

print(json.loads(sampleJson)['company']['employee']['payble']['salary'])


sampleJson = {"id" : 1, "name" : "value2", "age" : 29}

print(json.dumps(sampleJson, indent=4, sort_keys=True))