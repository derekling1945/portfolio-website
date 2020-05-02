// ---------- draggable slider ----------

let mx = 0;

function preventClick (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

$(".swiperContainer").on({
  mousemove: function(e) {
    let mx2 = e.pageX - this.offsetLeft;
    if(mx) this.scrollLeft = this.sx + mx - mx2;
    this.isScrolled = true;
  },
  mousedown: function(e) {
    this.sx = this.scrollLeft;
    mx = e.pageX - this.offsetLeft;
    this.isScrolled = false
  },
  mouseup: function(e) {
    if (this.isScrolled) {
      $(e.target).on("click", preventClick);
    } else {
      $(e.target).off("click", preventClick);
    }
    this.isScrolled = false;
  }

});

$(document).on("mouseup", function(){
  mx = 0;
});

