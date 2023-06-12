


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsonArray = JSON.parse(this.responseText);

        var idList = ["first", "second", "third", "fourth", "fifth"];

        for(let i = 0; i < 5; i++){
            if (jsonArray[i].info[0].online == false)
            {
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.display ="flex";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.width ="72px";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.background ="#4F4F4F";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.color ="#FFFFFF";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.marginLeft = "-36px";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].innerHTML = "ОТКЛЮЧЕН";
            }
            else{
                document.getElementById(idList[i] + '-text').getElementsByClassName('online')[0].innerHTML = jsonArray[i].info[0].players;
                document.getElementById(idList[i] + '-text').getElementsByClassName('maxonline')[0].innerHTML = jsonArray[i].info[0].maxplayers;
                if(jsonArray[i].info[0].players == jsonArray[i].info[0].maxplayers)
                {
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.display ="flex";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.width ="120px";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.background ="#F2C94C";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.color ="#0E0E0E";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].style.marginLeft = "-60px";
                document.getElementById(idList[i]).getElementsByClassName('status')[0].innerHTML = "ВСЕ СЛОТЫ ЗАНЯТЫ";
                document.getElementById(idList[i]).style.border = "1px solid #F2C94C";
                document.getElementById(idList[i]).getElementsByClassName('indicator')[0].style.background = "#F2C94C";
                document.getElementById(idList[i]).getElementsByClassName('indicator')[0].style.boxShadow = "0 0 10px #F2C94C";
                document.getElementById(idList[i]).getElementsByClassName('line')[0].getElementsByClassName('progress')[0].style.display = "block";
                document.getElementById(idList[i]).getElementsByClassName('line')[0].getElementsByClassName('progress')[0].style.width = "100%";
                document.getElementById(idList[i]).getElementsByClassName('line')[0].getElementsByClassName('progress')[0].style.background ="#F2C94C";
                document.getElementById(idList[i] + '-text').getElementsByClassName('online')[0].style.color = "#F2C94C";
                }
                else
                {
                    document.getElementById(idList[i]).getElementsByClassName('indicator')[0].style.background = "#FFFFFF";
                    document.getElementById(idList[i]).getElementsByClassName('indicator')[0].style.boxShadow = "0 0 10px 3px #FFFFFF";
                    document.getElementById(idList[i]).getElementsByClassName('line')[0].getElementsByClassName('progress')[0].style.display = "block";
                    document.getElementById(idList[i]).getElementsByClassName('line')[0].getElementsByClassName('progress')[0].style.width = ((jsonArray[i].info[0].players / jsonArray[i].info[0].maxplayers) * 100) + '%';
                    document.getElementById(idList[i]).getElementsByClassName('line')[0].getElementsByClassName('progress')[0].style.background ="#C4C4C4";
                    document.getElementById(idList[i] + '-text').getElementsByClassName('online')[0].style.color = "#FFFFFF";
                }
            }
        }
        
    }
        
};
xmlhttp.open("GET", "none", true);
xmlhttp.send();

