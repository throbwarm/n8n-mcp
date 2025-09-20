window.BENCHMARK_DATA = {
  "lastUpdate": 1758406877987,
  "repoUrl": "https://github.com/throbwarm/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5aebc14504ecb60a8f9dbfc36f5e6e33d0b8e95",
          "message": "Merge pull request #212 from czlonkowski/fix/multi-tenant-header-extraction\n\nFix: Multi-tenant support with dynamic tool registration",
          "timestamp": "2025-09-20T08:51:09+02:00",
          "tree_id": "d5e52298a531a73e100b6933ff4944d24245611a",
          "url": "https://github.com/throbwarm/n8n-mcp/commit/c5aebc14504ecb60a8f9dbfc36f5e6e33d0b8e95"
        },
        "date": 1758406877282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0195,
            "range": "0.5408999999999999",
            "unit": "ms",
            "extra": "51353 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2724,
            "range": "0.7304000000000004",
            "unit": "ms",
            "extra": "306 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0053,
            "range": "0.4486",
            "unit": "ms",
            "extra": "188261 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0697,
            "range": "0.5125",
            "unit": "ms",
            "extra": "14356 ops/sec"
          }
        ]
      }
    ]
  }
}