document.getElementById("buttons").addEventListener('click', function(){
    document.querySelector(".shareText").style.display ='flex';
    document.getElementById("closeButton").style.display ='inline-block';
    document.getElementById("buttons").style.display ='none';
});

function notInit(){
    document.querySelector(".shareText").style.display ='none';
    document.getElementById("buttons").style.display ='inine-block';
    document.getElementById("closeButton").style.display ='flex';

};

document.getElementById("closeButton").addEventListener('click', notInit);

document.getElementById("closeButtonOne").addEventListener('click', notInit);