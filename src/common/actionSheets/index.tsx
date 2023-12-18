import {registerSheet} from 'react-native-actions-sheet';
import LanguageSheet from './language';
import ServiceInfoSheet from './serviceInfo';
import BrachInfoSheet from './brachInfo';
import LocationSheet from './location';
import addChildSheet from './addChild';

registerSheet('languageSheet', LanguageSheet);
registerSheet('ServiceInfoSheet', ServiceInfoSheet);
registerSheet('BrachInfoSheet', BrachInfoSheet);
registerSheet('LocationSheet', LocationSheet);
registerSheet('addChildSheet', addChildSheet);

export {};
