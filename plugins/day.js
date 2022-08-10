import dayjs from "dayjs";
var buddhistEra = require("dayjs/plugin/buddhistEra");
var updateLocale = require("dayjs/plugin/updateLocale");
dayjs.extend(buddhistEra);
dayjs.extend(updateLocale);
dayjs.updateLocale("th", {
    months: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
    ],
    monthsShort: [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
    ],
});
import(`dayjs/locale/th`);
var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
var duration = require('dayjs/plugin/duration')
dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(duration)

export default ({ app }, inject) => {
    inject("day", {
        validDomain: (domain) => {
            var re = new RegExp(
                /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})(\/[a-z0-9-+\/]+)?/
            );
            return domain.match(re);
        },
        validateEmail: (email) => {
            const re =
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        digit: (num, size) => {
            var s = String(num);
            while (s.length < (size || 2)) {
                s = "0" + s;
            }
            return s;
        },
        getHour: (date) => {
            return dayjs(date).get("h");
        },
        getMinute: (date) => {
            return dayjs(date).get("m");
        },
        getSecond: (date) => {
            return dayjs(date).get("s");
        },
        getFormat: (date) => {
            return dayjs(date).format();
        },
        getDate: (date) => {
            return dayjs(date).locale("th").format("DD MMM BBBB");
        },
        getDateMouth: (date) => {
            return dayjs(date).locale("th").format("DD MMMM");
        },
        getTime: (date) => {
            return dayjs(date).format("HH:mm:ss");
        },
        getTimeMinute: (date) => {
            return dayjs(date).format("HH:mm");
        },
        getDateTime: (date) => {
            return dayjs(date).format("DD/MM/BBBB, HH:mm");
        },
        formatInputDate: (date) => {
            return dayjs(date).format("YYYY-MM-DD");
        },
        diffDate: (date1, date2) => {
            let d1 = dayjs(date1);
            let d2 = dayjs(date2);

            return d1.diff(d2, "day");
        },
        diffMinute: (date1, date2) => {
            let d1 = dayjs(date1);
            let d2 = dayjs(date2);

            return d1.diff(d2, "minute");
        },
        diffYear: (date1, date2) => {
            let d1 = dayjs(date1);
            let d2 = dayjs(date2);

            return d1.diff(d2, "year");
        },
        addDate: (date, num) => {
            let now = new Date();
            return dayjs(date)
                .set("date", dayjs(now).get("date") + parseInt(num))
                .format("DD MMM YYYY");
        },
        getFormatZ: (date) => {
            return dayjs(date).utc().format();
        },
        getFormatPrice(number) {
            var formatter = new Intl.NumberFormat("en-US", {
                maximumSignificantDigits: 3,
            });

            return formatter.format(number);
        },
        getTimeToTime: (d1, d2) => {
            let day1 = dayjs(d1);

            let total = dayjs(d2).diff(day1, "minute");

            let minutes = total % 60;
            let hours = Math.floor(total / 60);

            let result = `${hours > 0 ? `${hours} ชั่วโมง` : ""} ${minutes > 0 ? `${minutes} นาที` : ""
                }`;

            return result;
        },
        getDateTimeToNow: (d1) => {
            let now = new Date()

            let day1 = dayjs(d1)

            var d = dayjs.duration(day1.diff(now)).days()
            var h = dayjs.duration(day1.diff(now)).hours()
            var m = dayjs.duration(day1.diff(now)).minutes()
            let result = m > 0 ? `${d} วัน ${h} ชั่วโมง ${m} นาที` : 'เกินกำหนด'

            return result
        },
        getDatetoNow: (d) => {
            let now = new Date()
            let day = new Date(d)
            let result = Math.round(Math.abs(day - now) / (1000 * 60 * 60 * 24))
            return result
        }
    });
};
