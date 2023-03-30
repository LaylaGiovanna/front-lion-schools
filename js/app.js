'use stric'

//alert("js works")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Creater Header
const createHeader = function(){

    //this part creates the base of the header

    let contentHeader = document.createElement("div");
    contentHeader.id = "heather_content"
    contentHeader.className = "heather_content"
    header.appendChild(contentHeader) 

    //this one is responsable for the contents and another divs inside it
    let contentHeaderrLeft = document.createElement("div");
    contentHeaderrLeft.id = "left_header"
    heather_content.appendChild(contentHeaderrLeft) 
    // image of header left
    var logoSite = document.createElement("img")
    logoSite.src = "../img/logoLion.png" 
    logoSite.alt = "Logo lion school";
    document.getElementById("left_header").appendChild(logoSite)
    //text of header left
    var p = document.createElement("p");
    var output = document.getElementById('left_header');
    p.appendChild(document.createTextNode("Lion"));
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode("School"));
    output.appendChild(p);

    //left header
    let contentFooterRight = document.createElement("div");
    // contentFooterRight.textContent = "Sair"
    contentFooterRight.id = "rigth_header"
    heather_content.appendChild(contentFooterRight) 
    // button header rigth
    let buttonFooterRIgth = document.createElement("button");
    buttonFooterRIgth.id = "button_header"
    rigth_header.appendChild(buttonFooterRIgth)
    rigth_header.appendChild(document.createTextNode("sair"));

}
createHeader()
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Makes the button function
const adicionar = document.getElementById('button_header')

const adicionarCard= () => {
    history.back()
}

adicionar.addEventListener('click', adicionarCard)


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//creates footer

const createFooter = function(){
    let contentFooter = document.createElement("div");
    contentFooter.id = "footer_content"
    contentFooter.className = "footer_content"
    footer.appendChild(contentFooter) 

    //the left
    let contentFooterLeft = document.createElement("div");
    let phoneNumber = "(11) 4774-4700"
    let email = "lionschool@gmail.com"
    let place = "Rua tcc, 211,  Centro, Jandira"
    contentFooterLeft.textContent = phoneNumber + email + place
    contentFooterLeft.className = "footer_content_left"
    footer_content.appendChild(contentFooterLeft) 

    //the center
    let contentFooterCenter = document.createElement("div");
    contentFooterCenter.textContent = "Copyright © 2022 | Layla Giovanna | A. Beatriz Landi"
    contentFooterCenter.className = "footer_content_center"
    footer_content.appendChild(contentFooterCenter) 

    //the rigth
    let contentFooterRight = document.createElement("div");
    contentFooterRight.textContent = "Copyright © 2022 | Layla Giovanna | A. Beatriz Landi"
    contentFooterRight.className = "footer_content_rigth"
    footer_content.appendChild(contentFooterRight) 
    
}
createFooter()