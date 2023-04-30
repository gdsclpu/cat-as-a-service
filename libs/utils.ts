export const makeResponse = (
	data: any,
	meta_data: any = null,
	message = 'Success',
	error = false
) => ({
	message,
	error,
	meta_data,
	...data,
});
