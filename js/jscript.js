$(document).ready(function(){
	$('#txtUN').click(function(){
		if(this.value=='Enter User Number')
		{
			this.value='';
			$('#txtUN').css("color", "black");
		}
	})

	$('#txtUN').focusout(function(){
		if(this.value=='')
		{
			this.value='Enter User Number';
			$('#txtUN').css("color", "gray");
		}
	})
	
	$('#txtpwd').click(function(){
		if(this.value=='Enter Pin Number')
		{
			this.value='';
			this.setAttribute('type','password');
			$('#txtpwd').css("color", "black");
		}
	})
	
	$('#txtpwd').focusout(function(){
		if(this.value=='')
		{
			this.setAttribute('type','text');
			this.value='Enter Pin Number';
			$('#txtpwd').css("color", "gray");
		}
	})
	
	$('#txtpwd').focus(function(){
		if(this.value=='Enter Pin Number')
		{
			this.value='';
			this.setAttribute('type','password');
			$('#txtpwd').css("color", "black");
		}
	})
});

function subValidate()
{ 
	var UsrNo= '';
	var PnNo='';
	
	 UsrNo = document.getElementById('txtUN').value;
	 PnNo = document.getElementById('txtpwd').value;
	
	if(UsrNo=='admin' && PnNo=='admin')
	{
		$('#dvLoginParent').css('display','none');
		$('#dvBookingParent').css('display','block');
	}
}

 function exitFromApp()
{
	navigator.app.exitApp();
}

function subValidateBoking()
{
	var booking_id='';
	booking_id = document.getElementById('txtBookingId').value;
	if(booking_id!='' && booking_id=='12345')
	{
		$('#dvBookingParent').css('display','none');
		$('#dvSuccessParent').css('display','block');
	}
	else{
		alert('Enter Booking Id!');
	}
}