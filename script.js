const $myInput = document.getElementById("myText")

const $myBtn = document.getElementById("btn")

const $ul = document.getElementById("unOrdered")

function addListItem(){
    const text = $myInput.value.trim();

    if (text !== "") {
    const $li = document.createElement('li')

    $li.innerText = $myInput.value

    $ul.appendChild($li)

    $myInput.value = "" 

    console.log()
    }

}
$myBtn.addEventListener( 'click' , addListItem);

$myInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addListItem();
    }
  });
 