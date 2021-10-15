document.getElementById('seu').addEventListener('click', function() {
	document.querySelector('#seuinfo').style.display = 'block';
});

document.getElementById('seu1').addEventListener('click', function() {
	document.querySelector('#seuinfo').style.display = 'block';
});

document.getElementById('seu2').addEventListener('click', function() {
	document.querySelector('#seuinfo').style.display = 'block';
});


document.querySelector('#cb1').addEventListener('click', function() {
	document.querySelector('#seuinfo').style.display = 'none';
});

document.getElementById('weu').addEventListener('click', function() {
	document.querySelector('#wesinfo').style.display = 'block';

});

document.querySelector('#cb2').addEventListener('click', function() {
	document.querySelector('#wesinfo').style.display = 'none';
});

document.getElementById('ceu').addEventListener('click', function() {
	document.querySelector('#ceninfo').style.display = 'block';

});

document.querySelector('#cb3').addEventListener('click', function() {
	document.querySelector('#ceninfo').style.display = 'none';
});


document.getElementById('eeu').addEventListener('click', function() {
	document.querySelector('#eeuinfo').style.display = 'block';

});

document.querySelector('#cb4').addEventListener('click', function() {
	document.querySelector('#eeuinfo').style.display = 'none';
});

document.getElementById('nrc').addEventListener('click', function() {
	document.querySelector('#norinfo').style.display = 'block';

});

document.querySelector('#cb5').addEventListener('click', function() {
	document.querySelector('#norinfo').style.display = 'none';
});

document.getElementById('balk').addEventListener('click', function() {
	document.querySelector('#balinfo').style.display = 'block';

});

document.querySelector('#cb6').addEventListener('click', function() {
	document.querySelector('#balinfo').style.display = 'none';
});

document.getElementById('asm').addEventListener('click', function() {
	document.querySelector('#asainfo').style.display = 'block';

});

document.querySelector('#cb7').addEventListener('click', function() {
	document.querySelector('#asainfo').style.display = 'none';
});

document.getElementById('nra').addEventListener('click', function() {
	document.querySelector('#nafinfo').style.display = 'block';

});

document.querySelector('#cb8').addEventListener('click', function() {
	document.querySelector('#nafinfo').style.display = 'none';
});

document.getElementById('mde').addEventListener('click', function() {
	document.querySelector('#midinfo').style.display = 'block';

});

document.querySelector('#cb9').addEventListener('click', function() {
	document.querySelector('#midinfo').style.display = 'none';
});

document.getElementById('cau').addEventListener('click', function() {
	document.querySelector('#cauinfo').style.display = 'block';

});

document.querySelector('#cb10').addEventListener('click', function() {
	document.querySelector('#cauinfo').style.display = 'none';
});

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





