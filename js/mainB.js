document.getElementById('membutton').addEventListener('click', function() {
	document.querySelector('#join').style.display = 'flex';

});

document.querySelector('#cb0').addEventListener('click', function() {
	document.querySelector('#join').style.display = 'none';
});

document.getElementById('donthave').addEventListener('click', function() {
	document.querySelector('#signup_input').style.display = 'block';
	document.querySelector('#signin_input').style.display = 'none';
	document.querySelector('#donthave').style.backgroundColor = 'steelblue';
	document.querySelector('#donthave').style.color = 'white';
	document.querySelector('#have').style.backgroundColor = 'whitesmoke';
	document.querySelector('#have').style.color = 'black';
});

document.getElementById('have').addEventListener('click', function() {
	document.querySelector('#signup_input').style.display = 'none';
	document.querySelector('#signin_input').style.display = 'block';
	document.querySelector('#donthave').style.backgroundColor = 'whitesmoke';
	document.querySelector('#donthave').style.color = 'black';
	document.querySelector('#have').style.backgroundColor = 'steelblue';
	document.querySelector('#have').style.color = 'white';

});