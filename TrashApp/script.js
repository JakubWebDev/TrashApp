window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 550) {
    document.querySelector("#user").style.color ="white";
  } else{
    document.querySelector("#user").style.color ="#4cd137";
  }

  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.querySelector("#nav-map").style.color ="#4cd137";
  } else{
    document.querySelector("#nav-map").style.color ="white";
  }

  if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
    document.querySelector("#about").style.color ="#4cd137";
    document.querySelector("#nav-map").style.color ="white";
  } else{
    document.querySelector("#about").style.color ="white";
  }

  if (document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
    document.querySelector(".trashesOpacity").style.opacity ="0";
  } else{
    document.querySelector(".trashesOpacity").style.opacity ="1";
  }
}