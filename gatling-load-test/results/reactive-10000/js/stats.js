var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1692",
        "ok": "1692",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles1": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles2": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "percentiles3": {
        "total": "693",
        "ok": "693",
        "ko": "-"
    },
    "percentiles4": {
        "total": "868",
        "ok": "868",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9830,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 166,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.223",
        "ok": "33.223",
        "ko": "-"
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1692",
        "ok": "1692",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles1": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles2": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "percentiles3": {
        "total": "693",
        "ok": "693",
        "ko": "-"
    },
    "percentiles4": {
        "total": "868",
        "ok": "868",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9830,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 166,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.223",
        "ok": "33.223",
        "ko": "-"
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
