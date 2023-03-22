# date-holidays-workspace
This repo is up to show the workspace folder structure which allows the [date-holidays library by commenthol](https://github.com/commenthol/date-holidays) to remove dependency on the (now deprecated) moment library and instead use date-fns-tz. This reduces the library to under half the size. 

Within the workspace folders, place within the respective folder names:
- The original commenthol date-holidays from https://github.com/commenthol/date-holidays but replace the package.json with the version in this repo
- the mcshaz fork of Date-holidays-parser from https://github.com/mcshaz/date-holidays-parser/tree/named-caldate-imports
- the mcshaz fork of Caldate from https://github.com/mcshaz/caldate/tree/named-exports

You shouldd then be able to navigate to the parent workspace folder (the top of this repo) and use [pnpm -r](https://pnpm.io/cli/recursive) with 'test', 'build' or 'all'

If any tests fail, check you have a recent minor version of Node installed - Fiji has altered their daylight savings rules with little warning and an update might be required to ensure international timezone rules contain the latest info.
