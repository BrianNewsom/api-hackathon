var userComments = {
    load: function() {

        $.get("/api-hackathon/userComments/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        /*
        // default search results
        legislators.searchByChamber('senate')
        */

    }

}
