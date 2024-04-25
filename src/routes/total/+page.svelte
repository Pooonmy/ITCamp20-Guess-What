<script>
	import { onMount } from 'svelte';
	let allScore = '';
let category = '';
let Namor = '';
var ImgAns = [];
let imgReference;
let answer = '';
let helth = 3
onMount(() => {
	const Params = new URLSearchParams(window.location.search);
	category = Params.get('category');
	Namor = Params.get('name');
	allScore = Params.get('total');
});
</script>



<div class="w-full h-screen fixed flex items-center justify-center bg-gradient-to-r from-4E2196 to-F95CD7 font-Lilita-One">

<div
class="w-full h-screen fixed flex justify-between items-center bg-gradient-to-r from-4E2196 to-F95CD7 font-Lilita-One"
>
<div class="img-sec w-6/12 h-screen flex justify-center items-center">
<div class="title-game relative">
			<h1 class=" text-9xl font-bold text-white drop-shadow-lg animate-bounce " >
				Guess <br /> <span class="text-FCBC36">What</span>
				<h1 class="absolute top-0 left-[20rem] text-[20rem] rotate-12 text-FCBC36">?</h1>
			</h1>
		</div>
</div>

<div class="area w-6/12  flex flex-col items-center justify-center h-full ">
<div class="">
	   

	<div class="bg-[#ffffffa2] border-[0.25rem] border-red-400 w-[25rem] h-[20rem] rounded-[0.5rem] flex flex-col items-center justify-center p-10">
		<h1 class="text-7xl">score!!!</h1>
		<div  class="text-4xl rounded-full h-[5rem] w-[5rem] bg-473664 flex items-center justify-center text-white">{allScore}</div>
		<div  class="text-4xl">{Namor}</div>
		<div></div><button class="bg-[#DD5CBC] rounded-full p-3 w-6/12 text-2xl shadow-shBtn mt-2  shadow-[0_7px_0_0_rgba(61,26,51,0.19)] hover:bg-[#91427D] hover:shadow-[#fff]"><span href="/" class="text-white uppercase"><a href="/">Play again</a></button>
	</div>
	</div>
</div>

</div>

</div>

<h1>Total =  Name = </h1>