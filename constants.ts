import { Course, Plan } from './types';

/** Community access: $5/month. Set NEXT_PUBLIC_COMMUNITY_PAYMENT_URL in .env.local to your payment link. */
export const COMMUNITY_PRICE = 5;
export const COMMUNITY_PAYMENT_URL =
  process.env.NEXT_PUBLIC_COMMUNITY_PAYMENT_URL || '';

/** One-line value prop for pricing clarity (course library + community). */
export const MEMBERSHIP_INCLUDES =
  'Full access to the course library and private community.';

/** GHL community learning hub (for "Go to Community" / members). */
export const COMMUNITY_LEARNING_URL =
  process.env.NEXT_PUBLIC_COMMUNITY_LEARNING_URL ||
  'https://learn.streamlinestudio.net/communities/groups/knowledge-hive/learning';

/** Optional: override images with URLs from your GHL community. In .env.local set e.g. NEXT_PUBLIC_IMAGE_HERO=https://learn.streamlinestudio.net/... */
const img = (envKey: string, fallback: string) => process.env[envKey] || fallback;

export const IMAGES = {
  hero: img('NEXT_PUBLIC_IMAGE_HERO', "https://lh3.googleusercontent.com/aida-public/AB6AXuB2W2OTsMj4ta5NktWHvYSpeQKBFqn-4qPDqxQhgZ1qoH5a2oSa-wsxth8OlUW4PD1ju-OruyT9H7kVepMuDq1AH2LIze8TEOoAGNA-Lc6V0lkllxcRo60n_cuGTeacaIlD21qE_dHFfciOZi0c1lE-D71xo030FMbTSn9LWg4L05PIyoKEtBOuABbHHoQQVvuwwDoI16OmTBlqOOfeQ1N8JQ6blUvPcwgqzi_s9Zu3c46VxTB7HxhuNDsfklrH2zh9mC9PfVQyTVg"),
  profile1: img('NEXT_PUBLIC_IMAGE_PROFILE1', "https://lh3.googleusercontent.com/aida-public/AB6AXuAP1_lvkJF-frEFeJWob5ozxHEGeY-jHek_7M9DysjGT4x4AsmETjKXDdW4Fx3puk1ZcQsvRC_DANNCb9Z6tNa814UK6RkRpAS7crCVYtNUoS_eo2bO8uLAKb8Ecf7CKI0kZ7B9wae5sQ178hdxfdmMVsCtqY81M-8wz50MfbKEFY241eE-aYp1VtwINJIyfE_nYqpzKHgjHfamYS_s_stGv7rO3piSeG1Bm0a1cAJ9oFa5ArMt5uyxivHzdaHY_RhDY8HJPFOTVJ4"),
  instructor1: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5F3phWljssu41oFNVwacneTdSuEDwPuPxvwXPJZLxTypj74jK5V71_or1OXdKJGKv43WAaIk_QikE_PvSU3HD0RxPS2S7tEcQgyRdJa5NJK8FqLyyag0AxYr_iNy-jD3djU-JBwDk0Z3b1K9t8iRTDji8sDnaMnjY2f3GRsupK14wlhF6unnDlI0NKLnCqYPQNceiEvxyLhTO7Wasu56lw7VNmrUoqwOFNh4ybyfeaz0HLYXNsVjZTewQbDa-FvQL7MgqPx2YnRU",
  instructor2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDczIfeK6jXryhLTAzmDRqL-E3Q1t454LTE_Wq0t3d2AvG4aeTXQxKMUYA9qZ_FpyLgDjqzhMrsHnIMj8XPPhOuD7IK3yPrUMAbSGER9fvFjCohtam2I-BYTbQL3SWbdxhwHLBOxPBicBlLzUZMn7r55B13eaXKEXfME02JS__Yl7ZPgYqCaAlaAxjMT7D2-KA93gpqEi3SVX6bsO4Iqt3qePijFnPW6x0QkJdtLpRV1I_dX-TsZ2DtZSzPAYwr654AOI8tShQrgl4",
  instructor3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxPk3_vVQ1CIdMMdlN6inyo04cdjIL0pxcEbjGa3imAtipvsqNMQq9PfIeu78VkDp7mSsN8dqR4UEoxvfxgVT9Bxq7bCe7aGoHyy21bR7K0pQ-jNI5_c_UzMfzqwAZ07rt4RRVhMklzUrVneAnxpEfxdQNVfL4CwMGgNSoy1dP0eRjH8rPbnC3Jwz4J0LI2ky-e2koRXJ8pw4duI6RkRsVRDwHJHqphiQGnu8XpITDDv0Ymkj2N3yitaiBKk-qmLvSjRJdsMpBSuM",
  instructor4: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_YyBrhqLZiQAqyLKcVLIZ0uurWxl-Qwv2AJiT5raFC1JW0FGBUGGFNVTjB2aNyNR11DhxY4y886nK7ULVKVlchP-hWph8AL48JyF3EAI5HcLCfMNIl89DPgrTCctnJpvn3CNhIlDcKJlPTj73v-tvBwE_Hi2nN56S_CwVV9ywINze3hM0A7G9AOdr1ttCb9_RL9XA0iUZwtMWOV1jR2gGoG0Fnw_rx-ykLgbWGvCtaVVzqWEVUJ6V941qAoeAGxB2xKpbO_3x76s",
  course1: img('NEXT_PUBLIC_IMAGE_COURSE1', "https://lh3.googleusercontent.com/aida-public/AB6AXuATcf6TPd88KRJpAiOAPzaI-cxEttoFRu6ivJh9sGypzTL-8HO_9uMPXuKZtiJM41kHxCbkfzZqa9V33cpNLZ5n6n2_imiEkqwFGfwW0RqGnjEYuLkscPJY6MuRj6jS6MmtObWMoe-xDbsGOYTxBdHr5T4e-hKEf0bZ7xfohLicISk1y6BjJ89kNhLfznlNd3VRAXSKiqZUE8CbPgwd9pYMIsZbrQxfqA3Z0omHt78F95ItxPMpouebQdHU1atnp2OgQl2XxfWT98s"),
  course2: img('NEXT_PUBLIC_IMAGE_COURSE2', "https://lh3.googleusercontent.com/aida-public/AB6AXuAGuR-ojGxzHyGdsiVqoKQq5JwDP7mtJyPnhzvJnfqz7GjKtPDWg5jDh1x5Nqf7nZg6xhD1ZbEQObNrDhfYXenj-F9hcvuw7nasuQJb2UznQxjtg-kPEZfxr9bfEBK6Nnu_AEzdlihAdaBFGEgpPssC2TadFlHBZUjudcDL-OFYw_U8PCNnQl63r0P_JGiVG2XGbCq0TkbbkPIHsMxN1S4MOvWyrDz4tfOKCO0okoRjlWU8BQFZrKZlz9VU5x5aOINqcLbHeY4L_4I"),
  course3: img('NEXT_PUBLIC_IMAGE_COURSE3', "https://lh3.googleusercontent.com/aida-public/AB6AXuDe1ySe8gfUsK-Mxud0BuQslRxGbwJV0aZXGlc1ScEA2zNFL4qiEVJXsWj1UibFN7cNcbLgGoPo_tFNOBuMIyXDu3IOj30VfadeVuRkPX80pbgclLOtMWO0ay6gzwh1JUt4PcbXWX7tnBAyzp0wB98pegseZg2exF97YIAQ1SZQybmdDe8aVmnKLPq-aUxrx6XNmPY0Xo-NLJ4rD4QWwVbG1y9HXMnbOhcruyzT8Y73FU6dLSMRZ6iHYKrX-yNyyxBo_jJpVGtM_CA"),
  course4: img('NEXT_PUBLIC_IMAGE_COURSE4', "https://lh3.googleusercontent.com/aida-public/AB6AXuD4-91BOY9E7D2I8Tp96fLxrgAmGYoupnZaQP4QM_t59O0o06skY7cg_UGLsa86BvmMec718BW2nXVZ0fd4XoQv49BvT5_1lR0Nt-2Dn10rgwc2tvUUCJuQnU-uOcZLI-4TWM05XRV9V9pX1EkAm0cG6_FDBnioBU-j1-rUfLovmQbRzcdPUlsHKlDQzUMYg0XHw-CkllXRhfRNaR1xF8ceLgZqvrD32piiWsEaHTV0fCoeE25JedqZ4Zpu6y2QYDQKORnQdj1AJ7A"),
  course5: img('NEXT_PUBLIC_IMAGE_COURSE5', "https://lh3.googleusercontent.com/aida-public/AB6AXuDHtUbthrlMaRbfkH7Rl7ppQsZ3MQ0KyePFqDTXEODktZeFvDW5oAJiCDi3kJV7z05IhbLSqg67NrUScnvBsD05xjtk11_WcrshDAY0ySvCxXuKXZE7IiOqeu76VIQPzShFs6osMIqFz6sCX480ns4wetvredQTJOScQKP1bD4kNybYmX0s1kXhCV0X-1sFixDmrDLbMG3_mcV3QVYPevGPAs8_vZs3o1KT9RMeGQMF8IeM6i25y-eWkN9Mi6ng5oVGMrhSiGhTMpc"),
  course6: img('NEXT_PUBLIC_IMAGE_COURSE6', "https://lh3.googleusercontent.com/aida-public/AB6AXuD-LOAbToJbG6PzZY80CYE51nuIqfp9SMnV3TsyUtOHZPzwHKZUozy9ffjXJHKCctesuCpNCGpphX8MOwCSoNNsbbpqJFpO2ERNwnq7s15VfVcBMpl87XY0nEkE8P6pquF49rF-_eHTTO7-AqcitIma5EmBi9TQZ37iGtznYbKVKXhTFAalrvuI6X_GzgBh5_CgVmy7UgGU-ryuMRdoXlW6oMTcjGpGsILqj1Ks762nmoe2FvTE_quFCW71j3NQetDxJ20H3ndl_vI"),
  courseDashboard: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3yiFB6VvIGHbBqg8VUcjKmHGRo7cDxg7Lzmy4-iQE7uP1-7dp2UqFDwTXHiWTjrr9Z6jrtTIdoRMEnL772sM16MMTri05tgvJQYJ4UmhMv1eI3GMcQNNv6w5DGOM1fbWqSpSEF_qcdMC40mKvzv4wydCthYYMsaV5T2QOsJnZC8vHjy6O62SmJRG3e35672jycUloKkQS72IlbqTj4Z929FJNAtPeT7vfnP9e2Dqlua3GznqxImS8uuF_O2tt87qYjuSB8KoTUQY",
  abstractTexture: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGgfD4G1dnxG5lmjcYUOQVo9swo_ym3eiuS__IORLQ55DbkFY3ggFbDE5UGeqpQHf-Pfjfkwcw9ZyH0TLkO9QimIurj_7F0WFRqWqgSJZ_RZsq9AILWYR8ugRUhJ5L9X69yTvS76ABD1mkSA7QM-hOV4mo3PHcpPR3-HZLTmBAK-x06G5IfIIMNozeTRptZi9rU3Rl2Cyqd-bw3ID1s2wisAINg5ShOBh_0vKwPHa1BtB-GKVHJ9PvMGp1sG1oxFVVHockiF9jFS4",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3yXgixZovXq1YqCYKZ-iTgBELN_2z3ftihna05kOsIXCaRJB_-Y5Jdlasu9C7_A3TW64TQl0niIvlxvDcqT7Ny8JEJLw5_CPhv-9MFUaY62yeqRM6pkmMfbgwd7hnSrhMYY3QQx2czPVhEDJroxGhbLU2F_sbU9xDnP9qCPymFLeeAWD51OP0f27LwBujMPGQaZ3zxcFCePhpcQ-g04wbXb_k1Yuil3sQCEx8inUVjCZMTrZ2jdlcsOpd9CVIDT80gdDDN4ASN_s",
  dataNodes: img('NEXT_PUBLIC_IMAGE_DATANODES', "https://lh3.googleusercontent.com/aida-public/AB6AXuAAe9FEIa01ikvlYEPRtlfxNKNvvgeuq80nfX7-ScrloNZwKqiO3jngHFWe0X-U_PKdEJfr0mp8ciNJLjduhEfyL0O9EAMgLxyujJ3HKDLfi9wcSvb-xcJHrK1E2qgcxXQloENwWmn0o-ZEr7fSbwhPolSyPPy6qqC0rAYFs_2xJ4PYVyD-B_dzT5wSFsf7xsQzSBOgLW1C3uzzu7H_H2El2Pwa7nQtEOPpIBSp6xCSZSNolegSmBKnLiYrIMaAT6Nk0IeMOk0NVUs"),
  founder: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEte5_yTSxWQpmgh6sVWek2zxo86QfMBhrlVr4rUZSABvBVkpd-v4Mq-YZpmHsXAfl9VdYxbaNENy5VyMA2302Y_kL8wTtxhNbfadCGc66ImxyPKlvYTweweBiVnYvEraHnZqDn9tm1rl8c9FcLa8VZ5pbHu1_BlMDIp5a8T1BDtTgHkvbER4LLJBbArVYyeFe2b8q0ifEHuP20dqSwGUmLb-WMA5AZX3Fv20kzjUqUBHs5FswQbjkCWNjNGlChcLboz4NurNiaCM",
  avatar1: img('NEXT_PUBLIC_IMAGE_AVATAR1', "https://lh3.googleusercontent.com/aida-public/AB6AXuBUb9-Dq-BRc5SFbjEN9HsgOYPiBKZKrngzSKNJ8ayd09uyicOfn1flo6zvUh7KAPTokU1sPN7IpBT5howyW6jjCmeq-eYUuyMGx-FnVAcVk_UAr-AtnRPp79tICIAr-8MwhV6P9QfkXNQoFWwntaHcFq6HFf4_7PT8ROYvKbYPWo2sD5hNwNmdcagtLjNMF8MR0gyUBCOlJ1fMLki_Gr9HK0cVH5LdabttNTvnpV7PAKGqiVtplihkPU1jL01bfMKFvV0YwQIjAFc"),
  avatar2: img('NEXT_PUBLIC_IMAGE_AVATAR2', "https://lh3.googleusercontent.com/aida-public/AB6AXuC1NgKnaEUAewGGYpPczLcFKfOB9bb_istcxhTGPCu6nDdzajiLEFk3pDdLqJMvt2h7QNmewqLzTRsRswry0nWBbHYnDQeNjUxrYVmx7tXJZnrs63Q00BcF0PBHEse8VRL7EhQJklgDJy-PXLpEW4B5xvrNRIQfdZouuSP-uSIbWaHoZJUPghIpcwRvuCoALqMxkhF83xT-_PHszjzd5lfDAAuZ9mCRIa-iEAVl2QO50rjQckxRPYCH_VhHHHpaHQFeQ7sHufMwnf0"),
  avatar3: img('NEXT_PUBLIC_IMAGE_AVATAR3', "https://lh3.googleusercontent.com/aida-public/AB6AXuAzq_yfKKdaVZABMJVd5hJuyJAfxnamIgLtnEWqmMtUWzFVs1uH5hN1kPt34T6dR8tWnropycT-IupCZv9jtqEvT2UppQtQx3DNOQa3IMaa1E-CbBc7pskxcXnHZZa2SdsP0tpL0PPsNQgNRCHxd-Xsmya6R9_emmAhGPaKjybCY4gmykx_pT_UZFRV4V6F6ANmJTZ0afvzRVotZUl3b6Vj3xqYpE4H6TyuVuGUxGFEQdJXmvFRkiadw1dxzgISdPlB7dgb5Osms1A"),
  userAvatar: img('NEXT_PUBLIC_IMAGE_USER_AVATAR', "https://lh3.googleusercontent.com/aida-public/AB6AXuCXfOWtvHc6Fv1Y-wilbhfCX-51943AefQ2YftNjzPdWi6BzOCGv_DCmNFt8TDkchFdd9Kae9WQQS1vjFUZZTvSLunwTIYsoXXBeHHR4viHVQyHBp3gJF19haO86oyODV5f5iMh2sCz--OOmE3Ap5jcfJUIb7aBvIoWrPkr6fVja0S7dWS4qrUfo6rpSw6SsLcIrvmVBAcZ_mH3-PQjOVMblzWTvoTbaLS1Nk-_iilTaaZclWgp-v6HIWGeC3JEnZG8eVpfrjHEI-c"),
  comm1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEB_-L4yduQubYapKXSV_r8Krf5go2MlVa8asMzbYFjwLmNxPYtoJe89BY8wwRu1Wmqocwv9H4aR5zNHdqZ5eMRpwl4rb3rh3CAajeJaXuhFRJ-HGimIZkptzIOZHwl6Qdah77QqcL2JRd4HK5p_fEaRC24MlLiDxKml7o79EQU25W2SPkYEmJZ8QyW3LrdLR6MCL3h2zgzK_dhrN4k7ejWUZGD0GoaH8v_hJ5gJSSFkmv2C4Z181a0ZzBKG_nXSUlfZozSyQX-sw",
  comm2: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_0LxUP7fn35hJMfsW-7spO4cSqnrpAiLFQkeLYTNHZCI5WJvEDDHFWonEO4HYcXKe-gcaKDXdiu1t8N8hOTxt7pqsx3GkG8wAOvITxg4EhO7aQ6Q7tHkrOa92E4WMJVNa5yTLOmFw2jwRPNr2JENOO1itdpPxJeq8_PEpDDn77dGy8BIIUltwF-lefbG5KcgI6jqr6rvvqdqRLZNdjfZTUz6KPrygrtwq3BXXJ2AHb84LrexOU-4MDhvsXc5cipz4pIEfUXGBkhY"
};

