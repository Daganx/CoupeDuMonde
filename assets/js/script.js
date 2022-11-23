let teams = [
    {'country':'France','groupe':'D','classement':'4','image':'https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_48x48.png','vote': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Qatar','groupe':'A','classement':'50','image':'https://ssl.gstatic.com/onebox/media/sports/logos/h0FNA5YxLzWChHS5K0o4gw_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Pays-Bas','groupe':'A','classement':'8','image':'https://ssl.gstatic.com/onebox/media/sports/logos/8GEqzfLegwFFpe6X2BODTg_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Angleterre','groupe':'B','classement':'5','image':'https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Australie','groupe':'D','classement':'38','image':'https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Espagne','groupe':'E','classement':'7','image':'https://ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Allemagne','groupe':'E','classement':'11','image':'https://ssl.gstatic.com/onebox/media/sports/logos/h1FhPLmDg9AHXzhygqvVPg_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Brésil','groupe':'G','classement':'1','image':'https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Suisse','groupe':'G','classement':'15','image':'https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Portugal','groupe':'H','classement':'9','image':'https://ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Uruguay','groupe':'H','classement':'14','image':'https://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Argentine','groupe':'C','classement':'3','image':'https://ssl.gstatic.com/onebox/media/sports/logos/1xBWyjjkA6vEWopPK3lIPA_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Mexique','groupe':'C','classement':'13','image':'https://ssl.gstatic.com/onebox/media/sports/logos/yJF9xqmUGenD8108FJbg9A_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Etats-Unis','groupe':'B','classement':'16','image':'https://ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Belgique','groupe':'F','classement':'2','image':'https://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
    {'country':'Croatie','groupe':'F','classement':'12','image':'https://ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_48x48.png','vote':'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png'},
]
    let modalDiv = document.getElementById('modal');
    let teamsSorted = teams.sort(classement);
function getTeams(){
    let tableTeams =document.getElementById('tableTeams');
    teams.forEach( team => {
        //creation de l'element tr qui va par la suite contenir tout les td par pays
       let trContainer = document.createElement('tr');
       //creation des elements td pour chaque element de chaque pays qui va contenir les values
       let tdCountry = document.createElement('td');
        tdCountry.classList.add('countryClass');
       let tdGroup = document.createElement('td');
       let tdClassement = document.createElement('td');
       let tdImgFlag = document.createElement('td')
       let imgFlag = document.createElement('img');
       let imgStars = document.createElement('img');

       imgStars.classList.add('imgStars');

       //recuperation des value a afficher sur le dom dans mon tableau
       let textCountry= document.createTextNode(team.country);
       let textGroupe =document.createTextNode(team.groupe);
       let textClassement= document.createTextNode(team.classement);
       imgFlag.setAttribute('src', team.image);
       imgFlag.setAttribute('class', 'flag');
       imgStars.setAttribute('src', team.vote)
        //injection des values dans les td
        tdCountry.appendChild(textCountry);
        tdGroup.appendChild(textGroupe);
        tdClassement.appendChild(textClassement);
        tdImgFlag.appendChild(imgFlag);   
        //Injecter sur le dom
        tableTeams.appendChild(imgFlag);
        tableTeams.appendChild(tdCountry);
        tableTeams.appendChild(tdGroup);
        tableTeams.appendChild(tdClassement);
    })
    listenModal();
}
function listenModal() {
    const flags = document.querySelectorAll('.flag');
    flags.forEach( (flag)=>{
        flag.addEventListener('click', ()=>{
            modalDiv.classList.remove('displayNone');
            showModal(flag);
        }) 
    }) 
}

function showModal(flag){
    let imgModal = document.createElement('img');
    imgModal.setAttribute('src', flag.src)
    modalDiv.innerHTML = ' ';
    modalDiv.appendChild(imgModal);
 
}

function closeModal(){
        modalDiv.classList.add('displayNone');
}


modalDiv.addEventListener('click', ()=>{
    closeModal();
})


getTeams();