const { spawn } = require('child_process');

function addEnv(name, value) {
  return new Promise((resolve) => {
    const child = spawn('npx.cmd', ['vercel', 'env', 'add', name, 'production'], {
      stdio: ['pipe', 'inherit', 'inherit']
    });
    child.stdin.write(value);
    child.stdin.end();
    child.on('close', resolve);
  });
}

async function run() {
  await addEnv('EVOLUTION_GLOBAL_API_URL', 'http://34.172.136.36:8080');
  await addEnv('EVOLUTION_GLOBAL_API_KEY', 'ADMIN_GLOBAL_KEY_INMOCMS_123');
}

run();
