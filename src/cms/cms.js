import CMS from 'netlify-cms-app';

import IndexPagePreview from './IndexPagePreview';
import AProposPagePreview from './AProposPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('a-propos', AProposPagePreview);
