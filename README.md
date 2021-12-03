# poc-performance

It has three performance tests here 
I want to make sure that only using reactive way is the beast and the better way with java and spring boot to build rest apis.

webflux-poc has two ways for use of Webflux, fully reactive and reactive with webclient caling .block() operation.
webflux-poc-block where there is no reactive library, only the old way of java application.
validation-api-poc is the api where we have an Thread.sleep to simulate some processing and to hold a little the request.

Also in this repository there is a sample of performance script using gatling and Jmeter.
FYI: The gatling script show to us the results in na better and pretty way then jmeter.
