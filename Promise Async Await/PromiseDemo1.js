const success = true;

function getUSers() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (success) {
				resolve([
					{ user: "XXX", email: "XXX@gmail.com" },
					{ user: "ZZZ", email: "ZZZ@gmail.com" },
				]);
			} else {
				reject("Failed To get Data !!!");
			}
		}, 2000);
	});
}

function renderDefaultMessage() {
	console.log("Hello ! I am Default Message !!!");
}

getUSers()
	.then((users) => {
		console.log(users);
	})
	.catch((error) => {
		console.error(error);
	})
	.finally(() => {
		renderDefaultMessage();
	});
