var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19898",
        "ko": "102"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "203",
        "ko": "15"
    },
    "maxResponseTime": {
        "total": "3016",
        "ok": "3016",
        "ko": "1799"
    },
    "meanResponseTime": {
        "total": "270",
        "ok": "270",
        "ko": "136"
    },
    "standardDeviation": {
        "total": "251",
        "ok": "250",
        "ko": "311"
    },
    "percentiles1": {
        "total": "220",
        "ok": "220",
        "ko": "52"
    },
    "percentiles2": {
        "total": "225",
        "ok": "225",
        "ko": "94"
    },
    "percentiles3": {
        "total": "397",
        "ok": "397",
        "ko": "300"
    },
    "percentiles4": {
        "total": "1836",
        "ok": "1839",
        "ko": "1783"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19397,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 136,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 365,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 102,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "165.289",
        "ok": "164.446",
        "ko": "0.843"
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
        "total": "20000",
        "ok": "19898",
        "ko": "102"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "203",
        "ko": "15"
    },
    "maxResponseTime": {
        "total": "3016",
        "ok": "3016",
        "ko": "1799"
    },
    "meanResponseTime": {
        "total": "270",
        "ok": "270",
        "ko": "136"
    },
    "standardDeviation": {
        "total": "251",
        "ok": "250",
        "ko": "311"
    },
    "percentiles1": {
        "total": "220",
        "ok": "220",
        "ko": "52"
    },
    "percentiles2": {
        "total": "225",
        "ok": "225",
        "ko": "94"
    },
    "percentiles3": {
        "total": "397",
        "ok": "397",
        "ko": "300"
    },
    "percentiles4": {
        "total": "1836",
        "ok": "1839",
        "ko": "1783"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19397,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 136,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 365,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 102,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "165.289",
        "ok": "164.446",
        "ko": "0.843"
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
