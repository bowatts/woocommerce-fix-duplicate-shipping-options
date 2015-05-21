jQuery( document ).ready(function() {
	// WooCommerce update fix for cart totals showing up more than once
	jQuery("div.cart_totals:not(:first)").hide();
});