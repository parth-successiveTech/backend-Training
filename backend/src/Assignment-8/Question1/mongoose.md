MongoDB
It is a document database built on a horizontal scale-out architecture that uses a flexible schema for storing data. Founded in 2007, MongoDB has a worldwide following in the developer community.

Instead of storing data in tables of rows or columns like SQL databases, each record in a MongoDB database is a document described in BSON, a binary representation of the data. Applications can then retrieve this information in a JSON format.

Here’s a simple JSON document describing a historical figure.

{
  "_id": 1,
  "name": {
    "first": "Ada",
    "last": "Lovelace"
  },
  "title": "The First Programmer",
  "interests": ["mathematics", "programming"]
}
Document databases are highly flexible, allowing variations in the structure of documents and storing documents that are partially complete. One document can have others embedded in it. Fields in a document play the role of columns in a SQL database, and like columns, they can be indexed to increase search performance.

From its founding, MongoDB was built on a scale-out architecture, a structure that allows many small machines to work together to create fast systems and handle huge amounts of data.

MongoDB has always focused on providing developers with an excellent user experience, which, in addition to all its other properties, has made MongoDB a favorite of developers worldwide for a wide variety of applications.

Why Use MongoDB?
MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.

As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.

MongoDB was built for people building internet and business applications who need to evolve quickly and scale elegantly. Companies and development teams of all sizes use MongoDB for a wide variety of reasons.


Document Model
The document data model is a powerful way to store and retrieve data in any modern programming language, allowing developers to move quickly.


Deployment Options
MongoDB is available in any major public cloud (such as AWS, Azure, and Google Cloud) through MongoDB Atlas, in large data centers through the Enterprise Advanced edition, or free through the source-available Community edition.


Get Started Quickly
MongoDB has a great user experience for developers who can install MongoDB and start writing code immediately.



Fully Scalable
MongoDB’s horizontal, scale-out architecture can support huge volumes of both data and traffic.


Find Community
MongoDB has developed a large and mature platform ecosystem. It has a worldwide community of developers and consultants, making it easy to get help. It also has an enterprise-grade support offering.

Using MongoDB enables your team to go further and faster when developing software applications that handle data of all sorts in a scalable way.

MongoDB is an excellent choice if you need to: Support rapid iterative development. Enable collaboration of a large number of teams. Scale to high levels of read and write traffic. Scale your data repository to a massive size. Evolve the type of deployment as the business changes. Store, manage, and search data with text, geospatial, or time-series dimensions.

MongoDB as a company has grown because the number of use cases with these characteristics continues to grow.

What are the Advantages of MongoDB?
MongoDB has become one of the most wanted databases in the world because it makes it easy for developers to store, manage, and retrieve data when creating applications with most programming languages.

To understand whether MongoDB is right for you, let’s look at the advantages of MongoDB for developers. You can also check out the top five MongoDB features.

The Power of Document-Oriented Databases
MongoDB is the pioneer of what has come to be called NoSQL databases, which developed because RDBMS systems based on SQL did not support the scale or rapid development cycles needed for creating modern applications.

NoSQL is an umbrella term; it includes document-oriented databases like MongoDB, columnar databases, in-memory databases, and more.

In MongoDB, records are stored as documents in compressed BSON files. The documents can be retrieved directly in JSON format, which has many benefits:

It is a natural form to store data.
It is human-readable.
Structured and unstructured information can be stored in the same document.
You can nest JSON to store complex data objects.
JSON has a flexible and dynamic schema, so adding fields or leaving a field out is not a problem.
Documents map to objects in most popular programming languages.
Most developers find it easy to work with JSON because it is a simple and powerful way to describe and store data.

Perhaps most importantly, the developer controls the database schema. Developers adjust and reformat the database schema as the application evolves without the help of a database administrator. When needed, MongoDB can coordinate and control changes to the structure of documents using schema validation.

MongoDB created Binary JSON format (BSON) to support more data types than JSON. This new format allows for faster parsing of the data. Data stored in BSON can be searched and indexed, tremendously increasing performance. MongoDB supports a wide variety of indexing methods, including text, decimal, geospatial, and partial.

Developer User Experience
MongoDB has always devoted abundant time and energy to making sure developers have a great experience. Developers appreciate that MongoDB has made sure the database can be used from various programming languages, including C, C# and .NET, C++, Go, Java, JavaScript, PHP, Python, Ruby, Rust, Scala, and Swift.

As more and more business users have joined the MongoDB community, features have been added to support the use and operation of MongoDB in enterprise IT departments. MongoDB now also offers first-class support for customers who need it.

With MongoDB Atlas, the database-as-a-service at the center of the MongoDB Cloud, it is easier than ever to use MongoDB. You can provision a cluster with a few clicks from the web interface and start writing code almost immediately.

