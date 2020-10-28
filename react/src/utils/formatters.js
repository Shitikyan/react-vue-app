import { isDate } from "lodash";

export const checkValue = (value) => Boolean(value) ? value : 'N/A';
export const dateStr = (value) => isDate(value) ? new Date(value).toDateString() : 'N/A';
