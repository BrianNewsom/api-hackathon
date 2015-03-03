var query = {
    load: function() {

        $.get("/api-hackathon/query/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

    }

}
