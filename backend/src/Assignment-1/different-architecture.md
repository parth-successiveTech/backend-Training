Backend Architectures for content-driven web app backends

bookmark_border



Backend architecture refers to how your web application backend is structured. The backend architecture determines how parts of the application communicate with each other to process incoming requests and create responses. When building a web application, select a backend architecture based on your specific requirements and factors, including cost (both ongoing and at scale), your application's complexity, scaling goals, and your team's expertise.

Specifically for content-driven web applications, such as ecommerce, newspapers, or blogs, critical requirements include the consistency of your data and performance, especially as your application grows to a global scale and may become more distributed. For content-driven web applications, the data storage used by your application is also critical and is discussed in more detail in the data storage guide. Moving beyond typical application architectures, hosting your content, and making it accessible is critical when optimizing your app's performance. Learn more about selecting the right hosting strategy and optimizing your app in the hosting guide.

If you have an existing backend for a web application, consider the limits of your current architecture. For example, as your application scales up and demands on its performance and reliability increase, consider whether parts of your application should be refactored or moved to a different architecture more suited to your increased scale. For example, Hybrid (or multicloud) architectures allow you to shift some workloads to the cloud before making a complete transition. Considering the cost, time, and risk involved in such a migration is also essential.

Monolithic Architectures
A monolithic architecture has a unified structure, with all the components of the application tightly integrated into a single codebase. The entire application is built as a single, self-contained unit. Monolithic architecture is multi-tiered, where different layers of the application accomplish specific tasks.

Structural Layers

The User Interface (UI), which includes components for presenting the application's features, is usually a web-based or desktop application that interacts with users.
The application logic is where the core functionality resides.This part of the codebase contains the rules, calculations, and operations that define how the application works.
The data access layer contains functions for reading and writing data and translating between the application's data structures and the database schema. This layer is responsible for interacting with the application's database or data storage.
The database is where the application stores its data. There is usually a single database that stores all of the application's data, including user data, configurations, and other information.
Middleware components handle tasks such as authentication, request routing, and data validation. These components help manage the flow of data and requests.
Some monolithic applications have integration points with external services or APIs. These points allow the application to interact with third-party services, data sources, or other systems.
The structural layers are usually part of a single codebase. This codebase contains the entire application and is usually organized into directories, modules, and classes. Developers work on various parts of the codebase to build and maintain the application. However, the entire application is typically deployed as a single unit. When updates or changes are made, the entire application is re-deployed.

Potential Challenges

As monolithic applications grow, the codebase tends to become complex and difficult to maintain. This can result in long development cycles and difficulty in understanding the entire codebase.
Deploying changes to a monolithic application can be risky since changes made in one part of the code may inadvertently affect other parts of the application. This can create a lengthy and error-prone deployment process.
Monolithic applications can be difficult to scale since they are deployed as a single unit. You must scale the entire application even if only one component experiences increased demand.
Monolithic applications often rely on a single technology stack or programming language, your ability to use the best tool for a specific task within the application may be limited.
Even during periods of low demand, monolithic applications require significant resources to operate. Maintenance costs also increase as the application ages as it becomes more challenging to update and patch the application without causing regressions.
Development teams working on monolithic applications are often organized around the entire application, this leads to larger teams and more complex coordination among team members.
Suggested Usage
Monolithic architectures are suitable when an application has modest requirements and the development team is small. As an application grows in complexity and scale, or when different parts of the application require different technology or deployment strategies, monolithic architectures can become less flexible and more challenging to maintain.

You can create and manage virtual machines that can run monolithic applications on Compute Engine. You have full control over the operating systems, software and management of these virtual machines to run your monolithic application.

With a platform-as-a-service service, such as App Engine, you can build your application and run it on fully managed infrastructure that automatically scales with requests.

If your monolithic application is containerized, you can run it using Google Kubernetes Engine (GKE) or Cloud Run. Services such as Cloud SQL or Cloud Spanner can be used to store data for monolithic applications. Consider a combination of services and systems based on your application's specific requirements.

Serverless Architectures
Using serverless architecture, you can build and run applications without managing physical or virtual servers. The cloud provider automatically manages the infrastructure, scaling, and resource allocation so that developers can focus on writing the code for their applications. Serverless architectures can simplify development, reduce operational overhead, and optimize costs by eliminating the need to maintain servers. They are well-suited for microservices, real-time data processing, web applications with variable workloads, and event processing.

Event-based serverless architectures
Event-based serverless architectures are a specific type of serverless computing architecture that relies on events or triggers to initiate the execution of functions or microservices. System components communicate through events, and functions are invoked in response to the events. They often rely on asynchronous communication as functions are triggered by events, then process them independently, and may produce events that then trigger subsequent actions. This type of serverless architecture is a good option for building scalable, responsive, and loosely coupled systems.

Google Cloud Functions and Cloud Functions for Firebase enable you to build and deploy event-driven functions in a fully managed and serverless environment. It lets you run code in response to various events and triggers, including HTTP requests, Cloud Pub/Sub messages, Google Cloud Storage changes, Firebase Realtime Database updates, without the need to manage infrastructure. Key features include multiple language support, scalability, granular billing, third-party integrations, robust logging and monitoring, and integration with other Google and Firebase services.

Serverless architectures can be cost-effective for many use cases, especially for applications with varying workloads, rapid development needs, and unpredictable traffic. Reliability depends on the cloud provider, with service level agreements (SLAs) in place to ensure specific performance and reliability targets. You must assess your particular use case and requirements to determine if serverless architecture is your best option.

Containerization
Containerization allows applications and their dependencies to be packaged into lightweight, portable containers. They provide a consistent application environment that support development and deployment across different systems and platforms. Some serverless platforms offer the ability to run containerized workloads. Running containers within a serverless environment can be beneficial when you have complex or stateful workloads that cannot be expressed as basic functions. It provides flexibility in terms of language support and runtime environments.

Cloud Run is a serverless computing platform that allows developers to deploy and run containerized applications in a fully managed environment. It provides a straightforward way to build, deploy, and scale applications without managing the underlying infrastructure. It is suitable for a wide range of web and microservices applications, especially those with variable workloads, and where containerization offers benefits in terms of application packaging and consistency.

Microservice Architectures
Applications are broken down into small parts that are loosely coupled and implement distinct features or capabilities. These services may communicate through asynchronous messages, event-based channels, or directly by exposing an interface. Each service is developed, tested, and scaled independently in its container, which is often managed through an orchestration service, such as Kubernetes, or deployed using a managed platform, such as Cloud Run.

Microservice deployments usually also take advantage of the serverless application paradigm by not relying on a centralized server.

Separating an application into autonomous services can simplify a complex system. Well-defined boundaries and objectives can speed up development and improve maintenance. Each microservice can be developed independently using the most effective frameworks or tools. Communication between services is often handled using events, publish-subscribe communication, message pipelines or remote procedure calls such as gRPC.

For the orchestration of tasks within a microservice architecture, consider using a framework that supports the platforms you are targeting, sufficient depth for the tasks and types of workflows you are orchestrating, as well as error handling and telemetry to debug issues. Popular choices include Conductor or offerings from a cloud provider such as Google Workflows.

Microservice-based applications can be complex to develop and maintain due to their distributed nature and the need for intra-service communication. Therefore, managing deployments, monitoring, and logging are more complex than other architecture options. Since reliability depends on the architecture of the individual services, the distributed nature may offer additional resilience, especially if monitoring and telemetry are deployed and enabled if required