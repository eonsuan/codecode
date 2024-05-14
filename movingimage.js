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