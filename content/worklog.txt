http://www.steneby.se/BinaryLoader.axd?OwnerID=fafd1ddb-a330-41a3-b610-4aa0fc67cd9e&OwnerType=0&PropertyName=Images&FileName=ljusb%25c3%25a4rare2.jpg&ResizeHeight=402&ResizeWidth=536
http://www.tobiassalem.com/work/sample-lightbearer.jpg

tobiassalem.com
=================
OLD:
#sub-headline .tagline_left {
	margin: 8px 0 0;
	padding: 0
}

.portfolio .tagline_left {
	display: block;
	float: left;
	width: 350px;
	line-height: 1.6em;
	margin: 50px 0 0
}

NEW:
#sub-headline .tagline_left {
	margin: 2px 0 0;
	padding: 0
}

.portfolio .tagline_left {
	display: block;
	float: left;
	width: 350px;
	line-height: 1.6em;
	margin: 10px 0 0
}

PROBLEM WITH BLOCKQUOTE DESTROYING THE SURROUNDING DIV STYLE (ends div too early, even though quote is inside)
http://www.cs.tut.fi/~jkorpela/html/bq.html
SUPERMYSKO: EN QUOTE ÄR OK, men om vi har flera kommer det att bryta omliggande div så det blir alldeles för liten!
ORSAK: det är sista quote utan någon standard/vanligt text som pajjar!
UPDATE: en <div class="clear"></div> INOM DIV class=subnav verkar lösa problemet!

Added margin to paragraphs, see about page, looks nicer.
p {
	margin-bottom: 4px;
	color: #333
}

blockquote,q {
	quotes: none
}

blockquote:before,blockquote:after,q:before,q:after {
	content: none
}

/* 
	ORIG ABOVE; NEW BELOW 
	http://shapeshed.com/journal/quotations_in_css/
	http://fwebde.com/css/nice-pull-quotes-with-css/
	http://www.juude.info/css-gigantic-quote-marks.php
*/

Colours
--------
background: '#5e758a',	- diskret blå
color: #333;
background: #eee url(../images/bg.png) repeat;

links, reddish: #A3443E
links, conventional purple: #b740c2
links, visited dark gray: #333333
background discreet, light yellowish: #f9f9f9
background discreet, light gray: #c4c4c4

Template used
----------------
http://www.priteshgupta.com/templates/elegant-press/
http://files.priteshgupta.com/elegant_press/

Home 		---> based on Homepage
About 		---> based on Typography
Projects	---> based on Portfolio (overview page with info and one image per project, e.g. Asian Design)
Asian		---> based on gallery
Sketches	---> based on Portfolio
Philosophy	---> based on Layout - full_width (use original gallery for art & craft projects instead)
Contact		---> based on Contact

right_sidebar	---> Art
full_width		---> Craft

Latest Work ---> Work Samples

Modifications
--------------
*Eliminated code duplication by only having the header and footer in index.html
*All content files are broken out and remade minimalisting
*All content files are now dynamically loaded with jquery, e.g. $('mainArea').load('about.html')
 where about.html ONLY contains the unique content, NOT any duplication of header, menu items, footer etc.
 
Issues
--------
When adapting to dynamic load with jquery the menu selection and prettyPhoto broke.
Solution: 
	a) code my own javascript functions to select the menu
	b) added javascript to re-init prettyPhoto in each loaded sub-document (e.g. in about.html).
	For some reason re-init in a callback method was not enough to fix this.
	$('mainArea').load('about.html', initPrettyPhoto())
	
<script type="text/javascript" charset="utf-8">  
  // Needed for prettyPhoto to work after ajax load. Why is not the callback function enough?
  $(document).ready(function(){
		$("a[data-gal^='prettyPhoto']").prettyPhoto({
			social_tools : false
		});	
	});  
</script>

	