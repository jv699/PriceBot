async function fetch_demo1(){
	const resp = await fetch('https://store.steampowered.com/sale/steamdeckrefurbished');

	console.log(await resp);
	console.log(await resp.json.toString());

	// const reader = resp.body.getReader({ mode: "byob" });
}

fetch_demo1();