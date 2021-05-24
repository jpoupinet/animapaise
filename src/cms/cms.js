import CMS from 'netlify-cms-app';

import IndexPagePreview from './IndexPagePreview';
import MediationPagePreview from './MediationPagePreview';
import AProposPagePreview from './AProposPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('mediation', MediationPagePreview);
CMS.registerPreviewTemplate('a-propos', AProposPagePreview);
