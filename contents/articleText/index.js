var articleText = {


    load: function() {

        $.get("/api-hackathon/articleText/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })
        /*

        // default search results
        legislators.searchByChamber('senate')
        */

    },

    searchByName: function(subreddit){
        $.get('https://enigmatic-basin-9438.herokuapp.com/r/' + subreddit, function(data){
            var title = data.data.children[0].data.title;
            $.get('/api-hackathon/articleText/list.jade', function(template){
                var html = jade.render(template, {title : title});
                $("#list").html(html);
            })

        });
        alert('todo');
    }

}
