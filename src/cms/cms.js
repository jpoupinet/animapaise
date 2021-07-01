import CMS from 'netlify-cms-app';

import IndexPagePreview from './IndexPagePreview';
import MediationPagePreview from './MediationPagePreview';
import ComportementPagePreview from './ComportementPagePreview';
import ActivitesPagePreview from './ActivitesPagePreview';
import AProposPagePreview from './AProposPagePreview';
import ColleguesPagePreview from './ColleguesPagePreview';
import SportPagePreview from './SportPagePreview';

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
