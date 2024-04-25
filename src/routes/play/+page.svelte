<script>
	import { onMount } from 'svelte';

	let allScore = 0
	let category = '';
	let Namor = '';
	var ImgAns = [];
	let imgReference;
	let answer = '';
	let helth = 3
	let play = 0
	onMount(() => {
		const Params = new URLSearchParams(window.location.search);
		category = Params.get('category');
		Namor = Params.get('name');
	});

	$: if (ImgAns.length) randomImg();
	$: if (category == 'Animals') {
		ImgAns = [
			{
				img: 'capybara.jpg',
				ans: 'capybara'
			},
			{
				img: 'tuahere.png',
				ans: 'komodo dragon'
			},
			{
				img: 'chickdog.png',
				ans: 'dog'
			},
			{
				img: 'dogfriedchicken.png',
				ans: 'dog'
			},
			{
				img: 'mrfresh.jpg',
				ans: 'cat'
			},
			{
				img: 'blahaj.png',
				ans: 'shark'
			},
			{
				img: 'butterelephant.jpg',
				ans: 'elephant'
			},
			{
				img: 'kmitlduck.png',
				ans: 'duck'
			},
			{
				img: 'redpanda.png',
				ans: 'red panda'
			}
		];
		ImgAns = ImgAns;
		console.log('Case1');
	} else if (category == 'Sponsor') {
		ImgAns = [
			{
				img: 'advice.jpg',
				ans: 'advice'
			},
			{
				img: 'borntodev.png',
				ans: 'borntodev'
			},
			{
				img: 'it.png',
				ans: 'it kmitl'
			},
			{
				img: 'kmitl.png',
				ans: 'kmitl'
			},
			{
				img: 'lactasoy.jpg',
				ans: 'lactasoy'
			},
			{
				img: 'swf.jpg',
				ans: 'swf'
			},
			{
				img: 'usefulfood.jpeg',
				ans: 'usefulfood'
			}
		];
		ImgAns = ImgAns;
		console.log('Case2');
	} else if (category == 'Game') {
		ImgAns = [
			{
				img: 'amongus.jpg',
				ans: 'among us'
			},
			{
				img: 'genshin.jpg',
				ans: 'genshin'
			},
			{
				img: 'gtav.jpg',
				ans: 'gta'
			},
			{
				img: 'hayday.png',
				ans: 'hay day'
			},
			{
				img: 'mariokart.jpg',
				ans: 'mario kart'
			},
			{
				img: 'minecraft.jpg',
				ans: 'minecraft'
			},
			{
				img: 'pubg.png',
				ans: 'pubg'
			},
			{
				img: 'roblox.jpg',
				ans: 'roblox'
			},
			{
				img: 'rov.jpg',
				ans: 'rov'
			},
			{
				img: 'valorant.jpg',
				ans: 'valorant'
			}
		];
		ImgAns = ImgAns;
		console.log('Case3');
	}
	$: Userans = '';
	let blocks = Array(...Array(20)).fill('quest.jpg');

	const resetBlocks = () => blocks = Array(...Array(20)).fill('quest.jpg');

	let isBlocksEmpty = false;
	function countNonEmpty(blocks) {
		return blocks.filter(Boolean).length;
	}
	let Start = 0;
	$: Score = Start + countNonEmpty(blocks) * 5;
	const randomDelete = () => {
		if (isBlocksEmpty) return;

		const chosenBlockIndex = Math.floor(Math.random() * blocks.length);
		const chosenBlock = blocks[chosenBlockIndex];

		if (!chosenBlock) randomDelete();
		// console.log('Score', Score);
		blocks = blocks.map((block, index) => {
			if (index == chosenBlockIndex) return null;
			return block;
		});
	};

	$: console.log(blocks);
	$: if (blocks.every((block) => block === null)) {
		isBlocksEmpty = true;
		document.getElementById('Answ').style.position = 'relative';
	}
	const randomImg = () => {
		console.log(ImgAns)
		let chooseImg = Math.floor(Math.random() * ImgAns.length);
		imgReference.src = ImgAns[String(chooseImg)].img;
		answer = ImgAns[String(chooseImg)].ans;
		ImgAns.splice(chooseImg, 1)
	};
	const sKip = () => {
		randomImg();
		resetBlocks()
		helth -= 1;
		if (helth <= 0){
				location.href = `/total?name=${Namor}&total=${allScore}`;
				document.getElementById('sumBut').disabled = true
				console.log("Lose")
			}
	}
	const checkans = () => {
		
		
		if (Userans.toLocaleLowerCase() == answer) {
			console.log('ถูกต้อง');
			randomImg();
			allScore += Score
			resetBlocks()
			isBlocksEmpty = false
			play += 1
			console.log('play',play)
			
			
		} else {
			console.log('ผิด');
			helth -= 1;
			if (helth <= 0){
				location.href = `/total?name=${Namor}&total=${allScore}`;
				document.getElementById('sumBut').disabled = true
				console.log("Lose")
			}
		}
		Userans = '';
	};
