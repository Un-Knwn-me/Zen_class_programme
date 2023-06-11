db.topics.insertMany([{"topic":"JS", "date":"15-oct-2020"}, {"topic":"HTML", "date":"16-oct-2020"}, 
{"topic":"CSS", "date":"17-oct-2020"}, {"topic":"DOM", "date":"18-oct-2020"}, 
{"topic":"Callback", "date":"19-oct-2020"}, {"topic":"promise", "date": "20-oct-2020"}, 
{"topic":"Async", "date": "22-oct-2020"}, {"topic":"React", "date":"23-oct-2020"}, 
{"topic":"Bootstrap", "date":"24-oct-2020"}, {"topic":"Mogodb", "date":"25-oct-2020"}, {"topic":"nodejs", "date":"26-oct-2020"}, 
{"topic":"AWS", "date":"27-oct-2020"}, {"topic":"SystemDesign", "date":"29-oct-2020"}, 
{"topic":"DSAlgo", "date":"30-oct-2020"}, {"topic":"FSD", "date": "31-oct-2020"}])

db.tasks.insertMany([
    {"task":"Functions, OOPS, Array method", "date": "15-oct-2020"}, 
    {"task":"inline vs block methods, elements, attributes", "date": "16-oct-2020"}, 
    {"task":"property & value, class & id, display property, flex, grid", "date": "17-oct-2020"},
    {"task":"set attribute, getelement, querySelect, append, document, window", "date": "18-oct-2020"},
    {"task":"pain of callback, callback hell, call stack", "date": "19-oct-2020"},
    {"task":"promise all, promise chain, fetch", "date": "20-oct-2020"}, 
    {"task":"Fetch-api, request, CRUD", "date": "22-oct-2020"},
    {"task":"scoping, JSX, components, props vs state, hook, router", "date": "23-oct-2020"},
    {"task":"layout, container, column, row", "date": "24-oct-2020"},
    {"task":"MySql, queries, mongosh, collections, aggregate", "date": "25-oct-2020"},
    {"task":"npm, API method, request, response, dotenv", "date": "26-oct-2020"},
    {"task":"cloud computing, laas, paas, saas, IAM, S3, EC2", "date": "27-oct-2020"},
    {"task":"functional, non-functional, scalability, OO modeling, Monolith, MSA, ACID, CAP", "date": "29-oct-2020"},
    {"task":"Algorithm, time complexity, space complexity, linked list, recursion", "date": "30-oct-2020"},
    {"task":"mangoose, nodeman, Atlas, express.router, Auth token", "date": "31-oct-2020"}
])


db.company_drives.insertMany([
    {"company":"Google", "date":"15-oct-2020"}, 
    {"company":"Facebook", "date":"16-oct-2020"}, 
    {"company":"Amazon", "date":"17-oct-2020"}, 
    {"company":"Microsoft", "date":"18-oct-2020"}, 
    {"company":"Apple", "date":"19-oct-2020"},
    {"company":"Paypal", "date":"20-oct-2020"},
    {"company":"Juspay", "date":"22-oct-2020"},
    {"company":"freshworks", "date":"23-oct-2020"},
    {"company":"DBS", "date":"24-oct-2020"},
    {"company":"Scapic", "date":"25-oct-2020"},
    {"company":"Gofrugal", "date":"26-oct-2020"},
    {"company":"Chargebee", "date":"27-oct-2020"},
    {"company":"inception", "date":"29-oct-2020"},
    {"company":"nyx wolves", "date":"30-oct-2020"},
    {"company":"Force sight", "date":"31-oct-2020"}
])

