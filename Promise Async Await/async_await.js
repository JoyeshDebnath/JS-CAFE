function getUser(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				userId,
				userName: "Joyesh",
			});
		}, 1000);
	});
}

function getServices(user) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Get the Services of ${user.userName} from the API ..`);
			resolve(["VPN", "Computation", "Accountancy"]);
		}, 2 * 1000);
	});
}

function getServiceCost(services) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(services.length * 100);
		}, 3 * 1000);
	});
}

getUser(1000)
	.then(getServices)
	.then(getServiceCost)
	.then(() => {
		console.log("finished Execuation ...");
	});

//modification using async await
async function displayServiceCost() {
	let user = await getUser();
	let services = await getServices(user);
	let serviceCost = await getServiceCost(services);

	console.log(`The Service Cost came out to be ${serviceCost}`);
}

displayServiceCost();
