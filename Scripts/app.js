var main = function(){
    var searchAPIKey = "0a37f1bc41faaf3db26da6005371e78c:15:71605180",
        searchKeyword = "",
        beginDate = "",
        endDate = "",
        sort = "";
    
    $.getJSON("http://api.nytimes.com/svc/topstories/v1/home.json?&api-key=f2e425449a8965c26dd227193dc3d9c5:15:71605180", function (topStories) {
        var newsStories = topStories.results;
        
        for (var i = 0; i<newsStories.length; i++){
            console.log(newsStories[i]);
        }
        console.log(topStories);
    });
        
    $(".userInput button").on("click", function(event){
        searchKeyword = $("#keyword").val();
        beginDate = $("#startDate").val();
        endDate = $("#endDate").val();
        sort = $("#sortOrder").val();
    $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=source:(The New York Times)&             q="+searchKeyword+"&sort="+sort+"&begin_date="+beginDate+"&end_date="+endDate+"&callback=sv c_search_v2_articlesearch&api-key="+searchAPIKey, function (data) {
    
        var retrievedData = data.response.docs,
            urlLink = "",
            snippet = "",
            $responseParagraph = $("<p>");
            
        
        for (var i = 0; i < retrievedData.length; i++){
            console.log(retrievedData[i]);
            //console.log(retrievedData[i].web_url);
            urlLink = retrievedData[i].web_url;
            snippet = retrievedData[i].snippet;
            imageUrl = retrievedData[i].multimedia.url;
            $("<a href ="+urlLink+">"+snippet+"</a><br>").appendTo($responseParagraph);
            }
        $(".returnedData").append($responseParagraph);
        });
        
    });
    
    
};
$(document).ready(main);