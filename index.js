let count = 0;
    const countDisplay = document.getElementById("count");

    function increaseCount() {
      count++;
      countDisplay.textContent = count;
    }

    function decreaseCount() {
      if (count > 0) {
        count--;
        countDisplay.textContent = count;
      }
    }

    function resetCount() {
      count = 0;
      countDisplay.textContent = count;
    }