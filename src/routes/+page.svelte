<script>
	let Namor = '';
	let categories = ['Animals', 'Sponsor', 'Game'];
	let SelectCategories = '';

	$: Choose = '';

	function handleClick(event) {
		const clickedId = event.target.id;
		console.log(clickedId);
		Choose = clickedId;
	}
	function start() {
		if ((Namor != '') & (Choose != '')) {
			status = 'Ready!';
			location.href = `/play?category=${Choose}&name=${Namor}`;
		} else {
			console.log('Bind name ');
		}
	}
	let randNum = Math.floor(Math.random() * categories.length);
	console.log(randNum);
	$: all = `/play?category=${categories[randNum]}&name=${Namor}`;
	function randomStart() {
		if (Namor != '') {
			location.href = all;
		} else {
			console.log('Bind name ');
		}
	}
</script>

<div
	class="fixed flex h-screen w-full items-center justify-between bg-gradient-to-r from-4E2196 to-F95CD7 font-Lilita-One"
>
	<div class="img-sec w-6/12">
		<img class="relative left-[5rem] w-[500rem]" src="star.png" alt="" />
	</div>

	<div class="area relative left-[-5rem] flex h-full w-6/12 flex-col items-center justify-center">
		<div class="">
			<div class="title-game relative">
				<h1 class=" animate-bounce text-9xl font-bold text-white drop-shadow-lg">
					Guess <br /> <span class="text-FCBC36">What</span>
					<h1 class="absolute right-[15rem] top-0 rotate-12 text-[20rem] text-FCBC36">?</h1>
				</h1>
				<input
					type="text"
					name=""
					id=""
					bind:value={Namor}
					class="h-30 mt-[3rem] w-[25rem] rounded-[0.75rem] border-2 p-2 text-3xl drop-shadow-2xl focus:border-4E2196 focus:outline-none"
					placeholder="Enter your name"
				/>
			</div>

			<div class="categories mt-2 flex gap-5">
				<button on:click={handleClick}>
					<div
						id="Animals"
						class={`cate-item mt-2 flex h-[15rem] w-[15rem] cursor-pointer flex-col  items-center justify-center rounded-[1rem] bg-white shadow-[5px_5px_2px_0_rgba(0,0,0,0.6)] hover:bg-gray-300 active:bg-green-300 ${Choose === "Animals" ? "border-4 border-green-500" : ""}`}
					>
						<h1 class="text-xl">animal</h1>
						<img class="w-7/12" id="Animals" src="emoji _tiger face_.png" alt="" />
					</div>
				</button>
				<button on:click={handleClick}>
					<div
						id="Game"
						class={`cate-item mt-2 flex h-[15rem] w-[15rem] cursor-pointer flex-col  items-center justify-center rounded-[1rem] bg-white shadow-[5px_5px_2px_0_rgba(0,0,0,0.6)] hover:bg-gray-300 active:bg-green-300 ${Choose === "Game" ? "border-4 border-green-500" : ""}`}
					>
						<h1 class="text-xl">game</h1>
						<img class="w-7/12" id="Game" src="emoji _video game_.png" alt="" />
					</div>
				</button>
				<button on:click={handleClick}>
					<div
						id="Sponsor"
						class={`cate-item mt-2 flex h-[15rem] w-[15rem] cursor-pointer flex-col  items-center justify-center rounded-[1rem] bg-white shadow-[5px_5px_2px_0_rgba(0,0,0,0.6)] hover:bg-gray-300 active:bg-green-300 ${Choose === "Sponsor" ? "border-4 border-green-500" : ""}`}
					>
						<h1 class="text-xl">sponsor</h1>
						<img class="w-7/12" id="Sponsor" src="emoji _Handshake emoji_.png" alt="" />
					</div>
				</button>
			</div>
			<h1 class="mt-3 text-xl text-white">Gamemode: <a class=" text-green-400">{Choose}</a></h1>
			<div id="animal" class="group-btn mt-3 flex w-full items-end justify-between">
				<button
					on:click={randomStart}
					class="h-[4rem] w-4/12 rounded-full bg-yelloBtn p-3 text-2xl shadow-[0_10px_0_0_rgba(205,145,22)] hover:bg-AB7C1C hover:shadow-[0_10px_0_0_rgba(120,87,20)]"
					><span class="text-white">Random</span></button
				>
				<button
					on:click={start}
					class="shadow-shBtn h-[5rem] w-6/12 rounded-full bg-473664 p-3 text-2xl shadow-[0_7px_0_0_rgba(61,26,51,0.19)] hover:bg-5200FF hover:shadow-[#fff]"
					><span class="text-white">Start</span></button
				>
			</div>
		</div>
	</div>
</div>

<!-- <style>
button:hover{
    box-shadow: 0px 12px 0 0 rgb(171, 124, 28);
}
</style> -->
