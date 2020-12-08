function signOut(){
    $('#soButton').addClass("invisible");
    $('#login').removeClass("invisible");
    $('#signup').removeClass("invisible");

    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.replace("login.html");

    // var allCookies = document.cookie.split(";");
    // for (var i = 0; i < allCookies.length; i++) 
    //                 document.cookie = allCookies[i] + "=;expires=" 
    //                 + new Date(0).toUTCString(); 
    if(getCookie("active") == 1) nowInactive(userEmail);
}


function nowInactive(email){
    var URL = "https://calypso-dating.herokuapp.com/api/user/inactive/?email=" + email;

    ajaxGet(URL, function(results){
      console.log(results);
    });

}

function nowActive(email){
    var URL = "https://calypso-dating.herokuapp.com/api/user/active/?email=" + email;

    ajaxGet(URL, function(results){
      console.log(results);
    });
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + "; path=/";
}

function ajaxPost(endpointUrl, postData, returnFunction){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', endpointUrl, true);
  /*xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');*/
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function(){
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        returnFunction( xhr.responseText );
      } else {
      	alert('AJAX Error.');
      	console.log(xhr.status);
		
      }
    }
  }
  xhr.send(postData);
};

function ajaxPut(endpointUrl, postData, returnFunction){
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', endpointUrl, true);
  /*xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');*/
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function(){
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        returnFunction( xhr.responseText );
      } else {
        alert('AJAX Error.');
        console.log(xhr.status);
    
      }
    }
  }
  xhr.send(postData);
};

function ajaxGet(endpointUrl, returnFunction){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', endpointUrl, true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        // When ajax call is complete, call this function, pass a string with the response
        returnFunction( xhr.responseText );
      } else {
        alert('AJAX Error.');
        console.log(xhr.status);
      }
    }
  }
  xhr.send();
};