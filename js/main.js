// Content management system
const contentTemplates = {
  about: "about-content",
  nib: "nib-content",
  "greater-bank": "greater-bank-content",
  "university-of-newcastle": "university-of-newcastle-content",
  sa11y: "sa11y-content",
  a11ycat: "a11ycat-content",
  "figma-plugins": "figma-plugins-content",
  "dynamic-type": "dynamic-type-content",
  "design-playbook": "design-playbook-content",
};

// Load content into the right column
function loadContent(contentId) {
  const contentArea = document.getElementById("content-area");
  const template = document.getElementById(
    contentTemplates[contentId] || "about-content"
  );

  if (template) {
    // Clone template content
    const content = template.content.cloneNode(true);

    // Clear and add new content with fade effect
    contentArea.style.opacity = "0";

    setTimeout(() => {
      contentArea.innerHTML = "";
      contentArea.appendChild(content);
      contentArea.style.opacity = "1";

      // Scroll to top of content area
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Setup expandable media after content loads
      setupExpandableMedia();

      // Setup media loading states (fade-in animations)
      setupMediaLoadingStates();

      // Setup lazy videos and iframes
      setupLazyVideos();
      setupLazyIframes();
    }, 150);
  }
}

// Update active state in navigation (removed - items don't stay selected)
function updateActiveNav() {
  // Navigation items don't maintain selected state
  // They act as buttons with hover only
}

// Handle navigation clicks
function setupNavigation() {
  const navItems = document.querySelectorAll(
    ".project-nav-item, .sidebar-header"
  );

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const contentId = item.getAttribute("data-content");

      // Update URL hash
      window.location.hash = contentId;

      // Load content
      loadContent(contentId);
      updateActiveNav(contentId);

      // Close mobile menu if open
      closeMobileMenu();
    });
  });
}

// Handle browser back/forward buttons
function setupHashChange() {
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1) || "about";
    loadContent(hash);
    updateActiveNav(hash);
  });
}

// Expandable media overlay functionality
function setupExpandableMedia() {
  const expandableItems = document.querySelectorAll(".expandable-media");

  expandableItems.forEach((item) => {
    item.addEventListener("click", () => {
      openMediaOverlay(item);
    });

    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMediaOverlay(item);
      }
    });
  });
}

function openMediaOverlay(mediaElement) {
  const overlay = document.getElementById("media-overlay");
  const overlayContent = overlay.querySelector(".media-overlay-content");

  // Find the media element (img, video, or iframe) inside the clicked container
  const mediaChild = mediaElement.querySelector("img, video, iframe");

  if (!mediaChild) return;

  // Clone the media element
  const mediaClone = mediaChild.cloneNode(true);
  mediaClone.classList.add("expanded-media");

  // Clear and insert content
  overlayContent.innerHTML = "";
  overlayContent.appendChild(mediaClone);

  // Show overlay
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Focus the close button for accessibility
  setTimeout(() => {
    overlay.querySelector(".media-overlay-close").focus();
  }, 100);
}

function closeMediaOverlay() {
  const overlay = document.getElementById("media-overlay");
  const overlayContent = overlay.querySelector(".media-overlay-content");

  overlay.classList.remove("active");
  document.body.style.overflow = "";

  // Clear content after animation
  setTimeout(() => {
    overlayContent.innerHTML = "";
  }, 300);
}

function setupMediaOverlayClose() {
  const overlay = document.getElementById("media-overlay");
  const closeButton = overlay.querySelector(".media-overlay-close");

  // Close button click
  closeButton.addEventListener("click", closeMediaOverlay);

  // Close on overlay background click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeMediaOverlay();
    }
  });

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeMediaOverlay();
    }
  });
}

// Mobile menu functionality
function setupMobileMenu() {
  const menuButton = document.querySelector(".mobile-menu-button");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const leftColumn = document.querySelector(".left-column");

  if (!menuButton || !overlay || !leftColumn) return;

  // Toggle mobile menu
  menuButton.addEventListener("click", () => {
    const isOpen = leftColumn.classList.contains("active");

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu when clicking overlay
  overlay.addEventListener("click", closeMobileMenu);

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && leftColumn.classList.contains("active")) {
      closeMobileMenu();
    }
  });
}

function openMobileMenu() {
  const menuButton = document.querySelector(".mobile-menu-button");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const leftColumn = document.querySelector(".left-column");

  menuButton.classList.add("open");
  overlay.classList.add("active");
  leftColumn.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  const menuButton = document.querySelector(".mobile-menu-button");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const leftColumn = document.querySelector(".left-column");

  menuButton.classList.remove("open");
  overlay.classList.remove("active");
  leftColumn.classList.remove("active");
  document.body.style.overflow = "";
}

// Smooth content transitions
function setupContentTransitions() {
  const contentArea = document.getElementById("content-area");
  if (contentArea) {
    contentArea.style.transition = "opacity 0.15s ease-in-out";
    contentArea.style.opacity = "1";
  }
}

// Media loading states - fade in images/videos when loaded
function setupMediaLoadingStates() {
  const mediaElements = document.querySelectorAll(".project-media-image");

  mediaElements.forEach((media) => {
    // For images that are already loaded (cached)
    if (media.tagName === "IMG" && media.complete) {
      media.classList.add("loaded");
      media.closest(".project-media-container")?.classList.add("loaded");
    }
    // For videos that have enough data
    else if (media.tagName === "VIDEO" && media.readyState >= 3) {
      media.classList.add("loaded");
      media.closest(".project-media-container")?.classList.add("loaded");
    } else {
      // Image load event
      media.addEventListener("load", () => {
        media.classList.add("loaded");
        media.closest(".project-media-container")?.classList.add("loaded");
      });
      // Video loadeddata event
      media.addEventListener("loadeddata", () => {
        media.classList.add("loaded");
        media.closest(".project-media-container")?.classList.add("loaded");
      });
    }
  });
}

// Lazy load videos with Intersection Observer
function setupLazyVideos() {
  const videos = document.querySelectorAll("video[data-autoplay]");

  if (videos.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 0.25 }
  );

  videos.forEach((video) => observer.observe(video));
}

// Defer iframe loading with Intersection Observer
function setupLazyIframes() {
  const iframes = document.querySelectorAll("iframe[data-src]");

  if (iframes.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          iframe.src = iframe.dataset.src;
          iframe.removeAttribute("data-src");
          observer.unobserve(iframe);
        }
      });
    },
    { rootMargin: "100px" }
  );

  iframes.forEach((iframe) => observer.observe(iframe));
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Setup content transitions
  setupContentTransitions();

  // Setup navigation
  setupNavigation();

  // Setup hash change handling
  setupHashChange();

  // Setup mobile menu
  setupMobileMenu();

  // Setup media overlay close functionality
  setupMediaOverlayClose();

  // Load initial content based on URL hash or default to about
  const initialHash = window.location.hash.substring(1) || "about";
  loadContent(initialHash);
  updateActiveNav(initialHash);

  // Add page-loaded class for any fade-in effects
  requestAnimationFrame(() => {
    document.body.classList.add("page-loaded");
  });
});
