$( "#query" ).on( "click", function( event ) {
    query.load()
})

$( "#articleComments" ).on( "click", function( event ) {
    articleComments.load()
})

$('#subReddit').on("click", function(event){
    subReddit.load()
})

$('#userComments').on("click", function(event){
    userComments.load()
})
