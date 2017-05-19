// Initialize collapse button
$(".button-collapse").sideNav();

$('.button-collapse').sideNav({
  menuWidth: 200, // Default is 300
  edge: 'left', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true // Choose whether you can drag to open on touch screens
});

// $(document).ready(function() {
//   var myNavBar = {
//     flagAdd: true,
//     elements: [],
//     init: function(elements) {
//       this.elements = elements;
//     },
//     add: function() {
//       if (this.flagAdd) {
//         for (var i = 0; i < this.elements.length; i++) {
//           document.getElementById(this.elements[i]).className += " fixed-theme";
//         }
//         this.flagAdd = false;
//       }
//     },
//     remove: function() {
//       for (var i = 0; i < this.elements.length; i++) {
//         document.getElementById(this.elements[i]).className =
//           document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
//       }
//       this.flagAdd = true;
//     }
//   };
//
//   myNavBar.init([
//     "header",
//     "header-container",
//     "brand"
//   ]);
//
//   function offSetManager() {
//     var yOffset = 0;
//     var currYOffSet = window.pageYOffset;
//
//     if (yOffset < currYOffSet) {
//       myNavBar.add();
//     } else if (currYOffSet == yOffset) {
//       myNavBar.remove();
//     }
//   }
//
//   window.onscroll = function(e) {
//     offSetManager();
//   }
//
//   offSetManager();
// });
