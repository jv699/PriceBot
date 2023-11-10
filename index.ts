async function fetch_demo1(){
	const resp = await fetch('http://localhost:5000/companies');

	console.log(await resp.json());
}

fetch_demo1();
