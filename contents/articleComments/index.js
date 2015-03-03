var articleComments = {
    load: function() {

        $.get("/api-hackathon/articleComments/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

    },

    searchByName: function() {
        alert('todo');
    }

}
