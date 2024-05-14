/* 눈 */

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '✴︎';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random duration between 5s to 10s
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px'; // Random size between 10px to 30px
    document.body.appendChild(snowflake);
    setTimeout(() => {
      snowflake.remove();
    }, 10000); // Remove snowflake after 10 seconds
  }
  
  setInterval(createSnowflake, 300);



  // 페이지 로드 시 코멘트들을 localStorage에서 불러와서 화면에 표시하는 함수
window.onload = function() {
    loadComments();
};

// 제출 버튼 클릭 시, Enter 키 눌렀을 때 코멘트 추가
document.getElementById('submitBtn').addEventListener('click', function() {
    addComment();
});

document.getElementById('commentInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addComment();
    }
});

// 코멘트 추가 함수
function addComment() {
    var commentText = document.getElementById('commentInput').value;
    var minX = window.innerWidth * 0.1;
    var maxX = window.innerWidth * 0.9;
    var minY = window.innerHeight * 0.1;
    var maxY = window.innerHeight * 0.9;
    var randomX = minX + Math.random() * (maxX - minX);
    var randomY = minY + Math.random() * (maxY - minY);

    var commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.style.left = randomX + 'px';
    commentDiv.style.top = randomY + 'px';
    commentDiv.textContent = commentText;

    document.body.appendChild(commentDiv);

    // 코멘트를 localStorage에 저장
    saveComment(commentText, randomX, randomY);

    document.getElementById('commentInput').value = '';
}


// 코멘트를 localStorage에 저장하는 함수
function saveComment(text, x, y) {
    // 기존에 저장된 코멘트를 불러옵니다.
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ text: text, x: x, y: y });

    // 새로운 코멘트를 저장합니다.
    localStorage.setItem('comments', JSON.stringify(comments));
}
 

// 페이지 로드 시 저장된 코멘트를 불러와서 화면에 표시하는 함수
function loadComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(function(comment) {
        var commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.style.left = comment.x + 'px';
        commentDiv.style.top = comment.y + 'px';
        commentDiv.textContent = comment.text;
        document.body.appendChild(commentDiv);
    });
}

