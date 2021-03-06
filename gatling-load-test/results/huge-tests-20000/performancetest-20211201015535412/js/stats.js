var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "7392",
        "ko": "2608"
    },
    "minResponseTime": {
        "total": "401",
        "ok": "401",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60070",
        "ok": "59999",
        "ko": "60070"
    },
    "meanResponseTime": {
        "total": "38125",
        "ok": "30404",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "19681",
        "ok": "17187",
        "ko": "5"
    },
    "percentiles1": {
        "total": "40894",
        "ok": "30526",
        "ko": "60010"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "45331",
        "ko": "60013"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "57171",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "59366",
        "ko": "60018"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 60,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 51,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7281,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 2608,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "55.556",
        "ok": "41.067",
        "ko": "14.489"
    }
},
contents: {
"req_block-4d34f": {
        type: "REQUEST",
        name: "BLOCK",
path: "BLOCK",
pathFormatted: "req_block-4d34f",
stats: {
    "name": "BLOCK",
    "numberOfRequests": {
        "total": "10000",
        "ok": "7392",
        "ko": "2608"
    },
    "minResponseTime": {
        "total": "401",
        "ok": "401",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60070",
        "ok": "59999",
        "ko": "60070"
    },
    "meanResponseTime": {
        "total": "38125",
        "ok": "30404",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "19681",
        "ok": "17187",
        "ko": "5"
    },
    "percentiles1": {
        "total": "40891",
        "ok": "30542",
        "ko": "60010"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "45330",
        "ko": "60013"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "57171",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "59366",
        "ko": "60018"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 60,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 51,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7281,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 2608,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "55.556",
        "ok": "41.067",
        "ko": "14.489"
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
