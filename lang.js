// Language translations
const translations = {
    ar: {
        // Header
        'nav-home': 'الصفحة الرئيسية',
        'nav-about': 'من نحن',
        'nav-programs': 'برامجنا',
        'nav-completed': 'مشاريع منجزة',
        'nav-ongoing': 'مشاريع قيد الإنجاز',
        'nav-stories': 'قصص الأمل',
        'nav-contact': 'اتصل بنا',
        'mobile-menu': 'قائمة التنقل',
        
        // Hero
        'hero-title': 'نزرع الأمل.. نبني الإنسان',
        'hero-description': 'في كل يوم، نعمل على بناء مستقبل أفضل للأطفال والأسر المحتاجة. من خلال برامجنا المتنوعة، نساهم في تغيير حياة آلاف الأشخاص ونزرع بذور الأمل في قلوبهم.',
        'hero-cta-primary': 'اعرف أكثر',
        'hero-cta-secondary': 'قصص الأمل',
        
        // Stories Section
        'stories-title': 'قصص الأمل',
        'stories-subtitle': 'قصص حقيقية عن التغيير الإيجابي الذي نحققه معاً. كل مساهمة تترك أثراً إيجابياً في حياة شخص يحتاج إلى يد العون.',
        
        // Story Cards
        'story-education-title': 'برنامج التعليم',
        'story-education-desc': 'نساعد الأطفال على الوصول إلى التعليم الجيد من خلال توفير المواد الدراسية والمنح التعليمية.',
        'story-education-progress': 'من الهدف',
        'story-family-title': 'دعم الأسر',
        'story-family-desc': 'نقدم المساعدة الغذائية والدعم المالي للأسر المحتاجة لمساعدتهم على تخطي الأوقات الصعبة.',
        'story-health-title': 'الرعاية الصحية',
        'story-health-desc': 'نضمن وصول الرعاية الصحية الأساسية للمحتاجين من خلال العيادات المتنقلة والفحوصات المجانية.',
        
        // Statistics
        'stat-beneficiaries': 'مستفيد',
        'stat-volunteers': 'متطوع',
        'stat-years': 'سنة من العطاء',
        
        // CTA
        'cta-title': 'ساهم معنا، نزرع الأمل',
        'cta-description': 'انضم إلينا في رحلتنا لزرع الأمل وبناء الإنسان. معاً يمكننا إحداث فرق حقيقي في حياة آلاف الأشخاص.',
        'cta-button': 'اعرف أكثر',
        
        // Footer
        'footer-mission': 'مؤسسة خيرية تعمل على زرع الأمل وبناء الإنسان من خلال برامج متنوعة تركز على التعليم والصحة ودعم الأسر المحتاجة.',
        'footer-quick-links': 'روابط سريعة',
        'footer-follow': 'تابعنا',
        'footer-copyright': 'جميع الحقوق محفوظة.',
        'footer-foundation': 'مؤسسة طيبة',
        'social-facebook': 'فيسبوك',
        'social-twitter': 'تويتر',
        'social-instagram': 'إنستغرام',
        
        // Pages
        'page-title': 'مؤسسة طيبة - نزرع الأمل.. نبني الإنسان',
        'page-about-title': 'من نحن',
        'page-contact-title': 'اتصل بنا',
        'page-completed-title': 'مشاريع منجزة',
        'page-ongoing-title': 'مشاريع قيد الإنجاز',
        'page-stories-title': 'قصص الأمل',
        
        // About Page
        'about-subtitle': 'تعرف على رؤيتنا ورسالتنا وقيمنا',
        'about-vision': 'رؤيتنا',
        'about-vision-text': 'نؤمن بأن كل إنسان يستحق حياة كريمة ومستقبل أفضل. نسعى لبناء مجتمع متكامل يعيش فيه الجميع بكرامة وأمل، حيث يكون التعليم متاحاً والصحة مضمونة والفرص متكافئة للجميع.',
        'about-mission': 'رسالتنا',
        'about-mission-text': 'مؤسسة طيبة هي مؤسسة خيرية تعمل على زرع الأمل وبناء الإنسان من خلال برامج متنوعة تركز على التعليم والصحة ودعم الأسر المحتاجة. نؤمن بأن التغيير الحقيقي يبدأ من الفرد، ونسعى لتمكين كل شخص من تحقيق إمكاناته الكاملة.',
        'about-values': 'قيمنا',
        'value-cooperation': 'التعاون',
        'value-cooperation-desc': 'نؤمن بقوة العمل الجماعي والتعاون لتحقيق أهدافنا المشتركة',
        'value-humanity': 'الإنسانية',
        'value-humanity-desc': 'نضع الإنسان في قلب كل ما نقوم به، بغض النظر عن الخلفية أو الظروف',
        'value-transparency': 'الشفافية',
        'value-transparency-desc': 'نلتزم بالشفافية الكاملة في جميع أعمالنا وبرامجنا',
        'value-sustainability': 'الاستدامة',
        'value-sustainability-desc': 'نعمل على بناء حلول مستدامة تخلق تأثيراً طويل الأمد',
        'about-history': 'تاريخنا',
        'about-history-text1': 'تأسست مؤسسة طيبة قبل 15 عاماً بهدف واحد: زرع الأمل وبناء الإنسان. على مر السنين، استطعنا الوصول إلى أكثر من 120,000 مستفيد من خلال برامجنا المتنوعة في التعليم والصحة ودعم الأسر.',
        'about-history-text2': 'اليوم، نعمل مع أكثر من 500 متطوع متحمس يساهمون في تحقيق رؤيتنا المشتركة. كل قصة نجاح، كل حياة تغيرت، هي دليل على أن العمل الجماعي يمكن أن يحدث فرقاً حقيقياً.',
        
        // Contact Page
        'contact-subtitle': 'نحن هنا للإجابة على استفساراتك',
        'contact-info': 'معلومات التواصل',
        'contact-form-title': 'أرسل لنا رسالة',
        'contact-email': 'البريد الإلكتروني',
        'contact-phone': 'الهاتف',
        'contact-address': 'العنوان',
        'contact-address-text': 'شارع الخير، بناء الأمل',
        'contact-address-text-line2': 'المدينة، البلد',
        'contact-hours': 'ساعات العمل',
        'contact-hours-text': 'الأحد - الخميس: 9:00 ص - 5:00 م',
        'contact-hours-text-line2': 'الجمعة - السبت: مغلق',
        'contact-name': 'الاسم',
        'contact-subject': 'الموضوع',
        'contact-message': 'الرسالة',
        'contact-send': 'إرسال الرسالة',
        'contact-send-success': 'شكراً لك! سنتواصل معك قريباً.',
        
        // Completed Projects
        'completed-subtitle': 'إنجازاتنا التي غيرت حياة آلاف الأشخاص',
        'project-school-title': 'مدرسة الأمل',
        'project-school-date': '2023',
        'project-school-desc': 'بناء مدرسة متكاملة تضم 12 فصلاً دراسياً ومكتبة وملاعب رياضية. استفاد منها أكثر من 500 طالب وطالبة من المنطقة المحيطة.',
        'project-school-students': 'طالب',
        'project-school-classrooms': 'فصل دراسي',
        'project-clinic-title': 'عيادة متنقلة',
        'project-clinic-date': '2022',
        'project-clinic-desc': 'إطلاق عيادة متنقلة تقدم خدمات صحية مجانية للمناطق النائية. تم فحص وعلاج أكثر من 3,000 شخص خلال السنة الأولى.',
        'project-clinic-beneficiaries': 'مستفيد',
        'project-clinic-areas': 'منطقة',
        'project-food-title': 'برنامج الغذاء للأسر',
        'project-food-date': '2021',
        'project-food-desc': 'توزيع سلال غذائية شهرية لأكثر من 1,000 أسرة محتاجة على مدار عام كامل. ساهم البرنامج في تحسين الأمن الغذائي للأسر المستفيدة.',
        'project-food-families': 'أسرة',
        'project-food-months': 'شهر',
        'project-training-title': 'مركز التدريب المهني',
        'project-training-date': '2020',
        'project-training-desc': 'إنشاء مركز تدريب مهني يقدم دورات في الحرف اليدوية والمهارات المهنية. تخرج منه أكثر من 200 شاب وشابة وتم توظيف 70% منهم.',
        'project-training-graduates': 'خريج',
        'project-training-employment': 'توظيف',
        
        // Ongoing Projects
        'ongoing-subtitle': 'مشاريعنا الحالية التي نعمل عليها',
        'project-library-title': 'مكتبة عامة',
        'project-library-date': '2024 - جاري العمل',
        'project-library-desc': 'بناء مكتبة عامة حديثة تحتوي على أكثر من 10,000 كتاب ومكان للقراءة ومركز للأنشطة الثقافية. المشروع حالياً في مرحلة البناء.',
        'project-library-progress': 'من الإنجاز',
        'project-scholarship-title': 'برنامج المنح الدراسية',
        'project-scholarship-date': '2024 - جاري العمل',
        'project-scholarship-desc': 'برنامج منح دراسية لتمكين 200 طالب وطالبة من إكمال تعليمهم الجامعي. تم اختيار 120 طالب حتى الآن.',
        'project-health-center-title': 'مركز صحي مجتمعي',
        'project-health-center-date': '2024 - جاري العمل',
        'project-health-center-desc': 'إنشاء مركز صحي يوفر خدمات صحية شاملة للمجتمع المحلي. المشروع في مرحلة التجهيز والتأثيث.',
        'project-women-title': 'برنامج تمكين المرأة',
        'project-women-date': '2024 - جاري العمل',
        'project-women-desc': 'برنامج شامل لتمكين 150 امرأة من خلال التدريب المهني وورش العمل وبرامج ريادة الأعمال. تم تدريب 80 امرأة حتى الآن.',
        
        // Stories Page
        'stories-subtitle-page': 'قصص حقيقية عن التغيير الإيجابي الذي نحققه معاً',
        'story-ahmed-title': 'قصة أحمد: من الشارع إلى الجامعة',
        'story-ahmed-meta': '2023 | التعليم',
        'story-ahmed-text1': 'أحمد كان طفلاً في العاشرة من عمره عندما فقد والده. اضطر للعمل في الشارع لمساعدة أسرته. لكن برنامج المنح الدراسية الذي قدمته مؤسسة طيبة غيّر حياته بالكامل.',
        'story-ahmed-text2': 'اليوم، أحمد طالب في السنة الثالثة بكلية الطب. يقول: "لولا الدعم الذي تلقيته، لم أكن لأحلم يوماً بالوصول إلى هنا. مؤسسة طيبة لم تمنحني التعليم فقط، بل منحتني الأمل في مستقبل أفضل."',
        'story-fatima-title': 'قصة فاطمة: من اليأس إلى النجاح',
        'story-fatima-meta': '2022 | تمكين المرأة',
        'story-fatima-text1': 'فاطمة، أم لثلاثة أطفال، كانت تكافح لتوفير احتياجات أسرتها بعد وفاة زوجها. من خلال برنامج تمكين المرأة، تلقّت تدريباً في الخياطة والتطريز.',
        'story-fatima-text2': 'اليوم، فاطمة تملك مشروعها الخاص وتوظف ثلاث نساء أخريات. "لم أكن أتخيل أنني سأصبح صاحبة عمل. البرنامج لم يعلّمني مهارة فقط، بل علّمني الثقة في نفسي وقدرتي على التغيير."',
        'story-mohammed-title': 'قصة عائلة محمد: الأمل يعود',
        'story-mohammed-meta': '2021 | دعم الأسر',
        'story-mohammed-text1': 'عائلة محمد كانت تمر بأوقات صعبة جداً. الأب عاطل عن العمل والأم مريضة ولا يستطيعون توفير العلاج. من خلال برنامج دعم الأسر، تلقوا مساعدة غذائية شهرية وتمكنوا من علاج الأم.',
        'story-mohammed-text2': '"كنا على وشك اليأس تماماً. لكن الدعم الذي تلقيناه أعاد لنا الأمل. اليوم، زوجي وجد عملاً وأنا بصحة جيدة. أطفالنا يستطيعون الذهاب إلى المدرسة بكرامة."',
        'story-sara-title': 'قصة سارة: من الطالبة إلى المعلمة',
        'story-sara-meta': '2020 | التعليم',
        'story-sara-text1': 'سارة كانت من أوائل الطالبات في مدرسة الأمل التي بنتها المؤسسة. كانت طالبة مجتهدة تحلم بأن تصبح معلمة. من خلال برنامج المنح الدراسية، تمكنت من إكمال دراستها الجامعية.',
        'story-sara-text2': 'اليوم، سارة معلمة في نفس المدرسة التي درست فيها. "أريد أن أكون مصدر إلهام للأطفال كما كانت معلماتي مصدر إلهام لي. أريد أن أزرع الأمل في قلوبهم كما زرعته في قلبي."',
        
        // Projects
        'project-completed': 'مكتمل',
        'project-ongoing': 'قيد التنفيذ',
        'project-progress': 'من الإنجاز',
        
        // Images Alt
        'img-hero-alt': 'طفل سعيد',
        'img-education-alt': 'تعليم الأطفال',
        'img-family-alt': 'مساعدة الأسر',
        'img-health-alt': 'الرعاية الصحية',
        'img-logo-alt': 'مؤسسة طيبة الخير للأعمال الإنسانية',
        
        // Meta
        'meta-description': 'مؤسسة خيرية تزرع الأمل وتبني الإنسان',
    },
    en: {
        // Header
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-programs': 'Our Programs',
        'nav-completed': 'Completed Projects',
        'nav-ongoing': 'Ongoing Projects',
        'nav-stories': 'Stories of Hope',
        'nav-contact': 'Contact Us',
        'mobile-menu': 'Navigation Menu',
        
        // Hero
        'hero-title': 'Planting Hope.. Building Humanity',
        'hero-description': 'Every day, we work to build a better future for children and families in need. Through our diverse programs, we contribute to changing the lives of thousands of people and planting seeds of hope in their hearts.',
        'hero-cta-primary': 'Learn More',
        'hero-cta-secondary': 'Stories of Hope',
        
        // Stories Section
        'stories-title': 'Stories of Hope',
        'stories-subtitle': 'Real stories about the positive change we achieve together. Every contribution leaves a positive impact on the life of someone in need.',
        
        // Story Cards
        'story-education-title': 'Education Program',
        'story-education-desc': 'We help children access quality education by providing study materials and educational grants.',
        'story-education-progress': 'of target',
        'story-family-title': 'Family Support',
        'story-family-desc': 'We provide food aid and financial support to needy families to help them overcome difficult times.',
        'story-health-title': 'Health Care',
        'story-health-desc': 'We ensure access to basic healthcare for those in need through mobile clinics and free examinations.',
        
        // Statistics
        'stat-beneficiaries': 'Beneficiaries',
        'stat-volunteers': 'Volunteers',
        'stat-years': 'Years of Giving',
        
        // CTA
        'cta-title': 'Join Us, Plant Hope',
        'cta-description': 'Join us on our journey to plant hope and build humanity. Together we can make a real difference in the lives of thousands of people.',
        'cta-button': 'Learn More',
        
        // Footer
        'footer-mission': 'A charitable foundation working to plant hope and build humanity through diverse programs focusing on education, health, and support for families in need.',
        'footer-quick-links': 'Quick Links',
        'footer-follow': 'Follow Us',
        'footer-copyright': 'All rights reserved.',
        'footer-foundation': 'Taiba Foundation',
        'social-facebook': 'Facebook',
        'social-twitter': 'Twitter',
        'social-instagram': 'Instagram',
        
        // Pages
        'page-title': 'Taiba Foundation - Planting Hope.. Building Humanity',
        'page-about-title': 'About Us',
        'page-contact-title': 'Contact Us',
        'page-completed-title': 'Completed Projects',
        'page-ongoing-title': 'Ongoing Projects',
        'page-stories-title': 'Stories of Hope',
        
        // About Page
        'about-subtitle': 'Learn about our vision, mission, and values',
        'about-vision': 'Our Vision',
        'about-vision-text': 'We believe that every human being deserves a dignified life and a better future. We strive to build an integrated society where everyone lives with dignity and hope, where education is accessible, health is guaranteed, and opportunities are equal for all.',
        'about-mission': 'Our Mission',
        'about-mission-text': 'Taiba Foundation is a charitable organization working to plant hope and build humanity through diverse programs focusing on education, health, and support for families in need. We believe that real change starts with the individual, and we strive to empower every person to achieve their full potential.',
        'about-values': 'Our Values',
        'value-cooperation': 'Cooperation',
        'value-cooperation-desc': 'We believe in the power of teamwork and cooperation to achieve our common goals',
        'value-humanity': 'Humanity',
        'value-humanity-desc': 'We place the human being at the heart of everything we do, regardless of background or circumstances',
        'value-transparency': 'Transparency',
        'value-transparency-desc': 'We are committed to full transparency in all our work and programs',
        'value-sustainability': 'Sustainability',
        'value-sustainability-desc': 'We work to build sustainable solutions that create long-term impact',
        'about-history': 'Our History',
        'about-history-text1': 'Taiba Foundation was established 15 years ago with one goal: to plant hope and build humanity. Over the years, we have reached more than 120,000 beneficiaries through our diverse programs in education, health, and family support.',
        'about-history-text2': 'Today, we work with more than 500 enthusiastic volunteers who contribute to achieving our shared vision. Every success story, every changed life, is proof that teamwork can make a real difference.',
        
        // Contact Page
        'contact-subtitle': 'We are here to answer your inquiries',
        'contact-info': 'Contact Information',
        'contact-form-title': 'Send Us a Message',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-address': 'Address',
        'contact-address-text': 'Charity Street, Hope Building',
        'contact-address-text-line2': 'City, Country',
        'contact-hours': 'Working Hours',
        'contact-hours-text': 'Sunday - Thursday: 9:00 AM - 5:00 PM',
        'contact-hours-text-line2': 'Friday - Saturday: Closed',
        'contact-name': 'Name',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        'contact-send-success': 'Thank you! We will contact you soon.',
        
        // Completed Projects
        'completed-subtitle': 'Our achievements that changed the lives of thousands of people',
        'project-school-title': 'Hope School',
        'project-school-date': '2023',
        'project-school-desc': 'Building a complete school with 12 classrooms, a library, and sports facilities. More than 500 students from the surrounding area benefited from it.',
        'project-school-students': 'Students',
        'project-school-classrooms': 'Classrooms',
        'project-clinic-title': 'Mobile Clinic',
        'project-clinic-date': '2022',
        'project-clinic-desc': 'Launching a mobile clinic that provides free health services to remote areas. More than 3,000 people were examined and treated during the first year.',
        'project-clinic-beneficiaries': 'Beneficiaries',
        'project-clinic-areas': 'Areas',
        'project-food-title': 'Family Food Program',
        'project-food-date': '2021',
        'project-food-desc': 'Monthly food basket distribution to more than 1,000 needy families throughout a full year. The program contributed to improving food security for beneficiary families.',
        'project-food-families': 'Families',
        'project-food-months': 'Months',
        'project-training-title': 'Vocational Training Center',
        'project-training-date': '2020',
        'project-training-desc': 'Establishing a vocational training center that offers courses in handicrafts and professional skills. More than 200 young men and women graduated from it, and 70% of them were employed.',
        'project-training-graduates': 'Graduates',
        'project-training-employment': 'Employment',
        
        // Ongoing Projects
        'ongoing-subtitle': 'Our current projects that we are working on',
        'project-library-title': 'Public Library',
        'project-library-date': '2024 - In Progress',
        'project-library-desc': 'Building a modern public library containing more than 10,000 books, a reading space, and a center for cultural activities. The project is currently in the construction phase.',
        'project-library-progress': 'Complete',
        'project-scholarship-title': 'Scholarship Program',
        'project-scholarship-date': '2024 - In Progress',
        'project-scholarship-desc': 'A scholarship program to enable 200 students to complete their university education. 120 students have been selected so far.',
        'project-health-center-title': 'Community Health Center',
        'project-health-center-date': '2024 - In Progress',
        'project-health-center-desc': 'Establishing a health center that provides comprehensive health services to the local community. The project is in the preparation and furnishing phase.',
        'project-women-title': 'Women Empowerment Program',
        'project-women-date': '2024 - In Progress',
        'project-women-desc': 'A comprehensive program to empower 150 women through vocational training, workshops, and entrepreneurship programs. 80 women have been trained so far.',
        
        // Stories Page
        'stories-subtitle-page': 'Real stories about the positive change we achieve together',
        'story-ahmed-title': 'Ahmed\'s Story: From the Street to University',
        'story-ahmed-meta': '2023 | Education',
        'story-ahmed-text1': 'Ahmed was a ten-year-old child when he lost his father. He was forced to work on the street to help his family. But the scholarship program provided by Taiba Foundation completely changed his life.',
        'story-ahmed-text2': 'Today, Ahmed is a third-year medical student. He says: "Without the support I received, I would never have dreamed of reaching here. Taiba Foundation did not only give me education, but also gave me hope for a better future."',
        'story-fatima-title': 'Fatima\'s Story: From Despair to Success',
        'story-fatima-meta': '2022 | Women Empowerment',
        'story-fatima-text1': 'Fatima, a mother of three children, was struggling to provide for her family after her husband\'s death. Through the women\'s empowerment program, she received training in sewing and embroidery.',
        'story-fatima-text2': 'Today, Fatima owns her own business and employs three other women. "I never imagined I would become a business owner. The program didn\'t just teach me a skill, it taught me confidence in myself and my ability to change."',
        'story-mohammed-title': 'Mohammed Family\'s Story: Hope Returns',
        'story-mohammed-meta': '2021 | Family Support',
        'story-mohammed-text1': 'Mohammed\'s family was going through very difficult times. The father was unemployed and the mother was sick, and they could not afford treatment. Through the family support program, they received monthly food assistance and were able to treat the mother.',
        'story-mohammed-text2': '"We were on the verge of complete despair. But the support we received restored our hope. Today, my husband found work and I am in good health. Our children can go to school with dignity."',
        'story-sara-title': 'Sara\'s Story: From Student to Teacher',
        'story-sara-meta': '2020 | Education',
        'story-sara-text1': 'Sara was one of the first students at Hope School built by the foundation. She was a hardworking student who dreamed of becoming a teacher. Through the scholarship program, she was able to complete her university studies.',
        'story-sara-text2': 'Today, Sara is a teacher at the same school where she studied. "I want to be an inspiration to children just as my teachers were an inspiration to me. I want to plant hope in their hearts just as it was planted in mine."',
        
        // Projects
        'project-completed': 'Completed',
        'project-ongoing': 'In Progress',
        'project-progress': 'Complete',
        
        // Images Alt
        'img-hero-alt': 'Happy child',
        'img-education-alt': 'Children education',
        'img-family-alt': 'Family support',
        'img-health-alt': 'Health care',
        'img-logo-alt': 'Taiba Al-Khair Foundation for Humanitarian Works',
        
        // Meta
        'meta-description': 'A charitable foundation that plants hope and builds humanity',
    }
};

// Language management
let currentLang = localStorage.getItem('lang') || 'ar';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update body direction attribute and class
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.remove('rtl', 'ltr');
    document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update titles
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][key]) {
            element.title = translations[lang][key];
        }
    });
    
    // Update alt text for images
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });
    
    // Update aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });
    
    // Update innerHTML for elements that need HTML content (like <br> tags)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
    }
    
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle && translations[lang] && translations[lang]['page-title']) {
        pageTitle.textContent = translations[lang]['page-title'];
    }
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        if (metaDesc.hasAttribute('data-i18n')) {
            const key = metaDesc.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                metaDesc.setAttribute('content', translations[lang][key]);
            }
        } else if (translations[lang] && translations[lang]['meta-description']) {
            metaDesc.setAttribute('content', translations[lang]['meta-description']);
        }
    }
    
    // Force reflow to apply direction changes
    document.body.offsetHeight;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, setLanguage, currentLang };
}
