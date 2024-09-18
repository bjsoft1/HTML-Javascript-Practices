document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container');
    const innerContainer = document.createElement('div');
    innerContainer.className = 'inner-container';
    container.appendChild(innerContainer);
  
    // Move all boxes into the inner container
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => innerContainer.appendChild(box));
  
    // Function to resume scrolling after a delay
    function resumeScrolling() {
      setTimeout(() => {
        innerContainer.style.animationPlayState = 'running';
      }, 3000); // 3 seconds delay
    }
  
    // Pause scrolling on hover and resume after delay
    container.addEventListener('mouseover', () => {
      innerContainer.style.animationPlayState = 'paused';
    });
    container.addEventListener('mouseout', resumeScrolling);
  });
  