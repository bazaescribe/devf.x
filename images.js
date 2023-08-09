function paintImagesInFolder(folderUrl, divId) {
    const targetDiv = document.getElementById(divId);
  
    fetch(folderUrl)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const imgElements = doc.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".jpeg"]');
  
        imgElements.forEach(imgElement => {
          const imgSrc = imgElement.getAttribute('href');
  
          // Create the <img> element
          const img = document.createElement('img');
          img.src = imgSrc;
  
          // Add class attribute
          img.classList.add('company'); // Add the class 'company'
  
          // Generate alt description from file name
          const fileName = imgElement.getAttribute('href');
          const altDescription = fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.')); // Extract just the filename without folder and extension
          img.alt = altDescription.replace(/_/g, ' '); // Replace underscores with spaces
  
          // Append the <img> element to the target div
          targetDiv.appendChild(img);
        });
      })
      .catch(error => {
        console.error('Error fetching or processing images:', error);
      });
  }
  
  // Call the function with the folder URL and div ID
  paintImagesInFolder('img/assets/companies/', 'companies');
  