const courseImages = [IMAGES.course1, IMAGES.course2, IMAGES.course3, IMAGES.course4, IMAGES.course5, IMAGES.course6];
const defaultInstructor = 'Knowledge Hive';

/** Local course images from public/ (matched by filename). Unmatched courses use rotating placeholders. */
const LOCAL = (path: string) => `/${path}`;

export const COURSES: Course[] = [
  { id: '1', title: 'Content Marketing Analytics ROI', description: 'Understand the impact of content on business revenue. Nine lessons on content analytics, KPI frameworks, and linking content performance to ROI.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('Content_Marketing_Analytics_Roi_course.png'), level: 'Intermediate', lessons: 9, category: 'Content Marketing' },
  { id: '2', title: 'The Beginners Guide To Content Marketing', description: 'Comprehensive course on content marketing for business growth: psychology of resonant content, strategic planning, email marketing, and creating lasting value.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('The_Beginners_Guide_To_Content_Marketing_course.png'), level: 'Beginner', lessons: 12, category: 'Content Marketing' },
  { id: '3', title: 'Working Smarter With Virtual Assistants', description: 'Hire, onboard, and manage virtual assistants. Build systems for VA success, with checklists, guides, and prompts for scaling without burning out.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('Working_Smarter_With_Virtual_Assistants_course.png'), level: 'Beginner', lessons: 10, category: 'Operations' },
  { id: '4', title: 'The Modern Estate Manager', description: 'Run a luxury household like a multimillion-dollar business. Build trust, master operations, and transition from housekeeper to operations executive.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('The_Modern_Estate_Manager_course.png'), level: 'Intermediate', lessons: 12, category: 'Leadership' },
  { id: '5', title: 'Digital Detox For Founders', description: 'Reclaim focus and productivity. Covers impacts of notifications, measuring attention, breaking distraction patterns, and rebuilding focus.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('Digital_Detox_For_Founders_course.png'), level: 'Beginner', lessons: 8, category: 'Productivity' },
  { id: '6', title: 'Grow and Scale with Skool', description: 'Build, grow, and monetize a community using Skool—community, courses, and commerce. From setup to member acquisition, engagement, and recurring revenue.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('Grow_and_Scale_with_Skool_course.png'), level: 'Beginner', lessons: 14, category: 'Community' },
  { id: '7', title: 'Referral & Sponsor Networks', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('1ad0ba60-ccf2-4155-b35b-274d7e3c3742.png'), level: 'Intermediate', lessons: 10, category: 'Marketing' },
  { id: '8', title: 'The Ultimate Guide to ChatGPT Sora', description: 'Master AI video generation with ChatGPT Sora: prompt writing, cinematic styles, scripts to full videos, and workflows for creators and marketers.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('The_Ultimate_Guide_to_ChatGPT_Sora_course.png'), level: 'Beginner', lessons: 12, category: 'AI' },
  { id: '9', title: 'Master Google Ads', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('17620e2b-4b57-4e7c-9ce7-2dcd410ef752.png'), level: 'Expert', lessons: 15, category: 'Paid Ads' },
  { id: '10', title: 'Spotify Ads for Lead Generation', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('a7fb0fdf-6147-41c0-84b4-44a4f55f2dac.png'), level: 'Intermediate', lessons: 8, category: 'Paid Ads' },
  { id: '11', title: 'Grow With Organic Social Media', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('7d7eeaec-33f0-4f82-9825-a8b06dec55bb.png'), level: 'Beginner', lessons: 12, category: 'Social Media' },
  { id: '12', title: 'Video Sales Letters', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('d98a0d43-8acb-4026-9b8e-c2b17f68540d.png'), level: 'Intermediate', lessons: 10, category: 'Sales' },
  { id: '13', title: 'Organic Lead Generation 3.0', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('dbc2e048-771b-47d9-859c-9e63b1ed251b.png'), level: 'Intermediate', lessons: 14, category: 'Lead Gen' },
  { id: '14', title: 'LinkedIn Ads', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('0c608715-873f-4228-b016-799c3fb7dd03.png'), level: 'Intermediate', lessons: 10, category: 'Paid Ads' },
  { id: '15', title: 'Master Facebook & Instagram Ads', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('9cf42bb4-776d-4d04-9f96-008f3c6d12fe.png'), level: 'Expert', lessons: 16, category: 'Paid Ads' },
  { id: '16', title: 'Lead Conversion Training 2.0', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('1073f0ce-ab58-4e43-8a70-c5fca2b3e38e.png'), level: 'Intermediate', lessons: 12, category: 'Sales' },
  { id: '17', title: 'Google LSA & SEO (New)', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('62a637b8-6b4f-4436-b1b2-7d8e8ef60690.png'), level: 'Beginner', lessons: 10, category: 'SEO' },
  { id: '18', title: 'Google Ads: Basics', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('87f6af35-fb08-4eaa-ae13-664b5dc7bc6e.png'), level: 'Beginner', lessons: 8, category: 'Paid Ads' },
  { id: '19', title: 'Build Winning Funnels', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('f956a19d-eb7b-4249-b070-fba670d13d75.png'), level: 'Intermediate', lessons: 12, category: 'Marketing' },
  { id: '20', title: 'YouTube Ads for Lead Generation', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('dab86712-9dc9-4d94-a40a-ea64ec94ab47.png'), level: 'Intermediate', lessons: 9, category: 'Paid Ads' },
  { id: '21', title: 'Expectations & Mindset (New)', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('4dc3297d-919a-4bd4-a505-240338bc3c6e.png'), level: 'Beginner', lessons: 6, category: 'Mindset' },
  { id: '22', title: 'Conversion Rate Optimization', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('51d6df1c-25b0-44a1-9f1a-1fe2b1303fec.jpeg'), level: 'Intermediate', lessons: 11, category: 'Marketing' },
  { id: '23', title: 'Creating Content', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('308a2dc5-a781-4687-b599-97d53cdb493a.png'), level: 'Beginner', lessons: 10, category: 'Content Marketing' },
  { id: '24', title: 'Organic TikTok Lead Generation', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('8b7972ae-71be-4cf1-b089-7e47f4b492f5.png'), level: 'Beginner', lessons: 9, category: 'Social Media' },
  { id: '25', title: 'Boost Your Local SEO!', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('bcec0fb7-8866-4088-8d06-d59c52e2fcce.png'), level: 'Beginner', lessons: 10, category: 'SEO' },
  { id: '26', title: 'Automate Your Business!', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('9d88e35a-08bb-4253-90f2-8583d438e520.png'), level: 'Intermediate', lessons: 12, category: 'Operations' },
  { id: '27', title: 'Appointment Setters', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('4f776aa5-5114-418e-80a1-b94f4473f1a8.png'), level: 'Beginner', lessons: 8, category: 'Sales' },
  { id: '28', title: 'Email Marketing', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('05c1ef34-0320-4d65-b690-cee58371a628.png'), level: 'Beginner', lessons: 10, category: 'Marketing' },
  { id: '29', title: 'Creating TikTok Ads', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('cc642f4f-2933-455a-8ff5-c06c44ab3f7e.jpeg'), level: 'Intermediate', lessons: 9, category: 'Paid Ads' },
  { id: '30', title: 'Organic YouTube Lead Generation', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('3aeef115-8112-489d-9296-80b57b7ce761.png'), level: 'Beginner', lessons: 10, category: 'Social Media' },
  { id: '31', title: 'Hiring a Virtual Assistant', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('5669fc85-6d9e-4947-a53f-bb6ad21b01fb.png'), level: 'Beginner', lessons: 8, category: 'Operations' },
  { id: '32', title: 'Claude AI for Business and Content', description: '21-part video course on using Claude.ai for content creation, workflow efficiency, and automation. Covers prompts, documents, visualizations, and API.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('Claude_AI_for_Business_and_Content_course.png'), level: 'Beginner', lessons: 21, category: 'AI' },
  { id: '33', title: 'ChatGPT for Lead Generation', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('cd378e2e-7929-41ab-ae49-9ab065e4d15a.png'), level: 'Intermediate', lessons: 10, category: 'AI' },
  { id: '34', title: 'AI Research & Workflow Automation with Perplexity', description: 'Turn Perplexity into a research assistant and workflow engine. Automate research, summaries, and connect insights to Notion, Sheets, CRMs, or n8n.', instructor: defaultInstructor, instructorImage: IMAGES.userAvatar, image: LOCAL('AI_Research_and_Workflow_Automation_with_Perplexity_course.png'), level: 'Intermediate', lessons: 10, category: 'AI' },
];

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: 29,
    period: "/mo",
    features: ["Access to 50+ Foundation Courses", "Community Forum Access", "Weekly Newsletter"],
    buttonText: "Get Started",
    colorClass: "border-slate-200"
  },
  {
    name: "Pro",
    price: 79,
    period: "/mo",
    features: ["All Starter Features", "Weekly Live Coaching Calls", "Advanced Business Workshops", "Full Resource Template Library", "Private Networking Groups"],
    highlight: true,
    buttonText: "Join Pro Hive",
    colorClass: "border-gold"
  },
  {
    name: "Lifetime Hive Pass",
    price: 899,
    period: "once",
    features: ["All Pro Features Forever", "Early Access to New Content", "1-on-1 Strategy Session (60m)", "VIP Events Membership"],
    buttonText: "Secure Lifetime Access",
    colorClass: "bg-navy-deep text-white"
  }
];
