<?php
namespace Deployer;

require 'recipe/common.php';

// ssh ubuntu@52.221.214.151 -i ~/.ssh/nihato-staging.pem

// Project name
set('realme', '/var/www/html');
set('branch', 'master');

// Project repository
set('repository', 'git@github.com:phuchnh/realme.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys 
set('shared_files', ['wp-config.php']);
set('shared_dirs', ['wp-content/uploads']);

// Writable dirs by web server 
set('writable_dirs', ['wp-content/uploads']);


// Hosts

host('52.221.214.151')
	->user('ubuntu')
	->identityFile('~/.ssh/nihato-staging.pem')
	->port(22)
	->forwardAgent(true)
    ->set('deploy_path', '{{realme}}');


// Tasks

desc('Deploy {{realme}} project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
