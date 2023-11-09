async function fetch_demo1(){
	const resp = await fetch('https://www.reddit.com/r/programming.json');

	console.log(await resp.json());
}

fetch_demo1();