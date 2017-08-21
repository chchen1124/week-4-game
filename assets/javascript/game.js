var wins=0;
var losses=0;
var total_score=0;
var random_number=Math.floor(Math.random()*((120-19)+1)+19);
var num1=Math.floor((Math.random()*12)+1);
var num2=Math.floor((Math.random()*12)+1);
var num3=Math.floor((Math.random()*12)+1);
var num4=Math.floor((Math.random()*12)+1);
var html1,html2,html2b,html3;

$(document).ready(function(){
	$("#redcrys").click(function(){
		total_score=total_score+num1;
		$("#ScoreDisplay").html(total_score);
		if(total_score>=random_number)
		{
			if(total_score===random_number)
			{
				wins++;
				$(".won").html("Wins: "+wins);
			}
			else
			{
				losses++;
				$(".lost").html("Losses: "+losses);
			}
			total_score=0;
			$("#ScoreDisplay").html(total_score);
			random_number=Math.floor(Math.random()*((120-19)+1)+19);
			$(".randnum").html(random_number);
			num1=Math.floor((Math.random()*12)+1);
			num2=Math.floor((Math.random()*12)+1);
			num3=Math.floor((Math.random()*12)+1);
			num4=Math.floor((Math.random()*12)+1);
		}
	});
	$("#greencrys").click(function(){
		total_score=total_score+num2;
		$("#ScoreDisplay").html(total_score);
		if(total_score>=random_number)
		{
			if(total_score===random_number)
			{
				wins++;
				$(".won").html("Wins: "+wins);
			}
			else
			{
				losses++;
				$(".lost").html("Losses: "+losses);
			}
			total_score=0;
			$("#ScoreDisplay").html(total_score);
			random_number=Math.floor(Math.random()*((120-19)+1)+19);
			$(".randnum").html(random_number);
			num1=Math.floor((Math.random()*12)+1);
			num2=Math.floor((Math.random()*12)+1);
			num3=Math.floor((Math.random()*12)+1);
			num4=Math.floor((Math.random()*12)+1);
		}
	});
	$("#yellowcrys").click(function(){
		total_score=total_score+num3;
		$("#ScoreDisplay").html(total_score);
		if(total_score>=random_number)
		{
			if(total_score===random_number)
			{
				wins++;
				$(".won").html("Wins: "+wins);
			}
			else
			{
				losses++;
				$(".lost").html("Losses: "+losses);
			}
			total_score=0;
			$("#ScoreDisplay").html(total_score);
			random_number=Math.floor(Math.random()*((120-19)+1)+19);
			$(".randnum").html(random_number);
			num1=Math.floor((Math.random()*12)+1);
			num2=Math.floor((Math.random()*12)+1);
			num3=Math.floor((Math.random()*12)+1);
			num4=Math.floor((Math.random()*12)+1);
		}
	});
	$("#bluecrys").click(function(){
		total_score=total_score+num4;
		$("#ScoreDisplay").html(total_score);
		if(total_score>=random_number)
		{
			if(total_score===random_number)
			{
				wins++;
				$(".won").html("Wins: "+wins);
			}
			else
			{
				losses++;
				$(".lost").html("Losses: "+losses);
			}
			total_score=0;
			$("#ScoreDisplay").html(total_score);
			random_number=Math.floor(Math.random() * ((120-19)+1) + 19);
			$(".randnum").html(random_number);
			num1=Math.floor((Math.random()*12)+1);
			num2=Math.floor((Math.random()*12)+1);
			num3=Math.floor((Math.random()*12)+1);
			num4=Math.floor((Math.random()*12)+1);
		}
	});

	html1="<p>"+random_number+"</p>";
	document.querySelector(".randnum").innerHTML=html1;

	html2="<p>Wins: "+wins+"</p>";
	document.querySelector(".won").innerHTML=html2;

	html2b="<p>Losses: "+losses+"</p>";
	document.querySelector(".lost").innerHTML=html2b;

	html3="<p>"+total_score+"</p>";
	document.querySelector("#ScoreDisplay").innerHTML=html3;			
});