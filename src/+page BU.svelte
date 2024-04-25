<script>
	let Namor = '';
	let categories = ['Animals', 'Sponsor', 'Game'];
	let SelectCategories = '';
	function start() {
		if (Namor != '') {
			location.href = `/play?category=${SelectCategories}&name=${Namor}`;
		} else {
			console.log('Bind name ');
		}
	}

	const SubmitSong = () => {
		navigate;
	};
</script>
<button 	>PlaySound</button>
<div class="container">
	<h1>Play</h1>
	<label for="category">เลือกหมวดหมู่</label>
	<select name="" id="category" bind:value={SelectCategories}>
		{#each categories as cat}
			<option value={cat}>{cat}</option>
		{/each}
	</select>
	<input type="text" bind:value={Namor} placeholder="โปรดระบุชื่อ" />
	<button on:click={start} class=" rounded-lg bg-green-700 p-3 text-white">เริ่มเล่น</button>
	<h2>Welcom {Namor}</h2>
</div>
