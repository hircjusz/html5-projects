$(document).ready(function() {
    $('.js--toggle-trigger').click(function(event) {
    
        event.preventDefault();

        var $this = $(this);
        var target = $this.attr('data-target');
        var $target = $(target);

        $this.toggleClass('toggle-on', 'toggle-on');
        $target.toggleClass('toggle-on', 'toggle-on');
    });
});