MongoDB Atlas allows developers to get started right away in any major public cloud and easily migrate on-premise MongoDB instances to the cloud.

Scalability and Transactionality
MongoDB’s scale-out architecture, which distributes work across many smaller (and cheaper) computers, means that you can create an application that will handle spikes in traffic as your business grows.

Engineering innovations by MongoDB support massive numbers of reads and writes. MongoDB’s approach to sharding is at the heart of these innovations, allowing clusters of information to be stored together as the information is spread across the cluster of computers. By comparison, most SQL databases use a scale-up architecture that is limited because it relies on creating faster and more powerful computers.

When modeling data in MongoDB, it is common to embed objects within each other. What used to take multiple transactions to update in traditional relational databases can sometimes be achieved in a single transaction with MongoDB.

If still needed, MongoDB also supports database transactions that allow many changes to a database to be grouped and either made or rejected in a batch.

Platform and Ecosystem Maturity
MongoDB has been around since 2007 and has been deployed at thousands of companies for a wide range of use cases. A natural result of that usage level is that the platform has been extended to meet a massive number of new demands. Most large organizations want to make sure it is easy to get help using any technology that becomes the foundation of their business.

MongoDB has a large and thriving community of developers across the open-source community, academia, and among system integrators and consulting firms across the globe.

When Should You Use MongoDB?
MongoDB is a general-purpose database used in various ways to support applications in many different industries (e.g., telecommunications, gaming, finances, healthcare, and retail). MongoDB has found a home in many different businesses and functions because it solves long-standing problems in data management and software development. Typical use cases for MongoDB include:

Integrating large amounts of diverse data
If you are bringing together tens or hundreds of data sources, the flexibility and power of the document model can create a single unified view in ways that other databases cannot. MongoDB has succeeded in bringing such projects to life when approaches using other databases have failed.

Describing complex data structures that evolve
Document databases allow embedding of documents to describe nested structures and easily tolerate variations in data in generations of documents. Specialized data formats like geospatial are efficiently supported. This results in a resilient repository that doesn’t break or need to be redesigned every time something changes.

Delivering data in high-performance applications
MongoDB’s scale-out architecture can support huge numbers of transactions on humongous databases. Unlike other databases that either cannot support such scale or can only do so with massive amounts of engineering and additional components, MongoDB has a clear path to scalability because of the way it was designed. MongoDB is scalable out of the box.

Supporting hybrid and multi-cloud applications
MongoDB can be deployed and run on a desktop, a massive cluster of computers in a data center, or in a public cloud, either as installed software or through MongoDB Atlas, a database-as-a-service product. If you have applications that need to run wherever they make sense, MongoDB supports any configuration now and in the future.

Supporting agile development and collaboration
Document databases put developers in charge of the data. Data becomes like code that is friendly to developers. This is far different from making developers use a strange system that requires a specialist. Document databases also allow the evolution of the structure of the data as needs are better understood. Collaboration and governance can allow one team to control one part of a document and another team to control another part.



MONGOOSE
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level, schema-based solution for interacting with MongoDB databases in a Node.js environment, simplifying data modeling and interaction compared to using the native MongoDB driver directly. 
Here's a breakdown of its key aspects:
Object Data Modeling (ODM):
Mongoose allows you to define the structure and behavior of your MongoDB documents using JavaScript objects, mapping them to a defined schema. This provides a more organized and predictable way to work with your data.
Schema-based Approach:
Unlike MongoDB's schema-less nature, Mongoose introduces the concept of Schemas. These define the structure, data types, validation rules, and default values for your documents, ensuring data consistency and integrity.
Models:
Based on the defined schemas, Mongoose creates Models. These models are constructors that provide methods for performing common database operations (CRUD: Create, Read, Update, Delete) on your documents.
Built-in Features:
Mongoose offers a range of features out of the box, including:
Type Casting: Automatically converts data to the correct types defined in the schema.
Validation: Enforces validation rules defined in the schema before saving data to the database.
Query Building: Provides a fluent API for constructing complex queries.
Middleware/Hooks: Allows you to execute functions at specific points in the data lifecycle (e.g., before saving or after deleting).


Relational Database	NoSQL
It is used to handle data coming in low velocity.	It is used to handle data coming in high velocity.
It gives only read scalability.	It gives both read and write scalability.
It manages structured data.	It manages all type of data.
Data arrives from one or few locations.	Data arrives from many locations.
It supports complex transactions.	It supports simple transactions.
It has single point of failure.	No single point of failure.
It handles data in less volume.	It handles data in high volume.
Transactions written in one location.	Transactions written in many locations.
support ACID properties compliance	doesn't support ACID properties
Its difficult to make changes in database once it is defined	Enables easy and frequent changes to database
schema  is mandatory to store the data	schema design is not required
Deployed in vertical fashion.	Deployed in Horizontal fashion.


