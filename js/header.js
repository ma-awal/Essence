document.addEventListener('DOMContentLoaded', function () {
  const headings = document.querySelectorAll('.nav-heading p');
  let currentIndex = 0;

  // Function to show current heading
  function showHeading(index) {
    headings.forEach((heading, i) => {
      if (i === index) {
        heading.style.display = 'block';
      } else {
        heading.style.display = 'none';
      }
    });
  }

  // Show initial heading
  showHeading(currentIndex);

  // Event listener for previous button
  document.querySelector('.prevBtn').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + headings.length) % headings.length;
    showHeading(currentIndex);
  });

  // Event listener for next button
  document.querySelector('.nextBtn').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % headings.length;
    showHeading(currentIndex);
  });
});
