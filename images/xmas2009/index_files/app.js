$(function(){
	getPage("page1.htm");
	  
	  $("a.navlink").live("click",function(event){
  			event.preventDefault();
  			getPage(event.target.href);
  			return false;		  	
  		});
  		
 jQuery('#mycarousel').jcarousel({
       
 		
 		auto:5,
        vertical:true,
        animation:"slow",
       size: mycarousel_itemList.length,
        initCallback: mycarousel_initCallback,
        itemLoadCallback:{onBeforeAnimation: mycarousel_itemLoadCallback}


    });
  
});

function mycarousel_itemLoadCallback(carousel, state)
{
    for (var i = carousel.first; i <= carousel.last; i++) {
        if (carousel.has(i)) {
            continue;
        }
 
        if (i > mycarousel_itemList.length) {
            break;
        }
 
        // Create an object from HTML
        var item = jQuery(mycarousel_getItemHTML(mycarousel_itemList[i-1])).get(0);
 
        // Apply thickbox
        tb_init(item);
 
        carousel.add(i, item);
    }
};


var mycarousel_itemList = [
{url: 'images/pics/pic0_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic1_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic2_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic3_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic4_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic5_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic6_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic7_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic8_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic9_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic10_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic11_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic12_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic13_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic14_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic15_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic16_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic17_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic18_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic19_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic20_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic21_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic22_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic23_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic24_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic25_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic26_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic27_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic28_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic29_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic30_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic31_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic32_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic33_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic34_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic35_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic36_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic37_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic38_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic39_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic40_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic41_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic42_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic43_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic44_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic45_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic46_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic47_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic48_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic49_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic50_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic51_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic52_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic53_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic54_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic55_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic56_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic57_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic58_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic59_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic60_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic61_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic62_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic63_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic64_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic65_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic66_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic67_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic68_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic69_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic70_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic71_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic72_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic73_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic74_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic75_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic76_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic77_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic78_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic79_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic80_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic81_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic82_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic83_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic84_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic85_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic86_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic87_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic88_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic89_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic90_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic91_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic92_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic93_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic94_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic95_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic96_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic97_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic98_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic99_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic100_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic101_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic102_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic103_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic104_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic105_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic106_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic107_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic108_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic109_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic110_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic111_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic112_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic113_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic114_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic115_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic116_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic117_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic118_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic119_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic120_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic121_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic122_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic123_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic124_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic125_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic126_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic127_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic128_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic129_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic130_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic131_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic132_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic133_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic134_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic135_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic136_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic137_m_s.jpg',title:'Happy Holidays'},
{url: 'images/pics/pic138_m_s.jpg',title:'Happy Holidays'}
];

function mycarousel_itemVisibleInCallback(carousel, item, i, state, evt)
{
    // The index() method calculates the index from a
    // given index who is out of the actual item range.
    var idx = carousel.index(i, mycarousel_itemList.length);
    
    carousel.add(i, mycarousel_getItemHTML(mycarousel_itemList[idx - 1]));
   

};

function mycarousel_itemVisibleOutCallback(carousel, item, i, state, evt)
{
    carousel.remove(i);
};

/**
 * Item html creation helper.
 */
function mycarousel_getItemHTML(item)
{
      var url_m = item.url.replace(/_m_s.jpg/g, '_m.jpg');
    return '<a href="' + url_m + '" title="' + item.title + '"><img src="' + item.url + '" width="75" height="75" border="0" alt="' + item.title + '" /></a>';

};


function getPage(pg){
	
	$.ajax({ 
		  url: pg, 
		  cache: false, 
		  success: function(html){ 
		    $("#content").html(html); 
		  }
	  }); 
		
}


function mycarousel_initCallback(carousel)
{
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function(event) {
    	event.preventDefault();
        carousel.startAuto(0);
    });
 
    carousel.buttonPrev.bind('click', function(event) {
    	event.preventDefault();
        carousel.startAuto(0);
    });
 
    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};