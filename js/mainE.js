document.getElementById('cl_prev_button').addEventListener('click', function() {
	document.querySelector('#cl_prev').style.display = 'block';
	document.querySelector('#cl_explore').style.display = 'none';
	document.querySelector('#hf_list').style.borderColor = 'black';
	document.querySelector('#prev_week').style.borderColor = 'yellow';
	document.querySelector('#hf_list').style.color = 'grey';
	document.querySelector('#prev_week').style.color = 'white';
	document.querySelector('#cl_content').style.height = '600px';
	document.querySelector('#cl_content').style.marginTop = '20px';
	document.querySelector('#content_lower').style.paddingBottom = '0px';
});

document.getElementById('cl_explore_button').addEventListener('click', function() {
	document.querySelector('#cl_explore').style.display = 'block';
	document.querySelector('#cl_prev').style.display = 'none';
	document.querySelector('#prev_week').style.borderColor = 'black';
	document.querySelector('#hf_list').style.borderColor = 'yellow';
	document.querySelector('#prev_week').style.color = 'grey';
	document.querySelector('#hf_list').style.color = 'white';
	document.querySelector('#a-e').style.display = 'block';
	document.querySelector('#f-j').style.display = 'none';
	document.querySelector('#p-t').style.display = 'none';
	document.querySelector('#k-o').style.display = 'none';
	document.querySelector('#u-z').style.display = 'none';
	document.querySelector('#cl_content').style.height = '1900px';
});

//Bottom Navigation

	//Page 1

		//Number Row

			document.getElementById('hf_xpl_page_1_2').addEventListener('click', function() {
				document.querySelector('#a-e').style.display = 'none';
				document.querySelector('#f-j').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_1_3').addEventListener('click', function() {
				document.querySelector('#a-e').style.display = 'none';
				document.querySelector('#k-o').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_1_4').addEventListener('click', function() {
				document.querySelector('#a-e').style.display = 'none';
				document.querySelector('#p-t').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_1_5').addEventListener('click', function() {
				document.querySelector('#a-e').style.display = 'none';
				document.querySelector('#u-z').style.display = 'block';
	
				document.querySelector('#cl_content').style.height = '2270px';
			});

		//Buttons

			document.getElementById('nba_fwd_1').addEventListener('click', function() {
				document.querySelector('#a-e').style.display = 'none';
				document.querySelector('#f-j').style.display = 'block';
			});

	//Page 2

		//Number Row

			document.getElementById('hf_xpl_page_2_1').addEventListener('click', function() {
				document.querySelector('#f-j').style.display = 'none';
				document.querySelector('#a-e').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_2_3').addEventListener('click', function() {
				document.querySelector('#f-j').style.display = 'none';
				document.querySelector('#k-o').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_2_4').addEventListener('click', function() {
				document.querySelector('#f-j').style.display = 'none';
				document.querySelector('#p-t').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_2_5').addEventListener('click', function() {
				document.querySelector('#f-j').style.display = 'none';
				document.querySelector('#u-z').style.display = 'block';
	
				document.querySelector('#cl_content').style.height = '2270px';
			});

		//Buttons

			document.getElementById('nba_bckw_2').addEventListener('click', function() {
				document.querySelector('#f-j').style.display = 'none';
				document.querySelector('#a-e').style.display = 'block';
			});

			document.getElementById('nba_fwd_2').addEventListener('click', function() {
				document.querySelector('#f-j').style.display = 'none';
				document.querySelector('#k-o').style.display = 'block';
			});

	//Page 3

		//Number Row

			document.getElementById('hf_xpl_page_3_1').addEventListener('click', function() {
				document.querySelector('#k-o').style.display = 'none';
				document.querySelector('#a-e').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_3_2').addEventListener('click', function() {
				document.querySelector('#k-o').style.display = 'none';
				document.querySelector('#f-j').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_3_4').addEventListener('click', function() {
				document.querySelector('#k-o').style.display = 'none';
				document.querySelector('#p-t').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_3_5').addEventListener('click', function() {
				document.querySelector('#k-o').style.display = 'none';
				document.querySelector('#u-z').style.display = 'block';
	
				document.querySelector('#cl_content').style.height = '2270px';
			});

		//Buttons

			document.getElementById('nba_bckw_3').addEventListener('click', function() {
				document.querySelector('#k-o').style.display = 'none';
				document.querySelector('#f-j').style.display = 'block';
			});

			document.getElementById('nba_fwd_3').addEventListener('click', function() {
				document.querySelector('#k-o').style.display = 'none';
				document.querySelector('#p-t').style.display = 'block';
			});

	//Page 4

		//Number Row

			document.getElementById('hf_xpl_page_4_1').addEventListener('click', function() {
				document.querySelector('#p-t').style.display = 'none';
				document.querySelector('#a-e').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_4_2').addEventListener('click', function() {
				document.querySelector('#p-t').style.display = 'none';
				document.querySelector('#f-j').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_4_3').addEventListener('click', function() {
				document.querySelector('#p-t').style.display = 'none';
				document.querySelector('#k-o').style.display = 'block';
			});

			document.getElementById('hf_xpl_page_4_5').addEventListener('click', function() {
				document.querySelector('#p-t').style.display = 'none';
				document.querySelector('#u-z').style.display = 'block';
	
				document.querySelector('#cl_content').style.height = '2270px';
			});

		//Buttons

			document.getElementById('nba_bckw_4').addEventListener('click', function() {
				document.querySelector('#p-t').style.display = 'none';
				document.querySelector('#k-o').style.display = 'block';
			});

			document.getElementById('nba_fwd_4').addEventListener('click', function() {
				document.querySelector('#p-t').style.display = 'none';
				document.querySelector('#u-z').style.display = 'block';
	
				document.querySelector('#cl_content').style.height = '2270px';
			});

	//Page 5

		//Number Row

			document.getElementById('hf_xpl_page_5_1').addEventListener('click', function() {
				document.querySelector('#u-z').style.display = 'none';
				document.querySelector('#a-e').style.display = 'block';
				
				document.querySelector('#cl_content').style.height = '1900px';
			});

			document.getElementById('hf_xpl_page_5_2').addEventListener('click', function() {
				document.querySelector('#u-z').style.display = 'none';
				document.querySelector('#f-j').style.display = 'block';
				
				document.querySelector('#cl_content').style.height = '1900px';
			});

			document.getElementById('hf_xpl_page_5_3').addEventListener('click', function() {
				document.querySelector('#u-z').style.display = 'none';
				document.querySelector('#k-o').style.display = 'block';
				
				document.querySelector('#cl_content').style.height = '1900px';
			});

			document.getElementById('hf_xpl_page_5_4').addEventListener('click', function() {
				document.querySelector('#u-z').style.display = 'none';
				document.querySelector('#p-t').style.display = 'block';
				
				document.querySelector('#cl_content').style.height = '1900px';
			});

		//Buttons

			document.getElementById('nba_bckw_5').addEventListener('click', function() {
				document.querySelector('#u-z').style.display = 'none';
				document.querySelector('#p-t').style.display = 'block';
				
				document.querySelector('#cl_content').style.height = '1900px';
			});


//Carousel - Previous Week Feautured

document.getElementById('side_hiders_btn_rgt').addEventListener('click', function() {
	document.querySelector('#slider_container_main').style.marginLeft = '-50%';
	});

document.getElementById('side_hiders_btn_left').addEventListener('click', function() {
	document.querySelector('#slider_container_main').style.marginLeft = '5.5%';
	});


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