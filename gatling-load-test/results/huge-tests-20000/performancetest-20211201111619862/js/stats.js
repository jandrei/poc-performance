var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "18201",
        "ko": "1799"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "203",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "274"
    },
    "meanResponseTime": {
        "total": "206",
        "ok": "222",
        "ko": "37"
    },
    "standardDeviation": {
        "total": "56",
        "ok": "14",
        "ko": "32"
    },
    "percentiles1": {
        "total": "220",
        "ok": "220",
        "ko": "27"
    },
    "percentiles2": {
        "total": "224",
        "ok": "224",
        "ko": "46"
    },
    "percentiles3": {
        "total": "244",
        "ok": "247",
        "ko": "101"
    },
    "percentiles4": {
        "total": "285",
        "ok": "286",
        "ko": "163"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18201,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1799,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "165.289",
        "ok": "150.421",
        "ko": "14.868"
    }
},
contents: {
"req_reactive-with---01b6a": {
        type: "REQUEST",
        name: "REACTIVE WITH .block() call",
path: "REACTIVE WITH .block() call",
pathFormatted: "req_reactive-with---01b6a",
stats: {
    "name": "REACTIVE WITH .block() call",
    "numberOfRequests": {
        "total": "20000",
        "ok": "18201",
        "ko": "1799"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "203",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "274"
    },
    "meanResponseTime": {
        "total": "206",
        "ok": "222",
        "ko": "37"
    },
    "standardDeviation": {
        "total": "56",
        "ok": "14",
        "ko": "32"
    },
    "percentiles1": {
        "total": "220",
        "ok": "220",
        "ko": "27"
    },
    "percentiles2": {
        "total": "224",
        "ok": "224",
        "ko": "46"
    },
    "percentiles3": {
        "total": "244",
        "ok": "247",
        "ko": "101"
    },
    "percentiles4": {
        "total": "285",
        "ok": "286",
        "ko": "163"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18201,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1799,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "165.289",
        "ok": "150.421",
        "ko": "14.868"
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