db.mentors.insertMany([
    {"mentor":"Rupan", "date":"15-oct-2020", "mentee": 20}, 
    {"mentor":"Rupan", "date":"16-oct-2020", "mentee": 20}, 
    {"mentor":"Rupan", "date":"17-oct-2020", "mentee": 20},
    {"mentor":"Rupan", "date":"18-oct-2020", "mentee": 20},
    {"mentor":"Rupan", "date":"19-oct-2020", "mentee": 20},
    {"mentor":"Rupan", "date":"20-oct-2020", "mentee": 20},
    {"mentor":"Sanjay", "date":"22-oct-2020", "mentee": 23},
    {"mentor":"Sanjay", "date":"23-oct-2020", "mentee": 23},
    {"mentor":"Sanjay", "date":"24-oct-2020", "mentee": 23},
    {"mentor":"Sanjay", "date":"25-oct-2020", "mentee": 23},
    {"mentor":"Sanjay", "date":"26-oct-2020", "mentee": 23},
    {"mentor":"Sanjay", "date":"27-oct-2020", "mentee": 23},
    {"mentor":"Sanjay", "date":"29-oct-2020", "mentee": 23},
    {"mentor":"Sai mohan", "date":"30-oct-2020", "mentee": 13},
    {"mentor":"Ram kumar", "date":"31-oct-2020", "mentee": 18},
    {"mentor":"Guvi", "date":"01-nov-2020", "mentee": 10}
])

