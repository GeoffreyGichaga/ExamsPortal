function courseFunction()
{
    window.location="../portal.html";
}





function homeFunction()
{
    window.location="../index.html";
}


function testsFunction()
{
    window.location="../index.html";
}
function logoutFunction()
{
    alert("You are about to logout of your account")
    window.location="../index.html";
}




function result(){
    var score=0;

    if(document.getElementById('correct1').checked)
    {
        score ++;
    }

    if(document.getElementById('correct2').checked)
    {
        score ++;
    }

    if(document.getElementById('correct3').checked)
    {
        score ++;
    }


    if(document.getElementById('correct4').checked)
    {
        score ++;
    }

    if(document.getElementById('correct5').checked)
    {
        score ++;
    }

    if(document.getElementById('correct6').checked)
    {
        score ++;
    }

    if(document.getElementById('correct7').checked)
    {
        score ++;
    }


    if(document.getElementById('correct8').checked)
    {
        score ++;
    }


    if(document.getElementById('correct9').checked)
    {
        score ++;
    }


    if(document.getElementById('correct10').checked)
    {
        score ++;
    }



    alert("Your have scored:" +score+ " Marks");
    window.location="../portal.html";
}


