import CMS from 'netlify-cms-app';

import IndexPagePreview from './IndexPagePreview';
import MediationPagePreview from './MediationPagePreview';
import ComportementPagePreview from './ComportementPagePreview';
import AProposPagePreview from './AProposPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('mediation', MediationPagePreview);
CMS.registerPreviewTemplate('comportement', ComportementPagePreview);
CMS.registerPreviewTemplate('a-propos', AProposPagePreview);
