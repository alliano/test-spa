$(document).ready(function () {
    const checkURL = () => {
        return new URL(location.href)
    }

    ////////////////////////////
    //////PAGE-1CLICK//////////
    //////////////////////////


    function onLoad() {
           if (checkURL().hash === "#/page-1" || checkURL().hash === "index.html" || checkURL().hash === "" || checkURL().hash === "#/") {
            $(".content").load("../components/page-1.html");
            $.getJSON("../data/data.json", function (response) {
                console.log(checkURL().hash);
                $(".card .group").css({
                    "display": "flex",
                    "flexDirection": "column",
                    "border": "2px solid #fff",
                    "width": "maxContent",
                    "bacgroundColor" : "#fff"
                 })
                  const image = $(".card .group .img");
                // const data = document.querySelectorAll('.img');
                // console.log(data);


                const price = $(".card .group #price");
                const p = $('.card .group #name');
                for (let i = 0; i < image.length; i++){
                    $(image[i]).css({
                        "width": "150px",
                        "height": "150px",
                        "backgroundImage": `url(${response.product[i].imgPath})`,
                        "backgroundSize": "cover",
                        "borderRadius": "10px",
                        "backgroundPosition" : "-10px 0"
                        
                    })
                    $(p[i]).text(response.product[i].nameProduct);
                    $(price[i]).text(response.product[i].price)
                    
                }
            
            });

            
        } 
            //////////////////////
            //////PAGE-2-Click////
            //////////////////////


        if (checkURL().hash === "#/page-2") {
            $(".content").load("../components/page-2.html");
            console.log($(".card .group"));
             
            $.getJSON("../data/restourant.json", function (response) {
                $(".card .group").css({
                    "display": "flex",
                    "flexDirection": "column",
                    "width": "maxContent",
                    "bacgroundColor": "#fff",
                    "boxSizing" : "borderBox"
                })

                console.log(response.name[0].imgPath)
                const image = document.querySelectorAll(".img");
                let p = $(".card .group #price ");
                let name = $('.card .group #name');
                console.log(name);
                console.log(p)
                console.log(response.name[0].rate)
                for (let i = 0; i < image.length; i++) {
                    $(image[i]).css({
                        "height": "150px",
                        "width": "150px",
                        "backgroundImage": `url(${response.name[i].imgPath})`,
                        "backgroundSize": "cover",
                        "borderRadius" : "5px  "
                        
                    })
                    $(name[i]).text(response.name[i].restoName);
                    $(p[i]).text(response.name[i].rate);
                   
               }
               
            })
                
        }
        $("#indo").on("click", function () {
            let price = $(".card .group #price");
            $.getJSON("../convert/data.json", function (res) {
                if (checkURL().hash === "#/page-1") {
                    $(price[0]).text(res.indo.macbook);
                    $(price[1]).text(res.indo.samsung);
                    $(price[2]).text(res.indo.dell);
                    $(price[3]).text(res.indo.asusRog);   
                  
                }
            })
        })
        $("#amer").on("click", function () {
            let price = $(".card .group #price");
            $.getJSON("../convert/data.json", function (res) {
                if (checkURL().hash === "#/page-1") {
                    $(price[0]).text(res.america.macbook);
                    $(price[1]).text(res.america.samsung);
                    $(price[2]).text(res.america.dell);
                    $(price[3]).text(res.america.asusRog);   
                  
                }
            })
        })
        if (checkURL().hash === "#/page-3" || checkURL().hash === "#/page-4" || checkURL().hash === "#/products") {
        $()
    }
  }


    window.onhashchange = () => {
        

        onLoad();
        
    }
    onLoad();









})
