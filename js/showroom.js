$(function(){
    //start 

    $.ajax({
        url:'data/showroom_data.json',
        success:function(data){

            let place, address,showroomInfo= '', idx=0;
            
            data.showroom_table.forEach(function(h){
                showroomInfo +=`<ul><li class="the_place_store">${h.place}</li>
                <li class="the_place_address">${h.address}</li>
                <li class="arrow"><img src="img/green_arrow.png" alt=""></li></ul>`
                
            })
            place = data.showroom_table[idx].place;
            address = data.showroom_table[idx].address;
            maptimestamp = data.showroom_table[idx].maptimestamp;
            mapkey = data.showroom_table[idx].mapkey;
            $('.the_place').html(showroomInfo)



            $('.arrow > img').on('click', function(){
                var currentClass = $(this).hasClass("active");
                $(this).addClass('active');
                if(currentClass !== 'active'){
                    $(this).removeClass('active');
                }
                $('.map-1').show()
            })
                        
        },
        error:function(e){
            console.log(e.status);
            console.log(e.error);
            console.log(e.responseText);
            
        }

    })
})

