import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime); // extend dayjs with LocalizedFormat plugin

const timeParser = (time) => {
  const parseTime = dayjs.unix(time).fromNow();
  return parseTime;
};

export default timeParser;
