var siteName = "tobias salem";
var contentPage = "index";

function load(content) {
	var contentNav = "#" + content + "Nav";
	var contentFile = content + ".html";
	// Under nav, find all <li> with class 'active' and remove it
	$('nav').find('li.active').removeClass('active');
	$('nav').find(contentNav).addClass('active');
	// NOTE: callback method should be enough for prettyPhoto to worka after load of an injected page
	// WORKAROUND: have a script tag in the end of the injected page which calls postInject
	//$('#mainArea').load(contentFile, postInject());
	contentPage = contentFile;
	$('#mainArea').load(contentFile);
	document.title = siteName + " | " +content;
}

function loadSection(content, section) {
	//var contentNav = "#" + content + "Nav";
	var sectionNav = "#" + section + "Nav";
	var contentFile = content + ".html" + "#" + section;
	// Under nav, find all <li> with class 'active' and remove it
	$('nav').find('li.active').removeClass('active');
	// Find the sectionNav and select it
	$('nav').find(sectionNav).addClass('active');
	// Load the content and section
	alert('loadSection contentFile with section: ' +contentFile);
	$('#mainArea').load(contentFile);
	document.title = siteName + " | " +content;	
}

function loadAbout() {
	// Under nav, find all <li> with class 'active' and remove it
	$('nav').find('li.active').removeClass('active');	
	$('nav').find('#aboutNav').addClass('active');
	$('#mainArea').load('about.html');
	document.title = siteName + " | About";
}

function loadSketches() {
	// Under nav, find all <li> with class 'active' and remove it
	$('nav').find('li.active').removeClass('active');
	$('#sketchesNav').addClass('active');
	$('#mainArea').load('sketches.html');
	document.title = siteName + " | Sketches";
}

function loadPhilosophy() {
	// Under nav, find all <li> with class 'active' and remove it
	$('nav').find('li.active').removeClass('active');	
	$('#philosophyNav').addClass('active');
	$('#mainArea').load('philosophy.html');
	document.title = siteName + " | Philosophy";
}

function loadContact() {
	// Under nav, find all <li> with class 'active' and remove it
	$('nav').find('li.active').removeClass('active');	
	$('#contactNav').addClass('active');
	$('#mainArea').load('contact.html');
	document.title = siteName + " | Contact ";
}

function reloadPrettyPhoto() { 
	//$("a[rel^='prettyPhoto']").prettyPhoto();
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		social_tools : false
	});
	alert('reloaded prettyPhoto');
	return true;
}

function postInject() {
	// Needed for prettyPhoto to work after ajax load. Why is not the callback function enough?
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		theme:'dark_rounded',
		social_tools : false
	});	
	//alert('postInject - reloaded prettyPhoto');
	// if contentPage shown is philosophy with contact form, do your thing needed for that
	
}
