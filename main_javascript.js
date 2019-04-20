var total_items = 20916;
var per_page = 50;	 

// Loading 1st page data 
$(document).ready(function(){
	$.ajax({
		url: "http://localhost:4000/projectlist/1", 
		success: function(result){
			total_items = result.body.per_page;
			per_page = result.body.total;
			display_projects(result);
		}
	});
});

//Pagination
$(function() {
    $("#pagination").pagination({
        items: total_items,
        itemsOnPage: per_page,
        cssStyle: 'compact-theme',
        onPageClick: function(pageNumber, event){
        	$.ajax({
        		url: "http://localhost:4000/projectlist/"+pageNumber, 
        		success: function(result){
        			display_projects(result);
        		}
        	});
        }
    });
});

//Populating page with result Json of API
function display_projects(result){
	$(".onepagedata").remove();
	var html_string = "";
	console.log(result.body.page);
	var project_array = result.body.projects;
	html_string += "<div class='onepagedata'>";
	for (var i = 0; i < project_array.length; i++) {
			html_string += "<div class='card'>";
			html_string += "<div class='card-data'>";
			html_string += "<div class='leftdata'>"; 
			html_string += "<div class='name'><b>"+ project_array[i].name + "</b></div>"; 
			html_string += "<p class='summary'>"+ project_array[i].summary + "</p>"; 	
			html_string += "<div class='projecturl'><a href=" +  project_array[i].url + ">Go to the Project</a></div>";			
			
			html_string += "<div class='tooltip'>Owner:" + project_array[i].owner_id;
			html_string += "<div class='tooltipload'>Loading...</div>";
			html_string += "<div class='tooltiptext'></div>";
			html_string +=	"</div>"; //end of owner tooltip 
		
			
			html_string += "<div class='alltags'>";
			html_string += "<p class='tags'><b>Tags: </b></p>";
			tag_array = project_array[i].tags;
			if(tag_array!=null){
				for(var j=0; j<Math.min(tag_array.length,5) ;j++){
					html_string += "<p class='tags'>"+ tag_array[j] + "</p>"; 
			 	}
			}
			html_string += "</div>"; // end of all tags
			
			html_string += "</div>"; // div leftdata ends

			html_string += "<div class='rightimg'><img src='" + project_array[i].image_url + "' style='height:100%; width:100%;'></div>";//image div	
			html_string += "</div>"; // card-data div		
		
			html_string += "<div class='footerdiv footer-element'>"; 
			html_string += "<p class='footer-element'><i class='fas fa-users'></i> " + project_array[i].followers + " </p>";
			html_string += "<p class='footer-element'><i class='far fa-comments'></i> " + project_array[i].comments + " </p>";
			html_string += "<p class='footer-element'><i class='far fa-eye'></i> " + project_array[i].views + " </p>";

			html_string += "</div>"; //footer div ends

			html_string += "</div>"; //card div ends

	}
	html_string += "</div>" //onepagedata div ends
	$('.load-data').append(html_string); 
	$(".tooltipload").hide(); 
	$(".tooltiptext").hide(); 		
}

//Owner Info on Hover and Leave
$(document).on('mouseenter','.tooltip', function (event) {
    var tooltiptext_obj = $(this).children().filter('.tooltiptext');
    var tooltipload_obj = $(this).children().filter('.tooltipload');
    $(tooltipload_obj).show(); 
    $(".user_detail").remove();

    var owner_id = $(this).clone().children().remove().end().text().substring(6);
    var owner_url = "http://localhost:4000/userdetail/"+owner_id;
    
    //AJAX call for user/owner details
    $.ajax({
    	url: owner_url,
    	success: function(result){
    		showtooltip(result);
    	}
    });
	$(tooltiptext_obj).show(); 
	$(tooltipload_obj).hide(); 

}).on('mouseleave','.tooltip',  function(){
    $(".user_detail").remove();
    var tooltiptext_obj = $(this).children().filter('.tooltiptext');
    var tooltipload_obj = $(this).children().filter('.tooltipload');
    
    $(tooltipload_obj).hide(); 
  	$(tooltiptext_obj).hide(); 
  
});

//Function called on hover
function showtooltip(result){			
	html_string = "<div class='user_detail'>";
	html_string += "<div class='username'>Username: "+ result.body.username +"</div>";
	html_string += "<div class='screenname'>Screen name: "+ result.body.screen_name +"</div>";
	html_string += "<div class='rank'>Rank: "+ result.body.rank +"</div>";
	html_string += "<div class='aboutme'>"+ result.body.about_me +"</div>";
	html_string += "</div>";
	$('.tooltiptext').append(html_string);
}

//Function called on leaving
function hidetooltip(){
	$(".tooltiptext").hide();
	$(".tooltipload").hide();
}