function showAll()
{
    var i;
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        li[i].style.display = "";
    }
    document.getElementById("allB").style.backgroundColor = "#17BE94";
    document.getElementById("tvB").style.backgroundColor = "#FFFFFF";
    document.getElementById("gamingB").style.backgroundColor = "#FFFFFF";
    document.getElementById("horrorB").style.backgroundColor = "#FFFFFF";
    document.getElementById("fantasyB").style.backgroundColor = "#FFFFFF";
    document.getElementById("scifiB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tabletopB").style.backgroundColor = "#FFFFFF";
}

function showTV()
{
    var i;
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        if ($(li[i]).hasClass("tv"))
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
    document.getElementById("allB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tvB").style.backgroundColor = "#17BE94";
    document.getElementById("gamingB").style.backgroundColor = "#FFFFFF";
    document.getElementById("horrorB").style.backgroundColor = "#FFFFFF";
    document.getElementById("fantasyB").style.backgroundColor = "#FFFFFF";
    document.getElementById("scifiB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tabletopB").style.backgroundColor = "#FFFFFF";
}

function showGaming()
{
    var i;
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        if ($(li[i]).hasClass("gaming"))
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
    document.getElementById("allB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tvB").style.backgroundColor = "#FFFFFF";
    document.getElementById("gamingB").style.backgroundColor = "#17BE94";
    document.getElementById("horrorB").style.backgroundColor = "#FFFFFF";
    document.getElementById("fantasyB").style.backgroundColor = "#FFFFFF";
    document.getElementById("scifiB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tabletopB").style.backgroundColor = "#FFFFFF";
}

function showHorror()
{
    var i;
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        if ($(li[i]).hasClass("horror"))
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
    document.getElementById("allB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tvB").style.backgroundColor = "#FFFFFF";
    document.getElementById("gamingB").style.backgroundColor = "#FFFFFF";
    document.getElementById("horrorB").style.backgroundColor = "#17BE94";
    document.getElementById("fantasyB").style.backgroundColor = "#FFFFFF";
    document.getElementById("scifiB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tabletopB").style.backgroundColor = "#FFFFFF";
}

function showFantasy()
{
    var i;
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        if ($(li[i]).hasClass("fantasy"))
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
    document.getElementById("allB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tvB").style.backgroundColor = "#FFFFFF";
    document.getElementById("gamingB").style.backgroundColor = "#FFFFFF";
    document.getElementById("horrorB").style.backgroundColor = "#FFFFFF";
    document.getElementById("fantasyB").style.backgroundColor = "#17BE94";
    document.getElementById("scifiB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tabletopB").style.backgroundColor = "#FFFFFF";
}

function showSciFi()
{
    var i;
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        if ($(li[i]).hasClass("scifi"))
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
    document.getElementById("allB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tvB").style.backgroundColor = "#FFFFFF";
    document.getElementById("gamingB").style.backgroundColor = "#FFFFFF";
    document.getElementById("horrorB").style.backgroundColor = "#FFFFFF";
    document.getElementById("fantasyB").style.backgroundColor = "#FFFFFF";
    document.getElementById("scifiB").style.backgroundColor = "#17BE94";
    document.getElementById("tabletopB").style.backgroundColor = "#FFFFFF";
}

function showTabletop()
{
    var i;
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        if ($(li[i]).hasClass("tabletop"))
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
    document.getElementById("allB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tvB").style.backgroundColor = "#FFFFFF";
    document.getElementById("gamingB").style.backgroundColor = "#FFFFFF";
    document.getElementById("horrorB").style.backgroundColor = "#FFFFFF";
    document.getElementById("fantasyB").style.backgroundColor = "#FFFFFF";
    document.getElementById("scifiB").style.backgroundColor = "#FFFFFF";
    document.getElementById("tabletopB").style.backgroundColor = "#17BE94";
}