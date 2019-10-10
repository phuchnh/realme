<?php
// This function will build the buy now modal based product details
function modalBuilder($product_id){
    if($product_id):?>

        <div class="modal" id="product_<?php echo get_the_ID()?>"
             tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title"><?php echo tr_posts_field( 'product_slogan' ); ?></h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <?php echo tr_posts_field( 'product_description' ); ?>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

<?php endif;
}