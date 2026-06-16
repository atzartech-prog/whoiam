/**
 * Who I Am Profile Portal Script
 * ------------------------------
 * Handles theme persistence, interactive mock terminal widget, and icons.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sync Theme Preference from Homepage
    syncTheme();

    // 2. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 3. Easter Egg Key Listener
    let typedBuffer = '';
    document.addEventListener('keydown', (event) => {
        if (event.key && event.key.length === 1) {
            typedBuffer += event.key.toLowerCase();
            if (typedBuffer.length > 15) {
                typedBuffer = typedBuffer.substring(typedBuffer.length - 15);
            }
            if (typedBuffer.endsWith('tamyis')) {
                triggerEasterEgg();
                typedBuffer = '';
            }
        }
    });
});

/**
 * Reads local storage theme setting and applies it
 */
function syncTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

/**
 * Mock Terminal Command Runner
 */
function runCommand(cmd) {
    const terminalBody = document.getElementById('terminalBody');
    if (!terminalBody) return;

    if (cmd === 'clear') {
        terminalBody.innerHTML = '';
        return;
    }

    // Add prompt line
    const promptLine = document.createElement('p');
    promptLine.className = 'term-line';
    promptLine.innerHTML = `<span class="term-prompt">atzar@thinkering-os:~$</span> ${getCommandName(cmd)}`;
    terminalBody.appendChild(promptLine);

    // Add output lines based on command
    const outputLine = document.createElement('p');
    outputLine.className = 'term-output';
    
    switch (cmd) {
        case 'skills':
            outputLine.innerHTML = `Scanning brain cortex... 🧠
[■■■■■■■■■□] HTML/CSS: 90% (pixel perfectionist)
[■■■■■■■■□□] Javascript: 80% (50% actual code, 30% fixing syntax errors)
[■■■■■■■■■□] Hardware Tinkering: 92% (moderate risk of minor smoke release)
[■■■■■■■□□□] DIY Construction: 75% (holds together with hot glue and hope)
[■■■■■■■■■■] Reading Speed: 100% (especially documentation & retro forum archives)
>> Status: SYSTEM STABLE. Ready to break more stuff! 🛠️`;
            break;

        case 'gadget':
            outputLine.innerHTML = `Scanning local radio waves... 📡
Found 3 active vintage nodes:
📟 Node 1: Nokia 3310 (Battery: 99% - Active since: 2002)
🎮 Node 2: Nintendo GameBoy Color (Cartridge: Pokemon Yellow detected)
💾 Node 3: Palm Pilot Personal PDA (Touchscreen: resistive and dusty)
>> Frequency lock completed. Retro nostalgia index: CRITICAL!`;
            break;

        case 'coffee':
            outputLine.innerHTML = `Loading caffeine modules... ☕
[+] Boiling water at 94°C...
[+] Grinding dark roast arabica beans...
[+] Pressurizing filter basket...
[!] Warning: Sugar levels high.
>> Coffee successfully brewed! Here is your energy injection. ☕🚀`;
            break;

        default:
            outputLine.className = 'term-output error';
            outputLine.innerHTML = `Command '${cmd}' not recognized. Try clicking the console keys!`;
    }

    terminalBody.appendChild(outputLine);

    // Scroll to bottom of terminal
    terminalBody.scrollTop = terminalBody.scrollHeight;

    // Refresh icon inside output if any
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

/**
 * Map command IDs to user-friendly terminal commands
 */
function getCommandName(cmd) {
    switch (cmd) {
        case 'skills': return 'system-check';
        case 'gadget': return 'scan-retro-freq';
        case 'coffee': return 'brew-coffee';
        default: return cmd;
    }
}

/**
 * Decrypts and shows the easter egg
 */
function triggerEasterEgg() {
    const terminalBody = document.getElementById('terminalBody');
    if (!terminalBody) return;

    // Add prompt line
    const promptLine = document.createElement('p');
    promptLine.className = 'term-line';
    promptLine.innerHTML = `<span class="term-prompt">atzar@thinkering-os:~$</span> decrypt-secret-vault`;
    terminalBody.appendChild(promptLine);

  
    const encryptedCodes = [121, 102, 114, 126, 110, 120, 37, 102, 113, 110];
    const decrypted = encryptedCodes.map(code => String.fromCharCode(code - 5)).join('');

    // Add output lines
    const outputLine = document.createElement('p');
    outputLine.className = 'term-output text-glow';
    outputLine.style.color = '#38bdf8'; // sky blue glow
    outputLine.innerHTML = `🔐 Decrypting secret modules...<br>
[+] Key matched: Secret Signature Found<br>
[+] Decrypted string: <strong>${decrypted}</strong><br>
>> SYSTEM OVERRIDE SUCCESSFUL. Hello, ${decrypted}! 🚀`;
    terminalBody.appendChild(outputLine);

    // Scroll to bottom of terminal
    terminalBody.scrollTop = terminalBody.scrollHeight;
}
