import type { NavItem } from '../types';

export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'الرئيسية', href: '/' },
  { id: 'about', label: 'عن مِيثاق', href: '/about' },
  { id: 'services', label: 'الخدمات القانونية', href: '/services' },
  { id: 'approach', label: 'منهجية العمل', href: '/approach' },
  { id: 'team', label: 'فريق العمل', href: '/team' },
  { id: 'insights', label: 'الرؤى والمقالات', href: '/insights' },
  { id: 'contact', label: 'تواصل معنا', href: '/contact' },
];

export const FOOTER_PRACTICE_LINKS = [
  { label: 'قانون الشركات والأعمال', href: '/services/corporate-and-business' },
  { label: 'العقود والاتفاقيات', href: '/services/contracts-and-agreements' },
  { label: 'التقاضي وتسوية المنازعات', href: '/services/litigation-and-disputes' },
  { label: 'العقارات والإنشاءات', href: '/services/real-estate-and-construction' },
  { label: 'العمل والموارد البشرية', href: '/services/employment-and-labor' },
  { label: 'الملكية الفكرية والتقنية', href: '/services/intellectual-property-and-technology' },
];

export const FOOTER_INSTITUTIONAL_LINKS = [
  { label: 'عن مِيثاق', href: '/about' },
  { label: 'منهجية العمل', href: '/approach' },
  { label: 'فريق العمل', href: '/team' },
  { label: 'الرؤى والمقالات القانونية', href: '/insights' },
  { label: 'الأسئلة الشائعة', href: '/faq' },
  { label: 'سياسة الخصوصية والاستخدام', href: '/privacy' },
];

export const INSTITUTIONAL_INFO = {
  name: 'مِيثاق',
  subtitle: 'المحاماة والاستشارات القانونية',
  tagline: 'حين تكون التفاصيل فارقة، تبدأ قوة الموقف.',
  description:
    'صرح قانوني واستشاري يقدم حلولاً وقائية وترافعية قائمة على الفحص المجهري للوقائع، والتحليل النظامي الرصين، وصناعة الحصانة القانونية للمنشآت والأفراد.',
  phone: '+966 11 400 0000',
  email: 'inquiries@mithaq-law.com',
  address: 'الرياض، المملكة العربية السعودية (نموذج افتراضي)',
  workingHours: 'الأحد – الخميس: 8:30 ص – 5:30 م',
  consultationNotice: 'جلسات الاستشارة تعقد حضوريًا أو عبر الاتصال المرئي المشفر مسبق التنسيق.',
  disclaimer:
    'مِيثاق نموذج رقمي تجريبي مستقل أُنشئ لأغراض العرض وتقديم تجربة تفاعلية متكاملة، وكافة البيانات والأسماء والصفات الواردة فيه افتراضية. المحتوى المنشور لا يشكل استشارة قانونية مخصصة ملزمة.',
  copyright: '© 2026 مِيثاق للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.',
};
