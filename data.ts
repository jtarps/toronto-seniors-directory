
import { Category, Service } from './types';

export const services: Service[] = [
  // --- 1. EMERGENCY & IMPORTANT NUMBERS ---
  {
    id: '911',
    name: { en: 'Emergency Services (911)', fr: 'Services d\'urgence (911)', zh: '紧急服务 (911)', pa: 'ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ (911)', es: 'Servicios de Emergencia (911)' },
    phone: '911',
    description: {
      en: 'Call 9-1-1 immediately for all emergencies when people or property are at risk. Available 24/7 in 150+ languages. Free call from any phone.',
      fr: 'Appelez immédiatement le 9-1-1 pour toutes les urgences lorsque des personnes ou des biens sont en danger. Disponible 24/7 en plus de 150 langues.',
      zh: '当人员或财产面临危险时，请立即拨打 9-1-1。全天候提供 150 多种语言服务。',
      pa: 'ਲੋਕਾਂ ਜਾਂ ਜਾਇਦਾਦ ਨੂੰ ਖਤਰਾ ਹੋਣ \'ਤੇ ਸਾਰੀਆਂ ਐਮਰਜੈਂਸੀਆਂ ਲਈ ਤੁਰੰਤ 9-1-1 \'ਤੇ ਕਾਲ ਕਰੋ। 150+ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ 24/7 ਉਪਲਬਧ।',
      es: 'Llame al 9-1-1 inmediatamente para todas las emergencias cuando las personas o la propiedad estén en riesgo. Disponible 24/7 en más de 150 idiomas.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Emergency', fr: 'Urgence', zh: '紧急', pa: 'ਐਮਰਜੈਂਸੀ', es: 'Emergencia' }
  },
  {
    id: 't911',
    name: { en: 'T911 (Text Emergency)', fr: 'T911 (Texto d\'urgence)', zh: 'T911 (短信紧急服务)', pa: 'T911 (ਟੈਕਸਟ ਐਮਰਜੈਂਸੀ)', es: 'T911 (Texto de Emergencia)' },
    website: 'www.textwith911.ca',
    description: {
      en: 'Text with 9-1-1 service for people who are Deaf, hard-of-hearing, or live with speech disability. Must register cellphone with service provider first.',
      fr: 'Service texto au 9-1-1 pour les personnes sourdes, malentendantes ou ayant un trouble de la parole. Doit enregistrer le cellulaire d\'abord.',
      zh: '为聋哑、听力障碍或有语言障碍的人士提供的 9-1-1 短信服务。必须先向服务提供商注册手机。',
      pa: 'ਬੋਲਣ ਵਿੱਚ ਅਸਮਰਥ, ਸੁਣਨ ਵਿੱਚ ਅਸਮਰਥ ਜਾਂ ਬੋਲ਼ੇ ਲੋਕਾਂ ਲਈ 9-1-1 ਸੇਵਾ ਨਾਲ ਟੈਕਸਟ ਕਰੋ। ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਨਾਲ ਪਹਿਲਾਂ ਸੈੱਲਫੋਨ ਰਜਿਸਟਰ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ।',
      es: 'Servicio de texto con 9-1-1 para personas sordas, con problemas de audición o con discapacidad del habla. Debe registrar el celular primero.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Accessible', fr: 'Accessible', zh: '无障碍', pa: 'ਪਹੁੰਚਯੋਗ', es: 'Accesible' }
  },
  {
    id: '311',
    name: { en: '311 Toronto', fr: '311 Toronto', zh: '311 多伦多', pa: '311 ਟੋਰਾਂਟੋ', es: '311 Toronto' },
    phone: '3-1-1',
    tty: '711',
    website: 'www.toronto.ca/311',
    description: {
      en: 'Information on all City of Toronto services including garbage, water, noise complaints, and road maintenance. 24/7 service in 180+ languages.',
      fr: 'Information sur tous les services de la ville de Toronto, y compris les déchets, l\'eau, les plaintes de bruit et l\'entretien des routes.',
      zh: '关于多伦多市所有服务的信息，包括垃圾、水务、噪音投诉和道路维护。全天候提供 180 多种语言服务。',
      pa: 'ਟੋਰਾਂਟੋ ਸ਼ਹਿਰ ਦੀਆਂ ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਜਿਸ ਵਿੱਚ ਕੂੜਾ, ਪਾਣੀ, ਸ਼ੋਰ ਦੀਆਂ ਸ਼ਿਕਾਇਤਾਂ ਸ਼ਾਮਲ ਹਨ।',
      es: 'Información sobre todos los servicios de la Ciudad de Toronto, incluyendo basura, agua, quejas por ruido y mantenimiento de carreteras.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'City Services', fr: 'Services municipaux', zh: '城市服务', pa: 'ਸ਼ਹਿਰ ਦੀਆਂ ਸੇਵਾਵਾਂ', es: 'Servicios de la Ciudad' }
  },
  {
    id: '211',
    name: { en: '211 Central', fr: '211 Central', zh: '211 中心', pa: '211 ਕੇਂਦਰੀ', es: '211 Central' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Referral to community, health, social, and government services. Call for help finding food, housing, mental health support, or financial aid.',
      fr: 'Référence vers les services communautaires, de santé, sociaux et gouvernementaux. Appelez pour trouver de la nourriture ou un logement.',
      zh: '推介社区、健康、社会和政府服务。致电寻求食物、住房、心理健康支持或经济援助。',
      pa: 'ਕਮਿਊਨਿਟੀ, ਸਿਹਤ, ਸਮਾਜਿਕ ਅਤੇ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਲਈ ਰੈਫਰਲ। ਭੋਜਨ, ਰਿਹਾਇਸ਼, ਜਾਂ ਵਿੱਤੀ ਸਹਾਇਤਾ ਲੱਭਣ ਲਈ ਕਾਲ ਕਰੋ।',
      es: 'Referencia a servicios comunitarios, de salud, sociales y gubernamentales. Llame para ayuda con alimentos o vivienda.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Helpline', fr: 'Ligne d\'assistance', zh: '求助热线', pa: 'ਹੈਲਪਲਾਈਨ', es: 'Línea de ayuda' }
  },
  {
    id: '811',
    name: { en: 'Health 811', fr: 'Santé 811', zh: '健康 811', pa: 'ਸਿਹਤ 811', es: 'Salud 811' },
    phone: '8-1-1',
    description: {
      en: 'Confidential health advice and general health information from a Registered Nurse. Available 24/7.',
      fr: 'Conseils médicaux confidentiels et informations générales sur la santé d\'une infirmière autorisée.',
      zh: '注册护士提供的保密健康建议和一般健康信息。全天候可用。',
      pa: 'ਰਜਿਸਟਰਡ ਨਰਸ ਤੋਂ ਗੁਪਤ ਸਿਹਤ ਸਲਾਹ। 24/7 ਉਪਲਬਧ।',
      es: 'Asesoramiento de salud confidencial e información general de salud de una enfermera registrada.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Health Advice', fr: 'Conseils santé', zh: '健康建议', pa: 'ਸਿਹਤ ਸਲਾਹ', es: 'Consejo de Salud' }
  },
  {
    id: 'seniors-helpline',
    name: { en: 'Toronto Seniors Helpline', fr: 'Ligne d\'assistance pour les aînés', zh: '多伦多老年人求助热线', pa: 'ਟੋਰਾਂਟੋ ਸੀਨੀਅਰਜ਼ ਹੈਲਪਲਾਈਨ', es: 'Línea de Ayuda para Personas Mayores' },
    phone: '416-217-2077',
    website: 'www.torontoseniorshelpline.ca',
    description: {
      en: 'Answers to general questions, referrals, and crisis support. Trained crisis team can visit seniors at home. Safety planning for elder abuse. Monday-Friday: 9 a.m. - 8 p.m. Weekends and holidays: 10 a.m. - 6 p.m. Service in 100+ languages.',
      fr: 'Réponses aux questions générales, références et soutien de crise. Une équipe de crise peut visiter les aînés à domicile. Lundi-vendredi: 9h-20h. Weekends et jours fériés: 10h-18h. Service en 100+ langues.',
      zh: '回答一般问题、转介和危机支持。受过训练的危机团队可以上门拜访老年人。周一至周五：上午9点至晚上8点。周末和节假日：上午10点至下午6点。提供100多种语言服务。',
      pa: 'ਆਮ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ, ਰੈਫਰਲ, ਅਤੇ ਸੰਕਟ ਸਹਾਇਤਾ। ਸੰਕਟ ਟੀਮ ਬਜ਼ੁਰਗਾਂ ਨੂੰ ਘਰ ਜਾ ਕੇ ਮਿਲ ਸਕਦੀ ਹੈ। ਸੋਮਵਾਰ-ਸ਼ੁੱਕਰਵਾਰ: ਸਵੇਰੇ 9-ਸ਼ਾਮ 8। ਹਫ਼ਤੇ ਦੇ ਅੰਤ ਅਤੇ ਛੁੱਟੀਆਂ: ਸਵੇਰੇ 10-ਸ਼ਾਮ 6। 100+ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸੇਵਾ।',
      es: 'Respuestas a preguntas generales, referencias y apoyo en crisis. Un equipo de crisis capacitado puede visitar a las personas mayores en casa. Lunes-viernes: 9 a.m. - 8 p.m. Fines de semana y festivos: 10 a.m. - 6 p.m. Servicio en 100+ idiomas.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Helpline', fr: 'Ligne d\'assistance', zh: '求助热线', pa: 'ਹੈਲਪਲਾਈਨ', es: 'Línea de ayuda' }
  },
  {
    id: 'seniors-safety-line',
    name: { en: 'Seniors Safety Line', fr: 'Ligne de sécurité pour aînés', zh: '老年人安全热线', pa: 'ਬਜ਼ੁਰਗਾਂ ਦੀ ਸੁਰੱਖਿਆ ਲਾਈਨ', es: 'Línea de Seguridad para Personas Mayores' },
    phone: '1-866-299-1011',
    description: {
      en: 'Support for seniors suffering abuse or neglect. Safety planning and referrals. Available 24/7.',
      fr: 'Soutien pour les aînés souffrant de maltraitance ou de négligence. Planification de sécurité et références.',
      zh: '为遭受虐待或忽视的老年人提供支持。安全规划和转介。',
      pa: 'ਦੁਰਵਿਵਹਾਰ ਜਾਂ ਅਣਗਹਿਲੀ ਦਾ ਸ਼ਿਕਾਰ ਬਜ਼ੁਰਗਾਂ ਲਈ ਸਹਾਇਤਾ। ਸੁਰੱਖਿਆ ਯੋਜਨਾਬੰਦੀ ਅਤੇ ਰੈਫਰਲ।',
      es: 'Apoyo para personas mayores que sufren abuso o negligencia. Planificación de seguridad y referencias.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Abuse Support', fr: 'Soutien abus', zh: '虐待支持', pa: 'ਦੁਰਵਿਵਹਾਰ ਸਹਾਇਤਾ', es: 'Apoyo contra el abuso' }
  },
  {
    id: 'central-intake',
    name: { en: 'Central Intake (Shelter)', fr: 'Admission centrale (Refuge)', zh: '中央接收（庇护所）', pa: 'ਕੇਂਦਰੀ ਇਨਟੇਕ (ਸ਼ੈਲਟਰ)', es: 'Admisión Central (Refugio)' },
    phone: '416-338-4766',
    description: {
      en: 'Call to find an emergency shelter bed. 24/7 service.',
      fr: 'Appelez pour trouver un lit de refuge d\'urgence. Service 24/7.',
      zh: '致电寻找紧急庇护所床位。24/7 服务。',
      pa: 'ਐਮਰਜੈਂਸੀ ਸ਼ੈਲਟਰ ਬੈੱਡ ਲੱਭਣ ਲਈ ਕਾਲ ਕਰੋ। 24/7 ਸੇਵਾ।',
      es: 'Llame para encontrar una cama de refugio de emergencia. Servicio 24/7.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Shelter', fr: 'Refuge', zh: '庇护所', pa: 'ਸ਼ੈਲਟਰ', es: 'Refugio' }
  },
  {
    id: 'distress-centres',
    name: { en: 'Distress Centres of Greater Toronto', fr: 'Centres de détresse du Grand Toronto', zh: '大多伦多地区求助中心', pa: 'ਗ੍ਰੇਟਰ ਟੋਰਾਂਟੋ ਦੇ ਡਿਸਟ੍ਰੈਸ ਸੈਂਟਰ', es: 'Centros de Angustia del Gran Toronto' },
    phone: '416-408-4357',
    phone2: '416-408-HELP',
    website: 'www.dcogt.com',
    description: {
      en: '24/7 service in 150+ languages. Emotional support, crisis intervention and suicide prevention. Available 24/7/365.',
      fr: 'Service 24/7 en plus de 150 langues. Soutien émotionnel, intervention de crise et prévention du suicide. Disponible 24/7/365.',
      zh: '全天候提供 150 多种语言服务。情感支持、危机干预和自杀预防。全年无休。',
      pa: '150+ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ 24/7 ਸੇਵਾ। ਭਾਵਨਾਤਮਕ ਸਹਾਇਤਾ, ਸੰਕਟ ਦਖਲਅੰਦਾਜ਼ੀ ਅਤੇ ਖੁਦਕੁਸ਼ੀ ਦੀ ਰੋਕਥਾਮ। 24/7 ਉਪਲਬਧ।',
      es: 'Servicio 24/7 en más de 150 idiomas. Apoyo emocional, intervención en crisis y prevención del suicidio. Disponible 24/7/365.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Crisis', fr: 'Crise', zh: '危机', pa: 'ਸੰਕਟ', es: 'Crisis' }
  },
  {
    id: 'gerstein',
    name: { en: 'Gerstein Crisis Centre', fr: 'Centre de crise Gerstein', zh: 'Gerstein 危机中心', pa: 'ਗਰਸਟੀਨ ਕ੍ਰਾਈਸਿਸ ਸੈਂਟਰ', es: 'Centro de Crisis Gerstein' },
    phone: '416-929-5200',
    website: 'www.gersteincentre.org',
    description: {
      en: '24/7 service with interpretation services available. Telephone support, mobile crisis team, referrals to community supports, substance use crisis management.',
      fr: 'Service 24/7 avec services d\'interprétation disponibles. Soutien téléphonique, équipe mobile de crise, références, gestion de crise de toxicomanie.',
      zh: '全天候服务，提供口译服务。电话支持、流动危机团队、社区支持转介、药物滥用危机管理。',
      pa: 'ਵਿਆਖਿਆ ਸੇਵਾਵਾਂ ਉਪਲਬਧ ਨਾਲ 24/7 ਸੇਵਾ। ਟੈਲੀਫੋਨ ਸਹਾਇਤਾ, ਮੋਬਾਈਲ ਸੰਕਟ ਟੀਮ, ਕਮਿਊਨਿਟੀ ਸਹਾਇਤਾ ਲਈ ਰੈਫਰਲ, ਪਦਾਰਥਾਂ ਦੀ ਵਰਤੋਂ ਸੰਕਟ ਪ੍ਰਬੰਧਨ।',
      es: 'Servicio 24/7 con servicios de interpretación disponibles. Apoyo telefónico, equipo móvil de crisis, referencias a apoyos comunitarios, gestión de crisis por uso de sustancias.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Mental Health', fr: 'Santé mentale', zh: '心理健康', pa: 'ਮਾਨਸਿਕ ਸਿਹਤ', es: 'Salud Mental' }
  },
  {
    id: 'talk-suicide',
    name: { en: 'Talk Suicide Canada', fr: 'Parlons suicide Canada', zh: '加拿大自杀求助热线', pa: 'ਟਾਕ ਸੁਸਾਈਡ ਕੈਨੇਡਾ', es: 'Hablemos de Suicidio Canadá' },
    phone: '1-833-456-4566',
    phone2: '45645',
    website: 'www.dcogt.com/talk-suicide',
    description: {
      en: 'Nationwide suicide prevention and support. 24/7 service in English and French. Text 45645 in the evenings. Find a crisis counsellor who will listen and help callers feel safe.',
      fr: 'Prévention du suicide et soutien à l\'échelle nationale. Service 24/7 en anglais et français. Envoyez un texto au 45645 le soir.',
      zh: '全国自杀预防和支持。全天候提供英语和法语服务。晚上可发短信至 45645。寻找一位愿意倾听并帮助来电者感到安全的危机咨询师。',
      pa: 'ਰਾਸ਼ਟਰਵਿਆਪੀ ਖੁਦਕੁਸ਼ੀ ਦੀ ਰੋਕਥਾਮ ਅਤੇ ਸਹਾਇਤਾ। ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਫ੍ਰੈਂਚ ਵਿੱਚ 24/7 ਸੇਵਾ। ਸ਼ਾਮ ਨੂੰ 45645 \'ਤੇ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Prevención del suicidio y apoyo a nivel nacional. Servicio 24/7 en inglés y francés. Envíe un mensaje de texto al 45645 por las tardes.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Crisis', fr: 'Crise', zh: '危机', pa: 'ਸੰਕਟ', es: 'Crisis' }
  },
  {
    id: '988',
    name: { en: '988 Suicide Crisis Helpline', fr: '988 Ligne d\'aide en cas de crise de suicide', zh: '988 自杀危机求助热线', pa: '988 ਖੁਦਕੁਸ਼ੀ ਸੰਕਟ ਹੈਲਪਲਾਈਨ', es: '988 Línea de Crisis de Suicidio' },
    phone: '9-8-8',
    tty: '7-1-1',
    website: 'www.988.ca',
    description: {
      en: 'Call or text 9-8-8 for immediate mental health crisis support. TTY: 7-1-1 for relay operator. Available 24/7 in English and French.',
      fr: 'Appelez ou envoyez un texto au 9-8-8 pour un soutien immédiat en santé mentale. ATS: 7-1-1 pour opérateur relais. Disponible 24/7 en anglais et français.',
      zh: '致电或发短信至 9-8-8 以获得立即的心理健康危机支持。TTY：7-1-1 转接接线员。全天候提供英语和法语服务。',
      pa: 'ਤੁਰੰਤ ਮਾਨਸਿਕ ਸਿਹਤ ਸੰਕਟ ਸਹਾਇਤਾ ਲਈ 9-8-8 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ। TTY: ਰਿਲੇਅ ਓਪਰੇਟਰ ਲਈ 7-1-1। ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਫ੍ਰੈਂਚ ਵਿੱਚ 24/7 ਉਪਲਬਧ।',
      es: 'Llame o envíe un mensaje de texto al 9-8-8 para obtener apoyo inmediato en crisis de salud mental. TTY: 7-1-1 para operador de relevo. Disponible 24/7 en inglés y francés.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Crisis', fr: 'Crise', zh: '危机', pa: 'ਸੰਕਟ', es: 'Crisis' }
  },

  // --- 2. RECREATION, SOCIAL & EDUCATION ---
  {
    id: 'parks-rec',
    name: { en: 'City of Toronto Parks, Forestry & Recreation', fr: 'Parcs, foresterie et loisirs de Toronto', zh: '多伦多公园、林业和娱乐', pa: 'ਟੋਰਾਂਟੋ ਪਾਰਕਸ, ਫੋਰੈਸਟਰੀ ਅਤੇ ਰੀਕ', es: 'Parques, Silvicultura y Recreación de Toronto' },
    phone: '3-1-1',
    phone2: '416-396-7378',
    website: 'www.toronto.ca',
    description: {
      en: 'Free and discounted community recreation programs for adults 60+. Fee subsidies available through Welcome Policy for low-income residents. Search "Free Recreation" on toronto.ca.',
      fr: 'Programmes de loisirs communautaires gratuits et à prix réduit pour les adultes de 60 ans et plus. Subventions disponibles via la politique Welcome pour les résidents à faible revenu.',
      zh: '为 60 岁及以上成年人提供的免费和折扣社区娱乐项目。低收入居民可通过 Welcome Policy 获得费用补贴。在 toronto.ca 上搜索"免费娱乐"。',
      pa: '60+ ਬਾਲਗਾਂ ਲਈ ਮੁਫਤ ਅਤੇ ਛੋਟ ਵਾਲੇ ਭਾਈਚਾਰਕ ਮਨੋਰੰਜਨ ਪ੍ਰੋਗਰਾਮ। ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਨਿਵਾਸੀਆਂ ਲਈ Welcome Policy ਦੁਆਰਾ ਫੀਸ ਸਬਸਿਡੀ ਉਪਲਬਧ। toronto.ca \'ਤੇ "ਮੁਫਤ ਮਨੋਰੰਜਨ" ਖੋਜੋ।',
      es: 'Programas de recreación comunitaria gratuitos y con descuento para adultos mayores de 60 años. Subsidios de tarifas disponibles a través de la Política Welcome para residentes de bajos ingresos.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Activities', fr: 'Activités', zh: '活动', pa: 'ਗਤੀਵਿਧੀਆਂ', es: 'Actividades' }
  },
  {
    id: 'salc',
    name: { en: 'Seniors Active Living Centres (SALCs)', fr: 'Centres de vie active pour aînés (SALC)', zh: '老年人积极生活中心 (SALC)', pa: 'ਸੀਨੀਅਰਜ਼ ਐਕਟਿਵ ਲਿਵਿੰਗ ਸੈਂਟਰ (SALC)', es: 'Centros de Vida Activa (SALC)' },
    phone: '1-888-910-1999',
    tty: '1-800-387-5559',
    website: 'www.ontario.ca',
    description: {
      en: 'Variety of social, cultural, learning and recreational programs and courses for seniors. Search "Active Living Centre" on ontario.ca.',
      fr: 'Variété de programmes et cours sociaux, culturels, d\'apprentissage et récréatifs pour les aînés.',
      zh: '为老年人提供的各种社交、文化、学习和娱乐项目及课程。在 ontario.ca 上搜索"积极生活中心"。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਲਈ ਕਈ ਤਰ੍ਹਾਂ ਦੇ ਸਮਾਜਿਕ, ਸੱਭਿਆਚਾਰਕ, ਸਿੱਖਣ ਅਤੇ ਮਨੋਰੰਜਨ ਪ੍ਰੋਗਰਾਮ। ontario.ca \'ਤੇ "ਐਕਟਿਵ ਲਿਵਿੰਗ ਸੈਂਟਰ" ਖੋਜੋ।',
      es: 'Variedad de programas y cursos sociales, culturales, de aprendizaje y recreativos para personas mayores.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Centres', fr: 'Centres', zh: '中心', pa: 'ਕੇਂਦਰ', es: 'Centros' }
  },
  {
    id: 'scww',
    name: { en: 'Seniors’ Centre Without Walls', fr: 'Centre pour aînés sans murs', zh: '无墙老年人中心', pa: 'ਬਿਨਾਂ ਕੰਧਾਂ ਦੇ ਬਜ਼ੁਰਗਾਂ ਦਾ ਕੇਂਦਰ', es: 'Centro para Mayores Sin Muros' },
    phone: '905-584-8125',
    description: {
      en: 'Share stories and meet new people over the telephone. Good for isolated seniors.',
      fr: 'Partagez des histoires et rencontrez de nouvelles personnes par téléphone.',
      zh: '通过电话分享故事并结识新朋友。适合孤立的老年人。',
      pa: 'ਕਹਾਣੀਆਂ ਸਾਂਝੀਆਂ ਕਰੋ ਅਤੇ ਟੈਲੀਫੋਨ ਰਾਹੀਂ ਨਵੇਂ ਲੋਕਾਂ ਨੂੰ ਮਿਲੋ।',
      es: 'Comparta historias y conozca gente nueva por teléfono. Bueno para personas mayores aisladas.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Social', fr: 'Social', zh: '社交', pa: 'ਸਮਾਜਿਕ', es: 'Social' }
  },
  {
    id: 'library',
    name: { en: 'Toronto Public Library', fr: 'Bibliothèque publique de Toronto', zh: '多伦多公共图书馆', pa: 'ਟੋਰਾਂਟੋ ਪਬਲਿਕ ਲਾਇਬ੍ਰੇਰੀ', es: 'Biblioteca Pública de Toronto' },
    phone: '416-397-5981',
    phone2: '416-393-7131',
    website: 'www.torontopubliclibrary.ca',
    description: {
      en: 'Borrow books, music, movies. Free programs for adults 55+, computer and internet training, and Home Library Service for homebound seniors (416-395-5557). Free internet access and printing.',
      fr: 'Empruntez des livres, de la musique, des films. Programmes gratuits pour adultes 55+, formation informatique et internet, et service de bibliothèque à domicile pour aînés (416-395-5557). Accès internet et impression gratuits.',
      zh: '借阅书籍、音乐、电影。为 55 岁以上成年人提供的免费项目、电脑和互联网培训，以及为足不出户老年人提供的家庭图书馆服务 (416-395-5557)。免费互联网访问和打印。',
      pa: 'ਕਿਤਾਬਾਂ, ਸੰਗੀਤ, ਫਿਲਮਾਂ ਉਧਾਰ ਲਓ। 55+ ਬਾਲਗਾਂ ਲਈ ਮੁਫਤ ਪ੍ਰੋਗਰਾਮ, ਕੰਪਿਊਟਰ ਅਤੇ ਇੰਟਰਨੈਟ ਸਿਖਲਾਈ, ਅਤੇ ਘਰੇਲੂ ਬਜ਼ੁਰਗਾਂ ਲਈ ਹੋਮ ਲਾਇਬ੍ਰੇਰੀ ਸੇਵਾ (416-395-5557)। ਮੁਫਤ ਇੰਟਰਨੈਟ ਪਹੁੰਚ ਅਤੇ ਪ੍ਰਿੰਟਿੰਗ।',
      es: 'Pida prestados libros, música, películas. Programas gratuitos para adultos 55+, capacitación en computación e internet, y Servicio de Biblioteca a Domicilio para personas mayores (416-395-5557). Acceso gratuito a internet e impresión.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Library', fr: 'Bibliothèque', zh: '图书馆', pa: 'ਲਾਇਬ੍ਰੇਰੀ', es: 'Biblioteca' }
  },
  {
    id: 'tdsb',
    name: { en: 'TDSB Learn4Life (Continuing Education)', fr: 'TDSB Apprendre pour la vie (Éducation permanente)', zh: 'TDSB 终身学习（继续教育）', pa: 'TDSB ਲਰਨ4ਲਾਈਫ (ਨਿਰੰਤਰ ਸਿੱਖਿਆ)', es: 'TDSB Learn4Life (Educación Continua)' },
    phone: '3-1-1',
    phone2: '416-338-8888',
    tty: '1-866-533-6339',
    website: 'www.tdsb.on.ca',
    description: {
      en: 'Continuing education programs. Seniors discount available on adult daytime and evening classes (arts, computers, cooking, languages). Search "Continuing Education" on tdsb.on.ca. Select option 3 when calling 416-338-8888.',
      fr: 'Programmes d\'éducation permanente. Rabais pour aînés disponible sur les cours pour adultes de jour et de soir (arts, informatique, cuisine, langues).',
      zh: '继续教育项目。成人日间和晚间课程（艺术、计算机、烹饪、语言）提供老年人折扣。在 tdsb.on.ca 上搜索"继续教育"。拨打 416-338-8888 时选择选项 3。',
      pa: 'ਨਿਰੰਤਰ ਸਿੱਖਿਆ ਪ੍ਰੋਗਰਾਮ। ਬਾਲਗ ਦਿਨ ਅਤੇ ਸ਼ਾਮ ਦੀਆਂ ਕਲਾਸਾਂ (ਕਲਾ, ਕੰਪਿਊਟਰ, ਖਾਣਾ ਪਕਾਉਣ, ਭਾਸ਼ਾਵਾਂ) \'ਤੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਛੋਟ।',
      es: 'Programas de educación continua. Descuento para personas mayores disponible en clases para adultos diurnas y nocturnas.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Education', fr: 'Éducation', zh: '教育', pa: 'ਸਿੱਖਿਆ', es: 'Educación' }
  },
  {
    id: 'oacao',
    name: { en: 'Older Adult Centres\' Association of Ontario', fr: 'Association des centres pour adultes de l\'Ontario', zh: '安大略省老年成人中心协会', pa: 'ਓਨਟਾਰੀਓ ਦੇ ਪੁਰਾਣੇ ਬਾਲਗ ਕੇਂਦਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ', es: 'Asociación de Centros para Adultos Mayores de Ontario' },
    website: 'www.oacao.org',
    description: {
      en: 'Find senior centres offering programs, groups and courses for seniors across Ontario.',
      fr: 'Trouvez des centres pour aînés offrant des programmes, groupes et cours pour les aînés en Ontario.',
      zh: '查找安大略省各地为老年人提供项目、团体和课程的老年中心。',
      pa: 'ਓਨਟਾਰੀਓ ਭਰ ਵਿੱਚ ਬਜ਼ੁਰਗਾਂ ਲਈ ਪ੍ਰੋਗਰਾਮ, ਸਮੂਹ ਅਤੇ ਕੋਰਸ ਪੇਸ਼ ਕਰਨ ਵਾਲੇ ਸੀਨੀਅਰ ਸੈਂਟਰ ਲੱਭੋ।',
      es: 'Encuentre centros para personas mayores que ofrecen programas, grupos y cursos en Ontario.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Centres', fr: 'Centres', zh: '中心', pa: 'ਕੇਂਦਰ', es: 'Centros' }
  },
  {
    id: 'neighbourhood-centres',
    name: { en: 'Toronto Neighbourhood Centres', fr: 'Centres de quartier de Toronto', zh: '多伦多社区中心', pa: 'ਟੋਰਾਂਟੋ ਨੇਬਰਹੁੱਡ ਸੈਂਟਰ', es: 'Centros Vecinales de Toronto' },
    website: 'www.neighbourhoodcentres.ca',
    description: {
      en: 'List of not-for-profit agencies providing community programs and services across Toronto.',
      fr: 'Liste d\'organismes à but non lucratif offrant des programmes et services communautaires à Toronto.',
      zh: '提供多伦多社区项目和服务的非营利机构列表。',
      pa: 'ਟੋਰਾਂਟੋ ਭਰ ਵਿੱਚ ਭਾਈਚਾਰਕ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਨ ਵਾਲੀਆਂ ਗੈਰ-ਲਾਭਕਾਰੀ ਏਜੰਸੀਆਂ ਦੀ ਸੂਚੀ।',
      es: 'Lista de agencias sin fines de lucro que brindan programas y servicios comunitarios en Toronto.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Community', fr: 'Communautaire', zh: '社区', pa: 'ਕਮਿਊਨਿਟੀ', es: 'Comunidad' }
  },

  // --- 3. EMPLOYMENT, VOLUNTEERING & MONEY ---
  {
    id: 'employment-ontario',
    name: { en: 'Employment Ontario', fr: 'Emploi Ontario', zh: '安大略省就业', pa: 'ਰੁਜ਼ਗਾਰ ਓਨਟਾਰੀਓ', es: 'Empleo Ontario' },
    phone: '3-1-1',
    phone2: '416-326-5656',
    website: 'www.ontario.ca',
    description: {
      en: 'Employment support services including job search assistance. Get advice, build new skills, and find a job. Specific support for older workers to re-enter workforce. Search "Employment Ontario" on ontario.ca.',
      fr: 'Services de soutien à l\'emploi incluant l\'aide à la recherche d\'emploi. Obtenez des conseils, développez de nouvelles compétences et trouvez un emploi.',
      zh: '就业支持服务，包括求职援助。获取建议、建立新技能并寻找工作。为老年工人重返劳动力市场提供具体支持。在 ontario.ca 上搜索"安大略省就业"。',
      pa: 'ਨੌਕਰੀ ਖੋਜ ਸਹਾਇਤਾ ਸਮੇਤ ਰੁਜ਼ਗਾਰ ਸਹਾਇਤਾ ਸੇਵਾਵਾਂ। ਸਲਾਹ ਲਓ, ਨਵੇਂ ਹੁਨਰ ਬਣਾਓ, ਅਤੇ ਨੌਕਰੀ ਲੱਭੋ।',
      es: 'Servicios de apoyo laboral incluyendo asistencia en búsqueda de empleo. Obtenga consejos, desarrolle nuevas habilidades y encuentre trabajo.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Employment', fr: 'Emploi', zh: '就业', pa: 'ਰੁਜ਼ਗਾਰ', es: 'Empleo' }
  },
  {
    id: 'volunteer-toronto',
    name: { en: 'Volunteer Toronto', fr: 'Bénévoles Toronto', zh: '多伦多志愿者', pa: 'ਵਲੰਟੀਅਰ ਟੋਰਾਂਟੋ', es: 'Voluntarios Toronto' },
    website: 'www.volunteertoronto.ca',
    description: {
      en: 'Find volunteer opportunities and workshops across Toronto based on your interests.',
      fr: 'Trouvez des opportunités de bénévolat et des ateliers à travers Toronto.',
      zh: '根据您的兴趣查找多伦多各地的志愿者机会和研讨会。',
      pa: 'ਆਪਣੀਆਂ ਦਿਲਚਸਪੀਆਂ ਦੇ ਆਧਾਰ \'ਤੇ ਪੂਰੇ ਟੋਰਾਂਟੋ ਵਿੱਚ ਵਲੰਟੀਅਰ ਮੌਕੇ ਲੱਭੋ।',
      es: 'Encuentre oportunidades de voluntariado y talleres en todo Toronto según sus intereses.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Volunteering', fr: 'Bénévolat', zh: '志愿服务', pa: 'ਵਲੰਟੀਅਰਿੰਗ', es: 'Voluntariado' }
  },
  {
    id: 'service-canada',
    name: { en: 'Service Canada (Pensions)', fr: 'Service Canada (Pensions)', zh: '加拿大服务局 (养老金)', pa: 'ਸਰਵਿਸ ਕੈਨੇਡਾ (ਪੈਨਸ਼ਨਾਂ)', es: 'Service Canada (Pensiones)' },
    phone: '1-800-277-9914',
    tty: '1-800-926-9105',
    website: 'www.canada.ca',
    description: {
      en: 'Apply for CPP, Old Age Security (OAS), and Guaranteed Income Supplement (GIS).',
      fr: 'Demandez le RPC, la Sécurité de la vieillesse (SV) et le Supplément de revenu garanti (SRG).',
      zh: '申请 CPP、老年保障金 (OAS) 和保证收入补助金 (GIS)。',
      pa: 'CPP, ਓਲਡ ਏਜ ਸਿਕਿਉਰਿਟੀ (OAS), ਅਤੇ ਗਾਰੰਟੀਸ਼ੁਦਾ ਆਮਦਨ ਸਪਲੀਮੈਂਟ (GIS) ਲਈ ਅਰਜ਼ੀ ਦਿਓ।',
      es: 'Solicite CPP, Seguridad de Vejez (OAS) y Suplemento de Ingreso Garantizado (GIS).'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Pensions', fr: 'Pensions', zh: '养老金', pa: 'ਪੈਨਸ਼ਨਾਂ', es: 'Pensiones' }
  },
  {
    id: 'old-age-security',
    name: { en: 'Old Age Security (OAS)', fr: 'Sécurité de la vieillesse (SV)', zh: '老年保障金 (OAS)', pa: 'ਓਲਡ ਏਜ ਸਿਕਿਉਰਿਟੀ (OAS)', es: 'Seguridad de Vejez (OAS)' },
    phone: '1-800-277-9914',
    tty: '1-800-926-9105',
    website: 'www.canada.ca',
    description: {
      en: 'Monthly pension for seniors 65+. Search "Old Age Security" on canada.ca.',
      fr: 'Pension mensuelle pour les aînés de 65 ans et plus. Recherchez "Sécurité de la vieillesse" sur canada.ca.',
      zh: '为 65 岁及以上老年人提供的月度养老金。在 canada.ca 上搜索"老年保障金"。',
      pa: '65+ ਬਜ਼ੁਰਗਾਂ ਲਈ ਮਹੀਨਾਵਾਰ ਪੈਨਸ਼ਨ। canada.ca \'ਤੇ "ਓਲਡ ਏਜ ਸਿਕਿਉਰਿਟੀ" ਖੋਜੋ।',
      es: 'Pensión mensual para personas mayores de 65 años. Busque "Seguridad de Vejez" en canada.ca.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Pensions', fr: 'Pensions', zh: '养老金', pa: 'ਪੈਨਸ਼ਨਾਂ', es: 'Pensiones' }
  },
  {
    id: 'canada-pension-plan',
    name: { en: 'Canada Pension Plan (CPP)', fr: 'Régime de pensions du Canada (RPC)', zh: '加拿大养老金计划 (CPP)', pa: 'ਕੈਨੇਡਾ ਪੈਨਸ਼ਨ ਪਲੈਨ (CPP)', es: 'Plan de Pensiones de Canadá (CPP)' },
    phone: '1-800-277-9914',
    tty: '1-800-926-9105',
    website: 'www.canada.ca',
    description: {
      en: 'Monthly pension based on contributions. Search "Canada Pension Plan" on canada.ca.',
      fr: 'Pension mensuelle basée sur les cotisations. Recherchez "Régime de pensions du Canada" sur canada.ca.',
      zh: '基于缴费的月度养老金。在 canada.ca 上搜索"加拿大养老金计划"。',
      pa: 'ਯੋਗਦਾਨਾਂ ਦੇ ਆਧਾਰ \'ਤੇ ਮਹੀਨਾਵਾਰ ਪੈਨਸ਼ਨ। canada.ca \'ਤੇ "ਕੈਨੇਡਾ ਪੈਨਸ਼ਨ ਪਲੈਨ" ਖੋਜੋ।',
      es: 'Pensión mensual basada en contribuciones. Busque "Plan de Pensiones de Canadá" en canada.ca.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Pensions', fr: 'Pensions', zh: '养老金', pa: 'ਪੈਨਸ਼ਨਾਂ', es: 'Pensiones' }
  },
  {
    id: 'guaranteed-income-supplement',
    name: { en: 'Guaranteed Income Supplement (GIS)', fr: 'Supplément de revenu garanti (SRG)', zh: '保证收入补助金 (GIS)', pa: 'ਗਾਰੰਟੀਸ਼ੁਦਾ ਆਮਦਨ ਸਪਲੀਮੈਂਟ (GIS)', es: 'Suplemento de Ingreso Garantizado (GIS)' },
    phone: '1-800-277-9914',
    tty: '1-800-926-9105',
    website: 'www.canada.ca',
    description: {
      en: 'Additional monthly payment for low-income OAS recipients. Search "Guaranteed Income Supplement" on canada.ca.',
      fr: 'Paiement mensuel supplémentaire pour les bénéficiaires de la SV à faible revenu. Recherchez "Supplément de revenu garanti" sur canada.ca.',
      zh: '为低收入 OAS 领取者提供的额外月度付款。在 canada.ca 上搜索"保证收入补助金"。',
      pa: 'ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ OAS ਪ੍ਰਾਪਤਕਰਤਾਵਾਂ ਲਈ ਵਾਧੂ ਮਹੀਨਾਵਾਰ ਭੁਗਤਾਨ। canada.ca \'ਤੇ "ਗਾਰੰਟੀਸ਼ੁਦਾ ਆਮਦਨ ਸਪਲੀਮੈਂਟ" ਖੋਜੋ।',
      es: 'Pago mensual adicional para beneficiarios de OAS de bajos ingresos. Busque "Suplemento de Ingreso Garantizado" en canada.ca.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Pensions', fr: 'Pensions', zh: '养老金', pa: 'ਪੈਨਸ਼ਨਾਂ', es: 'Pensiones' }
  },
  {
    id: 'ontario-works',
    name: { en: 'Ontario Works (OW)', fr: 'Ontario au travail (OT)', zh: '安大略省工作 (OW)', pa: 'ਓਨਟਾਰੀਓ ਵਰਕਸ (OW)', es: 'Ontario Works (OW)' },
    phone: '3-1-1',
    phone2: '416-338-8888',
    website: 'www.ontario.ca',
    description: {
      en: 'Financial assistance and employment support. Select option 3 when calling 416-338-8888. Search "Ontario Works" on ontario.ca.',
      fr: 'Aide financière et soutien à l\'emploi. Sélectionnez l\'option 3 en appelant le 416-338-8888.',
      zh: '财政援助和就业支持。拨打 416-338-8888 时选择选项 3。在 ontario.ca 上搜索"安大略省工作"。',
      pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ ਅਤੇ ਰੁਜ਼ਗਾਰ ਸਹਾਇਤਾ। 416-338-8888 \'ਤੇ ਕਾਲ ਕਰਦੇ ਸਮੇਂ ਵਿਕਲਪ 3 ਚੁਣੋ।',
      es: 'Asistencia financiera y apoyo laboral. Seleccione la opción 3 al llamar al 416-338-8888.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: 'odsp',
    name: { en: 'Ontario Disability Support Program (ODSP)', fr: 'Programme ontarien de soutien aux personnes handicapées (POSPH)', zh: '安大略省残疾支持计划 (ODSP)', pa: 'ਓਨਟਾਰੀਓ ਡਿਸਏਬਿਲਟੀ ਸਪੋਰਟ ਪ੍ਰੋਗਰਾਮ (ODSP)', es: 'Programa de Apoyo para Discapacitados de Ontario (ODSP)' },
    phone: '3-1-1',
    phone2: '416-338-8888',
    tty: '1-888-340-1001',
    website: 'www.ontario.ca',
    description: {
      en: 'Income and employment support for people with disabilities. Select option 4 when calling 416-338-8888. Search "ODSP" on ontario.ca.',
      fr: 'Soutien au revenu et à l\'emploi pour les personnes handicapées. Sélectionnez l\'option 4 en appelant le 416-338-8888.',
      zh: '为残障人士提供收入和就业支持。拨打 416-338-8888 时选择选项 4。在 ontario.ca 上搜索"ODSP"。',
      pa: 'ਅਸਮਰਥਤਾਵਾਂ ਵਾਲੇ ਲੋਕਾਂ ਲਈ ਆਮਦਨ ਅਤੇ ਰੁਜ਼ਗਾਰ ਸਹਾਇਤਾ। 416-338-8888 \'ਤੇ ਕਾਲ ਕਰਦੇ ਸਮੇਂ ਵਿਕਲਪ 4 ਚੁਣੋ।',
      es: 'Apoyo de ingresos y empleo para personas con discapacidades. Seleccione la opción 4 al llamar al 416-338-8888.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: 'public-guardian',
    name: { en: 'Office of Public Guardian & Trustee', fr: 'Bureau du Tuteur et curateur public', zh: '公共监护人和受托人办公室', pa: 'ਪਬਲਿਕ ਗਾਰਡੀਅਨ ਅਤੇ ਟਰੱਸਟੀ ਦਾ ਦਫ਼ਤਰ', es: 'Oficina del Guardián y Fideicomisario Público' },
    phone: '1-800-366-0335',
    description: {
      en: 'Government trustee services for people unable to manage their own finances. Also handles Power of Attorney.',
      fr: 'Services de curatelle gouvernementaux pour les personnes incapables de gérer leurs finances.',
      zh: '为无法管理自己财务的人提供的政府受托服务。也处理授权书。',
      pa: 'ਉਹਨਾਂ ਲੋਕਾਂ ਲਈ ਸਰਕਾਰੀ ਟਰੱਸਟੀ ਸੇਵਾਵਾਂ ਜੋ ਆਪਣੇ ਵਿੱਤ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਵਿੱਚ ਅਸਮਰੱਥ ਹਨ।',
      es: 'Servicios de fideicomisario del gobierno para personas que no pueden administrar sus propias finanzas.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Trustee', fr: 'Curateur', zh: '受托人', pa: 'ਟਰੱਸਟੀ', es: 'Fideicomisario' }
  },
  {
    id: 'small-business',
    name: { en: 'City of Toronto Economic Development - Small Business', fr: 'Développement économique de Toronto - Petites entreprises', zh: '多伦多经济发展 - 小企业', pa: 'ਟੋਰਾਂਟੋ ਇਕਨਾਮਿਕ ਡਿਵੈਲਪਮੈਂਟ - ਛੋਟਾ ਕਾਰੋਬਾਰ', es: 'Desarrollo Económico de Toronto - Pequeñas Empresas' },
    phone: '3-1-1',
    website: 'www.toronto.ca',
    description: {
      en: 'Support for starting small businesses. Search "Small Business" on toronto.ca.',
      fr: 'Soutien pour démarrer de petites entreprises. Recherchez "Petites entreprises" sur toronto.ca.',
      zh: '支持创办小企业。在 toronto.ca 上搜索"小企业"。',
      pa: 'ਛੋਟੇ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਸਹਾਇਤਾ। toronto.ca \'ਤੇ "ਛੋਟਾ ਕਾਰੋਬਾਰ" ਖੋਜੋ।',
      es: 'Apoyo para iniciar pequeñas empresas. Busque "Pequeñas Empresas" en toronto.ca.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Employment', fr: 'Emploi', zh: '就业', pa: 'ਰੁਜ਼ਗਾਰ', es: 'Empleo' }
  },
  {
    id: 'ontario-securities',
    name: { en: 'Ontario Securities Commission', fr: 'Commission des valeurs mobilières de l\'Ontario', zh: '安大略省证券委员会', pa: 'ਓਨਟਾਰੀਓ ਸਿਕਿਉਰਿਟੀਜ਼ ਕਮਿਸ਼ਨ', es: 'Comisión de Valores de Ontario' },
    website: 'www.getsmarteraboutmoney.ca',
    description: {
      en: 'Free financial planning resources and tools for budgeting and financial planning.',
      fr: 'Ressources et outils gratuits de planification financière et de budgétisation.',
      zh: '免费的财务规划资源和工具，用于预算和财务规划。',
      pa: 'ਬਜਟਿੰਗ ਅਤੇ ਵਿੱਤੀ ਯੋਜਨਾਬੰਦੀ ਲਈ ਮੁਫਤ ਵਿੱਤੀ ਯੋਜਨਾਬੰਦੀ ਸਰੋਤ ਅਤੇ ਟੂਲ।',
      es: 'Recursos y herramientas gratuitos de planificación financiera para presupuestos y planificación financiera.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },

  // --- 4. TRANSPORTATION ---
  {
    id: 'ttc',
    name: { en: 'Toronto Transit Commission (TTC)', fr: 'Commission de transport de Toronto', zh: '多伦多公车局', pa: 'ਟੋਰਾਂਟੋ ਟ੍ਰਾਂਜ਼ਿਟ ਕਮਿਸ਼ਨ', es: 'Comisión de Tránsito de Toronto' },
    phone: '416-393-4636',
    phone2: '416-393-4111',
    email: 'wtcs@ttc.ca',
    tty: '416-393-4555',
    website: 'www.ttc.ca',
    description: {
      en: 'Public transit in Toronto including subway, streetcar, and bus service. Seniors (65+) pay discounted fares with PRESTO card. Customer Service: 416-393-4111 or wtcs@ttc.ca.',
      fr: 'Transport en commun à Toronto incluant métro, tramway et autobus. Les aînés (65+) bénéficient de tarifs réduits avec la carte PRESTO. Service à la clientèle: 416-393-4111 ou wtcs@ttc.ca.',
      zh: '多伦多公共交通，包括地铁、有轨电车和公交车服务。老年人 (65+) 使用 PRESTO 卡可享受折扣票价。客户服务：416-393-4111 或 wtcs@ttc.ca。',
      pa: 'ਟੋਰਾਂਟੋ ਵਿੱਚ ਜਨਤਕ ਆਵਾਜਾਈ ਜਿਸ ਵਿੱਚ ਸਬਵੇ, ਸਟ੍ਰੀਟਕਾਰ, ਅਤੇ ਬਸ ਸੇਵਾ ਸ਼ਾਮਲ ਹੈ। ਬਜ਼ੁਰਗ (65+) PRESTO ਕਾਰਡ ਨਾਲ ਛੋਟ ਵਾਲੇ ਕਿਰਾਏ ਦਾ ਭੁਗਤਾਨ ਕਰਦੇ ਹਨ। ਗ੍ਰਾਹਕ ਸੇਵਾ: 416-393-4111 ਜਾਂ wtcs@ttc.ca।',
      es: 'Transporte público en Toronto incluyendo metro, tranvía y autobús. Las personas mayores (65+) pagan tarifas con descuento con la tarjeta PRESTO. Servicio al cliente: 416-393-4111 o wtcs@ttc.ca.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Public Transit', fr: 'Transport en commun', zh: '公共交通', pa: 'ਜਨਤਕ ਆਵਾਜਾਈ', es: 'Transporte Público' }
  },
  {
    id: 'wheel-trans',
    name: { en: 'TTC Wheel-Trans', fr: 'TTC Wheel-Trans', zh: 'TTC 轮椅接送', pa: 'TTC ਵ੍ਹੀਲ-ਟ੍ਰਾਂਸ', es: 'TTC Wheel-Trans' },
    phone: '416-393-4111',
    website: 'www.ttc.ca/wheel-trans',
    description: {
      en: 'Door-to-door accessible transit for persons with physical or functional disabilities. Application required.',
      fr: 'Transport accessible porte-à-porte pour les personnes ayant un handicap physique ou fonctionnel.',
      zh: '为身体或功能障碍人士提供的门到门无障碍交通服务。需要申请。',
      pa: 'ਸਰੀਰਕ ਜਾਂ ਕਾਰਜਸ਼ੀਲ ਅਸਮਰਥਤਾਵਾਂ ਵਾਲੇ ਵਿਅਕਤੀਆਂ ਲਈ ਘਰ-ਘਰ ਪਹੁੰਚਯੋਗ ਆਵਾਜਾਈ।',
      es: 'Tránsito accesible puerta a puerta para personas con discapacidades físicas o funcionales.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Accessible', fr: 'Accessible', zh: '无障碍', pa: 'ਪਹੁੰਚਯੋਗ', es: 'Accesible' }
  },
  {
    id: 'toronto-ride',
    name: { en: 'Toronto Ride', fr: 'Toronto Ride', zh: '多伦多乘车服务', pa: 'ਟੋਰਾਂਟੋ ਰਾਈਡ', es: 'Toronto Ride' },
    phone: '416-481-5250',
    website: 'www.torontoride.ca',
    description: {
      en: 'Assisted door-to-door transportation for seniors 55+ and adults with disabilities who are not eligible for Wheel-Trans.',
      fr: 'Transport porte-à-porte assisté pour les aînés de 55+ non admissibles à Wheel-Trans.',
      zh: '为不符合 Wheel-Trans 资格的 55 岁以上老年人提供的辅助门到门交通服务。',
      pa: '55+ ਦੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਘਰ-ਘਰ ਆਵਾਜਾਈ ਜੋ Wheel-Trans ਲਈ ਯੋਗ ਨਹੀਂ ਹਨ।',
      es: 'Transporte asistido puerta a puerta para mayores de 55 años no elegibles para Wheel-Trans.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Community', fr: 'Communautaire', zh: '社区', pa: 'ਕਮਿਊਨਿਟੀ', es: 'Comunidad' }
  },
  {
    id: 'go-transit',
    name: { en: 'GO Transit', fr: 'GO Transit', zh: 'GO Transit', pa: 'GO ਟ੍ਰਾਂਜ਼ਿਟ', es: 'GO Transit' },
    phone: '416-869-3200',
    description: {
      en: 'Regional public transit service for the Greater Toronto and Hamilton Area. Senior fares available.',
      fr: 'Service de transport en commun régional pour la région du Grand Toronto et de Hamilton.',
      zh: '大多伦多和汉密尔顿地区的区域公共交通服务。提供老年人票价。',
      pa: 'ਗ੍ਰੇਟਰ ਟੋਰਾਂਟੋ ਅਤੇ ਹੈਮਿਲਟਨ ਖੇਤਰ ਲਈ ਖੇਤਰੀ ਜਨਤਕ ਆਵਾਜਾਈ ਸੇਵਾ।',
      es: 'Servicio de transporte público regional para el Área Metropolitana de Toronto y Hamilton.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Regional', fr: 'Régional', zh: '区域', pa: 'ਖੇਤਰੀ', es: 'Regional' }
  },
  {
    id: 'parking-permit',
    name: { en: 'Accessible Parking Permit', fr: 'Permis de stationnement accessible', zh: '无障碍停车许可证', pa: 'ਪਹੁੰਚਯੋਗ ਪਾਰਕਿੰਗ ਪਰਮਿਟ', es: 'Permiso de Estacionamiento Accesible' },
    phone: '1-800-387-3445',
    description: {
      en: 'Permits for accessible parking spaces for those with certified disabilities. Apply via ServiceOntario.',
      fr: 'Permis pour les espaces de stationnement accessibles pour les personnes ayant un handicap certifié.',
      zh: '为经认证的残疾人士提供的无障碍停车位许可证。通过 ServiceOntario 申请。',
      pa: 'ਪ੍ਰਮਾਣਿਤ ਅਸਮਰਥਤਾਵਾਂ ਵਾਲੇ ਲੋਕਾਂ ਲਈ ਪਹੁੰਚਯੋਗ ਪਾਰਕਿੰਗ ਥਾਵਾਂ ਲਈ ਪਰਮਿਟ।',
      es: 'Permisos para espacios de estacionamiento accesibles para personas con discapacidades certificadas.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Driving', fr: 'Conduite', zh: '驾驶', pa: 'ਡਰਾਈਵਿੰਗ', es: 'Conducción' }
  },

  // --- 5. HOUSING ---
  {
    id: 'housing-help',
    name: { en: 'Housing Help Centres', fr: 'Centres d\'aide au logement', zh: '住房帮助中心', pa: 'ਹਾਊਸਿੰਗ ਹੈਲਪ ਸੈਂਟਰ', es: 'Centros de Ayuda para Vivienda' },
    phone: '2-1-1',
    description: {
      en: 'Non-profit centres helping with housing search, eviction prevention, and applications for subsidized housing.',
      fr: 'Centres à but non lucratif aidant à la recherche de logement et la prévention des expulsions.',
      zh: '非营利中心帮助寻找住房、防止驱逐和申请补贴住房。',
      pa: 'ਰਿਹਾਇਸ਼ ਖੋਜ ਅਤੇ ਬੇਦਖਲੀ ਦੀ ਰੋਕਥਾਮ ਵਿੱਚ ਮਦਦ ਕਰਨ ਵਾਲੇ ਗੈਰ-ਲਾਭਕਾਰੀ ਕੇਂਦਰ।',
      es: 'Centros sin fines de lucro que ayudan con la búsqueda de vivienda y prevención de desalojos.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Assistance', fr: 'Assistance', zh: '援助', pa: 'ਸਹਾਇਤਾ', es: 'Asistencia' }
  },
  {
    id: 'access-housing',
    name: { en: 'Access to Housing', fr: 'Accès au logement', zh: '住房通道', pa: 'ਹਾਊਸਿੰਗ ਤੱਕ ਪਹੁੰਚ', es: 'Acceso a la Vivienda' },
    phone: '416-338-8888',
    description: {
      en: 'Centralized waiting list for Rent-Geared-to-Income (RGI) subsidized housing.',
      fr: 'Liste d\'attente centralisée pour les logements subventionnés à loyer indexé sur le revenu (LIR).',
      zh: '按收入调整租金 (RGI) 补贴住房的集中等候名单。',
      pa: 'ਕਿਰਾਏ-ਗੀਅਰਡ-ਟੂ-ਇਨਕਮ (RGI) ਸਬਸਿਡੀ ਵਾਲੀ ਰਿਹਾਇਸ਼ ਲਈ ਕੇਂਦਰੀਕ੍ਰਿਤ ਉਡੀਕ ਸੂਚੀ।',
      es: 'Lista de espera centralizada para viviendas subsidiadas de alquiler ajustado a los ingresos (RGI).'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Subsidized', fr: 'Subventionné', zh: '补贴', pa: 'ਸਬਸਿਡੀ ਵਾਲਾ', es: 'Subsidiado' }
  },
  {
    id: 'tenant-hotline',
    name: { en: 'Tenant Hotline', fr: 'Ligne directe pour les locataires', zh: '租户热线', pa: 'ਕਿਰਾਏਦਾਰ ਹੌਟਲਾਈਨ', es: 'Línea Directa para Inquilinos' },
    phone: '416-921-9494',
    description: {
      en: 'Information about tenant rights, rent increases, and eviction issues.',
      fr: 'Information sur les droits des locataires, les augmentations de loyer et les expulsions.',
      zh: '关于租户权利、租金上涨和驱逐问题的信息。',
      pa: 'ਕਿਰਾਏਦਾਰ ਦੇ ਅਧਿਕਾਰਾਂ, ਕਿਰਾਏ ਵਿੱਚ ਵਾਧੇ, ਅਤੇ ਬੇਦਖਲੀ ਦੇ ਮੁੱਦਿਆਂ ਬਾਰੇ ਜਾਣਕਾਰੀ।',
      es: 'Información sobre derechos de los inquilinos, aumentos de alquiler y desalojos.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Rights', fr: 'Droits', zh: '权利', pa: 'ਅਧਿਕਾਰ', es: 'Derechos' }
  },
  {
    id: 'rent-safe',
    name: { en: 'RentSafeTO', fr: 'RentSafeTO', zh: 'RentSafeTO', pa: 'RentSafeTO', es: 'RentSafeTO' },
    phone: '3-1-1',
    description: {
      en: 'Report landlords who do not repair vital services (heat, water) or maintain building standards.',
      fr: 'Signalez les propriétaires qui ne réparent pas les services vitaux ou n\'entretiennent pas l\'immeuble.',
      zh: '举报不维修重要服务（供暖、水）或不维护建筑标准的房东。',
      pa: 'ਉਹਨਾਂ ਮਕਾਨ ਮਾਲਕਾਂ ਦੀ ਰਿਪੋਰਟ ਕਰੋ ਜੋ ਜ਼ਰੂਰੀ ਸੇਵਾਵਾਂ ਦੀ ਮੁਰੰਮਤ ਨਹੀਂ ਕਰਦੇ ਜਾਂ ਇਮਾਰਤ ਦੇ ਮਾਪਦੰਡਾਂ ਨੂੰ ਕਾਇਮ ਨਹੀਂ ਰੱਖਦੇ।',
      es: 'Denuncie a los propietarios que no reparan servicios vitales o no mantienen los estándares del edificio.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Standards', fr: 'Normes', zh: '标准', pa: 'ਮਿਆਰ', es: 'Estándares' }
  },
  {
    id: 'rent-bank',
    name: { en: 'Toronto Rent Bank', fr: 'Banque de loyer de Toronto', zh: '多伦多租金银行', pa: 'ਟੋਰਾਂਟੋ ਰੈਂਟ ਬੈਂਕ', es: 'Banco de Alquiler de Toronto' },
    phone: '416-397-7368',
    description: {
      en: 'Interest-free loans to low-income households facing eviction due to rental arrears.',
      fr: 'Prêts sans intérêt aux ménages à faible revenu menacés d\'expulsion.',
      zh: '向因拖欠租金而面临驱逐的低收入家庭提供无息贷款。',
      pa: 'ਕਿਰਾਏ ਦੇ ਬਕਾਏ ਕਾਰਨ ਬੇਦਖਲੀ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਵਿਆਜ-ਮੁਕਤ ਕਰਜ਼ੇ।',
      es: 'Préstamos sin intereses para hogares de bajos ingresos que enfrentan el desalojo.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: 'rhra',
    name: { en: 'Retirement Homes Regulatory Authority', fr: 'Office de réglementation des maisons de retraite', zh: '退休之家监管局', pa: 'ਰਿਟਾਇਰਮੈਂਟ ਹੋਮ ਰੈਗੂਲੇਟਰੀ ਅਥਾਰਟੀ', es: 'Autoridad Reguladora de Hogares de Retiro' },
    phone: '1-855-275-7472',
    description: {
      en: 'Information and complaints about retirement homes. Public register of licensed homes.',
      fr: 'Information et plaintes concernant les maisons de retraite. Registre public des foyers agréés.',
      zh: '关于养老院的信息和投诉。持牌养老院的公共登记册。',
      pa: 'ਰਿਟਾਇਰਮੈਂਟ ਹੋਮਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਅਤੇ ਸ਼ਿਕਾਇਤਾਂ।',
      es: 'Información y quejas sobre hogares de retiro. Registro público de hogares con licencia.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Retirement', fr: 'Retraite', zh: '退休', pa: 'ਸੇਵਾ ਮੁਕਤੀ', es: 'Retiro' }
  },

  // --- 6. HEALTH CARE & HOME CARE ---
  {
    id: 'ontario-health-athome',
    name: { en: 'Ontario Health atHome', fr: 'Santé à domicile Ontario', zh: '安大略省家庭健康', pa: 'ਓਨਟਾਰੀਓ ਹੈਲਥ ਐਟ ਹੋਮ', es: 'Salud en el Hogar de Ontario' },
    phone: '310-2222',
    description: {
      en: 'Coordinate government-funded home care (nursing, personal support) and access to long-term care homes.',
      fr: 'Coordination des soins à domicile financés par le gouvernement et accès aux foyers de soins de longue durée.',
      zh: '协调政府资助的家庭护理和长期护理院的使用。',
      pa: 'ਸਰਕਾਰ ਦੁਆਰਾ ਫੰਡ ਪ੍ਰਾਪਤ ਘਰੇਲੂ ਦੇਖਭਾਲ ਅਤੇ ਲੰਬੇ ਸਮੇਂ ਦੀ ਦੇਖਭਾਲ ਵਾਲੇ ਘਰਾਂ ਤੱਕ ਪਹੁੰਚ ਦਾ ਤਾਲਮੇਲ ਕਰੋ।',
      es: 'Coordinar la atención domiciliaria financiada por el gobierno y el acceso a hogares de cuidados a largo plazo.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Home Care', fr: 'Soins à domicile', zh: '家庭护理', pa: 'ਘਰੇਲੂ ਦੇਖਭਾਲ', es: 'Cuidado en el Hogar' },
    notes: { en: 'No area code needed', fr: 'Sans indicatif régional', zh: '无需区号', pa: 'ਕਿਸੇ ਏਰੀਆ ਕੋਡ ਦੀ ਲੋੜ ਨਹੀਂ', es: 'No se necesita código de área' }
  },
  {
    id: 'health-connect',
    name: { en: 'Health Care Connect', fr: 'Accès Soins', zh: '医疗保健连接', pa: 'ਹੈਲਥ ਕੇਅਰ ਕਨੈਕਟ', es: 'Conexión de Atención Médica' },
    phone: '1-800-445-1822',
    description: {
      en: 'Helps Ontarians find a family doctor or nurse practitioner who is accepting new patients.',
      fr: 'Aide les Ontariens à trouver un médecin de famille ou une infirmière praticienne.',
      zh: '帮助安大略省人寻找接受新病人的家庭医生或执业护士。',
      pa: 'ਓਨਟਾਰੀਓ ਵਾਸੀਆਂ ਨੂੰ ਪਰਿਵਾਰਕ ਡਾਕਟਰ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।',
      es: 'Ayuda a los habitantes de Ontario a encontrar un médico de familia.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Doctors', fr: 'Médecins', zh: '医生', pa: 'ਡਾਕਟਰ', es: 'Médicos' }
  },
  {
    id: 'tph-dental',
    name: { en: 'Toronto Public Health Dental', fr: 'Cliniques dentaires de santé publique', zh: '多伦多公共卫生牙科', pa: 'ਟੋਰਾਂਟੋ ਪਬਲਿਕ ਹੈਲਥ ਡੈਂਟਲ', es: 'Dental de Salud Pública' },
    phone: '416-338-7600',
    description: {
      en: 'Free dental care for eligible low-income seniors (65+). Call to book an appointment.',
      fr: 'Soins dentaires gratuits pour les aînés (65+) à faible revenu admissibles.',
      zh: '为符合条件的低收入老年人 (65+) 提供免费牙科护理。',
      pa: 'ਯੋਗ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਬਜ਼ੁਰਗਾਂ (65+) ਲਈ ਮੁਫ਼ਤ ਦੰਦਾਂ ਦੀ ਦੇਖਭਾਲ।',
      es: 'Atención dental gratuita para personas mayores de bajos ingresos elegibles (65+).'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Dental', fr: 'Dentaire', zh: '牙科', pa: 'ਦੰਦਾਂ ਦਾ', es: 'Dental' }
  },
  {
    id: 'adp',
    name: { en: 'Assistive Devices Program (ADP)', fr: 'Programme d\'appareils fonctionnels', zh: '辅助设备计划', pa: 'ਸਹਾਇਕ ਉਪਕਰਣ ਪ੍ਰੋਗਰਾਮ', es: 'Programa de Dispositivos de Asistencia' },
    phone: '416-327-8804',
    description: {
      en: 'Financial help for medical equipment like hearing aids, wheelchairs, and oxygen supplies.',
      fr: 'Aide financière pour l\'équipement médical comme les appareils auditifs et les fauteuils roulants.',
      zh: '为医疗设备（如助听器、轮椅）提供经济帮助。',
      pa: 'ਮੈਡੀਕਲ ਉਪਕਰਨਾਂ ਜਿਵੇਂ ਸੁਣਨ ਵਾਲੀਆਂ ਏਡਜ਼ ਅਤੇ ਵ੍ਹੀਲਚੇਅਰਾਂ ਲਈ ਵਿੱਤੀ ਮਦਦ।',
      es: 'Ayuda financiera para equipos médicos como audífonos y sillas de ruedas.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Equipment', fr: 'Équipement', zh: '设备', pa: 'ਉਪਕਰਨ', es: 'Equipo' }
  },
  {
    id: 'cnib',
    name: { en: 'CNIB Foundation', fr: 'Fondation INCA', zh: 'CNIB 基金会', pa: 'CNIB ਫਾਊਂਡੇਸ਼ਨ', es: 'Fundación CNIB' },
    phone: '1-800-563-2642',
    website: 'www.cnib.ca',
    description: {
      en: 'Rehabilitation and support services for people with vision loss.',
      fr: 'Services de réadaptation et de soutien pour les personnes ayant une perte de vision.',
      zh: '为视力丧失者提供的康复和支持服务。',
      pa: 'ਦ੍ਰਿਸ਼ਟੀਹੀਣ ਲੋਕਾਂ ਲਈ ਮੁੜ ਵਸੇਬਾ ਅਤੇ ਸਹਾਇਤਾ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de rehabilitación y apoyo para personas con pérdida de visión.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Vision', fr: 'Vision', zh: '视力', pa: 'ਨਜ਼ਰ', es: 'Visión' }
  },
  {
    id: 'chs',
    name: { en: 'Canadian Hearing Society', fr: 'Société canadienne de l\'ouïe', zh: '加拿大听力协会', pa: 'ਕੈਨੇਡੀਅਨ ਹੀਅਰਿੰਗ ਸੁਸਾਇਟੀ', es: 'Sociedad Canadiense de Audición' },
    phone: '416-928-2500',
    tty: '416-964-0023',
    website: 'www.chs.ca',
    description: {
      en: 'Counselling and hearing care services for seniors with hearing loss.',
      fr: 'Services de counseling et de soins auditifs pour les aînés ayant une perte auditive.',
      zh: '为听力受损的老年人提供咨询和听力护理服务。',
      pa: 'ਸੁਣਨ ਸ਼ਕਤੀ ਦੇ ਨੁਕਸਾਨ ਵਾਲੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਸਲਾਹ ਅਤੇ ਸੁਣਨ ਦੀ ਦੇਖਭਾਲ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de asesoramiento y cuidado auditivo para personas mayores con pérdida auditiva.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Hearing', fr: 'Audition', zh: '听力', pa: 'ਸੁਣਵਾਈ', es: 'Audición' }
  },

  // --- 7. LONELINESS, MENTAL HEALTH & ADDICTIONS ---
  {
    id: 'friendly-voice',
    name: { en: 'A Friendly Voice', fr: 'Une voix amicale', zh: '友好的声音', pa: 'ਇੱਕ ਦੋਸਤਾਨਾ ਆਵਾਜ਼', es: 'Una Voz Amigable' },
    phone: '1-855-892-9992',
    description: {
      en: 'A warm line for seniors who feel lonely and want someone to talk to. Not a crisis line.',
      fr: 'Une ligne chaleureuse pour les aînés qui se sentent seuls et veulent parler à quelqu\'un.',
      zh: '为感到孤独并想找人交谈的老年人提供的热线。',
      pa: 'ਉਹਨਾਂ ਬਜ਼ੁਰਗਾਂ ਲਈ ਇੱਕ ਨਿੱਘੀ ਲਾਈਨ ਜੋ ਇਕੱਲੇ ਮਹਿਸੂਸ ਕਰਦੇ ਹਨ।',
      es: 'Una línea cálida para personas mayores que se sienten solas.'
    },
    category: Category.MENTAL_HEALTH,
    subcategory: { en: 'Social', fr: 'Social', zh: '社交', pa: 'ਸਮਾਜਿਕ', es: 'Social' }
  },
  {
    id: 'camh',
    name: { en: 'CAMH', fr: 'CAMH', zh: 'CAMH', pa: 'CAMH', es: 'CAMH' },
    phone: '416-535-8501',
    description: {
      en: 'Canada\'s largest mental health teaching hospital. Assessment and treatment services.',
      fr: 'Le plus grand hôpital d\'enseignement en santé mentale du Canada.',
      zh: '加拿大最大的心理健康教学医院。',
      pa: 'ਕੈਨੇਡਾ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਮਾਨਸਿਕ ਸਿਹਤ ਅਧਿਆਪਨ ਹਸਪਤਾਲ।',
      es: 'El hospital docente de salud mental más grande de Canadá.'
    },
    category: Category.MENTAL_HEALTH,
    subcategory: { en: 'Mental Health', fr: 'Santé mentale', zh: '心理健康', pa: 'ਮਾਨਸਿਕ ਸਿਹਤ', es: 'Salud Mental' }
  },
  {
    id: 'connex',
    name: { en: 'ConnexOntario', fr: 'ConnexOntario', zh: 'ConnexOntario', pa: 'ConnexOntario', es: 'ConnexOntario' },
    phone: '1-866-531-2600',
    description: {
      en: 'Free information on addiction, mental health, and gambling treatment services.',
      fr: 'Information gratuite sur les services de traitement de la toxicomanie et de la santé mentale.',
      zh: '关于成瘾、心理健康和赌博治疗服务的免费信息。',
      pa: 'ਨਸ਼ਾਖੋਰੀ, ਮਾਨਸਿਕ ਸਿਹਤ, ਅਤੇ ਜੂਏ ਦੇ ਇਲਾਜ ਬਾਰੇ ਮੁਫਤ ਜਾਣਕਾਰੀ।',
      es: 'Información gratuita sobre servicios de tratamiento de adicciones y salud mental.'
    },
    category: Category.MENTAL_HEALTH,
    subcategory: { en: 'Addiction', fr: 'Dépendance', zh: '成瘾', pa: 'ਨਸ਼ਾ', es: 'Adicción' }
  },

  // --- 8. CAREGIVER SUPPORTS ---
  {
    id: 'caregiver-helpline',
    name: { en: 'Ontario Caregiver Helpline', fr: 'Ligne d\'aide aux aidants', zh: '安大略省护理员热线', pa: 'ਓਨਟਾਰੀਓ ਕੇਅਰਗਿਵਰ ਹੈਲਪਲਾਈਨ', es: 'Línea de Ayuda para Cuidadores' },
    phone: '1-833-416-2273',
    description: {
      en: '24/7 support, information, and resources for caregivers. Connect with peer support groups.',
      fr: 'Soutien, information et ressources 24/7 pour les aidants naturels.',
      zh: '全天候为护理员提供支持、信息和资源。',
      pa: 'ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਲਈ 24/7 ਸਹਾਇਤਾ, ਜਾਣਕਾਰੀ ਅਤੇ ਸਰੋਤ।',
      es: 'Apoyo, información y recursos 24/7 para cuidadores.'
    },
    category: Category.CAREGIVER,
    subcategory: { en: 'Support', fr: 'Soutien', zh: '支持', pa: 'ਸਹਾਇਤਾ', es: 'Apoyo' }
  },
  {
    id: 'alzheimer',
    name: { en: 'Alzheimer Society', fr: 'Société Alzheimer', zh: '阿尔茨海默氏症协会', pa: 'ਅਲਜ਼ਾਈਮਰ ਸੁਸਾਇਟੀ', es: 'Sociedad de Alzheimer' },
    phone: '416-322-6560',
    description: {
      en: 'Support, education, and counselling for dementia care.',
      fr: 'Soutien, éducation et counseling pour les soins de la démence.',
      zh: '痴呆症护理的支持、教育和咨询。',
      pa: 'ਡਿਮੇਸ਼ੀਆ ਦੇਖਭਾਲ ਲਈ ਸਹਾਇਤਾ, ਸਿੱਖਿਆ, ਅਤੇ ਸਲਾਹ।',
      es: 'Apoyo, educación y asesoramiento para el cuidado de la demencia.'
    },
    category: Category.CAREGIVER,
    subcategory: { en: 'Dementia', fr: 'Démence', zh: '痴呆症', pa: 'ਡਿਮੇਸ਼ੀਆ', es: 'Demencia' }
  },
  {
    id: 'respite',
    name: { en: 'Respite Care', fr: 'Soins de répit', zh: '暂息护理', pa: 'ਰਾਹਤ ਦੇਖਭਾਲ', es: 'Cuidado de Relevo' },
    phone: '310-2222',
    description: {
      en: 'Temporary care services to give caregivers a break. Contact Ontario Health atHome.',
      fr: 'Services de soins temporaires pour donner une pause aux aidants.',
      zh: '为护理员提供休息的临时护理服务。',
      pa: 'ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਨੂੰ ਬ੍ਰੇਕ ਦੇਣ ਲਈ ਅਸਥਾਈ ਦੇਖਭਾਲ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de cuidado temporal para dar un descanso a los cuidadores.'
    },
    category: Category.CAREGIVER,
    subcategory: { en: 'Respite', fr: 'Répit', zh: '暂息', pa: 'ਰਾਹਤ', es: 'Relevo' }
  },

  // --- 9. ELDER ABUSE & FRAUD ---
  {
    id: 'police-non-emerg',
    name: { en: 'Toronto Police (Non-Emergency)', fr: 'Police de Toronto (Non-urgent)', zh: '多伦多警方（非紧急）', pa: 'ਟੋਰਾਂਟੋ ਪੁਲਿਸ (ਗੈਰ-ਐਮਰਜੈਂਸੀ)', es: 'Policía de Toronto (No Emergencia)' },
    phone: '416-808-2222',
    description: {
      en: 'Report fraud, theft, or elder abuse when there is no immediate danger.',
      fr: 'Signalez la fraude, le vol ou la maltraitance des aînés sans danger immédiat.',
      zh: '在没有直接危险的情况下报告欺诈、盗窃或虐待老人。',
      pa: 'ਧੋਖਾਧੜੀ, ਚੋਰੀ, ਜਾਂ ਬਜ਼ੁਰਗਾਂ ਨਾਲ ਦੁਰਵਿਵਹਾਰ ਦੀ ਰਿਪੋਰਟ ਕਰੋ।',
      es: 'Denuncie fraude, robo o abuso de ancianos cuando no haya peligro inmediato.'
    },
    category: Category.ABUSE,
    subcategory: { en: 'Reporting', fr: 'Signalement', zh: '报告', pa: 'ਰਿਪੋਰਟਿੰਗ', es: 'Denuncias' }
  },
  {
    id: 'anti-fraud',
    name: { en: 'Canadian Anti-Fraud Centre', fr: 'Centre antifraude du Canada', zh: '加拿大反欺诈中心', pa: 'ਕੈਨੇਡੀਅਨ ਐਂਟੀ-ਫਰਾਡ ਸੈਂਟਰ', es: 'Centro Antifraude de Canadá' },
    phone: '1-888-495-8501',
    description: {
      en: 'Report scams and get advice on protecting yourself from fraud.',
      fr: 'Signalez les escroqueries et obtenez des conseils pour vous protéger.',
      zh: '报告骗局并获取有关保护自己免受欺诈的建议。',
      pa: 'ਘੁਟਾਲਿਆਂ ਦੀ ਰਿਪੋਰਟ ਕਰੋ ਅਤੇ ਆਪਣੇ ਆਪ ਨੂੰ ਬਚਾਉਣ ਲਈ ਸਲਾਹ ਲਓ।',
      es: 'Denuncie estafas y obtenga consejos sobre cómo protegerse.'
    },
    category: Category.ABUSE,
    subcategory: { en: 'Fraud', fr: 'Fraude', zh: '欺诈', pa: 'ਧੋਖਾਧੜੀ', es: 'Fraude' }
  },

  // --- 10. LEGAL ---
  {
    id: 'ace',
    name: { en: 'Advocacy Centre for the Elderly', fr: 'Centre d\'avocats pour les aînés', zh: '老年人权益倡导中心', pa: 'ਬਜ਼ੁਰਗਾਂ ਲਈ ਵਕਾਲਤ ਕੇਂਦਰ', es: 'Centro de Defensa de los Ancianos' },
    phone: '1-855-598-2656',
    description: {
      en: 'Legal help for low-income seniors regarding hospitals, long-term care, and retirement homes.',
      fr: 'Aide juridique pour les aînés à faible revenu concernant les hôpitaux, les soins de longue durée et les maisons de retraite.',
      zh: '为低收入老年人提供关于医院、长期护理和养老院的法律帮助。',
      pa: 'ਹਸਪਤਾਲਾਂ, ਲੰਬੇ ਸਮੇਂ ਦੀ ਦੇਖਭਾਲ, ਅਤੇ ਰਿਟਾਇਰਮੈਂਟ ਹੋਮਾਂ ਬਾਰੇ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਕਾਨੂੰਨੀ ਮਦਦ।',
      es: 'Ayuda legal para personas mayores de bajos ingresos sobre hospitales, cuidados a largo plazo y hogares de retiro.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Advocacy', fr: 'Défense', zh: '倡导', pa: 'ਵਕਾਲਤ', es: 'Defensa' }
  },
  {
    id: 'legal-aid',
    name: { en: 'Legal Aid Ontario', fr: 'Aide juridique Ontario', zh: '安大略省法律援助', pa: 'ਲੀਗਲ ਏਡ ਓਨਟਾਰੀਓ', es: 'Ayuda Legal Ontario' },
    phone: '1-800-668-8258',
    description: {
      en: 'Legal assistance for low-income Ontarians for criminal, family, and immigration issues.',
      fr: 'Assistance juridique pour les Ontariens à faible revenu.',
      zh: '为低收入安大略省人提供法律援助。',
      pa: 'ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਓਨਟਾਰੀਓ ਨਿਵਾਸੀਆਂ ਲਈ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ।',
      es: 'Asistencia legal para habitantes de Ontario de bajos ingresos.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Aid', fr: 'Aide', zh: '援助', pa: 'ਸਹਾਇਤਾ', es: 'Ayuda' }
  },
  {
    id: 'cleo',
    name: { en: 'Community Legal Education Ontario', fr: 'Éducation juridique communautaire Ontario', zh: '安大略社区法律教育', pa: 'ਕਮਿਊਨਿਟੀ ਲੀਗਲ ਐਜੂਕੇਸ਼ਨ ਓਨਟਾਰੀਓ', es: 'Educación Legal Comunitaria de Ontario' },
    phone: '416-408-4420',
    description: {
      en: 'Clear language legal information and resources.',
      fr: 'Information juridique et ressources en langage clair.',
      zh: '通俗易懂的法律信息和资源。',
      pa: 'ਸਪੱਸ਼ਟ ਭਾਸ਼ਾ ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ ਅਤੇ ਸਰੋਤ।',
      es: 'Información legal y recursos en lenguaje claro.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Education', fr: 'Éducation', zh: '教育', pa: 'ਸਿੱਖਿਆ', es: 'Educación' }
  },

  // --- 11. FOOD ---
  {
    id: 'meals-on-wheels',
    name: { en: 'Meals on Wheels', fr: 'Popote roulante', zh: '送餐服务', pa: 'ਪਹੀਏ \'ਤੇ ਭੋਜਨ', es: 'Comidas sobre Ruedas' },
    website: 'www.mealsonwheels.ca',
    description: {
      en: 'Hot or frozen meals delivered to your door for seniors. Fees apply.',
      fr: 'Repas chauds ou surgelés livrés à votre porte. Frais applicables.',
      zh: '为老年人提供热餐或冷冻餐送货上门。需付费。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਲਈ ਤੁਹਾਡੇ ਦਰਵਾਜ਼ੇ \'ਤੇ ਗਰਮ ਜਾਂ ਜੰਮੇ ਹੋਏ ਭੋਜਨ। ਫੀਸਾਂ ਲਾਗੂ ਹੁੰਦੀਆਂ ਹਨ।',
      es: 'Comidas calientes o congeladas entregadas a su puerta. Se aplican tarifas.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Delivery', fr: 'Livraison', zh: '配送', pa: 'ਡਿਲਿਵਰੀ', es: 'Entrega' }
  },
  {
    id: 'daily-bread',
    name: { en: 'Daily Bread Food Bank', fr: 'Banque alimentaire Daily Bread', zh: '每日面包食物银行', pa: 'ਰੋਜ਼ਾਨਾ ਬਰੈੱਡ ਫੂਡ ਬੈਂਕ', es: 'Banco de Alimentos Daily Bread' },
    phone: '416-203-0050',
    website: 'www.dailybread.ca',
    description: {
      en: 'Network of food banks across Toronto providing emergency food access.',
      fr: 'Réseau de banques alimentaires à travers Toronto.',
      zh: '遍布多伦多的食物银行网络。',
      pa: 'ਪੂਰੇ ਟੋਰਾਂਟੋ ਵਿੱਚ ਫੂਡ ਬੈਂਕਾਂ ਦਾ ਨੈੱਟਵਰਕ।',
      es: 'Red de bancos de alimentos en todo Toronto.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Food Bank', fr: 'Banque alimentaire', zh: '食物银行', pa: 'ਫੂਡ ਬੈਂਕ', es: 'Banco de Alimentos' }
  },
  {
    id: 'food-share',
    name: { en: 'FoodShare Toronto', fr: 'FoodShare Toronto', zh: 'FoodShare 多伦多', pa: 'ਫੂਡਸ਼ੇਅਰ ਟੋਰਾਂਟੋ', es: 'FoodShare Toronto' },
    phone: '416-363-6441',
    website: 'www.foodshare.net',
    description: {
      en: 'Good Food Box program and community food initiatives.',
      fr: 'Programme Good Food Box et initiatives alimentaires communautaires.',
      zh: 'Good Food Box 计划和社区食品倡议。',
      pa: 'ਗੁੱਡ ਫੂਡ ਬਾਕਸ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਕਮਿਊਨਿਟੀ ਫੂਡ ਪਹਿਲਕਦਮੀਆਂ।',
      es: 'Programa Good Food Box e iniciativas alimentarias comunitarias.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Produce', fr: 'Produits', zh: '农产品', pa: 'ਉਤਪਾਦ', es: 'Productos' }
  },
  {
    id: 'north-york-harvest',
    name: { en: 'North York Harvest Food Bank', fr: 'Banque alimentaire North York Harvest', zh: '北约克丰收食物银行', pa: 'ਨਾਰਥ ਯਾਰਕ ਹਾਰਵੈਸਟ ਫੂਡ ਬੈਂਕ', es: 'Banco de Alimentos North York Harvest' },
    phone: '416-635-7771',
    website: 'www.northyorkharvest.com',
    description: {
      en: 'Food bank services and emergency food access in North York area.',
      fr: 'Services de banque alimentaire et accès alimentaire d\'urgence dans la région de North York.',
      zh: '北约克地区的食物银行服务和紧急食物获取。',
      pa: 'ਨਾਰਥ ਯਾਰਕ ਖੇਤਰ ਵਿੱਚ ਫੂਡ ਬੈਂਕ ਸੇਵਾਵਾਂ ਅਤੇ ਐਮਰਜੈਂਸੀ ਭੋਜਨ ਪਹੁੰਚ।',
      es: 'Servicios de banco de alimentos y acceso a alimentos de emergencia en el área de North York.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Food Bank', fr: 'Banque alimentaire', zh: '食物银行', pa: 'ਫੂਡ ਬੈਂਕ', es: 'Banco de Alimentos' }
  },
  {
    id: 'second-harvest',
    name: { en: 'Second Harvest', fr: 'Second Harvest', zh: 'Second Harvest', pa: 'ਸੈਕੰਡ ਹਾਰਵੈਸਟ', es: 'Second Harvest' },
    phone: '416-408-2594',
    website: 'www.secondharvest.ca',
    description: {
      en: 'Food rescue and distribution service, reducing food waste and feeding those in need.',
      fr: 'Service de sauvetage et de distribution alimentaire, réduisant le gaspillage alimentaire.',
      zh: '食物救援和分发服务，减少食物浪费并为有需要的人提供食物。',
      pa: 'ਭੋਜਨ ਬਚਾਉਣ ਅਤੇ ਵੰਡ ਸੇਵਾ, ਭੋਜਨ ਦੀ ਬਰਬਾਦੀ ਘਟਾਉਣਾ।',
      es: 'Servicio de rescate y distribución de alimentos, reduciendo el desperdicio de alimentos.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Food Bank', fr: 'Banque alimentaire', zh: '食物银行', pa: 'ਫੂਡ ਬੈਂਕ', es: 'Banco de Alimentos' }
  },
  {
    id: 'community-kitchens',
    name: { en: 'Community Kitchens', fr: 'Cuisines communautaires', zh: '社区厨房', pa: 'ਕਮਿਊਨਿਟੀ ਕਿਚਨ', es: 'Cocinas Comunitarias' },
    phone: '2-1-1',
    description: {
      en: 'Shared cooking and eating programs. Contact 211 for locations near you.',
      fr: 'Programmes de cuisine et de repas partagés. Contactez le 211 pour les emplacements près de chez vous.',
      zh: '共享烹饪和用餐项目。致电 211 查找您附近的地点。',
      pa: 'ਸਾਂਝੀ ਖਾਣਾ ਪਕਾਉਣ ਅਤੇ ਖਾਣ ਦੇ ਪ੍ਰੋਗਰਾਮ। ਆਪਣੇ ਨੇੜੇ ਦੇ ਸਥਾਨਾਂ ਲਈ 211 \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Programas de cocina y comida compartida. Llame al 211 para ubicaciones cerca de usted.'
    },
    category: Category.FOOD,
    subcategory: { en: 'In-Person Meals', fr: 'Repas en personne', zh: '现场用餐', pa: 'ਵਿਅਕਤੀਗਤ ਭੋਜਨ', es: 'Comidas en Persona' }
  },
  {
    id: 'senior-meal-programs',
    name: { en: 'Senior Meal Programs', fr: 'Programmes de repas pour aînés', zh: '老年人用餐项目', pa: 'ਸੀਨੀਅਰ ਭੋਜਨ ਪ੍ਰੋਗਰਾਮ', es: 'Programas de Comidas para Personas Mayores' },
    phone: '416-217-2077',
    description: {
      en: 'Various community centres offer meal programs for seniors. Contact Toronto Seniors Helpline or 211 for locations.',
      fr: 'Divers centres communautaires offrent des programmes de repas pour les aînés. Contactez la ligne d\'assistance ou le 211.',
      zh: '多个社区中心为老年人提供用餐项目。联系多伦多老年人求助热线或 211 查找地点。',
      pa: 'ਕਈ ਭਾਈਚਾਰਕ ਕੇਂਦਰ ਬਜ਼ੁਰਗਾਂ ਲਈ ਭੋਜਨ ਪ੍ਰੋਗਰਾਮ ਪੇਸ਼ ਕਰਦੇ ਹਨ। ਸਥਾਨਾਂ ਲਈ ਟੋਰਾਂਟੋ ਸੀਨੀਅਰਜ਼ ਹੈਲਪਲਾਈਨ ਜਾਂ 211 \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Varios centros comunitarios ofrecen programas de comidas para personas mayores. Llame a la línea de ayuda o al 211 para ubicaciones.'
    },
    category: Category.FOOD,
    subcategory: { en: 'In-Person Meals', fr: 'Repas en personne', zh: '现场用餐', pa: 'ਵਿਅਕਤੀਗਤ ਭੋਜਨ', es: 'Comidas en Persona' }
  },
  {
    id: 'group-dining',
    name: { en: 'Group Dining Programs', fr: 'Programmes de repas en groupe', zh: '团体用餐项目', pa: 'ਗਰੁੱਪ ਡਾਇਨਿੰਗ ਪ੍ਰੋਗਰਾਮ', es: 'Programas de Comidas en Grupo' },
    phone: '2-1-1',
    description: {
      en: 'Various community centres offer congregate dining programs. Contact 211 for locations.',
      fr: 'Divers centres communautaires offrent des programmes de repas en groupe. Contactez le 211 pour les emplacements.',
      zh: '多个社区中心提供集体用餐项目。致电 211 查找地点。',
      pa: 'ਕਈ ਭਾਈਚਾਰਕ ਕੇਂਦਰ ਸਮੂਹਿਕ ਡਾਇਨਿੰਗ ਪ੍ਰੋਗਰਾਮ ਪੇਸ਼ ਕਰਦੇ ਹਨ। ਸਥਾਨਾਂ ਲਈ 211 \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Varios centros comunitarios ofrecen programas de comidas grupales. Llame al 211 para ubicaciones.'
    },
    category: Category.FOOD,
    subcategory: { en: 'In-Person Meals', fr: 'Repas en personne', zh: '现场用餐', pa: 'ਵਿਅਕਤੀਗਤ ਭੋਜਨ', es: 'Comidas en Persona' }
  },
  {
    id: 'allotment-gardens',
    name: { en: 'Allotment Gardens', fr: 'Jardins familiaux', zh: '分配花园', pa: 'ਅਲਾਟਮੈਂਟ ਗਾਰਡਨ', es: 'Huertos Comunitarios' },
    phone: '3-1-1',
    description: {
      en: 'Garden plots for growing fresh produce. Contact Parks, Forestry & Recreation through 311.',
      fr: 'Parcelles de jardin pour cultiver des produits frais. Contactez Parcs, Foresterie et Loisirs via le 311.',
      zh: '用于种植新鲜农产品的花园地块。通过 311 联系公园、林业和娱乐部门。',
      pa: 'ਤਾਜ਼ੇ ਉਤਪਾਦ ਉਗਾਉਣ ਲਈ ਬਗੀਚੇ ਦੇ ਪਲਾਟ। 311 ਦੁਆਰਾ ਪਾਰਕਸ, ਫੋਰੈਸਟਰੀ ਅਤੇ ਮਨੋਰੰਜਨ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Parcelas de jardín para cultivar productos frescos. Contacte Parques, Silvicultura y Recreación a través del 311.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Produce', fr: 'Produits', zh: '农产品', pa: 'ਉਤਪਾਦ', es: 'Productos' }
  },

  // --- 12. PETS ---
  {
    id: 'toronto-animal-services',
    name: { en: 'Toronto Animal Services', fr: 'Services aux animaux de Toronto', zh: '多伦多动物服务', pa: 'ਟੋਰਾਂਟੋ ਪਸ਼ੂ ਸੇਵਾਵਾਂ', es: 'Servicios de Animales de Toronto' },
    phone: '3-1-1',
    phone2: '416-338-7297',
    website: 'www.toronto.ca/animalservices',
    description: {
      en: 'Pet licensing, animal control, lost pets, low-cost spay/neuter programs, and pet adoption. Contact through 311 or 416-338-8723.',
      fr: 'Licences pour animaux, contrôle des animaux, animaux perdus, stérilisation à faible coût, et adoption d\'animaux.',
      zh: '宠物许可、动物控制、丢失宠物、低成本绝育项目和宠物收养。通过 311 或 416-338-8723 联系。',
      pa: 'ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਦਾ ਲਾਇਸੈਂਸ, ਪਸ਼ੂ ਨਿਯੰਤਰਣ, ਗੁਆਚੇ ਪਾਲਤੂ ਜਾਨਵਰ, ਘੱਟ ਕੀਮਤ ਵਾਲੀ ਨਸਬੰਦੀ ਪ੍ਰੋਗਰਾਮ, ਅਤੇ ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਦਾ ਗੋਦ ਲੈਣਾ।',
      es: 'Licencias para mascotas, control de animales, mascotas perdidas, esterilización a bajo costo, y adopción de mascotas.'
    },
    category: Category.PETS,
    subcategory: { en: 'Care', fr: 'Soins', zh: '护理', pa: 'ਦੇਖਭਾਲ', es: 'Cuidado' }
  },
  {
    id: 'farley',
    name: { en: 'The Farley Foundation', fr: 'Fondation Farley', zh: '法利基金会', pa: 'ਦ ਫਾਰਲੇ ਫਾਊਂਡੇਸ਼ਨ', es: 'La Fundación Farley' },
    phone: '1-888-262-9811',
    description: {
      en: 'Subsidizes veterinary care for pets of low-income seniors.',
      fr: 'Subventionne les soins vétérinaires pour les aînés à faible revenu.',
      zh: '为低收入老年人的宠物提供兽医护理补贴。',
      pa: 'ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਬਜ਼ੁਰਗਾਂ ਦੇ ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਲਈ ਵੈਟਰਨਰੀ ਦੇਖਭਾਲ ਲਈ ਸਬਸਿਡੀ।',
      es: 'Subsidia la atención veterinaria para mascotas de personas mayores de bajos ingresos.'
    },
    category: Category.PETS,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: 'safepet',
    name: { en: 'SafePet Program', fr: 'Programme SafePet', zh: 'SafePet 计划', pa: 'SafePet ਪ੍ਰੋਗਰਾਮ', es: 'Programa SafePet' },
    phone: '1-800-670-1702',
    description: {
      en: 'Foster care for pets of women leaving abusive relationships.',
      fr: 'Famille d\'accueil pour les animaux des femmes quittant des relations abusives.',
      zh: '为离开虐待关系的妇女的宠物提供寄养服务。',
      pa: 'ਅਪਮਾਨਜਨਕ ਰਿਸ਼ਤਿਆਂ ਨੂੰ ਛੱਡਣ ਵਾਲੀਆਂ ਔਰਤਾਂ ਦੇ ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਲਈ ਪਾਲਣ ਪੋਸ਼ਣ।',
      es: 'Cuidado de crianza para mascotas de mujeres que dejan relaciones abusivas.'
    },
    category: Category.PETS,
    subcategory: { en: 'Safety', fr: 'Sécurité', zh: '安全', pa: 'ਸੁਰੱਖਿਆ', es: 'Seguridad' }
  },
  {
    id: 'toronto-cat-rescue',
    name: { en: 'Toronto Cat Rescue', fr: 'Secours pour chats de Toronto', zh: '多伦多猫咪救援', pa: 'ਟੋਰਾਂਟੋ ਕੈਟ ਰੈਸਕਿਊ', es: 'Rescate de Gatos de Toronto' },
    phone: '647-504-2287',
    website: 'www.torontocatrescue.ca',
    description: {
      en: 'Cat food assistance programs and cat rescue services.',
      fr: 'Programmes d\'aide alimentaire pour chats et services de sauvetage de chats.',
      zh: '猫咪食物援助计划和猫咪救援服务。',
      pa: 'ਬਿੱਲੀ ਦੇ ਭੋਜਨ ਸਹਾਇਤਾ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਬਿੱਲੀ ਬਚਾਉਣ ਦੀਆਂ ਸੇਵਾਵਾਂ।',
      es: 'Programas de asistencia alimentaria para gatos y servicios de rescate de gatos.'
    },
    category: Category.PETS,
    subcategory: { en: 'Care', fr: 'Soins', zh: '护理', pa: 'ਦੇਖਭਾਲ', es: 'Cuidado' }
  },
  {
    id: 'toronto-humane-society',
    name: { en: 'Toronto Humane Society', fr: 'Société protectrice des animaux de Toronto', zh: '多伦多人道协会', pa: 'ਟੋਰਾਂਟੋ ਹਿਊਮੇਨ ਸੁਸਾਇਟੀ', es: 'Sociedad Humanitaria de Toronto' },
    phone: '416-392-2273',
    website: 'www.torontohumanesociety.com',
    description: {
      en: 'Low-cost veterinary services and pet care assistance.',
      fr: 'Services vétérinaires à faible coût et aide aux soins des animaux.',
      zh: '低成本兽医服务和宠物护理援助。',
      pa: 'ਘੱਟ ਕੀਮਤ ਵਾਲੀਆਂ ਵੈਟਰਨਰੀ ਸੇਵਾਵਾਂ ਅਤੇ ਪਾਲਤੂ ਦੇਖਭਾਲ ਸਹਾਇਤਾ।',
      es: 'Servicios veterinarios de bajo costo y asistencia para el cuidado de mascotas.'
    },
    category: Category.PETS,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: 'pet-food-banks',
    name: { en: 'Pet Food Banks', fr: 'Banques alimentaires pour animaux', zh: '宠物食物银行', pa: 'ਪਾਲਤੂ ਭੋਜਨ ਬੈਂਕ', es: 'Bancos de Alimentos para Mascotas' },
    phone: '2-1-1',
    description: {
      en: 'Many food banks also provide pet food. Contact Daily Bread (416-203-0050), North York Harvest (416-635-7771), or 211 for local food banks.',
      fr: 'De nombreuses banques alimentaires fournissent également de la nourriture pour animaux. Contactez Daily Bread, North York Harvest ou le 211.',
      zh: '许多食物银行也提供宠物食品。联系 Daily Bread (416-203-0050)、North York Harvest (416-635-7771) 或 211 查找当地食物银行。',
      pa: 'ਕਈ ਫੂਡ ਬੈਂਕ ਪਾਲਤੂ ਭੋਜਨ ਵੀ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ। ਡੇਲੀ ਬਰੈੱਡ (416-203-0050), ਨਾਰਥ ਯਾਰਕ ਹਾਰਵੈਸਟ (416-635-7771), ਜਾਂ ਸਥਾਨਕ ਫੂਡ ਬੈਂਕਾਂ ਲਈ 211 \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Muchos bancos de alimentos también proporcionan comida para mascotas. Contacte Daily Bread, North York Harvest o 211 para bancos de alimentos locales.'
    },
    category: Category.PETS,
    subcategory: { en: 'Care', fr: 'Soins', zh: '护理', pa: 'ਦੇਖਭਾਲ', es: 'Cuidado' }
  },
  {
    id: 'veterinary-colleges',
    name: { en: 'Veterinary Colleges', fr: 'Écoles vétérinaires', zh: '兽医学院', pa: 'ਵੈਟਰਨਰੀ ਕਾਲਜ', es: 'Colegios Veterinarios' },
    description: {
      en: 'Contact veterinary schools for reduced-cost veterinary services.',
      fr: 'Contactez les écoles vétérinaires pour des services vétérinaires à coût réduit.',
      zh: '联系兽医学院获取减价兽医服务。',
      pa: 'ਘੱਟ ਲਾਗਤ ਵਾਲੀਆਂ ਵੈਟਰਨਰੀ ਸੇਵਾਵਾਂ ਲਈ ਵੈਟਰਨਰੀ ਸਕੂਲਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Contacte escuelas veterinarias para servicios veterinarios de costo reducido.'
    },
    category: Category.PETS,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: 'pet-assistance-programs',
    name: { en: 'Pet Assistance Programs', fr: 'Programmes d\'aide aux animaux', zh: '宠物援助项目', pa: 'ਪਾਲਤੂ ਸਹਾਇਤਾ ਪ੍ਰੋਗਰਾਮ', es: 'Programas de Asistencia para Mascotas' },
    phone: '2-1-1',
    description: {
      en: 'Contact 211 for local pet assistance programs and services.',
      fr: 'Contactez le 211 pour les programmes et services d\'aide aux animaux locaux.',
      zh: '致电 211 查找当地宠物援助项目和服务。',
      pa: 'ਸਥਾਨਕ ਪਾਲਤੂ ਸਹਾਇਤਾ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸੇਵਾਵਾਂ ਲਈ 211 \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Llame al 211 para programas y servicios locales de asistencia para mascotas.'
    },
    category: Category.PETS,
    subcategory: { en: 'Care', fr: 'Soins', zh: '护理', pa: 'ਦੇਖਭਾਲ', es: 'Cuidado' }
  },
  {
    id: 'pet-emergency-preparedness',
    name: { en: 'Pet Emergency Preparedness', fr: 'Préparation d\'urgence pour animaux', zh: '宠物应急准备', pa: 'ਪਾਲਤੂ ਐਮਰਜੈਂਸੀ ਤਿਆਰੀ', es: 'Preparación de Emergencia para Mascotas' },
    phone: '3-1-1',
    description: {
      en: 'Information about including pets in emergency plans. Contact Toronto Emergency Management through 311.',
      fr: 'Information sur l\'inclusion des animaux dans les plans d\'urgence. Contactez la gestion des urgences via le 311.',
      zh: '关于在应急计划中包含宠物的信息。通过 311 联系多伦多应急管理部门。',
      pa: 'ਐਮਰਜੈਂਸੀ ਯੋਜਨਾਵਾਂ ਵਿੱਚ ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਨੂੰ ਸ਼ਾਮਲ ਕਰਨ ਬਾਰੇ ਜਾਣਕਾਰੀ। 311 ਦੁਆਰਾ ਟੋਰਾਂਟੋ ਐਮਰਜੈਂਸੀ ਪ੍ਰਬੰਧਨ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Información sobre incluir mascotas en planes de emergencia. Contacte Gestión de Emergencias de Toronto a través del 311.'
    },
    category: Category.PETS,
    subcategory: { en: 'Safety', fr: 'Sécurité', zh: '安全', pa: 'ਸੁਰੱਖਿਆ', es: 'Seguridad' }
  },

  // --- 13. SPECIALIZED SERVICES ---
  {
    id: 'council-fire',
    name: { en: 'Toronto Council Fire Native Centre', fr: 'Centre culturel autochtone Council Fire', zh: 'Council Fire 原住民文化中心', pa: 'ਕੌਂਸਲ ਫਾਇਰ ਨੇਟਿਵ ਕਲਚਰਲ ਸੈਂਟਰ', es: 'Centro Cultural Nativo Council Fire' },
    phone: '416-392-0340',
    description: {
      en: 'Cultural programming and community services for Indigenous seniors.',
      fr: 'Programmes culturels et services communautaires pour les aînés autochtones.',
      zh: '为原住民老年人提供的文化项目和社区服务。',
      pa: 'ਮੂਲ ਨਿਵਾਸੀ ਬਜ਼ੁਰਗਾਂ ਲਈ ਸੱਭਿਆਚਾਰਕ ਪ੍ਰੋਗਰਾਮਿੰਗ ਅਤੇ ਭਾਈਚਾਰਕ ਸੇਵਾਵਾਂ।',
      es: 'Programación cultural y servicios comunitarios para personas mayores indígenas.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Indigenous', fr: 'Autochtone', zh: '原住民', pa: 'ਮੂਲ ਨਿਵਾਸੀ', es: 'Indígena' }
  },
  {
    id: 'taibu',
    name: { en: 'TAIBU Community Health Centre', fr: 'Centre de santé TAIBU', zh: 'TAIBU 社区健康中心', pa: 'TAIBU ਕਮਿਊਨਿਟੀ ਹੈਲਥ ਸੈਂਟਰ', es: 'Centro de Salud Comunitario TAIBU' },
    phone: '416-644-3536',
    description: {
      en: 'Health services tailored for Black communities.',
      fr: 'Services de santé adaptés aux communautés noires.',
      zh: '为黑人社区量身定制的健康服务。',
      pa: 'ਕਾਲੇ ਭਾਈਚਾਰਿਆਂ ਲਈ ਤਿਆਰ ਕੀਤੀਆਂ ਸਿਹਤ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de salud adaptados a las comunidades negras.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Black Seniors', fr: 'Aînés noirs', zh: '黑人老年人', pa: 'ਕਾਲੇ ਬਜ਼ੁਰਗ', es: 'Personas Mayores Negras' }
  },
  {
    id: 'centre-franco',
    name: { en: 'Centre Francophone', fr: 'Centre Francophone', zh: '法语中心', pa: 'ਫ੍ਰੈਂਕੋਫੋਨ ਕੇਂਦਰ', es: 'Centro Francófono' },
    phone: '416-922-2672',
    website: 'www.centrefranco.org',
    description: {
      en: 'Health and social services for the Francophone community.',
      fr: 'Services de santé et sociaux pour la communauté francophone.',
      zh: '为法语社区提供的健康和社会服务。',
      pa: 'ਫ੍ਰੈਂਕੋਫੋਨ ਭਾਈਚਾਰੇ ਲਈ ਸਿਹਤ ਅਤੇ ਸਮਾਜਿਕ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de salud y sociales para la comunidad francófona.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Francophone', fr: 'Francophone', zh: '法语', pa: 'ਫ੍ਰੈਂਕੋਫੋਨ', es: 'Francófono' }
  },
  {
    id: 'reseau-sante-franco',
    name: { en: 'Réseau de santé en français de l\'Ontario', fr: 'Réseau de santé en français de l\'Ontario', zh: '安大略省法语健康网络', pa: 'ਰੇਸੋ ਡੀ ਸਾਂਟੇ ਐਨ ਫ੍ਰਾਂਸੇ ਡੀ ਐਲ\'ਓਨਟਾਰੀਓ', es: 'Red de Salud en Francés de Ontario' },
    phone: '416-525-4339',
    website: 'www.rsfontario.ca',
    description: {
      en: 'French-language health services information and referrals for Francophone seniors.',
      fr: 'Information et références sur les services de santé en français pour les aînés francophones.',
      zh: '为法语老年人提供法语健康服务信息和转介。',
      pa: 'ਫ੍ਰੈਂਕੋਫੋਨ ਬਜ਼ੁਰਗਾਂ ਲਈ ਫ੍ਰੈਂਚ-ਭਾਸ਼ਾ ਸਿਹਤ ਸੇਵਾਵਾਂ ਜਾਣਕਾਰੀ ਅਤੇ ਰੈਫਰਲ।',
      es: 'Información y referencias de servicios de salud en francés para personas mayores francófonas.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Francophone', fr: 'Francophone', zh: '法语', pa: 'ਫ੍ਰੈਂਕੋਫੋਨ', es: 'Francófono' }
  },
  {
    id: 'acfo',
    name: { en: 'Association canadienne-française de l\'Ontario (ACFO)', fr: 'Association canadienne-française de l\'Ontario (ACFO)', zh: '安大略省法裔加拿大人协会', pa: 'ਐਸੋਸੀਏਸ਼ਨ ਕੈਨੇਡੀਅਨ-ਫ੍ਰਾਂਸੇਜ਼ ਡੀ ਐਲ\'ਓਨਟਾਰੀਓ', es: 'Asociación Canadiense-Francesa de Ontario (ACFO)' },
    phone: '613-744-0851',
    description: {
      en: 'Advocacy and cultural programs for Francophone communities, including seniors.',
      fr: 'Défense des droits et programmes culturels pour les communautés francophones, y compris les aînés.',
      zh: '为包括老年人在内的法语社区提供倡导和文化项目。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਸਮੇਤ ਫ੍ਰੈਂਕੋਫੋਨ ਭਾਈਚਾਰਿਆਂ ਲਈ ਵਕਾਲਤ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਪ੍ਰੋਗਰਾਮ।',
      es: 'Defensa y programas culturales para comunidades francófonas, incluidas las personas mayores.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Francophone', fr: 'Francophone', zh: '法语', pa: 'ਫ੍ਰੈਂਕੋਫੋਨ', es: 'Francófono' }
  },
  {
    id: 'the-519',
    name: { en: 'The 519', fr: 'The 519', zh: 'The 519', pa: 'The 519', es: 'The 519' },
    phone: '416-392-6874',
    description: {
      en: 'Advocacy and service programs for older 2SLGBTQ+ adults.',
      fr: 'Défense des droits et services pour les aînés 2SLGBTQ+.',
      zh: '为 2SLGBTQ+ 老年人提供的宣传和服务项目。',
      pa: '2SLGBTQ+ ਬਜ਼ੁਰਗਾਂ ਲਈ ਵਕਾਲਤ ਅਤੇ ਸੇਵਾ ਪ੍ਰੋਗਰਾਮ।',
      es: 'Defensa y programas de servicios para adultos mayores 2SLGBTQ+.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: '2SLGBTQI+', fr: '2SLGBTQI+', zh: '2SLGBTQI+', pa: '2SLGBTQI+', es: '2SLGBTQI+' }
  },
  {
    id: 'veterans-affairs',
    name: { en: 'Veterans Affairs Canada', fr: 'Anciens Combattants Canada', zh: '加拿大退伍军人事务部', pa: 'ਵੈਟਰਨਜ਼ ਅਫੇਅਰਜ਼ ਕੈਨੇਡਾ', es: 'Asuntos de Veteranos Canadá' },
    phone: '1-866-522-2022',
    website: 'www.veterans.gc.ca',
    description: {
      en: 'Pensions, benefits, and services for war veterans.',
      fr: 'Pensions, avantages et services pour les anciens combattants.',
      zh: '为退伍军人提供的养老金、福利和服务。',
      pa: 'ਜੰਗੀ ਸਾਬਕਾ ਫੌਜੀਆਂ ਲਈ ਪੈਨਸ਼ਨ, ਲਾਭ, ਅਤੇ ਸੇਵਾਵਾਂ।',
      es: 'Pensiones, beneficios y servicios para veteranos de guerra.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Veterans', fr: 'Vétérans', zh: '退伍军人', pa: 'ਸਾਬਕਾ ਫੌਜੀ', es: 'Veteranos' }
  },
  {
    id: 'settlement-org',
    name: { en: 'Settlement.org', fr: 'Etablissement.org', zh: 'Settlement.org', pa: 'Settlement.org', es: 'Settlement.org' },
    website: 'www.settlement.org',
    description: {
      en: 'Information for newcomers to Ontario about housing, health, and legal matters.',
      fr: 'Information pour les nouveaux arrivants en Ontario.',
      zh: '为安大略省新移民提供的信息。',
      pa: 'ਓਨਟਾਰੀਓ ਵਿੱਚ ਨਵੇਂ ਆਉਣ ਵਾਲਿਆਂ ਲਈ ਜਾਣਕਾਰੀ।',
      es: 'Información para recién llegados a Ontario.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Newcomers', fr: 'Nouveaux arrivants', zh: '新移民', pa: 'ਨਵੇਂ ਆਉਣ ਵਾਲੇ', es: 'Recién llegados' }
  },
  {
    id: 'native-child',
    name: { en: 'Native Child and Family Services', fr: 'Services à l\'enfant et à la famille autochtones', zh: '原住民儿童和家庭服务', pa: 'ਨੇਟਿਵ ਚਾਈਲਡ ਐਂਡ ਫੈਮਿਲੀ ਸਰਵਿਸਿਜ਼', es: 'Servicios para Niños y Familias Nativas' },
    phone: '416-969-8510',
    website: 'www.nativechild.org',
    description: {
      en: 'Cultural programs and support for Indigenous seniors.',
      fr: 'Programmes culturels et soutien pour les aînés autochtones.',
      zh: '为原住民老年人提供的文化项目和支持。',
      pa: 'ਮੂਲ ਨਿਵਾਸੀ ਬਜ਼ੁਰਗਾਂ ਲਈ ਸੱਭਿਆਚਾਰਕ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸਹਾਇਤਾ।',
      es: 'Programas culturales y apoyo para personas mayores indígenas.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Indigenous', fr: 'Autochtone', zh: '原住民', pa: 'ਮੂਲ ਨਿਵਾਸੀ', es: 'Indígena' }
  },
  {
    id: 'native-mens-residence',
    name: { en: 'Native Men\'s Residence', fr: 'Résidence pour hommes autochtones', zh: '原住民男性住所', pa: 'ਨੇਟਿਵ ਮੈਨਜ਼ ਰੈਜ਼ੀਡੈਂਸ', es: 'Residencia para Hombres Nativos' },
    phone: '416-652-9896',
    description: {
      en: 'Housing and support services for Indigenous men and seniors.',
      fr: 'Services de logement et de soutien pour les hommes et aînés autochtones.',
      zh: '为原住民男性和老年人提供的住房和支持服务。',
      pa: 'ਮੂਲ ਨਿਵਾਸੀ ਪੁਰਸ਼ਾਂ ਅਤੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਰਿਹਾਇਸ਼ ਅਤੇ ਸਹਾਇਤਾ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de vivienda y apoyo para hombres y personas mayores indígenas.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Indigenous', fr: 'Autochtone', zh: '原住民', pa: 'ਮੂਲ ਨਿਵਾਸੀ', es: 'Indígena' }
  },
  {
    id: 'native-womens-resource',
    name: { en: 'Native Women\'s Resource Centre', fr: 'Centre de ressources pour femmes autochtones', zh: '原住民妇女资源中心', pa: 'ਨੇਟਿਵ ਵੂਮੈਨਜ਼ ਰਿਸੋਰਸ ਸੈਂਟਰ', es: 'Centro de Recursos para Mujeres Nativas' },
    phone: '416-963-9963',
    description: {
      en: 'Support services and cultural programs for Indigenous women and seniors.',
      fr: 'Services de soutien et programmes culturels pour les femmes et aînés autochtones.',
      zh: '为原住民妇女和老年人提供的支持服务和文化项目。',
      pa: 'ਮੂਲ ਨਿਵਾਸੀ ਔਰਤਾਂ ਅਤੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਸਹਾਇਤਾ ਸੇਵਾਵਾਂ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਪ੍ਰੋਗਰਾਮ।',
      es: 'Servicios de apoyo y programas culturales para mujeres y personas mayores indígenas.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Indigenous', fr: 'Autochtone', zh: '原住民', pa: 'ਮੂਲ ਨਿਵਾਸੀ', es: 'Indígena' }
  },
  {
    id: 'aboriginal-legal-services',
    name: { en: 'Aboriginal Legal Services', fr: 'Services juridiques autochtones', zh: '原住民法律服务', pa: 'ਐਬੋਰਿਜਿਨਲ ਲੀਗਲ ਸਰਵਿਸਿਜ਼', es: 'Servicios Legales Aborígenes' },
    phone: '416-408-4041',
    description: {
      en: 'Legal support and advocacy for Indigenous people including seniors.',
      fr: 'Soutien juridique et défense des droits pour les Autochtones, y compris les aînés.',
      zh: '为包括老年人在内的原住民提供法律支持和倡导。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਸਮੇਤ ਮੂਲ ਨਿਵਾਸੀਆਂ ਲਈ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਅਤੇ ਵਕਾਲਤ।',
      es: 'Apoyo legal y defensa para personas indígenas, incluidas las personas mayores.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Indigenous', fr: 'Autochtone', zh: '原住民', pa: 'ਮੂਲ ਨਿਵਾਸੀ', es: 'Indígena' }
  },
  {
    id: 'black-creek-chc',
    name: { en: 'Black Creek Community Health Centre', fr: 'Centre de santé communautaire Black Creek', zh: 'Black Creek 社区健康中心', pa: 'ਬਲੈਕ ਕ੍ਰੀਕ ਕਮਿਊਨਿਟੀ ਹੈਲਥ ਸੈਂਟਰ', es: 'Centro de Salud Comunitario Black Creek' },
    phone: '416-249-8000',
    website: 'www.bcchc.com',
    description: {
      en: 'Health and social services for Black communities.',
      fr: 'Services de santé et sociaux pour les communautés noires.',
      zh: '为黑人社区提供的健康和社会服务。',
      pa: 'ਕਾਲੇ ਭਾਈਚਾਰਿਆਂ ਲਈ ਸਿਹਤ ਅਤੇ ਸਮਾਜਿਕ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de salud y sociales para comunidades negras.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Black Seniors', fr: 'Aînés noirs', zh: '黑人老年人', pa: 'ਕਾਲੇ ਬਜ਼ੁਰਗ', es: 'Personas Mayores Negras' }
  },
  {
    id: 'united-way-gta',
    name: { en: 'United Way Greater Toronto', fr: 'Centraide du Grand Toronto', zh: '大多伦多联合劝募会', pa: 'ਯੂਨਾਈਟਡ ਵੇਅ ਗ੍ਰੇਟਰ ਟੋਰਾਂਟੋ', es: 'United Way del Gran Toronto' },
    phone: '416-777-2001',
    website: 'www.unitedwaygta.org',
    description: {
      en: 'Funding and support for Black-serving organizations and community services.',
      fr: 'Financement et soutien pour les organismes au service des communautés noires.',
      zh: '为服务黑人社区的组织和社区服务提供资金和支持。',
      pa: 'ਕਾਲੇ ਭਾਈਚਾਰਿਆਂ ਦੀ ਸੇਵਾ ਕਰਨ ਵਾਲੀਆਂ ਸੰਸਥਾਵਾਂ ਲਈ ਫੰਡਿੰਗ ਅਤੇ ਸਹਾਇਤਾ।',
      es: 'Financiamiento y apoyo para organizaciones que sirven a comunidades negras.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Black Seniors', fr: 'Aînés noirs', zh: '黑人老年人', pa: 'ਕਾਲੇ ਬਜ਼ੁਰਗ', es: 'Personas Mayores Negras' }
  },
  {
    id: 'black-cap',
    name: { en: 'Black Coalition for AIDS Prevention', fr: 'Coalition noire pour la prévention du sida', zh: '黑人艾滋病预防联盟', pa: 'ਬਲੈਕ ਕੋਆਲੀਸ਼ਨ ਫਾਰ ਏਡਜ਼ ਪ੍ਰੀਵੈਂਸ਼ਨ', es: 'Coalición Negra para la Prevención del SIDA' },
    phone: '416-977-9955',
    website: 'www.blackcap.org',
    description: {
      en: 'Health education and support services for Black communities, including seniors.',
      fr: 'Éducation sanitaire et services de soutien pour les communautés noires, y compris les aînés.',
      zh: '为包括老年人在内的黑人社区提供健康教育和支持服务。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਸਮੇਤ ਕਾਲੇ ਭਾਈਚਾਰਿਆਂ ਲਈ ਸਿਹਤ ਸਿੱਖਿਆ ਅਤੇ ਸਹਾਇਤਾ ਸੇਵਾਵਾਂ।',
      es: 'Educación en salud y servicios de apoyo para comunidades negras, incluidas las personas mayores.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Black Seniors', fr: 'Aînés noirs', zh: '黑人老年人', pa: 'ਕਾਲੇ ਬਜ਼ੁਰਗ', es: 'Personas Mayores Negras' }
  },
  {
    id: 'rainbow-health',
    name: { en: 'Rainbow Health Ontario', fr: 'Rainbow Health Ontario', zh: 'Rainbow Health Ontario', pa: 'Rainbow Health Ontario', es: 'Rainbow Health Ontario' },
    phone: '416-324-4100',
    website: 'www.rainbowhealthontario.ca',
    description: {
      en: 'Health care information for 2SLGBTQI+ people.',
      fr: 'Information sur les soins de santé pour les personnes 2SLGBTQI+.',
      zh: '为 2SLGBTQI+ 人士提供的医疗保健信息。',
      pa: '2SLGBTQI+ ਲੋਕਾਂ ਲਈ ਸਿਹਤ ਦੇਖਭਾਲ ਜਾਣਕਾਰੀ।',
      es: 'Información de atención médica para personas 2SLGBTQI+.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: '2SLGBTQI+', fr: '2SLGBTQI+', zh: '2SLGBTQI+', pa: '2SLGBTQI+', es: '2SLGBTQI+' }
  },
  {
    id: 'sherbourne-health',
    name: { en: 'Sherbourne Health Centre', fr: 'Centre de santé Sherbourne', zh: 'Sherbourne 健康中心', pa: 'ਸ਼ੇਰਬੋਰਨ ਹੈਲਥ ਸੈਂਟਰ', es: 'Centro de Salud Sherbourne' },
    phone: '416-324-4180',
    website: 'www.sherbourne.on.ca',
    description: {
      en: 'Health services for 2SLGBTQI+ community, including specialized care for seniors.',
      fr: 'Services de santé pour la communauté 2SLGBTQI+, y compris les soins spécialisés pour les aînés.',
      zh: '为 2SLGBTQI+ 社区提供健康服务，包括为老年人提供的专业护理。',
      pa: '2SLGBTQI+ ਭਾਈਚਾਰੇ ਲਈ ਸਿਹਤ ਸੇਵਾਵਾਂ, ਬਜ਼ੁਰਗਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਦੇਖਭਾਲ ਸਮੇਤ।',
      es: 'Servicios de salud para la comunidad 2SLGBTQI+, incluida atención especializada para personas mayores.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: '2SLGBTQI+', fr: '2SLGBTQI+', zh: '2SLGBTQI+', pa: '2SLGBTQI+', es: '2SLGBTQI+' }
  },
  {
    id: 'sage-toronto',
    name: { en: 'SAGE Toronto', fr: 'SAGE Toronto', zh: 'SAGE 多伦多', pa: 'SAGE ਟੋਰਾਂਟੋ', es: 'SAGE Toronto' },
    description: {
      en: 'Services and Advocacy for GLBT Elders. Support specifically for 2SLGBTQI+ seniors.',
      fr: 'Services et défense des droits pour les aînés GLBT. Soutien spécifique pour les aînés 2SLGBTQI+.',
      zh: 'GLBT 老年人的服务和倡导。专门为 2SLGBTQI+ 老年人提供支持。',
      pa: 'GLBT ਬਜ਼ੁਰਗਾਂ ਲਈ ਸੇਵਾਵਾਂ ਅਤੇ ਵਕਾਲਤ। 2SLGBTQI+ ਬਜ਼ੁਰਗਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਸਹਾਇਤਾ।',
      es: 'Servicios y defensa para ancianos GLBT. Apoyo específico para personas mayores 2SLGBTQI+.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: '2SLGBTQI+', fr: '2SLGBTQI+', zh: '2SLGBTQI+', pa: '2SLGBTQI+', es: '2SLGBTQI+' }
  },
  {
    id: 'costi',
    name: { en: 'COSTI Immigrant Services', fr: 'Services aux immigrants COSTI', zh: 'COSTI 移民服务', pa: 'COSTI ਇਮੀਗ੍ਰੈਂਟ ਸਰਵਿਸਿਜ਼', es: 'Servicios para Inmigrantes COSTI' },
    phone: '416-658-1600',
    website: 'www.costi.org',
    description: {
      en: 'Settlement and integration services for newcomers.',
      fr: 'Services d\'établissement et d\'intégration pour les nouveaux arrivants.',
      zh: '为新移民提供的安置和融合服务。',
      pa: 'ਨਵੇਂ ਆਉਣ ਵਾਲਿਆਂ ਲਈ ਬੰਦੋਬਸਤ ਅਤੇ ਏਕੀਕਰਣ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de asentamiento e integración para recién llegados.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Newcomers', fr: 'Nouveaux arrivants', zh: '新移民', pa: 'ਨਵੇਂ ਆਉਣ ਵਾਲੇ', es: 'Recién llegados' }
  },
  {
    id: 'access-alliance',
    name: { en: 'Access Alliance Multicultural Health and Community Services', fr: 'Access Alliance Services de santé et communautaires multiculturels', zh: 'Access Alliance 多元文化健康和社区服务', pa: 'ਐਕਸੈਸ ਐਲਾਇੰਸ ਮਲਟੀਕਲਚਰਲ ਹੈਲਥ ਐਂਡ ਕਮਿਊਨਿਟੀ ਸਰਵਿਸਿਜ਼', es: 'Access Alliance Servicios de Salud y Comunitarios Multiculturales' },
    phone: '416-324-8677',
    website: 'www.accessalliance.ca',
    description: {
      en: 'Health and settlement services for diverse cultural communities, including seniors.',
      fr: 'Services de santé et d\'établissement pour les communautés culturelles diverses, y compris les aînés.',
      zh: '为包括老年人在内的多元文化社区提供健康和安置服务。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਸਮੇਤ ਵਿਭਿੰਨ ਸੱਭਿਆਚਾਰਕ ਭਾਈਚਾਰਿਆਂ ਲਈ ਸਿਹਤ ਅਤੇ ਬੰਦੋਬਸਤ ਸੇਵਾਵਾਂ।',
      es: 'Servicios de salud y asentamiento para comunidades culturales diversas, incluidas las personas mayores.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Newcomers', fr: 'Nouveaux arrivants', zh: '新移民', pa: 'ਨਵੇਂ ਆਉਣ ਵਾਲੇ', es: 'Recién llegados' }
  },
  {
    id: 'arch-disability',
    name: { en: 'ARCH Disability Law Centre', fr: 'Centre juridique ARCH pour personnes handicapées', zh: 'ARCH 残障法律中心', pa: 'ARCH ਡਿਸਏਬਿਲਟੀ ਲਾਅ ਸੈਂਟਰ', es: 'Centro Legal ARCH para Discapacitados' },
    phone: '416-482-8255',
    tty: '416-482-2447',
    website: 'www.archdisabilitylaw.ca',
    description: {
      en: 'Legal support and advocacy for people with disabilities, including seniors.',
      fr: 'Soutien juridique et défense des droits pour les personnes handicapées, y compris les aînés.',
      zh: '为包括老年人在内的残障人士提供法律支持和倡导。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਸਮੇਤ ਅਸਮਰਥਤਾਵਾਂ ਵਾਲੇ ਲੋਕਾਂ ਲਈ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਅਤੇ ਵਕਾਲਤ।',
      es: 'Apoyo legal y defensa para personas con discapacidades, incluidas las personas mayores.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Disability', fr: 'Handicap', zh: '残障', pa: 'ਅਸਮਰਥਤਾ', es: 'Discapacidad' }
  },
  {
    id: 'cilt',
    name: { en: 'Centre for Independent Living Toronto', fr: 'Centre pour la vie autonome de Toronto', zh: '多伦多独立生活中心', pa: 'ਸੈਂਟਰ ਫਾਰ ਇੰਡੀਪੈਂਡੈਂਟ ਲਿਵਿੰਗ ਟੋਰਾਂਟੋ', es: 'Centro para la Vida Independiente de Toronto' },
    phone: '416-599-2458',
    website: 'www.cilt.ca',
    description: {
      en: 'Independent living support and advocacy for people with disabilities, including seniors.',
      fr: 'Soutien à la vie autonome et défense des droits pour les personnes handicapées, y compris les aînés.',
      zh: '为包括老年人在内的残障人士提供独立生活支持和倡导。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਸਮੇਤ ਅਸਮਰਥਤਾਵਾਂ ਵਾਲੇ ਲੋਕਾਂ ਲਈ ਸੁਤੰਤਰ ਜੀਵਨ ਸਹਾਇਤਾ ਅਤੇ ਵਕਾਲਤ।',
      es: 'Apoyo para la vida independiente y defensa para personas con discapacidades, incluidas las personas mayores.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Disability', fr: 'Handicap', zh: '残障', pa: 'ਅਸਮਰਥਤਾ', es: 'Discapacidad' }
  },
  {
    id: 'sunnybrook-veterans',
    name: { en: 'Sunnybrook Veterans Centre', fr: 'Centre des anciens combattants Sunnybrook', zh: 'Sunnybrook 退伍军人中心', pa: 'ਸਨੀਬਰੁੱਕ ਵੈਟਰਨਜ਼ ਸੈਂਟਰ', es: 'Centro de Veteranos Sunnybrook' },
    phone: '416-480-6100',
    website: 'www.sunnybrook.ca',
    description: {
      en: 'Specialized health care for veterans.',
      fr: 'Soins de santé spécialisés pour les anciens combattants.',
      zh: '为退伍军人提供的专业医疗保健。',
      pa: 'ਸਾਬਕਾ ਫੌਜੀਆਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਸਿਹਤ ਦੇਖਭਾਲ।',
      es: 'Atención médica especializada para veteranos.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Veterans', fr: 'Vétérans', zh: '退伍军人', pa: 'ਸਾਬਕਾ ਫੌਜੀ', es: 'Veteranos' }
  },
  {
    id: 'royal-canadian-legion',
    name: { en: 'Royal Canadian Legion', fr: 'Légion royale canadienne', zh: '加拿大皇家军团', pa: 'ਰਾਇਲ ਕੈਨੇਡੀਅਨ ਲੀਜੀਅਨ', es: 'Legión Real Canadiense' },
    description: {
      en: 'Contact local branches for programs and support for veterans and seniors.',
      fr: 'Contactez les branches locales pour des programmes et du soutien pour les anciens combattants et les aînés.',
      zh: '联系当地分会，为退伍军人和老年人提供项目和支持。',
      pa: 'ਸਾਬਕਾ ਫੌਜੀਆਂ ਅਤੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸਹਾਇਤਾ ਲਈ ਸਥਾਨਕ ਸ਼ਾਖਾਵਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Contacte las ramas locales para programas y apoyo para veteranos y personas mayores.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Veterans', fr: 'Vétérans', zh: '退伍军人', pa: 'ਸਾਬਕਾ ਫੌਜੀ', es: 'Veteranos' }
  },
  {
    id: 'home-library-service',
    name: { en: 'Toronto Public Library - Home Library Service', fr: 'Bibliothèque publique de Toronto - Service de bibliothèque à domicile', zh: '多伦多公共图书馆 - 家庭图书馆服务', pa: 'ਟੋਰਾਂਟੋ ਪਬਲਿਕ ਲਾਇਬ੍ਰੇਰੀ - ਹੋਮ ਲਾਇਬ੍ਰੇਰੀ ਸੇਵਾ', es: 'Biblioteca Pública de Toronto - Servicio de Biblioteca a Domicilio' },
    phone: '416-395-5557',
    description: {
      en: 'Home Library Service for homebound seniors. Books, music, and movies delivered to your door.',
      fr: 'Service de bibliothèque à domicile pour les aînés confinés à domicile. Livres, musique et films livrés à votre porte.',
      zh: '为足不出户的老年人提供的家庭图书馆服务。书籍、音乐和电影送货上门。',
      pa: 'ਘਰੇਲੂ ਬਜ਼ੁਰਗਾਂ ਲਈ ਹੋਮ ਲਾਇਬ੍ਰੇਰੀ ਸੇਵਾ। ਕਿਤਾਬਾਂ, ਸੰਗੀਤ, ਅਤੇ ਫਿਲਮਾਂ ਤੁਹਾਡੇ ਦਰਵਾਜ਼ੇ \'ਤੇ ਪਹੁੰਚਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
      es: 'Servicio de Biblioteca a Domicilio para personas mayores confinadas en casa. Libros, música y películas entregados en su puerta.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Library', fr: 'Bibliothèque', zh: '图书馆', pa: 'ਲਾਇਬ੍ਰੇਰੀ', es: 'Biblioteca' }
  },
  {
    id: '211-employment',
    name: { en: '211 - Employment Services', fr: '211 - Services d\'emploi', zh: '211 - 就业服务', pa: '211 - ਰੁਜ਼ਗਾਰ ਸੇਵਾਵਾਂ', es: '211 - Servicios de Empleo' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Referrals to employment services. Call or text 2-1-1 for help finding employment support.',
      fr: 'Références vers les services d\'emploi. Appelez ou envoyez un texto au 2-1-1.',
      zh: '转介就业服务。致电或发短信至 2-1-1 寻求就业支持。',
      pa: 'ਰੁਜ਼ਗਾਰ ਸੇਵਾਵਾਂ ਲਈ ਰੈਫਰਲ। ਰੁਜ਼ਗਾਰ ਸਹਾਇਤਾ ਲੱਭਣ ਲਈ 2-1-1 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Referencias a servicios de empleo. Llame o envíe un mensaje de texto al 2-1-1 para ayuda con empleo.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Employment', fr: 'Emploi', zh: '就业', pa: 'ਰੁਜ਼ਗਾਰ', es: 'Empleo' }
  },
  {
    id: '211-volunteer',
    name: { en: '211 - Volunteer Opportunities', fr: '211 - Opportunités de bénévolat', zh: '211 - 志愿者机会', pa: '211 - ਵਲੰਟੀਅਰ ਮੌਕੇ', es: '211 - Oportunidades de Voluntariado' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Referrals to volunteer opportunities. Call or text 2-1-1 to find volunteer opportunities in your area.',
      fr: 'Références vers des opportunités de bénévolat. Appelez ou envoyez un texto au 2-1-1.',
      zh: '转介志愿者机会。致电或发短信至 2-1-1 查找您所在地区的志愿者机会。',
      pa: 'ਵਲੰਟੀਅਰ ਮੌਕਿਆਂ ਲਈ ਰੈਫਰਲ। ਆਪਣੇ ਖੇਤਰ ਵਿੱਚ ਵਲੰਟੀਅਰ ਮੌਕੇ ਲੱਭਣ ਲਈ 2-1-1 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Referencias a oportunidades de voluntariado. Llame o envíe un mensaje de texto al 2-1-1 para encontrar oportunidades de voluntariado.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Volunteering', fr: 'Bénévolat', zh: '志愿服务', pa: 'ਵਲੰਟੀਅਰਿੰਗ', es: 'Voluntariado' }
  },
  {
    id: '211-benefits',
    name: { en: '211 - Benefits Finder', fr: '211 - Trouveur d\'avantages', zh: '211 - 福利查找', pa: '211 - ਲਾਭ ਖੋਜਕ', es: '211 - Buscador de Beneficios' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Help finding government benefits and programs. Call or text 2-1-1 to learn about benefits you may be eligible for.',
      fr: 'Aide pour trouver les avantages et programmes gouvernementaux. Appelez ou envoyez un texto au 2-1-1.',
      zh: '帮助查找政府福利和项目。致电或发短信至 2-1-1 了解您可能有资格获得的福利。',
      pa: 'ਸਰਕਾਰੀ ਲਾਭ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੱਭਣ ਵਿੱਚ ਮਦਦ। ਤੁਹਾਡੇ ਲਈ ਯੋਗ ਲਾਭਾਂ ਬਾਰੇ ਜਾਣਨ ਲਈ 2-1-1 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Ayuda para encontrar beneficios y programas gubernamentales. Llame o envíe un mensaje de texto al 2-1-1.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: '211-social-activities',
    name: { en: '211 - Social Activities', fr: '211 - Activités sociales', zh: '211 - 社交活动', pa: '211 - ਸਮਾਜਿਕ ਗਤੀਵਿਧੀਆਂ', es: '211 - Actividades Sociales' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Referrals to social activities and programs. Call or text 2-1-1 to find social activities and programs in your community.',
      fr: 'Références vers des activités et programmes sociaux. Appelez ou envoyez un texto au 2-1-1.',
      zh: '转介社交活动和项目。致电或发短信至 2-1-1 查找您社区的社交活动和项目。',
      pa: 'ਸਮਾਜਿਕ ਗਤੀਵਿਧੀਆਂ ਅਤੇ ਪ੍ਰੋਗਰਾਮਾਂ ਲਈ ਰੈਫਰਲ। ਆਪਣੇ ਭਾਈਚਾਰੇ ਵਿੱਚ ਸਮਾਜਿਕ ਗਤੀਵਿਧੀਆਂ ਲੱਭਣ ਲਈ 2-1-1 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Referencias a actividades y programas sociales. Llame o envíe un mensaje de texto al 2-1-1 para encontrar actividades sociales.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Social', fr: 'Social', zh: '社交', pa: 'ਸਮਾਜਿਕ', es: 'Social' }
  },
  {
    id: '211-community-services',
    name: { en: '211 - Community Services', fr: '211 - Services communautaires', zh: '211 - 社区服务', pa: '211 - ਕਮਿਊਨਿਟੀ ਸੇਵਾਵਾਂ', es: '211 - Servicios Comunitarios' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Referrals to community and social services. Call or text 2-1-1 for information about community services in your area.',
      fr: 'Références vers les services communautaires et sociaux. Appelez ou envoyez un texto au 2-1-1.',
      zh: '转介社区和社会服务。致电或发短信至 2-1-1 了解您所在地区的社区服务信息。',
      pa: 'ਕਮਿਊਨਿਟੀ ਅਤੇ ਸਮਾਜਿਕ ਸੇਵਾਵਾਂ ਲਈ ਰੈਫਰਲ। ਆਪਣੇ ਖੇਤਰ ਵਿੱਚ ਕਮਿਊਨਿਟੀ ਸੇਵਾਵਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਲਈ 2-1-1 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Referencias a servicios comunitarios y sociales. Llame o envíe un mensaje de texto al 2-1-1 para información sobre servicios comunitarios.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Community', fr: 'Communautaire', zh: '社区', pa: 'ਕਮਿਊਨਿਟੀ', es: 'Comunidad' }
  },
  {
    id: 'local-food-banks',
    name: { en: 'Local Food Banks', fr: 'Banques alimentaires locales', zh: '当地食物银行', pa: 'ਸਥਾਨਕ ਫੂਡ ਬੈਂਕ', es: 'Bancos de Alimentos Locales' },
    phone: '2-1-1',
    description: {
      en: 'Contact 211 (2-1-1) for neighborhood food bank locations near you.',
      fr: 'Contactez le 211 (2-1-1) pour les emplacements de banques alimentaires de quartier près de chez vous.',
      zh: '致电 211 (2-1-1) 查找您附近的社区食物银行地点。',
      pa: 'ਤੁਹਾਡੇ ਨੇੜੇ ਪੜੋਸੀ ਫੂਡ ਬੈਂਕ ਸਥਾਨਾਂ ਲਈ 211 (2-1-1) \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Contacte al 211 (2-1-1) para ubicaciones de bancos de alimentos del vecindario cerca de usted.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Food Bank', fr: 'Banque alimentaire', zh: '食物银行', pa: 'ਫੂਡ ਬੈਂਕ', es: 'Banco de Alimentos' }
  },
  {
    id: 'ethno-cultural-organizations',
    name: { en: 'Ethno-Cultural Organizations', fr: 'Organisations ethnoculturelles', zh: '民族文化组织', pa: 'ਨਸਲੀ-ਸੱਭਿਆਚਾਰਕ ਸੰਸਥਾਵਾਂ', es: 'Organizaciones Etno-Culturales' },
    phone: '2-1-1',
    description: {
      en: 'Contact 211 (2-1-1) for culturally specific services and organizations serving diverse communities.',
      fr: 'Contactez le 211 (2-1-1) pour des services et organisations culturellement spécifiques.',
      zh: '致电 211 (2-1-1) 查找为不同社区提供服务的文化特定服务和组织。',
      pa: 'ਸੱਭਿਆਚਾਰਕ ਤੌਰ \'ਤੇ ਵਿਸ਼ੇਸ਼ ਸੇਵਾਵਾਂ ਅਤੇ ਸੰਸਥਾਵਾਂ ਲਈ 211 (2-1-1) \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Contacte al 211 (2-1-1) para servicios y organizaciones culturalmente específicos.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Newcomers', fr: 'Nouveaux arrivants', zh: '新移民', pa: 'ਨਵੇਂ ਆਉਣ ਵਾਲੇ', es: 'Recién llegados' }
  },
  {
    id: 'black-community-organizations',
    name: { en: 'Black Community Organizations', fr: 'Organisations communautaires noires', zh: '黑人社区组织', pa: 'ਕਾਲੇ ਭਾਈਚਾਰਕ ਸੰਸਥਾਵਾਂ', es: 'Organizaciones Comunitarias Negras' },
    phone: '2-1-1',
    description: {
      en: 'Contact 211 (2-1-1) for comprehensive list of Black-serving organizations and community services.',
      fr: 'Contactez le 211 (2-1-1) pour une liste complète des organismes au service des communautés noires.',
      zh: '致电 211 (2-1-1) 获取服务黑人社区的组织和社区服务的完整列表。',
      pa: 'ਕਾਲੇ ਭਾਈਚਾਰਿਆਂ ਦੀ ਸੇਵਾ ਕਰਨ ਵਾਲੀਆਂ ਸੰਸਥਾਵਾਂ ਦੀ ਵਿਆਪਕ ਸੂਚੀ ਲਈ 211 (2-1-1) \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Contacte al 211 (2-1-1) para una lista completa de organizaciones que sirven a comunidades negras.'
    },
    category: Category.SPECIALIZED,
    subcategory: { en: 'Black Seniors', fr: 'Aînés noirs', zh: '黑人老年人', pa: 'ਕਾਲੇ ਬਜ਼ੁਰਗ', es: 'Personas Mayores Negras' }
  },
  {
    id: 'professional-pet-care',
    name: { en: 'Professional Pet Care Services', fr: 'Services professionnels de soins aux animaux', zh: '专业宠物护理服务', pa: 'ਪੇਸ਼ੇਵਰ ਪਾਲਤੂ ਦੇਖਭਾਲ ਸੇਵਾਵਾਂ', es: 'Servicios Profesionales de Cuidado de Mascotas' },
    description: {
      en: 'Contact through online directories or local referrals for professional pet care services.',
      fr: 'Contactez via des répertoires en ligne ou des références locales pour des services professionnels de soins aux animaux.',
      zh: '通过在线目录或当地转介联系专业宠物护理服务。',
      pa: 'ਪੇਸ਼ੇਵਰ ਪਾਲਤੂ ਦੇਖਭਾਲ ਸੇਵਾਵਾਂ ਲਈ ਔਨਲਾਈਨ ਡਾਇਰੈਕਟਰੀਆਂ ਜਾਂ ਸਥਾਨਕ ਰੈਫਰਲਾਂ ਦੁਆਰਾ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Contacte a través de directorios en línea o referencias locales para servicios profesionales de cuidado de mascotas.'
    },
    category: Category.PETS,
    subcategory: { en: 'Care', fr: 'Soins', zh: '护理', pa: 'ਦੇਖਭਾਲ', es: 'Cuidado' }
  },
  {
    id: 'volunteer-pet-care',
    name: { en: 'Volunteer Pet Care', fr: 'Soins aux animaux bénévoles', zh: '志愿者宠物护理', pa: 'ਵਲੰਟੀਅਰ ਪਾਲਤੂ ਦੇਖਭਾਲ', es: 'Cuidado de Mascotas Voluntario' },
    phone: '2-1-1',
    description: {
      en: 'Contact through community centres or 211 for volunteer pet care services.',
      fr: 'Contactez via des centres communautaires ou le 211 pour des services bénévoles de soins aux animaux.',
      zh: '通过社区中心或 211 联系志愿者宠物护理服务。',
      pa: 'ਵਲੰਟੀਅਰ ਪਾਲਤੂ ਦੇਖਭਾਲ ਸੇਵਾਵਾਂ ਲਈ ਭਾਈਚਾਰਕ ਕੇਂਦਰਾਂ ਜਾਂ 211 ਦੁਆਰਾ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Contacte a través de centros comunitarios o 211 para servicios voluntarios de cuidado de mascotas.'
    },
    category: Category.PETS,
    subcategory: { en: 'Care', fr: 'Soins', zh: '护理', pa: 'ਦੇਖਭਾਲ', es: 'Cuidado' }
  },
  {
    id: 'pet-fostering-emergency',
    name: { en: 'Pet Fostering During Emergencies', fr: 'Famille d\'accueil pour animaux en cas d\'urgence', zh: '紧急情况下的宠物寄养', pa: 'ਐਮਰਜੈਂਸੀਆਂ ਦੌਰਾਨ ਪਾਲਤੂ ਪਾਲਣ', es: 'Cuidado de Crianza de Mascotas en Emergencias' },
    phone: '3-1-1',
    description: {
      en: 'Contact Toronto Animal Services through 311 for pet fostering during emergencies.',
      fr: 'Contactez les Services aux animaux de Toronto via le 311 pour la garde d\'animaux en cas d\'urgence.',
      zh: '通过 311 联系多伦多动物服务，在紧急情况下提供宠物寄养。',
      pa: 'ਐਮਰਜੈਂਸੀਆਂ ਦੌਰਾਨ ਪਾਲਤੂ ਪਾਲਣ ਲਈ 311 ਦੁਆਰਾ ਟੋਰਾਂਟੋ ਪਸ਼ੂ ਸੇਵਾਵਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Contacte a Servicios de Animales de Toronto a través del 311 para cuidado de crianza de mascotas en emergencias.'
    },
    category: Category.PETS,
    subcategory: { en: 'Safety', fr: 'Sécurité', zh: '安全', pa: 'ਸੁਰੱਖਿਆ', es: 'Seguridad' }
  },
  {
    id: 'pet-emergency-supplies',
    name: { en: 'Pet Emergency Supplies Checklist', fr: 'Liste de vérification des fournitures d\'urgence pour animaux', zh: '宠物应急用品清单', pa: 'ਪਾਲਤੂ ਐਮਰਜੈਂਸੀ ਸਪਲਾਈ ਚੈਕਲਿਸਟ', es: 'Lista de Verificación de Suministros de Emergencia para Mascotas' },
    phone: '3-1-1',
    description: {
      en: 'Information about pet emergency supplies checklist. Available through Toronto Animal Services and emergency management.',
      fr: 'Information sur la liste de vérification des fournitures d\'urgence pour animaux. Disponible via les Services aux animaux de Toronto.',
      zh: '关于宠物应急用品清单的信息。可通过多伦多动物服务和应急管理部门获取。',
      pa: 'ਪਾਲਤੂ ਐਮਰਜੈਂਸੀ ਸਪਲਾਈ ਚੈਕਲਿਸਟ ਬਾਰੇ ਜਾਣਕਾਰੀ। ਟੋਰਾਂਟੋ ਪਸ਼ੂ ਸੇਵਾਵਾਂ ਅਤੇ ਐਮਰਜੈਂਸੀ ਪ੍ਰਬੰਧਨ ਦੁਆਰਾ ਉਪਲਬਧ।',
      es: 'Información sobre lista de verificación de suministros de emergencia para mascotas. Disponible a través de Servicios de Animales de Toronto.'
    },
    category: Category.PETS,
    subcategory: { en: 'Safety', fr: 'Sécurité', zh: '安全', pa: 'ਸੁਰੱਖਿਆ', es: 'Seguridad' }
  },
  {
    id: 'toronto-emergency-management',
    name: { en: 'Toronto Emergency Management', fr: 'Gestion des urgences de Toronto', zh: '多伦多应急管理', pa: 'ਟੋਰਾਂਟੋ ਐਮਰਜੈਂਸੀ ਪ੍ਰਬੰਧਨ', es: 'Gestión de Emergencias de Toronto' },
    phone: '3-1-1',
    website: 'www.toronto.ca',
    description: {
      en: 'Information about including pets in emergency plans. Search "Emergency Preparedness" on toronto.ca.',
      fr: 'Information sur l\'inclusion des animaux dans les plans d\'urgence. Recherchez "Préparation aux urgences" sur toronto.ca.',
      zh: '关于在应急计划中包含宠物的信息。在 toronto.ca 上搜索"应急准备"。',
      pa: 'ਐਮਰਜੈਂਸੀ ਯੋਜਨਾਵਾਂ ਵਿੱਚ ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਨੂੰ ਸ਼ਾਮਲ ਕਰਨ ਬਾਰੇ ਜਾਣਕਾਰੀ। toronto.ca \'ਤੇ "ਐਮਰਜੈਂਸੀ ਤਿਆਰੀ" ਖੋਜੋ।',
      es: 'Información sobre incluir mascotas en planes de emergencia. Busque "Preparación para Emergencias" en toronto.ca.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Emergency', fr: 'Urgence', zh: '紧急', pa: 'ਐਮਰਜੈਂਸੀ', es: 'Emergencia' }
  },
  {
    id: 'seniors-helpline-crisis',
    name: { en: 'Toronto Seniors Helpline - Crisis Support', fr: 'Ligne d\'assistance pour les aînés - Soutien de crise', zh: '多伦多老年人求助热线 - 危机支持', pa: 'ਟੋਰਾਂਟੋ ਸੀਨੀਅਰਜ਼ ਹੈਲਪਲਾਈਨ - ਸੰਕਟ ਸਹਾਇਤਾ', es: 'Línea de Ayuda para Personas Mayores - Apoyo en Crisis' },
    phone: '416-217-2077',
    website: 'www.torontoseniorshelpline.ca',
    description: {
      en: 'Trained crisis team can visit seniors at home. Creates safety planning for elder abuse. Connects to health care and community supports.',
      fr: 'Une équipe de crise formée peut visiter les aînés à domicile. Crée une planification de sécurité pour la maltraitance des aînés.',
      zh: '受过训练的危机团队可以上门拜访老年人。为虐待老人制定安全计划。连接医疗保健和社区支持。',
      pa: 'ਸਿਖਲਾਈ ਪ੍ਰਾਪਤ ਸੰਕਟ ਟੀਮ ਬਜ਼ੁਰਗਾਂ ਨੂੰ ਘਰ ਜਾ ਕੇ ਮਿਲ ਸਕਦੀ ਹੈ। ਬਜ਼ੁਰਗਾਂ ਨਾਲ ਦੁਰਵਿਵਹਾਰ ਲਈ ਸੁਰੱਖਿਆ ਯੋਜਨਾਬੰਦੀ ਬਣਾਉਂਦੀ ਹੈ।',
      es: 'Un equipo de crisis capacitado puede visitar a las personas mayores en casa. Crea planificación de seguridad para abuso de ancianos.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Crisis', fr: 'Crise', zh: '危机', pa: 'ਸੰਕਟ', es: 'Crisis' }
  },
  {
    id: 'seniors-helpline-referrals',
    name: { en: 'Toronto Seniors Helpline - Referrals', fr: 'Ligne d\'assistance pour les aînés - Références', zh: '多伦多老年人求助热线 - 转介', pa: 'ਟੋਰਾਂਟੋ ਸੀਨੀਅਰਜ਼ ਹੈਲਪਲਾਈਨ - ਰੈਫਰਲ', es: 'Línea de Ayuda para Personas Mayores - Referencias' },
    phone: '416-217-2077',
    website: 'www.torontoseniorshelpline.ca',
    description: {
      en: 'Referrals to social activities and programs. Answers to general questions and referrals to community services.',
      fr: 'Références vers des activités et programmes sociaux. Réponses aux questions générales et références vers les services communautaires.',
      zh: '转介社交活动和项目。回答一般问题并转介社区服务。',
      pa: 'ਸਮਾਜਿਕ ਗਤੀਵਿਧੀਆਂ ਅਤੇ ਪ੍ਰੋਗਰਾਮਾਂ ਲਈ ਰੈਫਰਲ। ਆਮ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਅਤੇ ਭਾਈਚਾਰਕ ਸੇਵਾਵਾਂ ਲਈ ਰੈਫਰਲ।',
      es: 'Referencias a actividades y programas sociales. Respuestas a preguntas generales y referencias a servicios comunitarios.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Social', fr: 'Social', zh: '社交', pa: 'ਸਮਾਜਿਕ', es: 'Social' }
  },
  {
    id: '211-housing',
    name: { en: '211 - Housing Services', fr: '211 - Services de logement', zh: '211 - 住房服务', pa: '211 - ਰਿਹਾਇਸ਼ ਸੇਵਾਵਾਂ', es: '211 - Servicios de Vivienda' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Referrals to housing services and assistance. Call or text 2-1-1 for help finding housing.',
      fr: 'Références vers les services de logement et l\'assistance. Appelez ou envoyez un texto au 2-1-1.',
      zh: '转介住房服务和支持。致电或发短信至 2-1-1 寻求住房帮助。',
      pa: 'ਰਿਹਾਇਸ਼ ਸੇਵਾਵਾਂ ਅਤੇ ਸਹਾਇਤਾ ਲਈ ਰੈਫਰਲ। ਰਿਹਾਇਸ਼ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਲਈ 2-1-1 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Referencias a servicios de vivienda y asistencia. Llame o envíe un mensaje de texto al 2-1-1 para ayuda con vivienda.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Assistance', fr: 'Assistance', zh: '援助', pa: 'ਸਹਾਇਤਾ', es: 'Asistencia' }
  },
  {
    id: '211-mental-health',
    name: { en: '211 - Mental Health Support', fr: '211 - Soutien en santé mentale', zh: '211 - 心理健康支持', pa: '211 - ਮਾਨਸਿਕ ਸਿਹਤ ਸਹਾਇਤਾ', es: '211 - Apoyo de Salud Mental' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Referrals to mental health support services. Call or text 2-1-1 for help finding mental health support.',
      fr: 'Références vers les services de soutien en santé mentale. Appelez ou envoyez un texto au 2-1-1.',
      zh: '转介心理健康支持服务。致电或发短信至 2-1-1 寻求心理健康支持。',
      pa: 'ਮਾਨਸਿਕ ਸਿਹਤ ਸਹਾਇਤਾ ਸੇਵਾਵਾਂ ਲਈ ਰੈਫਰਲ। ਮਾਨਸਿਕ ਸਿਹਤ ਸਹਾਇਤਾ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਲਈ 2-1-1 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Referencias a servicios de apoyo de salud mental. Llame o envíe un mensaje de texto al 2-1-1 para ayuda con salud mental.'
    },
    category: Category.MENTAL_HEALTH,
    subcategory: { en: 'Mental Health', fr: 'Santé mentale', zh: '心理健康', pa: 'ਮਾਨਸਿਕ ਸਿਹਤ', es: 'Salud Mental' }
  },
  {
    id: '211-food',
    name: { en: '211 - Food Services', fr: '211 - Services alimentaires', zh: '211 - 食物服务', pa: '211 - ਭੋਜਨ ਸੇਵਾਵਾਂ', es: '211 - Servicios de Alimentos' },
    phone: '2-1-1',
    tty: '1-888-340-1001',
    website: 'www.211central.ca',
    description: {
      en: 'Referrals to food services and food banks. Call or text 2-1-1 for help finding food.',
      fr: 'Références vers les services alimentaires et banques alimentaires. Appelez ou envoyez un texto au 2-1-1.',
      zh: '转介食物服务和食物银行。致电或发短信至 2-1-1 寻求食物帮助。',
      pa: 'ਭੋਜਨ ਸੇਵਾਵਾਂ ਅਤੇ ਫੂਡ ਬੈਂਕਾਂ ਲਈ ਰੈਫਰਲ। ਭੋਜਨ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਲਈ 2-1-1 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਟੈਕਸਟ ਕਰੋ।',
      es: 'Referencias a servicios de alimentos y bancos de alimentos. Llame o envíe un mensaje de texto al 2-1-1 para ayuda con alimentos.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Food Bank', fr: 'Banque alimentaire', zh: '食物银行', pa: 'ਫੂਡ ਬੈਂਕ', es: 'Banco de Alimentos' }
  },
  {
    id: '311-parks-rec',
    name: { en: '311 - Parks & Recreation', fr: '311 - Parcs et loisirs', zh: '311 - 公园和娱乐', pa: '311 - ਪਾਰਕਸ ਅਤੇ ਮਨੋਰੰਜਨ', es: '311 - Parques y Recreación' },
    phone: '3-1-1',
    website: 'www.toronto.ca',
    description: {
      en: 'Information about City of Toronto parks and recreation programs. Call 311 for information on recreation programs and facilities.',
      fr: 'Information sur les parcs et programmes de loisirs de la ville de Toronto. Appelez le 311 pour des informations.',
      zh: '关于多伦多市公园和娱乐项目的信息。致电 311 了解娱乐项目和设施信息。',
      pa: 'ਟੋਰਾਂਟੋ ਸ਼ਹਿਰ ਦੇ ਪਾਰਕਸ ਅਤੇ ਮਨੋਰੰਜਨ ਪ੍ਰੋਗਰਾਮਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ। ਮਨੋਰੰਜਨ ਪ੍ਰੋਗਰਾਮਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਲਈ 311 \'ਤੇ ਕਾਲ ਕਰੋ।',
      es: 'Información sobre parques y programas de recreación de la Ciudad de Toronto. Llame al 311 para información.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Activities', fr: 'Activités', zh: '活动', pa: 'ਗਤੀਵਿਧੀਆਂ', es: 'Actividades' }
  },
  {
    id: '311-library',
    name: { en: '311 - Library Services', fr: '311 - Services de bibliothèque', zh: '311 - 图书馆服务', pa: '311 - ਲਾਇਬ੍ਰੇਰੀ ਸੇਵਾਵਾਂ', es: '311 - Servicios de Biblioteca' },
    phone: '3-1-1',
    website: 'www.toronto.ca',
    description: {
      en: 'Information about Toronto Public Library services. Call 311 for library information and services.',
      fr: 'Information sur les services de la Bibliothèque publique de Toronto. Appelez le 311 pour des informations.',
      zh: '关于多伦多公共图书馆服务的信息。致电 311 了解图书馆信息和服务。',
      pa: 'ਟੋਰਾਂਟੋ ਪਬਲਿਕ ਲਾਇਬ੍ਰੇਰੀ ਸੇਵਾਵਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ। ਲਾਇਬ੍ਰੇਰੀ ਜਾਣਕਾਰੀ ਲਈ 311 \'ਤੇ ਕਾਲ ਕਰੋ।',
      es: 'Información sobre servicios de la Biblioteca Pública de Toronto. Llame al 311 para información de biblioteca.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Library', fr: 'Bibliothèque', zh: '图书馆', pa: 'ਲਾਇਬ੍ਰੇਰੀ', es: 'Biblioteca' }
  },
  {
    id: '311-housing',
    name: { en: '311 - Housing Information', fr: '311 - Information sur le logement', zh: '311 - 住房信息', pa: '311 - ਰਿਹਾਇਸ਼ ਜਾਣਕਾਰੀ', es: '311 - Información de Vivienda' },
    phone: '3-1-1',
    website: 'www.toronto.ca',
    description: {
      en: 'Information about City of Toronto housing services. Call 311 for housing-related information and services.',
      fr: 'Information sur les services de logement de la ville de Toronto. Appelez le 311 pour des informations.',
      zh: '关于多伦多市住房服务的信息。致电 311 了解住房相关信息和服务。',
      pa: 'ਟੋਰਾਂਟੋ ਸ਼ਹਿਰ ਦੀਆਂ ਰਿਹਾਇਸ਼ ਸੇਵਾਵਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ। ਰਿਹਾਇਸ਼-ਸਬੰਧਤ ਜਾਣਕਾਰੀ ਲਈ 311 \'ਤੇ ਕਾਲ ਕਰੋ।',
      es: 'Información sobre servicios de vivienda de la Ciudad de Toronto. Llame al 311 para información de vivienda.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Assistance', fr: 'Assistance', zh: '援助', pa: 'ਸਹਾਇਤਾ', es: 'Asistencia' }
  },
  {
    id: '311-animal-services',
    name: { en: '311 - Animal Services', fr: '311 - Services aux animaux', zh: '311 - 动物服务', pa: '311 - ਪਸ਼ੂ ਸੇਵਾਵਾਂ', es: '311 - Servicios de Animales' },
    phone: '3-1-1',
    website: 'www.toronto.ca',
    description: {
      en: 'Information about Toronto Animal Services. Call 311 for pet licensing, lost pets, and animal control information.',
      fr: 'Information sur les Services aux animaux de Toronto. Appelez le 311 pour des informations.',
      zh: '关于多伦多动物服务的信息。致电 311 了解宠物许可、丢失宠物和动物控制信息。',
      pa: 'ਟੋਰਾਂਟੋ ਪਸ਼ੂ ਸੇਵਾਵਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ। ਪਾਲਤੂ ਲਾਇਸੈਂਸ, ਗੁਆਚੇ ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਲਈ 311 \'ਤੇ ਕਾਲ ਕਰੋ।',
      es: 'Información sobre Servicios de Animales de Toronto. Llame al 311 para información sobre licencias de mascotas.'
    },
    category: Category.PETS,
    subcategory: { en: 'Care', fr: 'Soins', zh: '护理', pa: 'ਦੇਖਭਾਲ', es: 'Cuidado' }
  },
  {
    id: 'service-canada-tty',
    name: { en: 'Service Canada - TTY', fr: 'Service Canada - ATS', zh: '加拿大服务局 - TTY', pa: 'ਸਰਵਿਸ ਕੈਨੇਡਾ - TTY', es: 'Service Canada - TTY' },
    phone: '1-800-277-9914',
    tty: '1-800-926-9105',
    website: 'www.canada.ca',
    description: {
      en: 'TTY service for Service Canada pension and benefits. TTY: 1-800-926-9105.',
      fr: 'Service ATS pour Service Canada pensions et avantages. ATS: 1-800-926-9105.',
      zh: '加拿大服务局养老金和福利的 TTY 服务。TTY：1-800-926-9105。',
      pa: 'ਸਰਵਿਸ ਕੈਨੇਡਾ ਪੈਨਸ਼ਨ ਅਤੇ ਲਾਭਾਂ ਲਈ TTY ਸੇਵਾ। TTY: 1-800-926-9105।',
      es: 'Servicio TTY para Service Canada pensiones y beneficios. TTY: 1-800-926-9105.'
    },
    category: Category.EMPLOYMENT,
    subcategory: { en: 'Pensions', fr: 'Pensions', zh: '养老金', pa: 'ਪੈਨਸ਼ਨਾਂ', es: 'Pensiones' }
  },
  {
    id: 'health-connect-website',
    name: { en: 'Health Care Connect', fr: 'Accès Soins', zh: '医疗保健连接', pa: 'ਹੈਲਥ ਕੇਅਰ ਕਨੈਕਟ', es: 'Conexión de Atención Médica' },
    phone: '1-800-445-1822',
    description: {
      en: 'Helps Ontarians find a family doctor or nurse practitioner who is accepting new patients.',
      fr: 'Aide les Ontariens à trouver un médecin de famille ou une infirmière praticienne qui accepte de nouveaux patients.',
      zh: '帮助安大略省人寻找接受新病人的家庭医生或执业护士。',
      pa: 'ਓਨਟਾਰੀਓ ਵਾਸੀਆਂ ਨੂੰ ਪਰਿਵਾਰਕ ਡਾਕਟਰ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਜੋ ਨਵੇਂ ਮਰੀਜ਼ਾਂ ਨੂੰ ਸਵੀਕਾਰ ਕਰ ਰਿਹਾ ਹੈ।',
      es: 'Ayuda a los habitantes de Ontario a encontrar un médico de familia o enfermera practicante que acepte nuevos pacientes.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Doctors', fr: 'Médecins', zh: '医生', pa: 'ਡਾਕਟਰ', es: 'Médicos' }
  },
  {
    id: 'ontario-health-athome-notes',
    name: { en: 'Ontario Health atHome - No Area Code', fr: 'Santé à domicile Ontario - Sans indicatif', zh: '安大略省家庭健康 - 无需区号', pa: 'ਓਨਟਾਰੀਓ ਹੈਲਥ ਐਟ ਹੋਮ - ਕੋਈ ਏਰੀਆ ਕੋਡ ਨਹੀਂ', es: 'Salud en el Hogar de Ontario - Sin Código de Área' },
    phone: '310-2222',
    description: {
      en: 'Coordinate government-funded home care. No area code needed - just dial 310-2222.',
      fr: 'Coordination des soins à domicile financés par le gouvernement. Pas besoin d\'indicatif régional.',
      zh: '协调政府资助的家庭护理。无需区号 - 只需拨打 310-2222。',
      pa: 'ਸਰਕਾਰ ਦੁਆਰਾ ਫੰਡ ਪ੍ਰਾਪਤ ਘਰੇਲੂ ਦੇਖਭਾਲ ਦਾ ਤਾਲਮੇਲ। ਕਿਸੇ ਏਰੀਆ ਕੋਡ ਦੀ ਲੋੜ ਨਹੀਂ - ਬਸ 310-2222 ਡਾਇਲ ਕਰੋ।',
      es: 'Coordinar atención domiciliaria financiada por el gobierno. No se necesita código de área.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Home Care', fr: 'Soins à domicile', zh: '家庭护理', pa: 'ਘਰੇਲੂ ਦੇਖਭਾਲ', es: 'Cuidado en el Hogar' }
  },
  {
    id: 'respite-care-310',
    name: { en: 'Respite Care - 310-2222', fr: 'Soins de répit - 310-2222', zh: '暂息护理 - 310-2222', pa: 'ਰਾਹਤ ਦੇਖਭਾਲ - 310-2222', es: 'Cuidado de Relevo - 310-2222' },
    phone: '310-2222',
    description: {
      en: 'Temporary care services to give caregivers a break. Contact Ontario Health atHome at 310-2222 (no area code needed).',
      fr: 'Services de soins temporaires pour donner une pause aux aidants. Contactez Santé à domicile Ontario au 310-2222.',
      zh: '为护理员提供休息的临时护理服务。联系安大略省家庭健康 310-2222（无需区号）。',
      pa: 'ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਨੂੰ ਬ੍ਰੇਕ ਦੇਣ ਲਈ ਅਸਥਾਈ ਦੇਖਭਾਲ ਸੇਵਾਵਾਂ। 310-2222 \'ਤੇ ਓਨਟਾਰੀਓ ਹੈਲਥ ਐਟ ਹੋਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Servicios de cuidado temporal para dar un descanso a los cuidadores. Contacte Salud en el Hogar de Ontario al 310-2222.'
    },
    category: Category.CAREGIVER,
    subcategory: { en: 'Respite', fr: 'Répit', zh: '暂息', pa: 'ਰਾਹਤ', es: 'Relevo' }
  },
  {
    id: 'seniors-helpline-hours',
    name: { en: 'Toronto Seniors Helpline - Hours', fr: 'Ligne d\'assistance pour les aînés - Heures', zh: '多伦多老年人求助热线 - 服务时间', pa: 'ਟੋਰਾਂਟੋ ਸੀਨੀਅਰਜ਼ ਹੈਲਪਲਾਈਨ - ਘੰਟੇ', es: 'Línea de Ayuda para Personas Mayores - Horarios' },
    phone: '416-217-2077',
    website: 'www.torontoseniorshelpline.ca',
    description: {
      en: 'Monday-Friday: 9 a.m. - 8 p.m. Weekends and holidays: 10 a.m. - 6 p.m. Service in 100+ languages.',
      fr: 'Lundi-vendredi: 9h-20h. Weekends et jours fériés: 10h-18h. Service en 100+ langues.',
      zh: '周一至周五：上午9点至晚上8点。周末和节假日：上午10点至下午6点。提供100多种语言服务。',
      pa: 'ਸੋਮਵਾਰ-ਸ਼ੁੱਕਰਵਾਰ: ਸਵੇਰੇ 9-ਸ਼ਾਮ 8। ਹਫ਼ਤੇ ਦੇ ਅੰਤ ਅਤੇ ਛੁੱਟੀਆਂ: ਸਵੇਰੇ 10-ਸ਼ਾਮ 6। 100+ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸੇਵਾ।',
      es: 'Lunes-viernes: 9 a.m. - 8 p.m. Fines de semana y festivos: 10 a.m. - 6 p.m. Servicio en 100+ idiomas.'
    },
    category: Category.EMERGENCY,
    subcategory: { en: 'Helpline', fr: 'Ligne d\'assistance', zh: '求助热线', pa: 'ਹੈਲਪਲਾਈਨ', es: 'Línea de ayuda' }
  },
  {
    id: 'salc-tty',
    name: { en: 'Seniors Active Living Centres - TTY', fr: 'Centres de vie active pour aînés - ATS', zh: '老年人积极生活中心 - TTY', pa: 'ਸੀਨੀਅਰਜ਼ ਐਕਟਿਵ ਲਿਵਿੰਗ ਸੈਂਟਰ - TTY', es: 'Centros de Vida Activa - TTY' },
    phone: '1-888-910-1999',
    tty: '1-800-387-5559',
    website: 'www.ontario.ca',
    description: {
      en: 'TTY service for Seniors Active Living Centres. TTY: 1-800-387-5559.',
      fr: 'Service ATS pour les Centres de vie active pour aînés. ATS: 1-800-387-5559.',
      zh: '老年人积极生活中心的 TTY 服务。TTY：1-800-387-5559。',
      pa: 'ਸੀਨੀਅਰਜ਼ ਐਕਟਿਵ ਲਿਵਿੰਗ ਸੈਂਟਰਾਂ ਲਈ TTY ਸੇਵਾ। TTY: 1-800-387-5559।',
      es: 'Servicio TTY para Centros de Vida Activa. TTY: 1-800-387-5559.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Centres', fr: 'Centres', zh: '中心', pa: 'ਕੇਂਦਰ', es: 'Centros' }
  },
  {
    id: 'tdsb-tty',
    name: { en: 'TDSB Learn4Life - TTY', fr: 'TDSB Apprendre pour la vie - ATS', zh: 'TDSB 终身学习 - TTY', pa: 'TDSB ਲਰਨ4ਲਾਈਫ - TTY', es: 'TDSB Learn4Life - TTY' },
    phone: '3-1-1',
    phone2: '416-338-8888',
    tty: '1-866-533-6339',
    website: 'www.tdsb.on.ca',
    description: {
      en: 'TTY service for TDSB continuing education. TTY: 1-866-533-6339.',
      fr: 'Service ATS pour l\'éducation permanente TDSB. ATS: 1-866-533-6339.',
      zh: 'TDSB 继续教育的 TTY 服务。TTY：1-866-533-6339。',
      pa: 'TDSB ਨਿਰੰਤਰ ਸਿੱਖਿਆ ਲਈ TTY ਸੇਵਾ। TTY: 1-866-533-6339।',
      es: 'Servicio TTY para educación continua TDSB. TTY: 1-866-533-6339.'
    },
    category: Category.RECREATION,
    subcategory: { en: 'Education', fr: 'Éducation', zh: '教育', pa: 'ਸਿੱਖਿਆ', es: 'Educación' }
  },
  {
    id: 'ttc-customer-service',
    name: { en: 'TTC - Customer Service', fr: 'TTC - Service à la clientèle', zh: 'TTC - 客户服务', pa: 'TTC - ਗ੍ਰਾਹਕ ਸੇਵਾ', es: 'TTC - Servicio al Cliente' },
    phone: '416-393-4111',
    email: 'wtcs@ttc.ca',
    website: 'www.ttc.ca',
    description: {
      en: 'TTC customer service. Call 416-393-4111 or email wtcs@ttc.ca for transit information and assistance.',
      fr: 'Service à la clientèle TTC. Appelez le 416-393-4111 ou envoyez un courriel à wtcs@ttc.ca.',
      zh: 'TTC 客户服务。致电 416-393-4111 或发送电子邮件至 wtcs@ttc.ca 获取交通信息和支持。',
      pa: 'TTC ਗ੍ਰਾਹਕ ਸੇਵਾ। ਆਵਾਜਾਈ ਜਾਣਕਾਰੀ ਲਈ 416-393-4111 \'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ wtcs@ttc.ca \'ਤੇ ਈਮੇਲ ਕਰੋ।',
      es: 'Servicio al cliente TTC. Llame al 416-393-4111 o envíe un correo electrónico a wtcs@ttc.ca.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Public Transit', fr: 'Transport en commun', zh: '公共交通', pa: 'ਜਨਤਕ ਆਵਾਜਾਈ', es: 'Transporte Público' }
  },
  {
    id: 'ttc-tty',
    name: { en: 'TTC - TTY', fr: 'TTC - ATS', zh: 'TTC - TTY', pa: 'TTC - TTY', es: 'TTC - TTY' },
    phone: '416-393-4636',
    tty: '416-393-4555',
    website: 'www.ttc.ca',
    description: {
      en: 'TTY service for TTC. TTY: 416-393-4555.',
      fr: 'Service ATS pour TTC. ATS: 416-393-4555.',
      zh: 'TTC 的 TTY 服务。TTY：416-393-4555。',
      pa: 'TTC ਲਈ TTY ਸੇਵਾ। TTY: 416-393-4555।',
      es: 'Servicio TTY para TTC. TTY: 416-393-4555.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Public Transit', fr: 'Transport en commun', zh: '公共交通', pa: 'ਜਨਤਕ ਆਵਾਜਾਈ', es: 'Transporte Público' }
  },
  {
    id: 'wheel-trans-application',
    name: { en: 'TTC Wheel-Trans - Application', fr: 'TTC Wheel-Trans - Demande', zh: 'TTC 轮椅接送 - 申请', pa: 'TTC ਵ੍ਹੀਲ-ਟ੍ਰਾਂਸ - ਅਰਜ਼ੀ', es: 'TTC Wheel-Trans - Solicitud' },
    phone: '416-393-4111',
    website: 'www.ttc.ca/wheel-trans',
    description: {
      en: 'Door-to-door accessible transit for persons with physical or functional disabilities. Application required. Contact 416-393-4111 to apply.',
      fr: 'Transport accessible porte-à-porte pour les personnes ayant un handicap physique ou fonctionnel. Demande requise.',
      zh: '为身体或功能障碍人士提供的门到门无障碍交通服务。需要申请。联系 416-393-4111 申请。',
      pa: 'ਸਰੀਰਕ ਜਾਂ ਕਾਰਜਸ਼ੀਲ ਅਸਮਰਥਤਾਵਾਂ ਵਾਲੇ ਵਿਅਕਤੀਆਂ ਲਈ ਘਰ-ਘਰ ਪਹੁੰਚਯੋਗ ਆਵਾਜਾਈ। ਅਰਜ਼ੀ ਲਾਜ਼ਮੀ ਹੈ।',
      es: 'Tránsito accesible puerta a puerta para personas con discapacidades físicas o funcionales. Se requiere solicitud.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Accessible', fr: 'Accessible', zh: '无障碍', pa: 'ਪਹੁੰਚਯੋਗ', es: 'Accesible' }
  },
  {
    id: 'go-transit-senior-fares',
    name: { en: 'GO Transit - Senior Fares', fr: 'GO Transit - Tarifs aînés', zh: 'GO Transit - 老年人票价', pa: 'GO ਟ੍ਰਾਂਜ਼ਿਟ - ਬਜ਼ੁਰਗ ਕਿਰਾਏ', es: 'GO Transit - Tarifas para Personas Mayores' },
    phone: '416-869-3200',
    description: {
      en: 'Regional public transit service for the Greater Toronto and Hamilton Area. Senior fares available for 65+.',
      fr: 'Service de transport en commun régional pour la région du Grand Toronto et de Hamilton. Tarifs aînés disponibles pour 65+.',
      zh: '大多伦多和汉密尔顿地区的区域公共交通服务。65 岁及以上老年人可享受老年人票价。',
      pa: 'ਗ੍ਰੇਟਰ ਟੋਰਾਂਟੋ ਅਤੇ ਹੈਮਿਲਟਨ ਖੇਤਰ ਲਈ ਖੇਤਰੀ ਜਨਤਕ ਆਵਾਜਾਈ ਸੇਵਾ। 65+ ਲਈ ਬਜ਼ੁਰਗ ਕਿਰਾਏ ਉਪਲਬਧ।',
      es: 'Servicio de transporte público regional para el Área Metropolitana de Toronto y Hamilton. Tarifas para personas mayores disponibles para 65+.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Regional', fr: 'Régional', zh: '区域', pa: 'ਖੇਤਰੀ', es: 'Regional' }
  },
  {
    id: 'parking-permit-serviceontario',
    name: { en: 'Accessible Parking Permit - ServiceOntario', fr: 'Permis de stationnement accessible - ServiceOntario', zh: '无障碍停车许可证 - ServiceOntario', pa: 'ਪਹੁੰਚਯੋਗ ਪਾਰਕਿੰਗ ਪਰਮਿਟ - ServiceOntario', es: 'Permiso de Estacionamiento Accesible - ServiceOntario' },
    phone: '1-800-387-3445',
    description: {
      en: 'Permits for accessible parking spaces for those with certified disabilities. Apply via ServiceOntario at 1-800-387-3445.',
      fr: 'Permis pour les espaces de stationnement accessibles pour les personnes ayant un handicap certifié. Demandez via ServiceOntario.',
      zh: '为经认证的残疾人士提供的无障碍停车位许可证。通过 ServiceOntario 1-800-387-3445 申请。',
      pa: 'ਪ੍ਰਮਾਣਿਤ ਅਸਮਰਥਤਾਵਾਂ ਵਾਲੇ ਲੋਕਾਂ ਲਈ ਪਹੁੰਚਯੋਗ ਪਾਰਕਿੰਗ ਥਾਵਾਂ ਲਈ ਪਰਮਿਟ। ServiceOntario 1-800-387-3445 \'ਤੇ ਅਰਜ਼ੀ ਦਿਓ।',
      es: 'Permisos para espacios de estacionamiento accesibles para personas con discapacidades certificadas. Solicite a través de ServiceOntario.'
    },
    category: Category.TRANSPORTATION,
    subcategory: { en: 'Driving', fr: 'Conduite', zh: '驾驶', pa: 'ਡਰਾਈਵਿੰਗ', es: 'Conducción' }
  },
  {
    id: 'housing-help-211',
    name: { en: 'Housing Help Centres - 211', fr: 'Centres d\'aide au logement - 211', zh: '住房帮助中心 - 211', pa: 'ਹਾਊਸਿੰਗ ਹੈਲਪ ਸੈਂਟਰ - 211', es: 'Centros de Ayuda para Vivienda - 211' },
    phone: '2-1-1',
    description: {
      en: 'Non-profit centres helping with housing search, eviction prevention, and applications for subsidized housing. Contact 211 for locations.',
      fr: 'Centres à but non lucratif aidant à la recherche de logement et la prévention des expulsions. Contactez le 211.',
      zh: '非营利中心帮助寻找住房、防止驱逐和申请补贴住房。联系 211 查找地点。',
      pa: 'ਰਿਹਾਇਸ਼ ਖੋਜ ਅਤੇ ਬੇਦਖਲੀ ਦੀ ਰੋਕਥਾਮ ਵਿੱਚ ਮਦਦ ਕਰਨ ਵਾਲੇ ਗੈਰ-ਲਾਭਕਾਰੀ ਕੇਂਦਰ। ਸਥਾਨਾਂ ਲਈ 211 \'ਤੇ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Centros sin fines de lucro que ayudan con la búsqueda de vivienda y prevención de desalojos. Contacte al 211 para ubicaciones.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Assistance', fr: 'Assistance', zh: '援助', pa: 'ਸਹਾਇਤਾ', es: 'Asistencia' }
  },
  {
    id: 'access-housing-rgi',
    name: { en: 'Access to Housing - RGI', fr: 'Accès au logement - LIR', zh: '住房通道 - RGI', pa: 'ਹਾਊਸਿੰਗ ਤੱਕ ਪਹੁੰਚ - RGI', es: 'Acceso a la Vivienda - RGI' },
    phone: '416-338-8888',
    description: {
      en: 'Centralized waiting list for Rent-Geared-to-Income (RGI) subsidized housing. Apply through Access to Housing.',
      fr: 'Liste d\'attente centralisée pour les logements subventionnés à loyer indexé sur le revenu (LIR).',
      zh: '按收入调整租金 (RGI) 补贴住房的集中等候名单。通过住房通道申请。',
      pa: 'ਕਿਰਾਏ-ਗੀਅਰਡ-ਟੂ-ਇਨਕਮ (RGI) ਸਬਸਿਡੀ ਵਾਲੀ ਰਿਹਾਇਸ਼ ਲਈ ਕੇਂਦਰੀਕ੍ਰਿਤ ਉਡੀਕ ਸੂਚੀ।',
      es: 'Lista de espera centralizada para viviendas subsidiadas de alquiler ajustado a los ingresos (RGI).'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Subsidized', fr: 'Subventionné', zh: '补贴', pa: 'ਸਬਸਿਡੀ ਵਾਲਾ', es: 'Subsidiado' }
  },
  {
    id: 'rent-safe-standards',
    name: { en: 'RentSafeTO - Building Standards', fr: 'RentSafeTO - Normes de construction', zh: 'RentSafeTO - 建筑标准', pa: 'RentSafeTO - ਇਮਾਰਤ ਮਾਪਦੰਡ', es: 'RentSafeTO - Estándares de Construcción' },
    phone: '3-1-1',
    description: {
      en: 'Report landlords who do not repair vital services (heat, water) or maintain building standards. Call 311 to report.',
      fr: 'Signalez les propriétaires qui ne réparent pas les services vitaux ou n\'entretiennent pas l\'immeuble. Appelez le 311.',
      zh: '举报不维修重要服务（供暖、水）或不维护建筑标准的房东。致电 311 举报。',
      pa: 'ਉਹਨਾਂ ਮਕਾਨ ਮਾਲਕਾਂ ਦੀ ਰਿਪੋਰਟ ਕਰੋ ਜੋ ਜ਼ਰੂਰੀ ਸੇਵਾਵਾਂ ਦੀ ਮੁਰੰਮਤ ਨਹੀਂ ਕਰਦੇ ਜਾਂ ਇਮਾਰਤ ਦੇ ਮਾਪਦੰਡਾਂ ਨੂੰ ਕਾਇਮ ਨਹੀਂ ਰੱਖਦੇ।',
      es: 'Denuncie a los propietarios que no reparan servicios vitales o no mantienen los estándares del edificio. Llame al 311.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Standards', fr: 'Normes', zh: '标准', pa: 'ਮਿਆਰ', es: 'Estándares' }
  },
  {
    id: 'rent-bank-eviction',
    name: { en: 'Toronto Rent Bank - Eviction Prevention', fr: 'Banque de loyer de Toronto - Prévention d\'expulsion', zh: '多伦多租金银行 - 防止驱逐', pa: 'ਟੋਰਾਂਟੋ ਰੈਂਟ ਬੈਂਕ - ਬੇਦਖਲੀ ਰੋਕਥਾਮ', es: 'Banco de Alquiler de Toronto - Prevención de Desalojo' },
    phone: '416-397-7368',
    description: {
      en: 'Interest-free loans to low-income households facing eviction due to rental arrears. Prevents eviction by helping with rent payments.',
      fr: 'Prêts sans intérêt aux ménages à faible revenu menacés d\'expulsion. Prévention des expulsions.',
      zh: '向因拖欠租金而面临驱逐的低收入家庭提供无息贷款。通过帮助支付租金来防止驱逐。',
      pa: 'ਕਿਰਾਏ ਦੇ ਬਕਾਏ ਕਾਰਨ ਬੇਦਖਲੀ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਵਿਆਜ-ਮੁਕਤ ਕਰਜ਼ੇ।',
      es: 'Préstamos sin intereses para hogares de bajos ingresos que enfrentan el desalojo. Previene desalojos.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: 'rhra-complaints',
    name: { en: 'Retirement Homes Regulatory Authority - Complaints', fr: 'Office de réglementation - Plaintes', zh: '退休之家监管局 - 投诉', pa: 'ਰਿਟਾਇਰਮੈਂਟ ਹੋਮ ਰੈਗੂਲੇਟਰੀ ਅਥਾਰਟੀ - ਸ਼ਿਕਾਇਤਾਂ', es: 'Autoridad Reguladora - Quejas' },
    phone: '1-855-275-7472',
    description: {
      en: 'Information and complaints about retirement homes. Public register of licensed homes. File complaints about retirement homes.',
      fr: 'Information et plaintes concernant les maisons de retraite. Registre public des foyers agréés.',
      zh: '关于养老院的信息和投诉。持牌养老院的公共登记册。对养老院提出投诉。',
      pa: 'ਰਿਟਾਇਰਮੈਂਟ ਹੋਮਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਅਤੇ ਸ਼ਿਕਾਇਤਾਂ। ਲਾਇਸੈਂਸ ਪ੍ਰਾਪਤ ਘਰਾਂ ਦਾ ਜਨਤਕ ਰਜਿਸਟਰ।',
      es: 'Información y quejas sobre hogares de retiro. Registro público de hogares con licencia. Presente quejas.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Retirement', fr: 'Retraite', zh: '退休', pa: 'ਸੇਵਾ ਮੁਕਤੀ', es: 'Retiro' }
  },
  {
    id: 'rhra-register',
    name: { en: 'Retirement Homes Regulatory Authority - Public Register', fr: 'Office de réglementation - Registre public', zh: '退休之家监管局 - 公共登记册', pa: 'ਰਿਟਾਇਰਮੈਂਟ ਹੋਮ ਰੈਗੂਲੇਟਰੀ ਅਥਾਰਟੀ - ਜਨਤਕ ਰਜਿਸਟਰ', es: 'Autoridad Reguladora - Registro Público' },
    phone: '1-855-275-7472',
    description: {
      en: 'Public register of licensed retirement homes. Search for licensed retirement homes in your area.',
      fr: 'Registre public des maisons de retraite agréées. Recherchez des maisons de retraite agréées.',
      zh: '持牌养老院的公共登记册。搜索您所在地区的持牌养老院。',
      pa: 'ਲਾਇਸੈਂਸ ਪ੍ਰਾਪਤ ਰਿਟਾਇਰਮੈਂਟ ਘਰਾਂ ਦਾ ਜਨਤਕ ਰਜਿਸਟਰ। ਆਪਣੇ ਖੇਤਰ ਵਿੱਚ ਲਾਇਸੈਂਸ ਪ੍ਰਾਪਤ ਰਿਟਾਇਰਮੈਂਟ ਘਰ ਖੋਜੋ।',
      es: 'Registro público de hogares de retiro con licencia. Busque hogares de retiro con licencia en su área.'
    },
    category: Category.HOUSING,
    subcategory: { en: 'Retirement', fr: 'Retraite', zh: '退休', pa: 'ਸੇਵਾ ਮੁਕਤੀ', es: 'Retiro' }
  },
  {
    id: 'tph-dental-appointment',
    name: { en: 'Toronto Public Health Dental - Appointments', fr: 'Cliniques dentaires - Rendez-vous', zh: '多伦多公共卫生牙科 - 预约', pa: 'ਟੋਰਾਂਟੋ ਪਬਲਿਕ ਹੈਲਥ ਡੈਂਟਲ - ਅਪਾਇੰਟਮੈਂਟ', es: 'Dental de Salud Pública - Citas' },
    phone: '416-338-7600',
    description: {
      en: 'Free dental care for eligible low-income seniors (65+). Call to book an appointment.',
      fr: 'Soins dentaires gratuits pour les aînés (65+) à faible revenu admissibles. Appelez pour prendre rendez-vous.',
      zh: '为符合条件的低收入老年人 (65+) 提供免费牙科护理。致电预约。',
      pa: 'ਯੋਗ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਬਜ਼ੁਰਗਾਂ (65+) ਲਈ ਮੁਫ਼ਤ ਦੰਦਾਂ ਦੀ ਦੇਖਭਾਲ। ਅਪਾਇੰਟਮੈਂਟ ਬੁਕ ਕਰਨ ਲਈ ਕਾਲ ਕਰੋ।',
      es: 'Atención dental gratuita para personas mayores de bajos ingresos elegibles (65+). Llame para programar una cita.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Dental', fr: 'Dentaire', zh: '牙科', pa: 'ਦੰਦਾਂ ਦਾ', es: 'Dental' }
  },
  {
    id: 'adp-equipment',
    name: { en: 'Assistive Devices Program - Equipment', fr: 'Programme d\'appareils fonctionnels - Équipement', zh: '辅助设备计划 - 设备', pa: 'ਸਹਾਇਕ ਉਪਕਰਣ ਪ੍ਰੋਗਰਾਮ - ਉਪਕਰਨ', es: 'Programa de Dispositivos - Equipo' },
    phone: '416-327-8804',
    description: {
      en: 'Financial help for medical equipment like hearing aids, wheelchairs, and oxygen supplies. Apply for funding assistance.',
      fr: 'Aide financière pour l\'équipement médical comme les appareils auditifs et les fauteuils roulants.',
      zh: '为医疗设备（如助听器、轮椅和氧气供应）提供经济帮助。申请资金援助。',
      pa: 'ਮੈਡੀਕਲ ਉਪਕਰਨਾਂ ਜਿਵੇਂ ਸੁਣਨ ਵਾਲੀਆਂ ਏਡਜ਼, ਵ੍ਹੀਲਚੇਅਰਾਂ, ਅਤੇ ਆਕਸੀਜਨ ਸਪਲਾਈ ਲਈ ਵਿੱਤੀ ਮਦਦ।',
      es: 'Ayuda financiera para equipos médicos como audífonos, sillas de ruedas y suministros de oxígeno.'
    },
    category: Category.HEALTH,
    subcategory: { en: 'Equipment', fr: 'Équipement', zh: '设备', pa: 'ਉਪਕਰਨ', es: 'Equipo' }
  },
  {
    id: 'friendly-voice-warm-line',
    name: { en: 'A Friendly Voice - Warm Line', fr: 'Une voix amicale - Ligne chaleureuse', zh: '友好的声音 - 温暖热线', pa: 'ਇੱਕ ਦੋਸਤਾਨਾ ਆਵਾਜ਼ - ਨਿੱਘੀ ਲਾਈਨ', es: 'Una Voz Amigable - Línea Cálida' },
    phone: '1-855-892-9992',
    description: {
      en: 'A warm line for seniors who feel lonely and want someone to talk to. Not a crisis line - for companionship and conversation.',
      fr: 'Une ligne chaleureuse pour les aînés qui se sentent seuls et veulent parler à quelqu\'un. Pas une ligne de crise.',
      zh: '为感到孤独并想找人交谈的老年人提供的温暖热线。不是危机热线 - 用于陪伴和交谈。',
      pa: 'ਉਹਨਾਂ ਬਜ਼ੁਰਗਾਂ ਲਈ ਇੱਕ ਨਿੱਘੀ ਲਾਈਨ ਜੋ ਇਕੱਲੇ ਮਹਿਸੂਸ ਕਰਦੇ ਹਨ ਅਤੇ ਕਿਸੇ ਨਾਲ ਗੱਲ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹਨ।',
      es: 'Una línea cálida para personas mayores que se sienten solas. No es una línea de crisis.'
    },
    category: Category.MENTAL_HEALTH,
    subcategory: { en: 'Social', fr: 'Social', zh: '社交', pa: 'ਸਮਾਜਿਕ', es: 'Social' }
  },
  {
    id: 'camh-assessment',
    name: { en: 'CAMH - Assessment Services', fr: 'CAMH - Services d\'évaluation', zh: 'CAMH - 评估服务', pa: 'CAMH - ਮੁਲਾਂਕਣ ਸੇਵਾਵਾਂ', es: 'CAMH - Servicios de Evaluación' },
    phone: '416-535-8501',
    description: {
      en: 'Canada\'s largest mental health teaching hospital. Assessment and treatment services for mental health conditions.',
      fr: 'Le plus grand hôpital d\'enseignement en santé mentale du Canada. Services d\'évaluation et de traitement.',
      zh: '加拿大最大的心理健康教学医院。心理健康状况的评估和治疗服务。',
      pa: 'ਕੈਨੇਡਾ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਮਾਨਸਿਕ ਸਿਹਤ ਅਧਿਆਪਨ ਹਸਪਤਾਲ। ਮਾਨਸਿਕ ਸਿਹਤ ਸਥਿਤੀਆਂ ਲਈ ਮੁਲਾਂਕਣ ਅਤੇ ਇਲਾਜ ਸੇਵਾਵਾਂ।',
      es: 'El hospital docente de salud mental más grande de Canadá. Servicios de evaluación y tratamiento.'
    },
    category: Category.MENTAL_HEALTH,
    subcategory: { en: 'Mental Health', fr: 'Santé mentale', zh: '心理健康', pa: 'ਮਾਨਸਿਕ ਸਿਹਤ', es: 'Salud Mental' }
  },
  {
    id: 'connex-addiction',
    name: { en: 'ConnexOntario - Addiction Services', fr: 'ConnexOntario - Services de toxicomanie', zh: 'ConnexOntario - 成瘾服务', pa: 'ConnexOntario - ਨਸ਼ਾਖੋਰੀ ਸੇਵਾਵਾਂ', es: 'ConnexOntario - Servicios de Adicción' },
    phone: '1-866-531-2600',
    description: {
      en: 'Free information on addiction treatment services. Get referrals to addiction treatment programs.',
      fr: 'Information gratuite sur les services de traitement de la toxicomanie.',
      zh: '关于成瘾治疗服务的免费信息。获取成瘾治疗项目的转介。',
      pa: 'ਨਸ਼ਾਖੋਰੀ ਇਲਾਜ ਸੇਵਾਵਾਂ ਬਾਰੇ ਮੁਫਤ ਜਾਣਕਾਰੀ। ਨਸ਼ਾਖੋਰੀ ਇਲਾਜ ਪ੍ਰੋਗਰਾਮਾਂ ਲਈ ਰੈਫਰਲ ਪ੍ਰਾਪਤ ਕਰੋ।',
      es: 'Información gratuita sobre servicios de tratamiento de adicciones. Obtenga referencias a programas de tratamiento.'
    },
    category: Category.MENTAL_HEALTH,
    subcategory: { en: 'Addiction', fr: 'Dépendance', zh: '成瘾', pa: 'ਨਸ਼ਾ', es: 'Adicción' }
  },
  {
    id: 'connex-gambling',
    name: { en: 'ConnexOntario - Gambling Treatment', fr: 'ConnexOntario - Traitement du jeu', zh: 'ConnexOntario - 赌博治疗', pa: 'ConnexOntario - ਜੂਆ ਇਲਾਜ', es: 'ConnexOntario - Tratamiento de Juego' },
    phone: '1-866-531-2600',
    description: {
      en: 'Free information on gambling treatment services. Get help for problem gambling.',
      fr: 'Information gratuite sur les services de traitement du jeu.',
      zh: '关于赌博治疗服务的免费信息。获得问题赌博的帮助。',
      pa: 'ਜੂਏ ਦੇ ਇਲਾਜ ਸੇਵਾਵਾਂ ਬਾਰੇ ਮੁਫਤ ਜਾਣਕਾਰੀ। ਸਮੱਸਿਆ ਜੂਏ ਲਈ ਮਦਦ ਪ੍ਰਾਪਤ ਕਰੋ।',
      es: 'Información gratuita sobre servicios de tratamiento de juego. Obtenga ayuda para el juego problemático.'
    },
    category: Category.MENTAL_HEALTH,
    subcategory: { en: 'Addiction', fr: 'Dépendance', zh: '成瘾', pa: 'ਨਸ਼ਾ', es: 'Adicción' }
  },
  {
    id: 'caregiver-helpline-peer',
    name: { en: 'Ontario Caregiver Helpline - Peer Support', fr: 'Ligne d\'aide aux aidants - Soutien par les pairs', zh: '安大略省护理员热线 - 同伴支持', pa: 'ਓਨਟਾਰੀਓ ਕੇਅਰਗਿਵਰ ਹੈਲਪਲਾਈਨ - ਸਾਥੀ ਸਹਾਇਤਾ', es: 'Línea de Ayuda para Cuidadores - Apoyo entre Pares' },
    phone: '1-833-416-2273',
    description: {
      en: '24/7 support, information, and resources for caregivers. Connect with peer support groups for caregivers.',
      fr: 'Soutien, information et ressources 24/7 pour les aidants naturels. Connectez-vous avec des groupes de soutien par les pairs.',
      zh: '全天候为护理员提供支持、信息和资源。与护理员同伴支持小组联系。',
      pa: 'ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਲਈ 24/7 ਸਹਾਇਤਾ, ਜਾਣਕਾਰੀ ਅਤੇ ਸਰੋਤ। ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਲਈ ਸਾਥੀ ਸਹਾਇਤਾ ਸਮੂਹਾਂ ਨਾਲ ਜੁੜੋ।',
      es: 'Apoyo, información y recursos 24/7 para cuidadores. Conéctese con grupos de apoyo entre pares.'
    },
    category: Category.CAREGIVER,
    subcategory: { en: 'Support', fr: 'Soutien', zh: '支持', pa: 'ਸਹਾਇਤਾ', es: 'Apoyo' }
  },
  {
    id: 'alzheimer-dementia',
    name: { en: 'Alzheimer Society - Dementia Care', fr: 'Société Alzheimer - Soins de démence', zh: '阿尔茨海默氏症协会 - 痴呆症护理', pa: 'ਅਲਜ਼ਾਈਮਰ ਸੁਸਾਇਟੀ - ਡਿਮੇਸ਼ੀਆ ਦੇਖਭਾਲ', es: 'Sociedad de Alzheimer - Cuidado de Demencia' },
    phone: '416-322-6560',
    description: {
      en: 'Support, education, and counselling for dementia care. Resources for caregivers of people with dementia.',
      fr: 'Soutien, éducation et counseling pour les soins de la démence.',
      zh: '痴呆症护理的支持、教育和咨询。为痴呆症患者的护理员提供资源。',
      pa: 'ਡਿਮੇਸ਼ੀਆ ਦੇਖਭਾਲ ਲਈ ਸਹਾਇਤਾ, ਸਿੱਖਿਆ, ਅਤੇ ਸਲਾਹ। ਡਿਮੇਸ਼ੀਆ ਵਾਲੇ ਲੋਕਾਂ ਦੇ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਲਈ ਸਰੋਤ।',
      es: 'Apoyo, educación y asesoramiento para el cuidado de la demencia. Recursos para cuidadores.'
    },
    category: Category.CAREGIVER,
    subcategory: { en: 'Dementia', fr: 'Démence', zh: '痴呆症', pa: 'ਡਿਮੇਸ਼ੀਆ', es: 'Demencia' }
  },
  {
    id: 'police-fraud',
    name: { en: 'Toronto Police - Fraud Reporting', fr: 'Police de Toronto - Signalement de fraude', zh: '多伦多警方 - 欺诈举报', pa: 'ਟੋਰਾਂਟੋ ਪੁਲਿਸ - ਧੋਖਾਧੜੀ ਰਿਪੋਰਟਿੰਗ', es: 'Policía de Toronto - Denuncia de Fraude' },
    phone: '416-808-2222',
    description: {
      en: 'Report fraud, theft, or elder abuse when there is no immediate danger. Non-emergency police services.',
      fr: 'Signalez la fraude, le vol ou la maltraitance des aînés sans danger immédiat.',
      zh: '在没有直接危险的情况下报告欺诈、盗窃或虐待老人。非紧急警察服务。',
      pa: 'ਧੋਖਾਧੜੀ, ਚੋਰੀ, ਜਾਂ ਬਜ਼ੁਰਗਾਂ ਨਾਲ ਦੁਰਵਿਵਹਾਰ ਦੀ ਰਿਪੋਰਟ ਕਰੋ ਜਦੋਂ ਕੋਈ ਤੁਰੰਤ ਖਤਰਾ ਨਹੀਂ ਹੈ।',
      es: 'Denuncie fraude, robo o abuso de ancianos cuando no haya peligro inmediato.'
    },
    category: Category.ABUSE,
    subcategory: { en: 'Reporting', fr: 'Signalement', zh: '报告', pa: 'ਰਿਪੋਰਟਿੰਗ', es: 'Denuncias' }
  },
  {
    id: 'anti-fraud-scams',
    name: { en: 'Canadian Anti-Fraud Centre - Scam Reporting', fr: 'Centre antifraude - Signalement d\'escroqueries', zh: '加拿大反欺诈中心 - 骗局举报', pa: 'ਕੈਨੇਡੀਅਨ ਐਂਟੀ-ਫਰਾਡ ਸੈਂਟਰ - ਘੁਟਾਲਾ ਰਿਪੋਰਟਿੰਗ', es: 'Centro Antifraude - Denuncia de Estafas' },
    phone: '1-888-495-8501',
    description: {
      en: 'Report scams and get advice on protecting yourself from fraud. Learn about common scams targeting seniors.',
      fr: 'Signalez les escroqueries et obtenez des conseils pour vous protéger.',
      zh: '报告骗局并获取有关保护自己免受欺诈的建议。了解针对老年人的常见骗局。',
      pa: 'ਘੁਟਾਲਿਆਂ ਦੀ ਰਿਪੋਰਟ ਕਰੋ ਅਤੇ ਆਪਣੇ ਆਪ ਨੂੰ ਬਚਾਉਣ ਲਈ ਸਲਾਹ ਲਓ। ਬਜ਼ੁਰਗਾਂ ਨੂੰ ਨਿਸ਼ਾਨਾ ਬਣਾਉਣ ਵਾਲੇ ਆਮ ਘੁਟਾਲਿਆਂ ਬਾਰੇ ਜਾਣੋ।',
      es: 'Denuncie estafas y obtenga consejos sobre cómo protegerse. Aprenda sobre estafas comunes dirigidas a personas mayores.'
    },
    category: Category.ABUSE,
    subcategory: { en: 'Fraud', fr: 'Fraude', zh: '欺诈', pa: 'ਧੋਖਾਧੜੀ', es: 'Fraude' }
  },
  {
    id: 'ace-hospitals',
    name: { en: 'Advocacy Centre for the Elderly - Hospitals', fr: 'Centre d\'avocats - Hôpitaux', zh: '老年人权益倡导中心 - 医院', pa: 'ਬਜ਼ੁਰਗਾਂ ਲਈ ਵਕਾਲਤ ਕੇਂਦਰ - ਹਸਪਤਾਲ', es: 'Centro de Defensa - Hospitales' },
    phone: '1-855-598-2656',
    description: {
      en: 'Legal help for low-income seniors regarding hospitals, long-term care, and retirement homes. Advocacy for hospital-related issues.',
      fr: 'Aide juridique pour les aînés à faible revenu concernant les hôpitaux, les soins de longue durée et les maisons de retraite.',
      zh: '为低收入老年人提供关于医院、长期护理和养老院的法律帮助。为医院相关问题提供倡导。',
      pa: 'ਹਸਪਤਾਲਾਂ, ਲੰਬੇ ਸਮੇਂ ਦੀ ਦੇਖਭਾਲ, ਅਤੇ ਰਿਟਾਇਰਮੈਂਟ ਹੋਮਾਂ ਬਾਰੇ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਕਾਨੂੰਨੀ ਮਦਦ।',
      es: 'Ayuda legal para personas mayores de bajos ingresos sobre hospitales, cuidados a largo plazo y hogares de retiro.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Advocacy', fr: 'Défense', zh: '倡导', pa: 'ਵਕਾਲਤ', es: 'Defensa' }
  },
  {
    id: 'ace-long-term-care',
    name: { en: 'Advocacy Centre for the Elderly - Long-Term Care', fr: 'Centre d\'avocats - Soins de longue durée', zh: '老年人权益倡导中心 - 长期护理', pa: 'ਬਜ਼ੁਰਗਾਂ ਲਈ ਵਕਾਲਤ ਕੇਂਦਰ - ਲੰਬੇ ਸਮੇਂ ਦੀ ਦੇਖਭਾਲ', es: 'Centro de Defensa - Cuidados a Largo Plazo' },
    phone: '1-855-598-2656',
    description: {
      en: 'Legal help for low-income seniors regarding long-term care homes. Advocacy for long-term care issues.',
      fr: 'Aide juridique pour les aînés à faible revenu concernant les foyers de soins de longue durée.',
      zh: '为低收入老年人提供关于长期护理院的法律帮助。为长期护理问题提供倡导。',
      pa: 'ਲੰਬੇ ਸਮੇਂ ਦੀ ਦੇਖਭਾਲ ਘਰਾਂ ਬਾਰੇ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਕਾਨੂੰਨੀ ਮਦਦ।',
      es: 'Ayuda legal para personas mayores de bajos ingresos sobre hogares de cuidados a largo plazo.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Advocacy', fr: 'Défense', zh: '倡导', pa: 'ਵਕਾਲਤ', es: 'Defensa' }
  },
  {
    id: 'legal-aid-criminal',
    name: { en: 'Legal Aid Ontario - Criminal', fr: 'Aide juridique - Criminel', zh: '安大略省法律援助 - 刑事', pa: 'ਲੀਗਲ ਏਡ ਓਨਟਾਰੀਓ - ਅਪਰਾਧਿਕ', es: 'Ayuda Legal Ontario - Penal' },
    phone: '1-800-668-8258',
    description: {
      en: 'Legal assistance for low-income Ontarians for criminal issues. Get help with criminal legal matters.',
      fr: 'Assistance juridique pour les Ontariens à faible revenu pour les questions criminelles.',
      zh: '为低收入安大略省人提供刑事问题的法律援助。获得刑事法律事务的帮助。',
      pa: 'ਅਪਰਾਧਿਕ ਮੁੱਦਿਆਂ ਲਈ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਓਨਟਾਰੀਓ ਨਿਵਾਸੀਆਂ ਲਈ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ।',
      es: 'Asistencia legal para habitantes de Ontario de bajos ingresos para asuntos penales.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Aid', fr: 'Aide', zh: '援助', pa: 'ਸਹਾਇਤਾ', es: 'Ayuda' }
  },
  {
    id: 'legal-aid-family',
    name: { en: 'Legal Aid Ontario - Family', fr: 'Aide juridique - Famille', zh: '安大略省法律援助 - 家庭', pa: 'ਲੀਗਲ ਏਡ ਓਨਟਾਰੀਓ - ਪਰਿਵਾਰ', es: 'Ayuda Legal Ontario - Familia' },
    phone: '1-800-668-8258',
    description: {
      en: 'Legal assistance for low-income Ontarians for family law issues. Get help with family legal matters.',
      fr: 'Assistance juridique pour les Ontariens à faible revenu pour les questions de droit de la famille.',
      zh: '为低收入安大略省人提供家庭法问题的法律援助。获得家庭法律事务的帮助。',
      pa: 'ਪਰਿਵਾਰਕ ਕਾਨੂੰਨ ਮੁੱਦਿਆਂ ਲਈ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਓਨਟਾਰੀਓ ਨਿਵਾਸੀਆਂ ਲਈ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ।',
      es: 'Asistencia legal para habitantes de Ontario de bajos ingresos para asuntos de derecho familiar.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Aid', fr: 'Aide', zh: '援助', pa: 'ਸਹਾਇਤਾ', es: 'Ayuda' }
  },
  {
    id: 'legal-aid-immigration',
    name: { en: 'Legal Aid Ontario - Immigration', fr: 'Aide juridique - Immigration', zh: '安大略省法律援助 - 移民', pa: 'ਲੀਗਲ ਏਡ ਓਨਟਾਰੀਓ - ਪ੍ਰਵਾਸ', es: 'Ayuda Legal Ontario - Inmigración' },
    phone: '1-800-668-8258',
    description: {
      en: 'Legal assistance for low-income Ontarians for immigration issues. Get help with immigration legal matters.',
      fr: 'Assistance juridique pour les Ontariens à faible revenu pour les questions d\'immigration.',
      zh: '为低收入安大略省人提供移民问题的法律援助。获得移民法律事务的帮助。',
      pa: 'ਪ੍ਰਵਾਸ ਮੁੱਦਿਆਂ ਲਈ ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਓਨਟਾਰੀਓ ਨਿਵਾਸੀਆਂ ਲਈ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ।',
      es: 'Asistencia legal para habitantes de Ontario de bajos ingresos para asuntos de inmigración.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Aid', fr: 'Aide', zh: '援助', pa: 'ਸਹਾਇਤਾ', es: 'Ayuda' }
  },
  {
    id: 'cleo-legal-info',
    name: { en: 'CLEO - Legal Information', fr: 'CLEO - Information juridique', zh: 'CLEO - 法律信息', pa: 'CLEO - ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ', es: 'CLEO - Información Legal' },
    phone: '416-408-4420',
    description: {
      en: 'Clear language legal information and resources. Easy-to-understand legal information for seniors.',
      fr: 'Information juridique et ressources en langage clair.',
      zh: '通俗易懂的法律信息和资源。为老年人提供易于理解的法律信息。',
      pa: 'ਸਪੱਸ਼ਟ ਭਾਸ਼ਾ ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ ਅਤੇ ਸਰੋਤ। ਬਜ਼ੁਰਗਾਂ ਲਈ ਸਮਝਣ ਵਿੱਚ ਆਸਾਨ ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ।',
      es: 'Información legal y recursos en lenguaje claro. Información legal fácil de entender para personas mayores.'
    },
    category: Category.LEGAL,
    subcategory: { en: 'Education', fr: 'Éducation', zh: '教育', pa: 'ਸਿੱਖਿਆ', es: 'Educación' }
  },
  {
    id: 'meals-on-wheels-fees',
    name: { en: 'Meals on Wheels - Fees', fr: 'Popote roulante - Frais', zh: '送餐服务 - 费用', pa: 'ਪਹੀਏ \'ਤੇ ਭੋਜਨ - ਫੀਸਾਂ', es: 'Comidas sobre Ruedas - Tarifas' },
    website: 'www.mealsonwheels.ca',
    description: {
      en: 'Hot or frozen meals delivered to your door for seniors. Fees apply - contact for pricing information.',
      fr: 'Repas chauds ou surgelés livrés à votre porte. Frais applicables.',
      zh: '为老年人提供热餐或冷冻餐送货上门。需付费 - 联系了解价格信息。',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਲਈ ਤੁਹਾਡੇ ਦਰਵਾਜ਼ੇ \'ਤੇ ਗਰਮ ਜਾਂ ਜੰਮੇ ਹੋਏ ਭੋਜਨ। ਫੀਸਾਂ ਲਾਗੂ ਹੁੰਦੀਆਂ ਹਨ - ਕੀਮਤ ਜਾਣਕਾਰੀ ਲਈ ਸੰਪਰਕ ਕਰੋ।',
      es: 'Comidas calientes o congeladas entregadas a su puerta. Se aplican tarifas - contacte para información de precios.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Delivery', fr: 'Livraison', zh: '配送', pa: 'ਡਿਲਿਵਰੀ', es: 'Entrega' }
  },
  {
    id: 'daily-bread-referrals',
    name: { en: 'Daily Bread Food Bank - Referrals', fr: 'Daily Bread - Références', zh: '每日面包食物银行 - 转介', pa: 'ਰੋਜ਼ਾਨਾ ਬਰੈੱਡ ਫੂਡ ਬੈਂਕ - ਰੈਫਰਲ', es: 'Daily Bread - Referencias' },
    phone: '416-203-0050',
    website: 'www.dailybread.ca',
    description: {
      en: 'Food bank services and referrals to local food banks. Get connected to food banks in your neighborhood.',
      fr: 'Services de banque alimentaire et références vers les banques alimentaires locales.',
      zh: '食物银行服务和转介到当地食物银行。连接到您附近的食物银行。',
      pa: 'ਫੂਡ ਬੈਂਕ ਸੇਵਾਵਾਂ ਅਤੇ ਸਥਾਨਕ ਫੂਡ ਬੈਂਕਾਂ ਲਈ ਰੈਫਰਲ। ਆਪਣੇ ਖੇਤਰ ਵਿੱਚ ਫੂਡ ਬੈਂਕਾਂ ਨਾਲ ਜੁੜੋ।',
      es: 'Servicios de banco de alimentos y referencias a bancos de alimentos locales.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Food Bank', fr: 'Banque alimentaire', zh: '食物银行', pa: 'ਫੂਡ ਬੈਂਕ', es: 'Banco de Alimentos' }
  },
  {
    id: 'food-share-good-food-box',
    name: { en: 'FoodShare Toronto - Good Food Box', fr: 'FoodShare - Boîte de bons aliments', zh: 'FoodShare 多伦多 - Good Food Box', pa: 'ਫੂਡਸ਼ੇਅਰ ਟੋਰਾਂਟੋ - ਗੁੱਡ ਫੂਡ ਬਾਕਸ', es: 'FoodShare Toronto - Caja de Buena Comida' },
    phone: '416-363-6441',
    website: 'www.foodshare.net',
    description: {
      en: 'Good Food Box program for fresh produce. Affordable fresh fruits and vegetables delivered to your community.',
      fr: 'Programme Good Food Box pour produits frais.',
      zh: '新鲜农产品的 Good Food Box 计划。将经济实惠的新鲜水果和蔬菜送到您的社区。',
      pa: 'ਤਾਜ਼ੇ ਉਤਪਾਦਾਂ ਲਈ ਗੁੱਡ ਫੂਡ ਬਾਕਸ ਪ੍ਰੋਗਰਾਮ। ਤੁਹਾਡੇ ਭਾਈਚਾਰੇ ਵਿੱਚ ਪਹੁੰਚਾਏ ਜਾਣ ਵਾਲੇ ਕਿਫਾਇਤੀ ਤਾਜ਼ੇ ਫਲ ਅਤੇ ਸਬਜ਼ੀਆਂ।',
      es: 'Programa Good Food Box para productos frescos. Frutas y verduras frescas asequibles entregadas a su comunidad.'
    },
    category: Category.FOOD,
    subcategory: { en: 'Produce', fr: 'Produits', zh: '农产品', pa: 'ਉਤਪਾਦ', es: 'Productos' }
  },
  {
    id: 'farley-veterinary',
    name: { en: 'The Farley Foundation - Veterinary Care', fr: 'Fondation Farley - Soins vétérinaires', zh: '法利基金会 - 兽医护理', pa: 'ਦ ਫਾਰਲੇ ਫਾਊਂਡੇਸ਼ਨ - ਵੈਟਰਨਰੀ ਦੇਖਭਾਲ', es: 'La Fundación Farley - Atención Veterinaria' },
    phone: '1-888-262-9811',
    description: {
      en: 'Subsidizes veterinary care for pets of low-income seniors. Financial assistance for pet medical expenses.',
      fr: 'Subventionne les soins vétérinaires pour les aînés à faible revenu.',
      zh: '为低收入老年人的宠物提供兽医护理补贴。为宠物医疗费用提供经济援助。',
      pa: 'ਘੱਟ ਆਮਦਨੀ ਵਾਲੇ ਬਜ਼ੁਰਗਾਂ ਦੇ ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਲਈ ਵੈਟਰਨਰੀ ਦੇਖਭਾਲ ਲਈ ਸਬਸਿਡੀ।',
      es: 'Subsidia la atención veterinaria para mascotas de personas mayores de bajos ingresos.'
    },
    category: Category.PETS,
    subcategory: { en: 'Financial Aid', fr: 'Aide financière', zh: '经济援助', pa: 'ਵਿੱਤੀ ਸਹਾਇਤਾ', es: 'Ayuda Financiera' }
  },
  {
    id: 'safepet-women',
    name: { en: 'SafePet Program - Women Leaving Abuse', fr: 'SafePet - Femmes quittant la violence', zh: 'SafePet 计划 - 离开虐待的妇女', pa: 'SafePet ਪ੍ਰੋਗਰਾਮ - ਦੁਰਵਿਵਹਾਰ ਛੱਡਣ ਵਾਲੀਆਂ ਔਰਤਾਂ', es: 'Programa SafePet - Mujeres que Dejan el Abuso' },
    phone: '1-800-670-1702',
    description: {
      en: 'Foster care for pets of women leaving abusive relationships. Temporary safe care for pets during transition.',
      fr: 'Famille d\'accueil pour les animaux des femmes quittant des relations abusives.',
      zh: '为离开虐待关系的妇女的宠物提供寄养服务。在过渡期间为宠物提供临时安全护理。',
      pa: 'ਅਪਮਾਨਜਨਕ ਰਿਸ਼ਤਿਆਂ ਨੂੰ ਛੱਡਣ ਵਾਲੀਆਂ ਔਰਤਾਂ ਦੇ ਪਾਲਤੂ ਜਾਨਵਰਾਂ ਲਈ ਪਾਲਣ ਪੋਸ਼ਣ।',
      es: 'Cuidado de crianza para mascotas de mujeres que dejan relaciones abusivas.'
    },
    category: Category.PETS,
    subcategory: { en: 'Safety', fr: 'Sécurité', zh: '安全', pa: 'ਸੁਰੱਖਿਆ', es: 'Seguridad' }
  }
];
