document.getElementById('notif_nav').addEventListener('click', function() {
	if(notifs.style.display == 'none'){
		document.querySelector('#notifs').style.display = 'block';
	}
	else{
		document.querySelector('#notifs').style.display = 'none';		
	}
	document.querySelector('#msgs').style.display = 'none';	

});

document.getElementById('message_nav').addEventListener('click', function() {
	if(msgs.style.display == 'none'){
		document.querySelector('#msgs').style.display = 'block';
	}
	else{
		document.querySelector('#msgs').style.display = 'none';		
	}
	document.querySelector('#notifs').style.display = 'none';	


});

document.getElementById('login_nav').addEventListener('click', function() {
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

document.getElementById('forum_search').addEventListener('click', function() {
    document.getElementById('ni_footer').scrollIntoView({
      behavior: 'smooth'
    });
});

//Map Modes

	document.getElementById('area_mode').addEventListener('click', function() {
		document.querySelector('#area_mode').style.backgroundColor = 'steelblue';
		document.querySelector('#event_mode').style.backgroundColor = 'black';
		document.querySelector('#wonders_mode').style.backgroundColor = '';
		document.querySelector('#area_mode').style.color = 'white';
		document.querySelector('#event_mode').style.color = 'darkgrey';
		document.querySelector('#wonders_mode').style.color = 'darkgrey';
		document.querySelector('#wonders').style.display = 'none';
		document.querySelector('#mapsource').style.display = 'block';
		document.querySelector('#event_mode_map').style.display = 'none';

	});

	document.getElementById('event_mode').addEventListener('click', function() {
		document.querySelector('#area_mode').style.backgroundColor = '';
		document.querySelector('#event_mode').style.backgroundColor = 'steelblue';
		document.querySelector('#wonders_mode').style.backgroundColor = '';
		document.querySelector('#area_mode').style.color = 'darkgrey';
		document.querySelector('#event_mode').style.color = 'white';
		document.querySelector('#wonders_mode').style.color = 'darkgrey';
		document.querySelector('#wonders').style.display = 'none';
		document.querySelector('#mapsource').style.display = 'none';
		document.querySelector('#event_mode_map').style.display = 'block';
	});

	document.getElementById('wonders_mode').addEventListener('click', function() {
		document.querySelector('#area_mode').style.backgroundColor = '';
		document.querySelector('#event_mode').style.backgroundColor = 'black';
		document.querySelector('#wonders_mode').style.backgroundColor = 'steelblue';
		document.querySelector('#area_mode').style.color = 'darkgrey';
		document.querySelector('#event_mode').style.color = 'darkgrey';
		document.querySelector('#wonders_mode').style.color = 'white';
		document.querySelector('#wonders').style.display = 'block';
		document.querySelector('#mapsource').style.display = 'none';
		document.querySelector('#event_mode_map').style.display = 'none';
	});

//EVENT BOXES

		document.getElementById('event_1').addEventListener('click', function() {
			if(event_1_detail.style.width == '0px'){
				document.querySelector('#event_1_detail').style.width = '700px';
			}
			else{
				document.querySelector('#event_1_detail').style.width = '0px';		
			}
		});

		document.getElementById('event_2').addEventListener('click', function() {
			if(event_2_detail.style.width == '0px'){
				document.querySelector('#event_2_detail').style.width = '700px';
			}
			else{
				document.querySelector('#event_2_detail').style.width = '0px';		
			}
		});

		document.getElementById('event_3').addEventListener('click', function() {
			if(event_3_detail.style.width == '0px'){
				document.querySelector('#event_3_detail').style.width = '700px';
			}
			else{
				document.querySelector('#event_3_detail').style.width = '0px';		
			}
		});

		document.getElementById('event_4').addEventListener('click', function() {
			if(event_4_detail.style.width == '0px'){
				document.querySelector('#event_4_detail').style.width = '700px';
			}
			else{
				document.querySelector('#event_4_detail').style.width = '0px';		
			}
		});

		document.getElementById('event_5').addEventListener('click', function() {
			if(event_5_detail.style.height == '0px'){
				document.querySelector('#event_5_detail').style.height = '400px';
			}
			else{
				document.querySelector('#event_5_detail').style.height = '0px';		
			}
		});

		document.getElementById('event_6').addEventListener('click', function() {
			if(event_6_detail.style.width == '0px'){
				document.querySelector('#event_6_detail').style.width = '700px';
			}
			else{
				document.querySelector('#event_6_detail').style.width = '0px';		
			}
		});

		document.getElementById('event_7').addEventListener('click', function() {
			if(event_7_detail.style.width == '0px'){
				document.querySelector('#event_7_detail').style.width = '700px';
			}
			else{
				document.querySelector('#event_7_detail').style.width = '0px';		
			}
		});

		document.getElementById('event_8').addEventListener('click', function() {
			if(event_8_detail.style.height == '0px'){
				document.querySelector('#event_8_detail').style.height = '400px';
			}
			else{
				document.querySelector('#event_8_detail').style.height = '0px';		
			}
		});

		document.getElementById('event_9').addEventListener('click', function() {
			if(event_9_detail.style.width == '0px'){
				document.querySelector('#event_9_detail').style.width = '700px';
			}
			else{
				document.querySelector('#event_9_detail').style.width = '0px';		
			}
		});

		document.getElementById('event_10').addEventListener('click', function() {
			if(event_10_detail.style.height == '0px'){
				document.querySelector('#event_10_detail').style.height = '400px';
			}
			else{
				document.querySelector('#event_10_detail').style.height = '0px';		
			}
		});
























