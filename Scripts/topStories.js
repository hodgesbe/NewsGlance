var main = function(){
        $.getJSON("http://api.nytimes.com/svc/topstories/v1/home.json?&api-key=f2e425449a8965c26dd227193dc3d9c5:15:71605180", function (topStories) {
        var newsStories = topStories.results;
    
    for(var i = 0; i < newsStories.length; i++){        
        var abstract = "",
            imageUrl = "",
            title = "",
            url = "",
            $newsArticle = $("<article>"),
            $imageDiv = $("<div class = \"image\"></div> "),
            $titleDiv = $("<div class = \"title\"></div>"),
            $abstractDiv = $("<div class = \"abstract\"></div>"),
            $linkDiv = $("<div class = \"link\"</div>");
        
            $($newsArticle).append($titleDiv);
            $($newsArticle).append($imageDiv);
            $($newsArticle).append($abstractDiv);
            $($newsArticle).append($linkDiv);
        
            title = newsStories[i].title;
            $("<h3>"+title+"</h3>").appendTo($titleDiv);
        
            if(newsStories[i].multimedia !== ""){
                imageUrl = newsStories[i].multimedia[newsStories[i].multimedia.length-1].url;
                $("<img src="+imageUrl+"><br>").appendTo($imageDiv);
            }
        
            abstract = newsStories[i].abstract;
            $("<p>"+abstract+"</p>").appendTo($abstractDiv);
        
            url = newsStories[i].url;
            $("<a href="+url+">Link to full New York Times article</a>").appendTo($linkDiv);
        
            $(".topStories").append($newsArticle);
        
            console.log(newsStories[i]);
    }

    });
};
$(document).ready(main);
