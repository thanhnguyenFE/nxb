var moreBtn = document.querySelector('.more-icon');
var moreText = document.querySelector('.describe .more-text');
var number;
var isMore = true;
    moreBtn.addEventListener('click',function(){
       if(isMore){ 
        moreBtn.innerHTML=`<i class="fa fa-sort-asc" aria-hidden="true"></i>`
        moreText.classList.remove('display-none')
        isMore=false;
    }
        else{
            moreBtn.innerHTML=`<i class="fa fa-sort-desc" aria-hidden="true"></i>`
            moreText.classList.add('display-none');
            isMore=true;
        } 
})