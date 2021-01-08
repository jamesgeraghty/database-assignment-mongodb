// Movies Find  Querys 
// Part 1 . Read (find)
// a)
db.movies.find(
    {cast:{$all:["Kate Hudson","Matthew McConaughey"]}},
    {"title":1, "tomatoes":1, "year":1,"cast":1,_id:0}
  
  ).sort ( {year: -1} ).pretty();

// b)

db.movies.find(
    {"imdb.rating": { $gt: 9 }, "tomatoes.viewer.rating": { $gt: 4 }},
    {_id: 0, title: 1}
  ).limit(3).sort( {"imdb.rating": -1, "_id":-1} )

// c)
db.movies.find(
    { 
      $or:
       [
      {rated:"PG"},{rated:"G"}  ],
      $and: [
        {"imdb.rating":{ $gte:8 }}, {"genres": "Comedy"} ],
      
      },
  
  { _id: 0, title: 1, rated:1}
  ).sort( {imdb: -1}).limit(5) 
  
  
  // D)
  db.movies.find(
  {"comments": 
      {$elemMatch: 
          {"name": {$eq: "Cersei Lannister"}, 
          "date": {$gte: ISODate("2015-01-01T00:00:01Z")}}}}
).count()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // E) - Create 6 querys 
// query #1 // How many films has quentin Tarantino, directed with IMDB rating of greater than 8
  db.movies.find(
    {directors:{$all:["Quentin Tarantino"]}},
    {"imdb.rating":{ $gte:8 }}
  ).count();
  
// query #2
db.movies.find(
   {name:"Cersei Lannister"} 
   ).sort({ date:-1 }).limit(5).pretty()

// query #3
      db.movies.find(
        { "imdb.rating": { $gte: 8 }},
        {_id: 0, title: 1}
        ).limit(3) 


// query #4
db.movies.find( 
  {"genres":{$all:["Thriller","Sci-Fi"]}}
   ).count()

// query #5 
db.movies.find( 
  { $and:
    [ {"genres":{$all:["Comedy"]}}, 
  {"cast":{$all:["Tom Hanks"]}} ] },
  {"title":1,"awards":1,_id:0}).sort({"awards.wins" :-1},
  {
  "date": {$lt: ISODate("2016-01-01T00:00:01Z")}}
  ).pretty()


  // query #6
  db.movies.find().sort({"awards.wins":-1}).limit(1).pretty()

  // Query #7 -Find the 
db.movies.find(
  {writers:"Leo Tolstoy (novel)"},
  {"title":1, "tomatoes":1, "year":1,"cast":1,_id:0}

).limit (5) .pretty();

// query#8 -  find any 5 films with Western as one of the Genres, List any 5 film, the genres , the title and the year it was released
db.movies.find(
  {"genres": 
      {$elemMatch: 
           {$eq: "Western"}}},
           {"title":1, "genres":1, "year":1,_id:0}
           ).limit (5) .pretty();





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Part 2: Create (insert)
  // movie #1
  db.movies.insert( 
	{  
	  "title" : "The Midnight Sky", 
	  "year" : 2020, 
	  "runtime" : 	118 , 
	  "cast" : ["George Clooney", "Grant Heslov", "Cliff Roberts", "Bard Dorros", "Keith Redmon"], 
	  "plot" :"A lone scientist in the Arctic races to contact a crew of astronauts returning home to a mysterious global catastrophe.",
	  "directors" : ["George Clooney"], 
	  "imdb" :  
	     	{ "rating" :5.6 , 
		     "votes" : 80 }, 
	
	   
	  "genre" : ["Sci-Fi","Drama"],
	}
)

