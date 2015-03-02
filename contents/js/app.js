$( "#query" ).on( "click", function( event ) {
    query.load()
})

$( "#articleComments" ).on( "click", function( event ) {
    articleComments.load()
})

$('#articleText').on("click", function(event){
    articleText.load()
})

$('#userComments').on("click", function(event){
    userComments.load()
})
