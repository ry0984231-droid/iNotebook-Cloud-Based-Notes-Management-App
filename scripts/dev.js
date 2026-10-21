const { spawn } = require('node:child_process');
const path = require('node:path');

const workspace = path.resolve(__dirname, '..');
const services = [
    { name: 'backend', directory: 'backend' },
    { name: 'frontend', directory: 'inotebook' }
];

const isWindows = process.platform === 'win32';
const processes = services.map(({ name, directory }) => {
    const options = {
        cwd: path.join(workspace, directory),
        stdio: 'inherit',
        env: { ...process.env, FORCE_COLOR: '1' }
    };
    const child = isWindows
        ? spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', 'npm run start'], options)
        : spawn('npm', ['run', 'start'], options);

    child.on('error', (error) => {
        console.error(`[${name}] Could not start: ${error.message}`);
        stopAll(1);
    });

    return { name, child };
});

let stopping = false;

function stopAll(exitCode = 0) {
    if (stopping) return;
    stopping = true;
    for (const { child } of processes) {
        if (!child.killed) child.kill('SIGTERM');
    }
    process.exitCode = exitCode;
}

for (const { name, child } of processes) {
    child.on('exit', (code, signal) => {
        if (stopping) return;
        if (signal) {
            console.log(`[${name}] stopped (${signal})`);
            stopAll(1);
        } else if (code !== 0) {
            console.error(`[${name}] exited with code ${code}`);
            stopAll(code || 1);
        }
    });
}

process.on('SIGINT', () => stopAll(0));
process.on('SIGTERM', () => stopAll(0));

console.log('Starting iNotebook backend and frontend. Press Ctrl+C to stop both.');
