// Related Post - bloggerku.com
!function(){var h=document.getElementById("related_bloggerku"),e=related.label.substr(related.label.indexOf("label/")+6).split("?")[0];window.related_show=function(a){a=a.feed.entry;window.data=a;for(var c='<h3 class="title">'+related.title+"</h3>",b=0;b<a.length;b++){for(var f="",e=a[b].title.$t,k=a[b].media$thumbnail.url.replace("/s72-c/","/s250-c/"),g=a[b].author["0"].uri.$t,l=a[b].author["0"].name.$t,m=a[b].author["0"].gd$image.src.replace("/s512-c/","/s50-c/"),n=a[b].published.$t.split("T")[0],
d=0;d<a[b].link.length;d++)if("alternate"==a[b].link[d].rel&&"text/html"==a[b].link[d].type){f=a[b].link[d].href;break}c+='<div class="item"> <div class="image"><a href="'+f+'"><img src="'+k+'"></a></div> <div class="info"> <div class="title"> <h4 class="title"><a href="'+f+'">'+e+'</a></h4> </div> <div class="post-info"> <div class="photo"><a href="'+g+'"><img src="'+m+'"></a></div> <div class="name"><span><a href="'+g+'">'+l+'</a></span></div> <div class="date"><span>'+n+"</span></div> </div> </div> </div>"}c+=
'<div class="clear"/>';window.html=c;h.innerHTML=c};(function(a){var c=document.createElement("script");c.src=a;document.body.appendChild(c)})("/feeds/posts/summary/-/"+e+"?alt=json-in-script&orderby=updated&max-results="+related.max+"&callback=related_show")}();
