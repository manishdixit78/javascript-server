***Introduction of 12FACTOR App :***
 The twelve-factor app or framework provide a architecture to the developers that ensures speed, reliability, agility, portability and ultimately results in a robust and reliable application.The 12 factors help programmers write modern apps in a declarative way, using clear contracts deployed via cloud. The 12 factor app is specially used for creating the SaaS(Software as a service).
 The 12factor app is not a one programming specific, the methodology applied to app written in any programming language.

 12 Factor App design methodology is nothing but a collection of 12 factors which act as building blocks for deploying or developing an app in the cloud. Listed below are the 12 Factors:
 
 1.**Codebase:**
  12 Factor App is always tracked in a version control system such as Git or Apache Subversion in the form of code repository.This will essentially help developers to build our code on top of one codebase, fully backed up with many deployments and revision control.

 2.**Dependencies:**
  As the app is standalone and needs to install dependencies, it is important to explicitly declare and isolate dependencies. Overall, a 12-factor app must be self-containing. The application should be isolated sufficiently to avoid interactions with conflicting libraries that are installed on the host machine.

 3.**Config:**
  This factor manages the configuration information for the app. Here programmers store our configuration files in the environment.Twelve-factor apps store configs as variables. Configs are independent so platform and os is not specific.

 4.**Backing Services:**
  This includes backing service management services (local database service or any third party service) which depends on over a network connection. 
  In case of a 12 factor app, the interface to connect these services should be defined in a standard way. You need to treat backing services like attached resources because you may want different databases depending on which team you are working with.

 5.**Build, Run, Release:**
  It is important to run separately all the build and run stages making sure everything has the right libraries. 
  For this, you can make use of required automation and tools to generate build and release packages with proper tags.

 6.**Processes:**
  Store any data that is required to persist in a stateful backing service, such as databases.This factor is about making sure the app is executed in the execution environment as one or more processes. In other words, you want to make sure that all your data is stored in a backing store, which gives you the right to scale out anything and do what you need to do.

 7.**Port binding:**
  With the help of port binding, you can directly access your app via a port to know if it's your app or any other point in the stack that is not working properly.

 8.**Concurrency:**
  This factor deals with breaking your app into much smaller pieces and then look for services out there that you either have to write or can consume.
  In order to add more capacity, your app should be able to add more instances instead of more memory or CPU on the local machine.

 9.**Disposability:**
  Your app might have different multiple processes handling different tasks. So, the ninth factor looks into the robustness of the app with fast startup and shutdown methods.

 10.**Dev/prod parity:**
  Applications deployed to development and production should have parity. Essentially, there should be only the slightest difference between both deployments. A vast difference may lead to unintended compatibility issues between dev and production code.
  Some of the features of keeping the gap between development and production small are as follows:
  (1)Make the time gap small
  (2)Make the personnel gap small
  (3)Make the tools gap small

 11.**Logs:**
  Logging mechanisms are critical for debugging. Having proper logging mechanisms allows you to output the log info as a continuous stream rather than managing the entire database of log files. Then, depending on the configuration, you can decide where that log will publish.
 
 12.**Admin processes:**
  The final 12-factor app principle proposes separating administrative tasks from the rest of your application. These tasks might include migrating a database or inspecting records. Though the admin processes are separate, you must continue to run them in the same environment and against the base code and config of the app itself. Shipping the admin tasks code alongside the application prevents drift.
