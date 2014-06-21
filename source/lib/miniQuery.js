/*!
 * minQuery
 */


var AjaxWrapper = {
  request: function(ajaxHash){
    var ourReq = new XMLHttpRequest();
    ourReq.onload = ajaxHash["success"];
    ourReq.onerror = ajaxHash["fail"];
    ourReq.open(ajaxHash["method"], ajaxHash["url"], true);
    ourReq.send();

  }
}

var EventDispatcher = {
  on: function(element, ourEvent, ourFunction){
    var a = SweetSelector.select(element);
    a.addEventListener(ourEvent, ourFunction, false)

  },
  trigger: function(element, ourEvent){
    var newEvent = new Event(ourEvent);
    var a = SweetSelector.select(element);
    a.dispatchEvent(newEvent);
  }
}

var Dom ={
  hide: function(cssSelector){
    a=SweetSelector.select(cssSelector);
    a.style.visibility ="hidden"
  },
  show: function(cssSelector){
    a=SweetSelector.select(cssSelector);
    a.style.visibility ="visible"
  },
  addClass: function(cssSelector, newClass){
    a=SweetSelector.select(cssSelector);
    original = a.getAttribute("class");
    a.setAttribute("class", original + " " +newClass)
  },
  removeClass: function(cssSelector, newClass){
    a=SweetSelector.select(cssSelector);
    classType = a.getAttribute("class");
    withWhiteSpace = classType.replace(newClass, "");
    withoutWhiteSpace = withWhiteSpace.trim();
    a.setAttribute("class", withoutWhiteSpace)
  }
}

var miniQuery = function (){
  return {
    SweetSelector : {
      select: function(cssSelector){
        if (/^#/.exec(cssSelector)){
          return document.getElementById(cssSelector.slice(1))
        } else if (/^\./.exec(cssSelector)){
          return document.getElementsByClassName(cssSelector.slice(1))[0]
        } else {
          return document.getElementsByTagName(cssSelector.slice(0,1))[0]
        }
      }
    }
  }
}