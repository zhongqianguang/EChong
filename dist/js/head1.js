for(var dhDown1=document.getElementById("dh-down1"),dhDown2=document.getElementById("dh-down2"),down1=document.getElementsByClassName("down")[0],down2=document.getElementsByClassName("down1")[0],oli=down1.children,oli2=down2.children,dh1=document.getElementsByClassName("dh1"),k=0;k<oli2.length;k++)oli2[k].onmouseover=function(){down2.style.display="block"},oli2[k].onmouseout=function(){down2.style.display="none"};dhDown1.onmouseover=function(){down1.style.display="none",down2.style.display="block"},dhDown2.onmouseover=function(){down1.style.display="block",down2.style.display="none"},dhDown1.onmouseout=function(){down2.style.display="none"},dhDown2.onmouseout=function(){down1.style.display="none"},$(".back").find("li").last().click(function(){console.log(1),$("html,body").animate({scrollTop:0},500)});for(var i=0;i<oli.length;i++)oli[i].index=i,oli[i].onmouseover=function(){for(var o=0;o<dh1.length;o++)dh1[o].style.display="none";for(var e=0;e<oli.length;e++)oli[e].style.marginLeft="0",oli[e].style.borderBottom="0",oli[e].style.background="url(../images/headImg/menuLine1.png) 50% bottom no-repeat;";this.style.marginLeft="10px",this.style.borderBottom="1px solid #459d36",this.style.borderTop="1px solid #459d36",this.style.background="#fff",this.style.width="219px",down1.style.display="block",dh1[this.index].style.display="block";var n=this;dh1[this.index].onmouseover=function(){this.style.display="block",n.style.borderBottom="1px solid #459d36",n.style.borderTop="1px solid #459d36",n.style.background="#fff",n.style.width="219px",n.style.marginLeft="10px",down1.style.display="block"},dh1[this.index].onmouseout=function(){this.style.display="none",n.style.borderBottom="0",n.style.borderTop="0",n.style.marginLeft="0",n.style.background="url(../images/headImg/menuLine1.png) 50% bottom no-repeat;",n.style.width="228px",down1.style.display="none"}},oli[i].onmouseout=function(){for(var o=0;o<dh1.length;o++)dh1[o].style.display="none",oli[o].style.border="0",oli[o].style.width="228px",oli[o].style.marginLeft="0",down1.style.display="none",oli[o].style.background="url(../images/headImg/menuLine1.png) 50% bottom no-repeat;"};function list(){$(".down li:first").find("a").click(function(){location.href="list.html?food?"}),$(".down li:nth-of-type(4)").find("a").click(function(){location.href="list.html?health?"}),$(".dh1").eq(0).find("a").click(function(){var o=$(this).html();location.href="list.html?food?"+o+"?"}),$(".dh1").eq(1).find("a").click(function(){var o=$(this).html();location.href="list.html??"+o+"?"}),$(".dh1").eq(2).find("a").click(function(){var o=$(this).html();location.href="list.html??"+o+"?"}),$(".dh1").eq(3).find("a").click(function(){var o=$(this).html();location.href="list.html?health?"+o+"?"}),$(".dh1").eq(4).find("a").click(function(){var o=$(this).html();location.href="list.html??"+o+"?"}),$(".dh1").eq(5).find("a").click(function(){var o=$(this).html();location.href="list.html??"+o+"?"}),$("#soushuo").click(function(){var o=$(this).prev().val();location.href="list.html?&&?"+o+"?"})}function shop(){if(localStorage.shop)var o=JSON.parse(localStorage.shop);var e=0;for(var n in o)e++;$(".box3-1").children().last().find("span").html(e),$(".shopnum").html(e)}list(),shop();var series=document.getElementsByClassName("series")[0],inp=document.getElementById("inputs");function Interface(){var o=document.createElement("script"),e=inp.value;series.style.display="block",o.src="https://suggest.taobao.com/sug?code=utf-8&q="+e+"&callback=foo&area=c2c",document.body.appendChild(o),o.remove()}function foo(o){series.innerHTML="";for(var e=o.result,n=0;n<e.length;n++){var t=document.createElement("li");t.innerHTML=e[n][0],series.appendChild(t)}}inp.oninput=function(){Interface()},inp.onblur=function(){setTimeout(function(){series.style.display="none"},200)},series.onclick=function(o){var e=(o=o||event).target||o.srcElement;"LI"==e.nodeName&&(inp.value=e.innerHTML,series.style.display="none")};