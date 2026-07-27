// Simple Console Logger for Frontend
export const log = {
  info: (msg: string, obj?: object) => console.log(msg, obj || ''),
  error: (msg: string, err?: Error | unknown, obj?: object) => console.error(msg, err || '', obj || ''),
  warn: (msg: string, obj?: object) => console.warn(msg, obj || ''),
  debug: (msg: string, obj?: object) => console.debug(msg, obj || ''),
}
