function updating(){var t=100/video.duration*video.currentTime;progress.value=t}function seek(t){var e=t.offsetX/this.offsetWidth;video.currentTime=e*video.duration,progress.value=e/100,playButton.className="pause-button"}function highlighter(){var t=video.currentTime;t>0&&4.13>t?caption[0].classList.add("highlight"):caption[0].classList.remove("highlight"),t>4.13&&7.535>t?caption[1].classList.add("highlight"):caption[1].classList.remove("highlight"),t>7.535&&11.27>t?caption[2].classList.add("highlight"):caption[2].classList.remove("highlight"),t>11.27&&13.96>t?caption[3].classList.add("highlight"):caption[3].classList.remove("highlight"),t>13.96&&17.94>t?caption[4].classList.add("highlight"):caption[4].classList.remove("highlight"),t>17.94&&22.37>t?caption[5].classList.add("highlight"):caption[5].classList.remove("highlight"),t>22.37&&26.88>t?caption[6].classList.add("highlight"):caption[6].classList.remove("highlight"),t>26.88&&30.92>t?caption[7].classList.add("highlight"):caption[7].classList.remove("highlight"),t>32.1&&34.73>t?caption[8].classList.add("highlight"):caption[8].classList.remove("highlight"),t>34.73&&39.43>t?caption[9].classList.add("highlight"):caption[9].classList.remove("highlight"),t>39.43&&41.19>t?caption[10].classList.add("highlight"):caption[10].classList.remove("highlight"),t>42.35&&46.3>t?caption[11].classList.add("highlight"):caption[11].classList.remove("highlight"),t>46.3&&49.27>t?caption[12].classList.add("highlight"):caption[12].classList.remove("highlight"),t>49.27&&53.76>t?caption[13].classList.add("highlight"):caption[13].classList.remove("highlight"),t>53.76&&57.78>t?caption[14].classList.add("highlight"):caption[14].classList.remove("highlight"),t>57.78?caption[15].classList.add("highlight"):caption[15].classList.remove("highlight")}var video=document.getElementById("video"),playButton=document.getElementById("play-pause"),muteButton=document.getElementById("mute"),fullScreenButton=document.getElementById("fullscreen"),progress=document.getElementById("progress"),buffer=document.getElementById("buffer"),caption=document.getElementsByClassName("caption");setInterval(function(){var t=video.currentTime,e=Math.floor(t/60),i=Math.floor(t),s=10>e?"0"+e:e,o=10>i?"0"+i:i;document.getElementById("current_time").innerHTML=s+":"+o},400),setInterval(function(){var t=video.duration,e=Math.floor(t/60),i=Math.floor(t),s=10>e?"0"+e:e,o=10>i?"0"+i:i;document.getElementById("total_time").innerHTML=s+":"+o},400),video.controls=!1,playButton.addEventListener("click",function(){video.paused===!0?(video.play(),playButton.className="pause-button"):(video.pause(),playButton.className="play-button")}),muteButton.addEventListener("click",function(){video.muted===!1?(video.muted=!0,muteButton.className="volume-off"):(video.muted=!1,muteButton.className="volume-on")}),fullScreenButton.addEventListener("click",function(){video.requestFullscreen?video.requestFullscreen():video.mozRequestFullScreen?video.mozRequestFullScreen():video.webkitRequestFullscreen&&video.webkitRequestFullscreen()}),video.addEventListener("timeupdate",function(){var t=100/video.duration*video.currentTime;progress.value=t}),video.addEventListener("timeupdate",updating),video.addEventListener("progress",function(){var t=video.buffered.end(0)/video.duration*100;buffer.value=t}),progress.addEventListener("click",seek),progress.addEventListener("mousedown",function(){video.pause()}),progress.addEventListener("mouseup",function(){video.play()}),video.addEventListener("timeupdate",highlighter);