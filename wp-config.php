<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'realme2' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'I,6[1po+5-`LKHJ~7N>wpL@b4)|acE^|i(j;z+`Gsr.T:QIV68,]^4|44Ph-Q}a9');
define('SECURE_AUTH_KEY',  '#G8il|v0|s;H5KM+R[UIn&lw7p<DGb#sC7t6~;7ZnvAEDjMI3y,|$c{R+~A{gM-0');
define('LOGGED_IN_KEY',    'Sl5<k THIPZ` mx-rHinaQXD<efsVj*}AE&E;OG)k:@H} VC!Q0=}T/U-@J|/*=,');
define('NONCE_KEY',        'z5dPqRKGF+euJ,wXpS PI#9x|itm+lSh8hMMQ$t)?ut7c7-8d`KNhDRx67m_lcty');
define('AUTH_SALT',        ':e>0i,KX]4vCM&TZ/<!xNz$.BUR:wO*L=4aZBU:Hct^3:j(1A{_ sVRvr0My*Hhn');
define('SECURE_AUTH_SALT', '!whcHzeYnsVoK:F~jk1oSm)>k~ 2d-lBo @A9vXkxPO?SN}P{NC(lfM.6a:KnZ6X');
define('LOGGED_IN_SALT',   'x-D/{Z?VOyL6xSd?tX[+)x5@}qXKl!|OMN},%dn3jy.`X@$gqWbVPH|!9vpC4D||');
define('NONCE_SALT',       'u[hN/YV$Ch.owl]20@(rzI^Zmx8?4vnZ8@T RHAaV40t/.`w.d|X.~`E_EG1J1+8');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
