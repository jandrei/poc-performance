package reactor


import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import jodd.util.RandomString

import scala.concurrent.duration._
import scala.language.postfixOps

class PerformanceTest extends Simulation {

  //reactive/block/reactive-block
  val test = "block"

  var port = "8080";
  var uri = "/person"
  var title = "FULL REACTIVE"
  val requests = 71530
  val minutes = 1

  if (test == "block") {
    port = "8082"
    uri += "-block"
    title = "BLOCK"
  } else if (test == "reactive-block") {
    uri += "-block"
    title = "REACTIVE WITH .block() call"
  }

  val httpConf = http
    .baseUrl(s"http://192.168.0.108:${port}") // Here is the root for all relative URLs

  def randomAge() = util.Random.nextInt(98)

  def randomName() = RandomString.get().randomAlpha(5)

  val scn = scenario("CREATE PERSON")
    .exec(http(title)
      .post(uri)
      .header("Content-type", "application/json")
      .body(StringBody(
        session =>
          s"""
          {
           "name": "${randomName()}",
           "age": "${randomAge()}"
          }
          """))
    )

  // start with 10 users per second and ramp it up to 500 over 60 seconds

  setUp(scn.inject(
    rampUsers(requests).during(minutes.minutes)
  ).protocols(httpConf))

}
