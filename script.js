const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
     const countSpan = document.getElementById('count');
      let count = 0;
      function updateCount() {
      countSpan.textContent = count;
    }
incrementBtn.addEventListener('click', function() {
      count++;
      updateCount();
    });
    decrementBtn.addEventListener('click', function() {
      count--;
      updateCount();
    });
   