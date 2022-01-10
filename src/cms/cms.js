import CMS from 'netlify-cms-app';
import video from 'netlify-cms-editor-component-video';

import IndexPagePreview from './IndexPagePreview';
import MediationPagePreview from './MediationPagePreview';
import ComportementPagePreview from './ComportementPagePreview';
import ActivitesPagePreview from './ActivitesPagePreview';
import AProposPagePreview from './AProposPagePreview';
import ColleguesPagePreview from './ColleguesPagePreview';
import SportPagePreview from './SportPagePreview';
import CGVPagePreview from './CGVPagePreview';
import ZIFraisDeplacementPagePreview from './ZIFraisDeplacementPagePreview';

CMS.registerEditorComponent(video);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('mediation', MediationPagePreview);
CMS.registerPreviewTemplate('comportement', ComportementPagePreview);
CMS.registerPreviewTemplate('activites', ActivitesPagePreview);
CMS.registerPreviewTemplate('a-propos', AProposPagePreview);
CMS.registerPreviewTemplate('collegues', ColleguesPagePreview);
CMS.registerPreviewTemplate('oberythmee', SportPagePreview);
CMS.registerPreviewTemplate('agility', SportPagePreview);
CMS.registerPreviewTemplate('medical-training', SportPagePreview);
CMS.registerPreviewTemplate('shaping', SportPagePreview);
CMS.registerPreviewTemplate('cgv', CGVPagePreview);
CMS.registerPreviewTemplate('zi-frais-deplacement', ZIFraisDeplacementPagePreview);
