const Btn = document.querySelector('.share');

const shareContainer = document.querySelector('.share-images');
const imgShare = document.querySelector('#btn-img path');
const area = document.querySelector('.info');
const person = document.querySelector('#Person');
const photo = document.querySelector('#Photo');
const shareForMobile = document.querySelector('#in-share-inmages-share');

const facebook = document.querySelector('#fc');
const pinterest = document.querySelector('#pin');
const twitter = document.querySelector('#tw');
const textShare = document.querySelector('#text-share');

const container = document.querySelector('.container')

Btn.addEventListener('click', () => {
    if((document.querySelector('body').getBoundingClientRect().width) > 425){
        if (shareContainer.style.display === 'none') {

            shareContainer.style.display = 'grid';
            const coordOfBtn = Btn.getBoundingClientRect();
            const coordOfContainer = shareContainer.getBoundingClientRect();
    
            shareContainer.style.left = `${coordOfBtn.left + coordOfBtn.width/2 - coordOfContainer.width/2}px`;
            shareContainer.style.top = `${coordOfBtn.top - coordOfContainer.height*1.3 }px`
    
            Btn.style.background = 'hsl(214, 17%, 51%)';
    
            imgShare.setAttribute('fill','hsl(210, 46%, 95%)');
    
        } else {
            imgShare.setAttribute('fill', '#6E8098');
            shareContainer.style.display = 'none';
            Btn.style.background = 'hsl(210, 46%, 95%)'; 
        }
    }
    else{
        if (person.style.display!=='none'||photo.style.display!=='none') {


            area.style.background = 'hsl(217, 19%, 35%)';
            area.style.margin = '0%';
            area.style.padding = '4%'
            area.style.width = '92%';
            area.style.display = 'grid';
            area.style.borderRadius = '0rem 0rem 1rem 1rem';
            twitter.style.margin = '0 3rem 0 0';
            area.style.gridTemplateColumns='auto auto auto auto 15%';

            area.style.alignItems= 'center';
            area.style.justifyItems =  'center';
            area.style.height = '3rem'
            area.style.letterSpacing = '0.4rem';

            area.appendChild(textShare);
            area.appendChild(facebook);
            area.appendChild(pinterest);
            area.appendChild(twitter);
            
            person.style.display='none';
            photo.style.display='none';

            Btn.style.background = 'hsl(214, 17%, 51%)';
    
            imgShare.setAttribute('fill','hsl(210, 46%, 95%)');
    
        } else {
            shareContainer.style.display = 'none';
            shareContainer.style.display = 'none';
            area.appendChild(Btn);

            person.style.display='block';
            photo.style.display='inline-block';


            imgShare.setAttribute('fill', '#6E8098');

            
            Btn.style.background = 'hsl(210, 46%, 95%)';

            area.style.background = 'white'; 
            area.style.padding = '4%';
            area.style.width = '92%';
            area.style.borderRadius = '0rem 0rem 1rem 1rem';
            area.style.gridTemplateColumns='15% 70% 15%';
            area.style.justifyItems =  'left';
            area.style.letterSpacing = '0';

            area.removeChild(textShare);
            area.removeChild(facebook);
            area.removeChild(pinterest);
            area.removeChild(twitter);
        }
    }
});