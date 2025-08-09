
const mainTitle = document.getElementById('main-title'); 

const updateButton = document.querySelector('.update-btn');


const paragraphs = document.getElementsByTagName('p');
        
        updateButton.addEventListener('click', function() 
        {
        mainTitle.textContent = "Hollo sir";
                document.querySelector('#main-title').style.color = 'blue';
            if (paragraphs.length > 0) {
                paragraphs[0].textContent = "ASSIGNMENT 9 COMPLITED";
            }
        })
        