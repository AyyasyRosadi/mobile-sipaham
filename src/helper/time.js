import moment from "moment-timezone";
import "moment/locale/id"

export function timeAsiaMakassar(date) {
  return moment(date).tz("Asia/Makassar").format("DD MMMM YYYY (hh:mm:ss)");
}
