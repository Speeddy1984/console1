#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const dayjs = require("dayjs");

yargs(hideBin(process.argv))
    .command(
        "current",
        "Получить текущую дату и время",
        (yargs) => {
            return yargs
                .option("year", {
                    alias: "y",
                    type: "boolean",
                    description: "Текущий год",
                })
                .option("month", {
                    alias: "m",
                    type: "boolean",
                    description: "Текущий месяц",
                })
                .option("date", {
                    alias: "d",
                    type: "boolean",
                    description: "Дата в текущем месяце",
                });
        },
        (argv) => {
            const now = dayjs();

            if (argv.year) {
                console.log(now.year());
            } else if (argv.month) {
                console.log(now.month() + 1);
            } else if (argv.date) {
                console.log(now.date());
            } else {
                console.log(now.toISOString());
            }
        }
    )
    .command(
        "add",
        "Добавить время к текущей дате",
        (yargs) => {
            return yargs
                .option("year", {
                    alias: "y",
                    type: "number",
                    description: "Добавить количество лет",
                })
                .option("month", {
                    alias: "m",
                    type: "number",
                    description: "Добавить количество месяцев",
                })
                .option("date", {
                    alias: "d",
                    type: "number",
                    description: "Добавить количество дней",
                });
        },
        (argv) => {
            let result = dayjs();

            if (argv.year) {
                result = result.add(argv.year, "year");
            }
            if (argv.month) {
                result = result.add(argv.month, "month");
            }
            if (argv.date) {
                result = result.add(argv.date, "day");
            }

            console.log(result.toISOString());
        }
    )
    .command(
        "sub",
        "Вычесть время из текущей даты",
        (yargs) => {
            return yargs
                .option("year", {
                    alias: "y",
                    type: "number",
                    description: "Вычесть количество лет",
                })
                .option("month", {
                    alias: "m",
                    type: "number",
                    description: "Вычесть количество месяцев",
                })
                .option("date", {
                    alias: "d",
                    type: "number",
                    description: "Вычесть количество дней",
                });
        },
        (argv) => {
            let result = dayjs();

            if (argv.year) {
                result = result.subtract(argv.year, "year");
            }
            if (argv.month) {
                result = result.subtract(argv.month, "month");
            }
            if (argv.date) {
                result = result.subtract(argv.date, "day");
            }

            console.log(result.toISOString());
        }
    )
    .argv;