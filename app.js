let display = true	
	$(document).ready(function(){
		$("#content .back").toggle()
		$("#content .quote").toggle()
		$("#content .name").toggle()
		$(".frame").click(function(){
			$("#content p").toggle("slow")
			$("#content .title").toggle("slow")
			$("#content .back").toggle("slow")
			$("#content .quote").toggle("slow")
			$(".frame").not(this).toggle("slow")
			$(this).toggleClass( "showing", 1000)
			current=this
			if($(this).is("#CHUEH")){
				display?$("#CHUEH img").attr("src","https://i.imgur.com/adK2Tmu.png"):$("#CHUEH img").attr("src","https://i.imgur.com/Fq8AHjI.png");
				$("#CHUEH img").toggleClass( "showing", 1000);
				display = !display
			}$
			if($(this).is("#KE")){
				display?$("#KE img").attr("src","https://i.imgur.com/ZRgJHOl.png"):$("#KE img").attr("src","https://i.imgur.com/eCyrqtM.png")
				$("#KE img").toggleClass( "showing", 1000);
				display = !display
			}
			if($(this).is("#SU")){
				display?$("#SU img").attr("src","https://i.imgur.com/Bv17oaZ.png"):$("#SU img").attr("src","https://i.imgur.com/f2svmBF.png")
				$("#SU img").toggleClass( "showing", 1000);
				display = !display
			}
			if($(this).is("#LIAO")){
				display?$("#LIAO img").attr("src","https://i.imgur.com/zRc62vI.png"):$("#LIAO img").attr("src","https://i.imgur.com/mwhHx7L.png")
				$("#LIAO img").toggleClass( "showing", 1000);
				display = !display
			}
			if($(this).is("#WU")){
				display?$("#WU img").attr("src",""):$("#WU img").attr("src","")
				$("#WU img").toggleClass( "showing", 1000);
				display = !display
			}
			if($(this).is("#CHEN")){
				display?$("#CHEN img").attr("src","https://i.imgur.com/pwQW97u.png"):$("#CHEN img").attr("src","https://i.imgur.com/9s5Mq5w.png")
				$("#CHEN img").toggleClass( "showing", 1000);
				display = !display
			}
			
			$(".back").click(function(){
				$("#content p").toggle("slow")
				$("#content .title").toggle("slow")
				$("#content .back").toggle("slow")
				$("#content .quote").toggle("slow")
				$("#content .back").toggle("slow")
				$(".frame").not(current).toggle("slow")
				$(current).toggleClass( "showing", 1000)
				if($(current).is("#CHUEH")){
					display?$("#CHUEH img").attr("src","https://i.imgur.com/adK2Tmu.png"):$("#CHUEH img").attr("src","https://i.imgur.com/Fq8AHjI.png");
					$("#CHUEH img").toggleClass( "showing", 1000);
					display = !display
				}$
				if($(current).is("#KE")){
					display?$("#KE img").attr("src","https://i.imgur.com/ZRgJHOl.png"):$("#KE img").attr("src","https://i.imgur.com/eCyrqtM.png")
					$("#KE img").toggleClass( "showing", 1000);
					display = !display
				}
				if($(current).is("#SU")){
					display?$("#SU img").attr("src","https://i.imgur.com/Bv17oaZ.png"):$("#SU img").attr("src","https://i.imgur.com/f2svmBF.png")
					$("#SU img").toggleClass( "showing", 1000);
					display = !display
				}
				if($(current).is("#LIAO")){
					display?$("#LIAO img").attr("src","https://i.imgur.com/zRc62vI.png"):$("#LIAO img").attr("src","https://i.imgur.com/mwhHx7L.png")
					$("#LIAO img").toggleClass( "showing", 1000);
					display = !display
				}
				if($(current).is("#WU")){
					display?$("#WU img").attr("src",""):$("#WU img").attr("src","")
					$("#WU img").toggleClass( "showing", 1000);
					display = !display
				}
				if($(current).is("#CHEN")){
					display?$("#CHEN img").attr("src","https://i.imgur.com/pwQW97u.png"):$("#CHEN img").attr("src","https://i.imgur.com/9s5Mq5w.png")
					$("#CHEN img").toggleClass( "showing", 1000);
					display = !display
				}
		})
  		
	})
