

checkInternet();
var airplaneOfflineSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z"/></svg>`;
function checkInternet(){
	/*if(navigator.onLine){
		$('html').html(`
					<body style="width:200px"> 
						<div style="float:right"> ${airplaneOfflineSVG} </div>
						<h3>App is Offline</h3>
						<h4>Please check your internet connection</h>
					</body>
				`);
	}*/

	$.ajax({
		url: `https://www.google.co.in`,
		error: function(e){
			if(e.status == 0){
				$('html').html(`
					<body style="width:200px"> 
						<div style="float:right"> ${airplaneOfflineSVG} </div>
						<h3>App is Offline</h3>
						<h4>Please check your internet connection</h>
					</body>
				`);
			}
		}
	})
}
