window.onload = function() {
    let likes = parseInt(document.getElementsByClassName('like_button_likes')[0].textContent)
    document.getElementsByClassName('like_button_checkbox')[0].onclick = function() {
        if (document.getElementsByClassName('like_button_checkbox')[0].checked){
            document.getElementsByClassName('like_button')[0].style.border = '1px solid #BC9CFF';
            likes += 1;
            document.getElementsByClassName('like_button_likes')[0].textContent = likes;
        }else{
            document.getElementsByClassName('like_button')[0].style.border = '1px solid rgba(31, 32, 65, 0.25)';
            likes -= 1;
            document.getElementsByClassName('like_button_likes')[0].textContent = likes;
        };
    };
};
// чистый js та еще гадость