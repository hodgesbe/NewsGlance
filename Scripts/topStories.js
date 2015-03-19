var main = function(){
        $.getJSON("http://api.nytimes.com/svc/topstories/v1/home.json?&api-key=f2e425449a8965c26dd227193dc3d9c5:15:71605180", function (topStories) {
        var newsStories = topStories.results,
            abstract = "",
            imageUrl = "",
            title = "",
            $newsArticle = $("<article>"),
            $imageDiv = $("<div class = \"image\"></div> "),
            $titleDiv = $("<div class = \"title\"></div>"),
            $abstractDiv = $("<div class = \"abstract\"></div>");
        
        for (var i = 0; i<newsStories.length; i++){
            $newsArticle = $("<article>");
            abstract = "";
            title = "";
            imageUrl = "";
            console.log(newsStories[i]);
            abstract = newsStories[i].abstract;
            if(newsStories[i].multimedia !== ""){
                imageUrl = newsStories[i].multimedia[0].url
            }
            title = newsStories[i].title;
            $("<h2>"+title+"</h2>").appendTo($titleDiv).appendTo($newsArticle);
            $("<img src="+imageUrl+"><br>").appendTo($imageDiv).appendTo($newsArticle);
            $("<p>"+abstract+"</p><br>").appendTo($abstractDiv).appendTo($newsArticle);
            $(".topStories").append($newsArticle);
        }
            //$(".topStories").append($newsArticle);
    });
};
$(document).ready(main);