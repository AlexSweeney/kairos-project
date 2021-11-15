/* 
	return mock data when called

*/
const correctUserName = "correct-username";
const correctPassword = "correct-password";

const responseData = { 
	targetUsername: correctUserName,
	targetPassword: correctPassword,
};

const errorData = {
	targetUsername: 'loading-error',
	targetPassword: 'loading-error',
};

export default async function getData(isError) {
	if(isError) return errorData;
	return responseData;
}