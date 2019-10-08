<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', '/var/www/html');

// Project repository
set('repository', 'git@domain.com:username/repository.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', ['wp-config.php']);
set('shared_dirs', ['wp-content/uploads']);

// Writable dirs by web server 
set('writable_dirs', ['wp-content/uploads']);


// Hosts

host('project.com')
    ->set('deploy_path', '{{application}}');
    

// Tasks

desc('Deploy Realme project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
