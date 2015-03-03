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

    searchByName: function(){
        alert('todo');
    }

}
