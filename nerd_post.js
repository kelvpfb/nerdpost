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
    document.getElementById("tvB").style.backgroundColor = "";
    document.getElementById("gamingB").style.backgroundColor = "";
    document.getElementById("horrorB").style.backgroundColor = "";
    document.getElementById("fantasyB").style.backgroundColor = "";
    document.getElementById("scifiB").style.backgroundColor = "";
    document.getElementById("tabletopB").style.backgroundColor = "";
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
    document.getElementById("allB").style.backgroundColor = "";
    document.getElementById("tvB").style.backgroundColor = "#17BE94";
    document.getElementById("gamingB").style.backgroundColor = "";
    document.getElementById("horrorB").style.backgroundColor = "";
    document.getElementById("fantasyB").style.backgroundColor = "";
    document.getElementById("scifiB").style.backgroundColor = "";
    document.getElementById("tabletopB").style.backgroundColor = "";
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
    document.getElementById("allB").style.backgroundColor = "";
    document.getElementById("tvB").style.backgroundColor = "";
    document.getElementById("gamingB").style.backgroundColor = "#17BE94";
    document.getElementById("horrorB").style.backgroundColor = "";
    document.getElementById("fantasyB").style.backgroundColor = "";
    document.getElementById("scifiB").style.backgroundColor = "";
    document.getElementById("tabletopB").style.backgroundColor = "";
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
    document.getElementById("allB").style.backgroundColor = "";
    document.getElementById("tvB").style.backgroundColor = "";
    document.getElementById("gamingB").style.backgroundColor = "";
    document.getElementById("horrorB").style.backgroundColor = "#17BE94";
    document.getElementById("fantasyB").style.backgroundColor = "";
    document.getElementById("scifiB").style.backgroundColor = "";
    document.getElementById("tabletopB").style.backgroundColor = "";
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
    document.getElementById("allB").style.backgroundColor = "";
    document.getElementById("tvB").style.backgroundColor = "";
    document.getElementById("gamingB").style.backgroundColor = "";
    document.getElementById("horrorB").style.backgroundColor = "";
    document.getElementById("fantasyB").style.backgroundColor = "#17BE94";
    document.getElementById("scifiB").style.backgroundColor = "";
    document.getElementById("tabletopB").style.backgroundColor = "";
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
    document.getElementById("allB").style.backgroundColor = "";
    document.getElementById("tvB").style.backgroundColor = "";
    document.getElementById("gamingB").style.backgroundColor = "";
    document.getElementById("horrorB").style.backgroundColor = "";
    document.getElementById("fantasyB").style.backgroundColor = "";
    document.getElementById("scifiB").style.backgroundColor = "#17BE94";
    document.getElementById("tabletopB").style.backgroundColor = "";
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
    document.getElementById("allB").style.backgroundColor = "";
    document.getElementById("tvB").style.backgroundColor = "";
    document.getElementById("gamingB").style.backgroundColor = "";
    document.getElementById("horrorB").style.backgroundColor = "";
    document.getElementById("fantasyB").style.backgroundColor = "";
    document.getElementById("scifiB").style.backgroundColor = "";
    document.getElementById("tabletopB").style.backgroundColor = "#17BE94";
}