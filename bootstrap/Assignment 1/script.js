let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

/*let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar'); */

window.onscroll = ()=>{
	searchBtn.classList.remove('fa-times');
	searchBar.classList.remove('active');
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
}

searchBtn.addEventListener('click',()=>{
	searchBtn.classList.toggle('fa-times');
	searchBar.classList.toggle('active');
});

/* menu.addEventListener('click',()=>{
	menu.classList.toggle('fa-times');
	menu.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
	loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
	loginForm.classList.remove('active');
}); */

<div class="container">
	<div class="heading">Music Gallery</div>
	<div class="music-container">
		<div class="box">
			<div class="image">
				<img src="image1.jpg" alt="1">
			</div>
			<div class="music">
				<audio src="music1.mp3" controls></audio>
			</div>
		</div>

		<div class="box">
			<div class="image">
				<img src="image2.jpg" alt="1">
			</div>
			<div class="music">
				<audio src="music2.mp3" controls></audio>
			</div>
		</div>

		<div class="box">
			<div class="image">
				<img src="image3.jpg" alt="1">
			</div>
			<div class="music">
				<audio src="music3.mp3" controls></audio>
			</div>
		</div>

		<div class="box">
			<div class="image">
				<img src="image4.jpg" alt="1">
			</div>
			<div class="music">
				<audio src="music4.mp3" controls></audio>
			</div>
		</div>

		<div class="box">
			<div class="image">
				<img src="image5.jpg" alt="1">
			</div>
			<div class="music">
				<audio src="music5.mp3" controls></audio>
			</div>
		</div>

		<div class="box">
			<div class="image">
				<img src="image6.jpg" alt="1">
			</div>
			<div class="music">
				<audio src="music6.mp3" controls></audio>
			</div>
		</div>
	</div>
</div>




