document.addEventListener("DOMContentLoaded", function() {
    const readingsContent = document.getElementById("readings-content");

    // Add click event listeners to pills and blobs
    const pills = document.querySelectorAll(".readingpill");
    const blobs = document.querySelectorAll(".readingblob");

    pills.forEach(pill => {
        pill.addEventListener("click", function() {
            const content = this.getAttribute("data-content");
            updateReadingsContent(content);
        });
    });

    blobs.forEach(blob => {
        blob.addEventListener("click", function() {
            const content = this.getAttribute("data-content");
            updateReadingsContent(content);
        });
    });

    // Function to update readings view content
    function updateReadingsContent(content) {
        readingsContent.innerHTML = "";
        readingsContent.innerHTML = content;
    }
});

function displayImage(element) {
    var imageUrl = element.getAttribute('data-image');
    var linkUrl = element.getAttribute('data-link');

    var anchorElement = document.createElement('a');
    anchorElement.href = linkUrl;
    anchorElement.target = "_blank";

    var imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = "Image";
    imageElement.style.maxWidth = "100%";
    imageElement.style.maxHeight = "100%";
    imageElement.style.objectFit = "contain";
    
    anchorElement.appendChild(imageElement);
    
    var imageContainer = document.getElementById('project-image');
    imageContainer.innerHTML = '';
    imageContainer.appendChild(anchorElement);

    // Store the link URL for later use
    imageContainer.dataset.link = linkUrl;

    // Update the arrow link
    var arrowElement = document.getElementById('arrow');
    arrowElement.href = linkUrl;
}

// window.addEventListener('scroll', function() {
//     var spans = document.querySelectorAll('#title span');
//     var scrollTop = window.scrollY;

//     if (scrollTop > 0) {
//         spans.forEach(function(span, index) {
//             var rotation = scrollTop * 0.5; // Adjust the multiplier as needed
//             span.classList.add('rotate'); // Add rotation class
//             span.style.transform = 'rotate(' + rotation + 'deg)';
//         });
//     } else {
//         spans.forEach(function(span) {
//             span.classList.remove('rotate'); // Remove rotation class
//             span.style.transform = 'rotate(0deg)'; // Reset rotation
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY;
      var scrollContent = document.querySelector('.scroll-content');
  
      // Check if the device is in mobile view
      var isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
  
      // Scroll speed factor
      var scrollSpeed = isMobileView ? 0.5 : 1; // Adjust the scroll speed for mobile view
  
      scrollContent.style.transform = 'translateX(-' + (scrollY * scrollSpeed) + 'px)';
    });
  });
  

  