//movie #2
db.movies.insert( 
	{  
	  "title" : "The Informer", 
	  "year" : 2019, 
	  "runtime" : 	113 , 
	  "cast" : ["Joel Kinnaman", "Rosamund Pike", "Clive Owen", "Ana de Armas", "Eugene Lipinski"], 
	  "plot" :"Pete Koslow, a reformed criminal and former special operations soldier, is working undercover for crooked FBI handlers to infiltrate the Polish Mob's drug trade in New York. In a final step toward freedom, Koslow must return to the one place he has fought so hard to leave, Bale Hill Prison, where his mission becomes a race against time when a drug deal goes wrong and threatens to identify him as a mole.",
	  "directors" : ["	Andrea Di Stefano"], 
	  "imdb" :  
	     	{ "rating" :6.6 , 
		     "votes" : 19983 }, 
	
	   
	  "genre" : ["Mystery","Thriller","crime","Drama"],
	}
)
//movie #3
db.movies.insert( 
	{  
	  "title" : "The 12th Man", 
	  "year" : 2017, 
	  "runtime" : 	135 , 
	  "cast" : ["Thomas Gullestad", "Jonathan Rhys Meyers"], 
	  "plot" :"The 12th Man tells the dramatic story of Jan Baalsrud's escape from the Nazis during the Second World War.In Shetland, 12 Norwegian resistance fighters board a fishing boat with eight tons of TNT and cross the North Sea as part of Operation Martin with a plan to sabotage German military facilities. The mission gets into trouble soon after reaching Norway, where their local contact is long dead and their identity is compromised by a German sympathiser, who informs the Germans about their arrival.",
	  "directors" : ["	Harald Zwart"], 
	  "imdb" :  
	     	{ "rating" :7.4 , 
		     "votes" : 19754 }, 
	
	   
	  "genre" : ["History","Thriller","Drama"],
	}
)

//movie #4
db.movies.insert( 
	{  
	  "title" : "Fractured", 
	  "year" : 2019, 
	  "runtime" : 	100, 
	  "cast" : ["Sam Worthington", "Lily Rabe", "Stephen Tobolowsky", "Adjoa Andoh", "Shane Dean"], 
	  "plot" :"Ray is driving home with his wife, Joanne, and his daughter, Peri, after a Thanksgiving visit to Joanne's parents. Ray and Joanne argue about the state of their relationship. Peri then needs to use a restroom, so they take a break at a gas station. After returning to the car, Peri cannot find her compact mirror. Joanne goes to check the restroom, and Ray searches the back seat. While Ray is distracted, Peri is menaced by a stray dog and starts backing towards an exposed pit. Ray throws a rock to scare the dog, but it helps cause Peri to fall into the hole.",
	  "directors" : ["	Brad Anderson"], 
	  "imdb" :  
	     	{ "rating" :6.4 , 
		     "votes" : 53685 }, 
	
	   
	  "genre" : ["Mystery","Thriller"],
	}
)

//movie #5
db.movies.insert( 
	{  
	  "title" : "Mile 22", 
	  "year" : 2018, 
	  "runtime" : 	94 , 
	  "cast" : ["Mark Wahlberg", "Iko Uwais", "John Malkovich", "Lauren Cohan", "Ronda Rousey"], 
	  "plot" :"CIA SAC/SOG officer James Silva leads a deniable strike team code-named Overwatch to infiltrate a Russian FSB safe house in the United States. Under the supervision of James Bishop, Overwatch's mission is to locate and destroy shipments of cesium before the highly toxic substance can be weaponized to kill thousands. ",
	  "directors" : ["	Peter Berg"], 
	  "imdb" :  
	     	{ "rating" :6.1 , 
		     "votes" : 872 }, 
	
	   
	  "genre" : ["Action","Thriller"],
	}
)

// Part 3 Update 
// a)


db.movies.update(
    { "title" : "The Midnight Sky" },
    {$push: {cast: "James Geraghty"}    
        }
    )

// b) Update the IMDB to a new rating 

db.movies.update(
  {"title" : "The Midnight Sky" }, 
  {
     $set: {
       "imdb.rating": 6}, $inc: {"imdb.votes":1}}
)




  // C) Add a rotten tomatoes sub document  to one of the movies. 
  
  db.movies.update(
    { "title" : "The Midnight Sky" },

     {$push: {"tomatoes":{"viewer":{"rating":3.4,"numReviews":142,"meter":0}}}})



// Part 4. Delete - deletes the movie and all related information

db.movies.deleteOne( {title: "The Midnight Sky"} )

db.movies.find(
  { "title" : "A Star Is Born" },
).sort ( {year: -1} ).pretty();
