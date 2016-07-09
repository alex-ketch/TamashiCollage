import $ from 'jquery';
import hoverIntent from './hoverintent.js';

export default function() {
    var targets = $( '[rel~=tooltip]' ),
        target  = null,
        tooltip = null,
        title   = null,
        tip;

    var displayTooltips = function() {
        target  = $( this );
        tip     = target.attr( 'title' );
        tooltip = $( '<div id="tooltip"></div>' );

        if( !tip || tip == '' )
            return false;

        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
               .html( tip )
               .appendTo( 'body' );

        let init_tooltip = function() {
            if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                tooltip.css( 'max-width', $( window ).width() / 2 );
            else
                tooltip.css( 'max-width', 340 );

            let pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 35;

            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );

            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );

            if( pos_top < 0 )
            {
                let pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );

            tooltip.css( { left: pos_left, top: pos_top } )
                   .animate( { top: '+=8', opacity: 0.85 }, 380 );
          };

        init_tooltip();
        $( window ).resize( init_tooltip );
    }

    var remove_tooltip = function() {
      if (tooltip) {
        tooltip.animate( { top: '-=8', opacity: 0 }, 50, function() {
          $( this ).remove();
        });

        target.attr( 'title', tip );
      }
    };

    // target.bind( 'mouseleave', remove_tooltip );

    targets.hoverIntent(displayTooltips, remove_tooltip);
    targets.bind( 'click', remove_tooltip );
}
