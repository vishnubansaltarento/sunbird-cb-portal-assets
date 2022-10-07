(function (window) {
   window["env"] = window["env"] || {};
   // Environment variables
   window["env"]["name"] = 'dev';
   window["env"]["production"] = '';
   window["env"]["sitePath"] = 'portal.igot-dev.in';
   window["env"]["organisation"] = 'igot-karmayogi';
   window["env"]["framework"] = 'igot'
   window["env"]["channelId"] = '0131397178949058560'
   window["env"]["azureHost"] = 'https://portal.igot-dev.in'
   //window["env"]["contentHost"] = 'https://content.portal.igot-dev.in'
   window["env"]["azureBucket"] = 'assets/public'
   window["env"]["azureOldHost"] = 'https://staas-bbs1.cloud.gov.in'
   window["env"]["azureOldBuket"] = 'igot'
   window["env"]["contentHost"] = 'https://portal.igot-dev.in'
   window["env"]["contentBucket"] = 'assets/public'
   window["env"]["certificateassets"] = 'assets/certimage'
   window["env"]["missionKarmayogiPath"] = 'https://karmayogibharat.gov.in/'
   window["env"]["staticHomePageUrl"] = 'https://igot-dev.in/'
   window["env"]["assessmentBuffer"] = 120;
   window["env"]["portalRoles"] = 'PUBLIC';
   window["env"]["portals"] = [
       { sr: 1, id: 'cbc', name: 'CBP पोर्टल', desc: 'क्षमता निर्माण आयोग', icon: 'add_moderator', uriPath: 'https://cbc.igot-dev.in', roles: ['CBC_ADMIN', 'CBC_MEMBER', 'cbc_admin', 'cbc_member'], isPublic: false },
       { sr: 2, id: 'cbp', name: 'CBP पोर्टल', desc: 'यहां सीबीपी बनाएं और प्रबंधित करें', icon: 'add_moderator', uriPath: 'https://cbp.igot-dev.in', roles: ['CBP_ADMIN', 'CONTENT_CREATOR', 'CONTENT_REVIEWER', 'CONTENT_PUBLISHER', 'cbp_admin', 'content_creator', 'content_reviewer', 'content_publisher'], isPublic: false },
       { sr: 3, id: 'frac', name: 'Frac शब्दकोष', desc: 'भूमिकाओं, गतिविधियों और दक्षताओं के ढांचे का शब्दकोश।', icon: 'local_library', uriPath: 'https://frac-dictionary.igot-dev.in', roles: [], isPublic: true },
       { sr: 4, id: 'mdo', name: 'MDO पोर्टल', desc: 'MDO उपयोगकर्ता पहुंच, कार्य ऑर्डर और ईवेंट प्रबंधित करें', icon: 'add_moderator', uriPath: 'https://mdo.igot-dev.in', roles: ['MDO_ADMIN', 'WAT_MEMBER', 'mdo_admin', 'wat_member'], isPublic: false },
       { sr: 5, id: 'spv', name: 'SPV पोर्टल', desc: 'MDO बनाएं और प्रबंधित करें', icon: 'add_moderator', uriPath: 'https://spv.igot-dev.in', roles: ['SPV_ADMIN', 'STATE_ADMIN'], isPublic: false }
   ];
   window["env"]["recaptchaKey"] = '6LcwklIgAAAAALEMuE4evGODh2rT11GcBobiOkV-';
})(this);

