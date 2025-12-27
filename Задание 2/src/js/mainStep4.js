import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderConfirmation } from './components/confirmation.js';

renderHeader(document.getElementById('header'));
renderFooter(document.getElementById('footer'));
renderConfirmation(document.getElementById('app'));
