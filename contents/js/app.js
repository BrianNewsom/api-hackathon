$( "#query" ).on( "click", function( event ) {
    query.load()
})

$( "#top" ).on( "click", function( event ) {
    top.load()
})

$('#subReddit').on("click", function(event){
    subReddit.load()
})

$('#userComments').on("click", function(event){
    userComments.load()
})
