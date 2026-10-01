import { readFileSync, statSync } from 'node:fs';

const files = ['index.html', 'css/style.css', 'js/main.js', 'js/modules/accessibility.js', 'js/modules/events.js', 'js/modules/forms.js', 'js/modules/router.js', 'js/modules/storage.js', 'js/modules/templates.js', 'js/modules/components.js'];
const total = files.reduce((sum, file) => sum + statSync(file).size, 0);
console.log(`Tamanho total dos arquivos-fonte selecionados: ${total} bytes`);
console.log('Execute npm run build e compare com o tamanho de dist/ para obter a redução real da build.');
