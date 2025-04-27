document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('theme-toggle');
    const searchIcon = document.getElementById('search-icon');

    // Dropdowns toggle
    dropdowns.forEach(drop => {
      const link = drop.querySelector('a');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        drop.classList.toggle('active');
        dropdowns.forEach(otherDrop => {
          if (otherDrop !== drop) {
            otherDrop.classList.remove('active');
          }
        });
      });
    });

    // Hamburger toggle
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Click outside closes dropdown
    document.addEventListener('click', function(e) {
      dropdowns.forEach(drop => {
        if (!drop.contains(e.target) && !e.target.closest('.dropdown')) {
          drop.classList.remove('active');
        }
      });
    });

    // Theme toggle (light/dark mode)
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.toggle('dark-mode');
      
      // Change the icon too
      if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '☀️'; // sun icon for light mode
      } else {
        themeToggle.innerHTML = '🌙'; // moon icon for dark mode
      }
    });

    // Search icon click (just for demo for now)
    searchIcon.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Search clicked! (You can replace this with real search functionality)');
    });
  });