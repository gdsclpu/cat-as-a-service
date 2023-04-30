export const makeResponse = (data, meta_data = null, message = 'Success', error = false) => (Object.assign({ message,
    error,
    meta_data }, data));