db.users.insertMany([
    {"name":"Dhanush", "placement":[
        {"company":"Google"},
        {"company":"Facebook"},
        {"company":"Amazon"},
        {"company":"Microsoft"},
        {"company":"Apple"},
        {"company":"Paypal"}
    ],
    "comp_task": [
    {"task":"Functions, OOPS, Array method"},
    {"task":"npm, API method, request, response, dotenv"},
    {"task":"pain of callback, callback hell, call stack"},
    {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
    {"task":"inline vs block methods, elements, attributes"}
]},
    {"name":"Santhosh", "placement":[
        {"company":"DBS"},
        {"company":"Scapic"},
        {"company":"Gofrugal"},
        {"company":"Chargebee"},
        {"company":"inception"},
        {"company":"nyx wolves"}
    ],
    "comp_task": [
        {"task":"inline vs block methods, elements, attributes"},
        {"task":"set attribute, getelement, querySelect, append, document, window"},
        {"task":"promise all, promise chain, fetch"},
        {"task":"Fetch-api, request, CRUD"},
        {"task":"scoping, JSX, components, props vs state, hook, router"},
        {"task":"layout, container, column, row"},
        {"task":"MySql, queries, mongosh, collections, aggregate"}
    ]
},
    {"name":"Arun", "placement":[
        {"company":"Apple"},
        {"company":"Google"},
        {"company":"Microsoft"},
        {"company":"Force sight"},
        {"company":"Google"}
    ],
    "comp_task": [
        {"task":"promise all, promise chain, fetch"},
        {"task":"Fetch-api, request, CRUD"},
        {"task":"scoping, JSX, components, props vs state, hook, router"},
        {"task":"layout, container, column, row"},
        {"task":"MySql, queries, mongosh, collections, aggregate"}
    ]
},
    {"name":"Ragavendran", "placement":[
        {"company":"freshworks"},
        {"company":"Juspay"},
        {"company":"Scapic"},
        {"company":"Gofrugal"},
        {"company":"Chargebee"}
    ],
    "comp_task": [
    {"task":"Functions, OOPS, Array method"},
    {"task":"npm, API method, request, response, dotenv"},
    {"task":"pain of callback, callback hell, call stack"},
    {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
    {"task":"inline vs block methods, elements, attributes"}
]},
    {"name":"Salahudeen", "placement":[
        {"company":"Amazon"},
        {"company":"Google"},
        {"company":"Microsoft"},
        {"company":"Apple"},
        {"company":"Paypal"},
        {"company":"Juspay"}
    ],
    "comp_task": [
        {"task":"set attribute, getelement, querySelect, append, document, window"},
        {"task":"promise all, promise chain, fetch"},
        {"task":"Fetch-api, request, CRUD"},
        {"task":"scoping, JSX, components, props vs state, hook, router"},
        {"task":"layout, container, column, row"},
        {"task":"MySql, queries, mongosh, collections, aggregate"}
    ]
},
    {"name":"Kavin", "placement":[
        {"company":"Force sight"},
        {"company":"Gofrugal"},
        {"company":"Chargebee"},
        {"company":"inception"},
        {"company":"nyx wolves"},
        {"company":"freshworks"}
    ],
    "comp_task": [
        {"task":"Functions, OOPS, Array method"},
        {"task":"npm, API method, request, response, dotenv"},
        {"task":"pain of callback, callback hell, call stack"},
        {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
        {"task":"inline vs block methods, elements, attributes"},
        {"task":"set attribute, getelement, querySelect, append, document, window"},
        {"task":"promise all, promise chain, fetch"},
        {"task":"Fetch-api, request, CRUD"},
        {"task":"scoping, JSX, components, props vs state, hook, router"},
        {"task":"layout, container, column, row"},
        {"task":"MySql, queries, mongosh, collections, aggregate"}
    ]
},
    {"name":"Jayavel", "placement":[
        {"company":"DBS"},
        {"company":"Scapic"},
        {"company":"Gofrugal"},
        {"company":"Chargebee"},
        {"company":"Google"},
        {"company":"Microsoft"},
        {"company":"Apple"},
        {"company":"Paypal"}
    ],
    "comp_task": [
        {"task":"Functions, OOPS, Array method"},
        {"task":"npm, API method, request, response, dotenv"},
        {"task":"pain of callback, callback hell, call stack"},
        {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
        {"task":"inline vs block methods, elements, attributes"},
        {"task":"set attribute, getelement, querySelect, append, document, window"},
        {"task":"promise all, promise chain, fetch"},
        {"task":"Fetch-api, request, CRUD"},
        {"task":"scoping, JSX, components, props vs state, hook, router"},
        {"task":"layout, container, column, row"},
        {"task":"MySql, queries, mongosh, collections, aggregate"}
    ]
},
    {"name":"Sethu madhavan", "placement":[
        {"company":"DBS"},
        {"company":"Scapic"},
        {"company":"Gofrugal"},
        {"company":"Chargebee"},
        {"company":"Google"},
        {"company":"Microsoft"},
        {"company":"Apple"},
        {"company":"Paypal"}
    ],
    "comp_task": [
        {"task":"Functions, OOPS, Array method"},
        {"task":"npm, API method, request, response, dotenv"},
        {"task":"pain of callback, callback hell, call stack"},
        {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
        {"task":"inline vs block methods, elements, attributes"},
        {"task":"set attribute, getelement, querySelect, append, document, window"},
        {"task":"promise all, promise chain, fetch"},
        {"task":"Fetch-api, request, CRUD"},
        {"task":"scoping, JSX, components, props vs state, hook, router"},
        {"task":"layout, container, column, row"},
        {"task":"MySql, queries, mongosh, collections, aggregate"},
        {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
        {"task":"Algorithm, time complexity, space complexity, linked list, recursion"}
    ]
},
    {"name":"Keerthana", "placement":[
        {"company":"DBS"},
        {"company":"Scapic"},
        {"company":"Gofrugal"},
        {"company":"Chargebee"},
        {"company":"Google"},
        {"company":"Microsoft"},
        {"company":"Apple"},
        {"company":"Paypal"}
    ],
    "comp_task": [
        {"task":"Functions, OOPS, Array method"},
        {"task":"npm, API method, request, response, dotenv"},
        {"task":"pain of callback, callback hell, call stack"},
        {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
        {"task":"inline vs block methods, elements, attributes"},
        {"task":"set attribute, getelement, querySelect, append, document, window"},
        {"task":"promise all, promise chain, fetch"},
        {"task":"Fetch-api, request, CRUD"},
        {"task":"scoping, JSX, components, props vs state, hook, router"},
        {"task":"layout, container, column, row"},
        {"task":"MySql, queries, mongosh, collections, aggregate"},
        {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
        {"task":"Algorithm, time complexity, space complexity, linked list, recursion"} 
    ]
},
    {"name":"Sanjay", "placement":[
       {"company":"Facebook"},
       {"company":"Google"},
       {"company":"Microsoft"},
       {"company":"Apple"},
       {"company":"Paypal"},
       {"company":"Juspay"} 
    ],
    "comp_task": [
        {"task":"Functions, OOPS, Array method"},
        {"task":"npm, API method, request, response, dotenv"},
        {"task":"pain of callback, callback hell, call stack"},
        {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
        {"task":"inline vs block methods, elements, attributes"},
        {"task":"property & value, class & id, display property, flex, grid"},
        {"task":"set attribute, getelement, querySelect, append, document, window"},
        {"task":"promise all, promise chain, fetch"},
        {"task":"Fetch-api, request, CRUD"},
        {"task":"scoping, JSX, components, props vs state, hook, router"},
        {"task":"layout, container, column, row"},
        {"task":"MySql, queries, mongosh, collections, aggregate"},
        {"task":"mangoose, nodeman, Atlas, express.router, Auth token"},
        {"task":"Algorithm, time complexity, space complexity, linked list, recursion"}
    ]
}
])

db.attendance.insertMany([
    {
        "date" : "15-oct-2020",
        "attendees" : ["Dhanush", "Arun", "Ragavendran", "Kavin"]
    },
    {
        "date" : "16-oct-2020",
        "attendees" : ["Santhosh", "Arun", "Ragavendran", "Salahudeen", "Kavin", "Keerthana"] 
    },
    {
        "date" : "17-oct-2020",
        "attendees" : ["Dhanush", "Arun", "Sanjay", "Ragavendran", "Kavin", "Keerthana"]
    },
    {
        "date" : "18-oct-2020",
        "attendees" : ["Dhanush", "Arun", "Sethu madhavan", "Santhosh", "Kavin", "Keerthana", "Salahudeen"]
    },
    {
        "date" : "19-oct-2020",
        "attendees" : ["Dhanush", "Arun", "Ragavendran", "Kavin", "Keerthana", "Sethumadhavan"]
    },
    {
        "date" : "20-oct-2020",
        "attendees" : ["Arun", "Sethumadhavan", "Santhosh", "Kavin", "Keerthana"]
    },
    {
        "date" : "22-oct-2020",
        "attendees" : ["Dhanush", "Arun", "Ragavendran", "Kavin", "Keerthana", "Sethumadhavan"]
    },
    {
        "date" : "23-oct-2020",
        "attendees" : ["Dhanush", "Arun", "Santhosh", "Kavin", "Salahudeen", "Sethumadhavan", "Jayavel"]
    },
    {
        "date" : "24-oct-2020",
        "attendees" : ["Dhanush", "Jayavel", "Santhosh", "Kavin", "Keerthana"]
    },
    {
        "date" : "25-oct-2020",
        "attendees" : ["Dhanush", "Jayavel", "Santhosh", "Kavin", "Keerthana", "Sethumadhavan"]
    },
    {
        "date" : "26-oct-2020",
        "attendees" : ["Arun", "Sethumadhavan", "Santhosh", "Kavin", "Jayavel"]
    },
    {
        "date" : "27-oct-2020",
        "attendees" : ["Arun", "Sethumadhavan", "Santhosh", "Kavin", "Keerthana", "Sethumadhavan", "Jayavel"]
    },
    {
        "date" : "29-oct-2020",
        "attendees" : ["Dhanush", "Arun", "Santhosh", "Kavin", "Jayavel", "Salahudeen"]
    },
    {
        "date" : "30-oct-2020",
        "attendees" : ["Arun", "Sethumadhavan", "Salahudeen", "Kavin", "Jayavel", "Sethumadhavan"]
    },
    {
        "date" : "31-oct-2020",
        "attendees" : ["Arun", "Sethumadhavan", "Santhosh", "Kavin", "Keerthana", "Sethumadhavan", "Jayavel"]
    }
])

db.codekata.insertMany([
    {
        "name": "Dhanush",
        "solved_code": "85"
    },
    {
        "name": "Santhosh",
        "solved_code": "115"
    },
    {
        "name": "Arun",
        "solved_code": "116"
    },
    {
        "name": "Ragavendran",
        "solved_code": "96"
    },
    {
        "name": "Salahudeen",
        "solved_code": "187"
    },
    {
        "name": "Kavin",
        "solved_code": "149"
    },
    {
        "name": "Jayavel",
        "solved_code": "108"
    },
    {
        "name": "Sethu madhavan",
        "solved_code": "74"
    },
    {
        "name": "Keerthana",
        "solved_code": "47"
    },
    {
        "name": "Sanjay",
        "solved_code": "67"
    }
])