</script>
<div
	class="w-full h-screen fixed flex justify-between items-center bg-gradient-to-r from-F95CD7 to-4E2196 font-Lilita-One"
>
	<div class="w-6/12">
		<!-- game -->
		<div class="flex flex-col h-screen items-center justify-center">
			<div
				class="flex flex-col bg-[#fff] p-5 shadow-[20px_-25px_5px_0_rgba(255,141,230,0.29)] rounded-[0.5rem]"
			>
				<div class="card flex-row-3 m-auto flex flex-col">
					<div class=" relative">
						<img
							bind:this={imgReference}
							src={"https://placehold.co/600x400"}
							id="Answ"
							class="absolute inset-0 w-full h-full rounded-lg border-2"
							alt=""
							srcset=""
						/>
						<div
							id="parent"
							class="puzzle-block-parent relative grid grid-cols-5 grid-rows-4 object-center"
						>
							{#each blocks as block, index}
								{#if !block}
									<div class=""></div>
								{:else}
									<div class="puzzle-block">
										<img
											src={block}
											id={`im${index}`}
											class=" h-[150px] w-[150px]"
											alt=""
										/>
									</div>
								{/if}
							{/each}
						</div>
					</div>
				</div>

				<!-- <text>คำตอบ</text>
			
			<input
				type="text"
				class="border-solid border-blue-200 p-3"
				bind:value={Userans}
				placeholder="คำตอบ"
				name=""
				id=""
			/> -->
				<!-- <button on:click={checkans} id="sumBut" class=" rounded-lg bg-red-500 p-2 disabled:opacity-60 text-white">ส่งคำตอบ </button>
			<button on:click={sKip} id="sumBut" class=" rounded-lg bg-red-500 p-2 disabled:opacity-60 text-white">Skip </button>
		 -->
			</div>
			<button
				on:click={randomDelete}
				class="bg-yelloBtn rounded-full p-3 mt-5 w-2/12 text-2xl h-[4rem] shadow-[0_10px_0_0_rgba(205,145,22)] hover:bg-AB7C1C hover:shadow-[0_10px_0_0_rgba(120,87,20)]"
				disabled={isBlocksEmpty}
				id="Rand"
				>open
			</button>
		</div>
	</div>

	<div class="act w-6/12 h-screen flex flex-col">
		<!-- menu -->

		<div class="menu-data flex ">
			<div class="Show-Attemp w-[20rem] h-[20rem] flex flex-col gap-2 items-center justify-center ">
				<h1 class="text-3xl text-white">Attempts Remain</h1>
				<div class="mt-5 relative w-[12rem] h-[12rem] rounded-full bg-[#0000008e] flex items-center  border-[10px] overflow-hidden before:contant-[''] before:inset-0 before:translate-y-[-4%]  before:translate-x-[-4%]  before:bg-gradient-to-r from-F1CA6D to-DC58BF before:absolute before:rounded-full"><div class="absolute text-5xl text-white left-[32%]">{countNonEmpty(blocks)}</div></div>
			</div>

			<div class="Show-Attemp w-[20rem] h-[20rem] flex flex-col  gap-2 items-center justify-center">
				<h1 class="text-4xl text-white">Score</h1>
				<div class="mt-5 relative w-[10rem] h-[10rem] rounded-full bg-[#0000008e] flex items-center  border-[10px] overflow-hidden before:contant-[''] before:inset-0 before:translate-y-[-4%]  before:translate-x-[-4%]  before:bg-gradient-to-r from-F1CA6D to-DC58BF before:absolute before:rounded-full"><div class="absolute text-5xl text-white left-[30%]">{Score}</div></div>
			</div>
	

			<div class="Show-Attemp w-[20rem] h-[20rem] flex flex-col  gap-2 items-center justify-center">
				<h1 class="text-4xl text-white mt-2">Total Score</h1>
				<div class="mt-4 relative w-[8.5rem] h-[8.5rem] rounded-full bg-[#0000008e] flex items-center  border-[10px] overflow-hidden before:contant-[''] before:inset-0 before:translate-y-[-4%]  before:translate-x-[-4%]  before:bg-gradient-to-r from-F1CA6D to-DC58BF before:absolute before:rounded-full">
					<div class="absolute text-5xl text-white left-[35%]">{allScore}</div>
				</div>
			</div>

			<div class="Show-Attemp w-[20rem] h-[20rem] flex flex-col  gap-2 items-center justify-center">
				<h1 class="text-4xl text-white mt-2">Health</h1>
				<div class="mt-4 relative w-[7rem] h-[7rem] rounded-full bg-[#0000008e] flex items-center  border-[10px] overflow-hidden before:contant-[''] before:inset-0 before:translate-y-[-4%]  before:translate-x-[-4%]  before:bg-gradient-to-r from-F1CA6D to-DC58BF before:absolute before:rounded-full">
					<div class="absolute text-5xl text-white left-[35%]">{helth}</div>
				</div>
			</div>
		</div>

		<!-- <div class="menu-answer flex items-center justify-center  gap-2">
			
			

				
		</div> -->

		<div class="flex flex-col  justify-center">
			<p class=" ml-5 text-xl text-white">{Namor}</p>
			<div class="flex justify-around items-center">
<input

bind:value={Userans}

                    type="text"
                    class="border-2 w-[45rem] h-30 rounded-[0.5rem] drop-shadow-2xl p-2 text-3xl  focus:outline-none focus:border-4E2196"
                    placeholder="Enter your name"
                /><button on:click={checkans} id="sumBut" class="bg-[#DD5CBC] disabled:opacity-60 rounded-full p-3 w-2/12 text-2xl shadow-shBtn h-[rem] shadow-[0_7px_0_0_rgba(61,26,51,0.19)] hover:bg-[#91427D] hover:shadow-[#fff]"><span class="text-white uppercase">Submit</span></button>


				
			</div>

		</div>

		<div class="flex items-end justify-end mt-5 mr-5">
			<button on:click={sKip} id="sumBut" class="bg-[#1C62CC] rounded-full disabled:opacity-60 p-3 w-2/12 text-2xl shadow-shBtn h-[rem] shadow-[0_7px_0_0_rgba(61,26,51,0.19)] hover:bg-[#0F356E] hover:shadow-[#fff]"><span class="text-white uppercase">skip</span></button>

		</div>
	</div>
</div>

<!-- <div>
	<div class="container flex h-screen items-center justify-center">
		<div class="flex flex-col">
			<h1>Point {Score} Welcome {Namor} Attemp {countNonEmpty(blocks)} Helth {helth}</h1>
			<p>Total point : {allScore}</p>
			<div class="card flex-row-3 m-auto flex flex-col">
				<div class=" relative">
					<img
						bind:this={imgReference}
						src={'https://placehold.co/600x400'}
						id="Answ"
						class="absolute inset-0 w-full h-full rounded-lg border-2"
						alt=""
						srcset=""
					/>
					<div id="parent" class="puzzle-block-parent relative grid grid-cols-5 grid-rows-4 object-center">
						{#each blocks as block, index}
							{#if !block}
								<div class=""></div>
							{:else}
								<div class="puzzle-block">
									<img src={block} id={`im${index}`} class=" h-[150px] w-[150px]" alt="" />
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
			<button
				on:click={randomDelete}
				class=" relative mt-8 rounded-lg bg-rose-700 p-1 text-white disabled:opacity-60"
				disabled={isBlocksEmpty}
				id="Rand"
				>สุ่ม
			</button>
			<text>คำตอบ</text>
			<input
				type="text"
				class="border-solid border-blue-200 p-3"
				bind:value={Userans}
				placeholder="คำตอบ"
				name=""
				id=""
			/>
			<button on:click={checkans} id="sumBut" class=" rounded-lg bg-red-500 p-2 disabled:opacity-60 text-white">ส่งคำตอบ </button>
			<button on:click={sKip} id="sumBut" class=" rounded-lg bg-red-500 p-2 disabled:opacity-60 text-white">Skip </button>
		</div>
	</div>
</div> -->
