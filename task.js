use Zen_class_programme

db.createCollection("users")
db.createCollection("codekata")
db.createCollection("attendance")
db.createCollection("topics")
db.createCollection("tasks")
db.createCollection("company_drives")
db.createCollection("mentors")


// 1. Find all the topics and tasks which are thought in the month of October:

db.topics.find({date:
  {$gt:"1-oct-2020",$lt:"31-oct-2020"}})
  .forEach(function(time)
  {print(time.date +": "+ time.topic)})


// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({date:
  {$gt:"15-oct-2020",$lt:"31-oct-2020"}})
  .forEach(function(time){print(time.date +": "+ time.company)})


// 3. Find all the company drives and students who are appeared for the placement.

db.company_drives.aggregate([{$lookup:{from:"users", localField: "placement.company", foreignField: "company", as: "placed":{$getField:{field:"name"}}}}])


// 4. Find the number of problems solved by the user in codekata

db.codekata.find()
.forEach(function(code){
  print(code.name +" has solved "+ code.solved_code+" problems.")})

// 5. Find all the mentors with who has the mentee's count more than 15

db.mentors.aggregate([{$match:{mentee:{$gt:15}}},{$group:{_id:{mentor:"$mentor", mentee:"$mentee"}}}])

// 6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.users.find({comp_task:{$not:{$elemMatch:{date:{$gte:"15-oct-2020",$lte:"31-oct-2020"}}}}}).count()
