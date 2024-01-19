import CMS from 'netlify-cms-app';

import IndexPagePreview from './IndexPagePreview';
import AProposPagePreview from './AProposPagePreview';
import ArticlePreview from './ArticlePreview';
import ServicePagePreview from './ServicePagePreview';
import CGVPagePreview from './CGVPagePreview';
import ZIFraisDeplacementPagePreview from './ZIFraisDeplacementPagePreview';

CMS.registerPreviewTemplate('index', AProposPagePreview);
CMS.registerPreviewTemplate('a-propos', IndexPagePreview);
CMS.registerPreviewTemplate('article', ArticlePreview);
CMS.registerPreviewTemplate('service', ServicePagePreview);
CMS.registerPreviewTemplate('cgv', CGVPagePreview);
CMS.registerPreviewTemplate('zi-frais-deplacement', ZIFraisDeplacementPagePreview);
