var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19919",
        "ko": "81"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "203",
        "ko": "12"
    },
    "maxResponseTime": {
        "total": "1739",
        "ok": "1739",
        "ko": "245"
    },
    "meanResponseTime": {
        "total": "246",
        "ok": "247",
        "ko": "73"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "119",
        "ko": "56"
    },
    "percentiles1": {
        "total": "221",
        "ok": "221",
        "ko": "61"
    },
    "percentiles2": {
        "total": "227",
        "ok": "227",
        "ko": "82"
    },
    "percentiles3": {
        "total": "337",
        "ok": "337",
        "ko": "194"
    },
    "percentiles4": {
        "total": "958",
        "ok": "960",
        "ko": "236"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19629,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 227,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 63,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 81,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "165.289",
        "ok": "164.62",
        "ko": "0.669"
    }
},
contents: {
"req_full-reactive-b85b1": {
        type: "REQUEST",
        name: "FULL REACTIVE",
path: "FULL REACTIVE",
pathFormatted: "req_full-reactive-b85b1",
stats: {
    "name": "FULL REACTIVE",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19919",
        "ko": "81"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "203",
        "ko": "12"
    },
    "maxResponseTime": {
        "total": "1739",
        "ok": "1739",
        "ko": "245"
    },
    "meanResponseTime": {
        "total": "246",
        "ok": "247",
        "ko": "73"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "119",
        "ko": "56"
    },
    "percentiles1": {
        "total": "221",
        "ok": "221",
        "ko": "61"
    },
    "percentiles2": {
        "total": "227",
        "ok": "227",
        "ko": "82"
    },
    "percentiles3": {
        "total": "337",
        "ok": "337",
        "ko": "194"
    },
    "percentiles4": {
        "total": "958",
        "ok": "960",
        "ko": "236"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19629,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 227,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 63,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 81,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "165.289",
        "ok": "164.62",
        "ko": "0.669"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
