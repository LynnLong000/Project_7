/* global $ */ 

$(document).ready(function(){
    $('#search').click(function(){
        
        // search input 
        var searchTerm = $('#searchTerm').val();
        
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?"; 

        /*   was not able to use this had to use the long version
        $.ajax({
            type:"GET",
            url:url,
            async:false,
            datatype:"json",
            success:function(data){
                console.log(data);
            },
            error:function(errorMessage){
            alert("Error");
            }
        }); */
        
        $.getJSON(url,function(data){
            // console.log(data); test
            
            $('#output').html('');
            
            for(var i =0;i<data[1].length;i++){
                $('#output').prepend("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
            }
        });
    });
});