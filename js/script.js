
var urls = 
    [
        {
            serverName: 'YEEE BOI',
            url: 'http://localhost:4000/health/0'
        }, 
        {
            serverName: '\_(-_-)_/',
            url: 'http://localhost:4000/health/1'
        },
        {
            serverName: 'LOL :D',
            url: 'http://localhost:4000/health/2'
        },
        {
            serverName: 'LOL fsfsda:D',
            url: 'http://localhost:4001/health/2'
        }
    ]
window.onload = function() {

    var i = 0;

    for (var count = 1; count <= urls.length; count++) {
        
        var divServer = document.createElement("div");
        divServer.className = "server";
        divServer.id = "server"; 

            var divBetween = document.createElement("div");
            divBetween.className = "between";
            divBetween.id = "between";

                var divName = document.createElement("div");
                divName.id = "name";
                divBetween.appendChild(divName);

                    var myServerName = document.createElement("p");
                    myServerName.className = "server__name";
                    myServerName.innerHTML = urls[i].serverName;
                    divName.appendChild(myServerName); 
                
                var divBetweenSecond = document.createElement("div");
                divBetweenSecond.className = "betweenSecond";

                    var divStatus = document.createElement("div");
                    divStatus.className = "server__status";
                    divStatus.id = "status" + i;
                    divBetweenSecond.appendChild(divStatus);

                        var myServerStatus = document.createElement("p");
                        myServerStatus.className = "server__status-info";
                        myServerStatus.innerHTML = "Status:";
                        divStatus.appendChild(myServerStatus);

                    var spanForInfo = document.createElement("span");
                    spanForInfo.className = "menuTrigger";
                    spanForInfo.id = "hamburger";
                    spanForInfo.onclick = ShowOrHide;
                    divBetweenSecond.appendChild(spanForInfo);

                        var spanForHamburger = document.createElement("span");
                        spanForHamburger.className = "mainLine";
                        spanForInfo.appendChild(spanForHamburger);

                divBetween.appendChild(divBetweenSecond);

            divServer.appendChild(divBetween);

            var divColumn = document.createElement("div");
            divColumn.className = "column";
            divColumn.id = "column" + i;

                    var divInfo = document.createElement("div");
                    divInfo.className = "info";
                    divInfo.id = "info" + i;
                    divColumn.appendChild(divInfo);

            divServer.appendChild(divColumn);

            var myLine = document.createElement("hr");
            myLine.className = "line";
            divServer.appendChild(myLine);

        document.getElementById("servers").appendChild(divServer);

        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', urls[i].url, false);
            xhr.send(urls[i].url);
            var obj = JSON.parse(xhr.responseText);
            var items = Object.keys(obj);
        }catch(err) {
            var myItem = document.createElement("p");
            myItem.className = "server__info-item";
            myItem.innerHTML = err.name + ' : ' + err.message;
            document.getElementById("info" + i).appendChild(myItem);
        }
        if (xhr.status == 200) {

            for (var n = 0; n < items.length; n++) {
                var myItem = document.createElement("p");
                myItem.className = "server__info-item";
                myItem.innerHTML = items[n] + ' : ' + obj[items[n]];
                document.getElementById("info" + i).appendChild(myItem); 
            }      

            var myImg = document.createElement("div");
            myImg.className = "server__status-img";
            document.getElementById("status" + i).appendChild(myImg); 

        }else if (xhr.status == 401) {
            for (var n = 0; n < items.length; n++) {
                var myItem = document.createElement("p");
                myItem.className = "server__info-item";
                myItem.innerHTML = items[n] + ' : ' + obj[items[n]];
                document.getElementById("info" + i).appendChild(myItem); 
            }

            var myImg = document.createElement("div");
            myImg.className = "server__status-img-false";
            document.getElementById("status" + i).appendChild(myImg); 
        }
        else {

            var myImg = document.createElement("div");
            myImg.className = "server__status-img-false";
            document.getElementById("status" + i).appendChild(myImg); 
        }   
        if (i <= urls.length - 1) {
            i++;
        }   
    }
    function Show(index, burger) {
        $("#column" + index ).show(); 
        $(burger).toggleClass('menuToggle');
        console.log("true"); 
    }
    function Hide(index, burger) {
        $("#column" + index ).hide(); 
        $(burger).removeClass('menuToggle');
        console.log("false");
    }
    function ShowOrHide() {
        var divs = document.querySelectorAll("span#hamburger");
        var index = Array.prototype.indexOf.call(divs, this);
        
        console.log(index);
        var burger = $(".menuTrigger");
        var burgerClass = burger[index].getAttribute("class")
        console.log(burgerClass.includes('menuToggle'));

        if (burgerClass.includes('menuToggle')) {
            Hide(index, burger[index]);
        }else {
            Show(index, burger[index]);
        }
        
    }
}

