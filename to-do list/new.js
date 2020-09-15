var form=document.querySelector(".right-side-form")
var items=document.querySelector(".right-side-widgets ")

form.addEventListener('submit',addItems)
//add item
function addItems(e)
{
    e.preventDefault();
 

 //get input value
 var newItem=document.getElementById("item").value;

 var box1=document.createElement("div");
 box1.className="box1";
 var box1H3=document.createElement("h3");
 box1.appendChild(box1H3);
 box1H3.appendChild(document.createTextNode(newItem));

 var box1Button=document.createElement("button");
 box1Button.className="button";
 box1.appendChild(box1Button);
 items.appendChild(box1);

}
items.addEventListener('click',removeWidgets)

function removeWidgets(e)
{
    if(e.target.classList.contains('button'))
    {

if(confirm("are u sure"))
{
    
    var ll1=e.target.parentElement;
    items.removeChild(ll1);
}
    }
}